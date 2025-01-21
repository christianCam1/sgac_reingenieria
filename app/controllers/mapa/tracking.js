var uid = getAllUrlParams().uid;
var order_id = getAllUrlParams().order_id;

console.log("uid", uid);
console.log("order_id", order_id);


var db = firebase.database();
var firebaseRef = db.ref("Paseos_usuarios").child(uid).child(order_id);
var firebaseRef2 = db.ref("Paseos_usuarios").child(uid).child(order_id).child("tracking");



var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {
        lat: 0,
        lng: -180
    },
    mapTypeId: 'terrain'
});
var collection = new Array();


firebaseRef.once("value", function(snapshot) {

    console.log(snapshot);

    var snap = snapshot.val();
    var d = snapshot.val();

    var center = new google.maps.LatLng(snap.latitud, snap.longitud);

    map.setCenter(center);
    colormarker = "http://maps.google.com/mapfiles/ms/micons/red.png";

    var marker2 = new google.maps.Marker({
        position: center,
        icon: colormarker,
        draggable: false,
        title: 'Inicio',
        map: map
    });



    var date = new Date(d.inicio);

    let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: "numeric",
        minute: "numeric"
    };


    fechaInicio = date.toLocaleDateString(lang, options);


    var date2 = new Date(d.fin);

    fechaFin = date2.toLocaleDateString(lang, options);

    document.getElementById("horas").innerHTML = "Paseo ya esta finalizado. <br>INICIO: " + fechaInicio + "<br>FIN: " +
        fechaFin;
    calculaTiempo(d.inicio, d.fin)

});

firebaseRef2.once("value", function(snapshot) {
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    snapshot.forEach(function(data) {
        collection.push(new google.maps.LatLng(data.val().latitud, data.val().longitud));

    });

    console.log(collection);

    var flightPath = new google.maps.Polyline({
        path: collection,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    flightPath.setMap(map);


});

var db = firebase.database();
var firebaseRefPerros = db.ref("Paseos_usuarios").child(uid).child(order_id).child("perrosEstatus");

var table = document.getElementById("tabla");

//limpia la tabla
table.innerHTML = "";

//con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

firebaseRefPerros.orderByChild("nombre").on("child_added", function(snapshotPerro) {

    console.log(snapshotPerro);
    var exist = snapshotPerro.val();
    if (exist == null) {
        console.log("no encontrado")

    } else {
        console.log("encontrado")

    }

    var d = snapshotPerro.val();

    
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);


        // asigna a las celdas el valir del Child especificado
        cell1.innerHTML = d.nombre;
        cell2.innerHTML = d.pipi;
        cell3.innerHTML = d.popo;


     // Ocultar el overlay de carga (puede estar aquí si este es el último conjunto de datos)
     $("#loadingOverlay").hide();


});


function calculaTiempo(inicio, fin) {

    var inicioFecha = new Date(inicio);
    var actualFecha = new Date(fin);


    var tiempo = Math.abs(actualFecha.getTime() - inicioFecha.getTime());
    var differenceInMiliseconds = actualFecha - inicioFecha;
    var differenceInSeconds = differenceInMiliseconds / 1000;
    var differenceInMinutes = differenceInSeconds / 60;
    var differenceInHours = differenceInMinutes / 60;


    var differenceInSeconds = parseInt((differenceInSeconds % 60), 10)
    var differenceInMinutes = parseInt((differenceInMinutes % 60), 10)
    var differenceInHours = parseInt((differenceInHours), 10)



    document.getElementById("demo").innerHTML = "Tiempo: " + differenceInHours + ":" + differenceInMinutes + ":" +
        differenceInSeconds;


}

function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];


            if (typeof paramValue === 'string') paramValue = paramValue;

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}