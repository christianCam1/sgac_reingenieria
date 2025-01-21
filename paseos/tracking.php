<?php
include ('../layout/parte1.php');
?>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.css" />
<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/plug-ins/1.10.20/sorting/absolute.js"></script>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Dirección del usuario</h1>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->


    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-outline card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Mapa de ubicacion de dirección del usuario</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body" style="display: block;">
                            <p id="horas"></p>
                            <p id="demo"></p>
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Perro</th>
                                            <th scope="col">Pee</th>
                                            <th scope="col">Poop</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-body" style="display: block;">
                            <div id="map" style="width:100%;height:700px;"></div>
                            <!-- Message log -->
                            <div id="log"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.content -->
</div>

<!-- /.content-wrapper -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>

<?php include ('../layout/parte2.php'); ?>


<script>
var uid = getAllUrlParams().uid;
var order_id = getAllUrlParams().order_id;


var db = firebase.database();
var firebaseRef = db.ref("Paseos_usuarios").child(uid);
var firebaseRefEstatus = db.ref("Paseos_usuarios").child(uid).child(order_id).child("estatusPaseo");
var firebaseRef2 = db.ref("Paseos_usuarios").child(uid).child(order_id).child("tracking");
var firebaseRef3 = db.ref("Paseos_usuarios").child(uid).child(order_id).child("ubicacionActual");


var marker2;
var myVar;



var collection = new Array();

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {
        lat: 0,
        lng: -180
    },
    mapTypeId: 'terrain'
});




firebaseRefEstatus.on("child_changed", function(snapshot) {


    var snap = snapshot.val();


    {


        if (snap == "progreso") {


            colormarker = "http://maps.google.com/mapfiles/ms/micons/red.png";
            marker2.setIcon(colormarker);
            document.getElementById("demo").innerHTML = "Paseo no iniciado";
            clearInterval(myVar);



        } else if (snap == "activo") {

            colormarker = "http://maps.google.com/mapfiles/ms/micons/green.png";
            marker2.setIcon(colormarker);

            calculaTiempo();

        } else if (snap == "terminado") {

            clearInterval(myVar);
            var element = document.getElementById('demo').innerText;

            document.getElementById("demo").innerHTML = "Paseo ya esta finalizado, " + element;
            colormarker = "http://maps.google.com/mapfiles/ms/micons/red.png";
            marker2.setIcon(colormarker);
            alert("El paseo ha finalizado, " + element);

        }

    }

});




firebaseRef.orderByChild("order_id").equalTo(order_id).on("child_added", function(snapshot) {
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"



    var d = snapshot.val();

    {



        console.log(d.estatusPaseo.estatus);



        if (d.estatusPaseo.estatus == "progreso") {

            colormarker = "http://maps.google.com/mapfiles/ms/micons/red.png";
            document.getElementById("demo").innerHTML = "Paseo no iniciado";

        } else if (d.estatusPaseo.estatus == "activo") {




            calculaTiempo();

            colormarker = "http://maps.google.com/mapfiles/ms/micons/green.png";
        } else if (d.estatusPaseo.estatus == "terminado") {


            var date = new Date(d.inicio);

            let lang =
                'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
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




            document.getElementById("horas").innerHTML = "Paseo ya esta finalizado, INICIO: " + fechaInicio +
                "  FIN:" + fechaFin;

            calculaTiempo2(d.inicio, d.fin);

            colormarker = "http://maps.google.com/mapfiles/ms/micons/red.png";
        }



        var center = new google.maps.LatLng(d.latitud, d.longitud);

        marker2 = new google.maps.Marker({
            position: center,
            icon: colormarker,
            draggable: false,
            title: 'Inicio',
            map: map
        });



        // using global variable:
        map.panTo(center);



    }



});



function calculaTiempo() {



    firebaseRef.orderByChild("order_id").equalTo(order_id).on("child_added", function(snapshot) {

        var d = snapshot.val();

        {

            var sessionsRef = db.ref("sessions");
            sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);

            sessionsRef.orderByChild("actual").on("child_added", function(snapshott) {

                x = snapshott.val(); {



                }


            });







            var inicioFecha = new Date(d.inicio);
            var actualFecha = new Date(x);

            var tiempo = Math.abs(actualFecha.getTime() - inicioFecha.getTime());
            var differenceInMiliseconds = actualFecha - inicioFecha;
            var differenceInSeconds = differenceInMiliseconds / 1000;
            var differenceInMinutes = differenceInSeconds / 60;
            var differenceInHours = differenceInMinutes / 60;


            var differenceInSeconds = parseInt((differenceInSeconds % 60), 10)
            var differenceInMinutes = parseInt((differenceInMinutes % 60), 10)
            var differenceInHours = parseInt((differenceInHours), 10)



            document.getElementById("demo").innerHTML = "Tiempo: " + differenceInHours + ":" +
                differenceInMinutes + ":" + differenceInSeconds;

            myVar = setInterval(myTimer, 1000);

            function myTimer() {

                differenceInMiliseconds = differenceInMiliseconds + 1000;

                differenceInSeconds = differenceInMiliseconds / 1000;


                differenceInMinutes = differenceInSeconds / 60;
                differenceInHours = differenceInMinutes / 60;

                differenceInSeconds = parseInt((differenceInSeconds % 60), 10)
                differenceInMinutes = parseInt((differenceInMinutes % 60), 10)
                differenceInHours = parseInt((differenceInHours), 10)

                document.getElementById("demo").innerHTML = "Tiempo: " + differenceInHours + ":" +
                    differenceInMinutes + ":" + differenceInSeconds;

            }

        }
    });

}



function calculaTiempo2(inicio, fin) {

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



firebaseRef2.on("child_added", function(snapshot) {
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    var d = snapshot.val();

    {

        collection.push(new google.maps.LatLng(d.latitud, d.longitud));







    }





    var flightPath = new google.maps.Polyline({
        path: collection,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    flightPath.setMap(map);






});


firebaseRef3.on("child_changed", function(snapshot) {
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"


    console.log("entra3");
    var d = snapshot.val();

    {


        console.log("algo3");

        console.log(d.latitud);
        console.log(d.longitud);

        var myLatLng = {
            lat: d.latitud,
            lng: d.longitud
        };
        var a = {
            lat: 0,
            lng: 0
        };
        console.log("nuevo punto", myLatLng);
        colormarker2 = "http://maps.google.com/mapfiles/ms/micons/blue.png";




    }

    /*
    marker = new google.maps.Marker({
                         position: myLatLng,
                         draggable:false,
                         icon:colormarker2,
                         title: 'Paseador',
                         map: map
                     });




    */


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

    {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);


        // asigna a las celdas el valir del Child especificado
        cell1.innerHTML = d.nombre;

        cell2.innerHTML = d.pipi;

        cell3.innerHTML = d.popo;


    }


});




firebaseRefPerros.orderByChild("nombre").on("child_changed", function(snapshotPerro) {

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";


    firebaseRefPerros.orderByChild("nombre").on("child_added", function(snapshotPerro) {


        console.log(snapshotPerro);
        var exist = snapshotPerro.val();
        if (exist == null) {
            console.log("no encontrado")

        } else {
            console.log("encontrado")

        }

        var d = snapshotPerro.val();

        {
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);


            // asigna a las celdas el valir del Child especificado
            cell1.innerHTML = d.nombre;

            cell2.innerHTML = d.pipi;

            cell3.innerHTML = d.popo;


        }


    });



});



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
</script>