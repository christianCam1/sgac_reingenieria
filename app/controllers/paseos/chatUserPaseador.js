var uid = getAllUrlParams().uid;
var order_id = getAllUrlParams().order_id;

let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
let options = { hour: "numeric", minute: "numeric" };

var addMessage2 = firebase.functions().httpsCallable('System_UsrPas_Data');
addMessage2({ uid: uid, ord: order_id }).then(function (result) {

    document.getElementById('ord_id').innerHTML = order_id

    document.getElementById('nom_pas').innerHTML = result.data[1].nombre + " " + result.data[1].apellidopa + " " + result.data[1].apellidoma
    document.getElementById('email_pas').innerHTML = result.data[1].email
    document.getElementById('tel_pas').innerHTML = result.data[1].celular
    document.getElementById("img_pas").src = result.data[1].direcfoto;


    document.getElementById('nom_usu').innerHTML = result.data[3].nombre + " " + result.data[3].apellido_Paterno + " " + result.data[3].apellido_Materno
    document.getElementById('email_usu').innerHTML = result.data[3].email
    document.getElementById('tel_usu').innerHTML = result.data[3].telefono1
    if (result.data[4] === null) {
        document.getElementById("img_usu").src = 'img/user-profile-outline.svg'
    } else {
        document.getElementById("img_usu").src = result.data[4]
    }



    document.getElementById('categoria_paseo').innerHTML = result.data[0].categoria
    if (result.data[0].tiempo_paseo === 1) {
        document.getElementById('duracion_paseo').innerHTML = '1 Hora'
    } else if (result.data[0].tiempo_paseo === 0.5) {
        document.getElementById('duracion_paseo').innerHTML = '30 minutos'
    } else if (result.data[0].tiempo_paseo === 1.5) {
        document.getElementById('duracion_paseo').innerHTML = '1 Hora 30 Min'
    } else {
        document.getElementById('duracion_paseo').innerHTML = '2 Horas'
    }


    // document.getElementById("loader").style.display = "none";
    // document.getElementById("myDiv").style.display = "block";








    for (var key in result.data[0].perrosEstatus) {

        var node = document.createElement("H");
        var textnode = document.createTextNode(' ' + result.data[0].perrosEstatus[key].nombre);
        node.appendChild(textnode);
        document.getElementById("perritos_paseo").appendChild(node);
    }


    // Seleccionar el contenedor donde se agregarán las secciones
var container = document.getElementById("mySection");
container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevo contenido

if (result.data[2].length === 0) {
    var x = document.createElement("SECTION");
    x.classList.add("mySections");

    var heading = document.createElement("H5");
    heading.setAttribute("id", "txt_no_hay");
    var txt1 = document.createTextNode('El paseador y el usuario aun no han iniciado una conversación en este chat');
    heading.appendChild(txt1);
    x.appendChild(heading);

    container.appendChild(x);

} else {
    for (var i = 0; i < result.data[2].length; i += 1) {
        var date = new Date(result.data[2][i].timestamp);
        var x = document.createElement("SECTION");
        x.classList.add("mySections");

        if (result.data[2][i].uid === uid) {
            var heading = document.createElement("H5");
            heading.setAttribute("id", "txt1");
            var txt1 = document.createTextNode(result.data[2][i].mensaje);
            heading.appendChild(txt1);
            x.appendChild(heading);

            var para = document.createElement("a");
            para.setAttribute("id", "txt2_sub");
            var txt2 = document.createTextNode(date.toLocaleDateString(lang, options));
            para.appendChild(txt2);
            x.appendChild(para);

        } else {
            var heading = document.createElement("H5");
            heading.setAttribute("id", "txt2");
            var txt1 = document.createTextNode(result.data[2][i].mensaje);
            heading.appendChild(txt1);
            x.appendChild(heading);

            var para = document.createElement("a");
            var txt2 = document.createTextNode(date.toLocaleDateString(lang, options));
            para.appendChild(txt2);
            x.appendChild(para);
        }

        container.appendChild(x);
    }
}






});


/*selectores css
etiquetas html5
formularios html5
responsive css
table css*/



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
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];


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
