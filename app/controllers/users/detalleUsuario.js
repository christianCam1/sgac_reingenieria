// document.getElementById("usuario").innerHTML = '<a class="nav-item nav-link active" href="contacto.html" id="usuarios">Regresar</a>';
var horaInicio = 0;
var horaFin = 0;

function guardarRegistro() {
    var element = document.getElementById("comboEstatus");
    var estatusSeleccionado = element.options[element.selectedIndex].value;
    var elementDuracion = document.getElementById("comboDuracion");
    var duracionSeleccionada = elementDuracion.options[elementDuracion.selectedIndex].value;
    var comentario = document.getElementById("comentario").value;
    if (duracionSeleccionada == "Seleccionar...") {
        alert("Debe seleccionar una duración valida")
    }
    else {

        if (estatusSeleccionado == "Seleccionar...") {

            alert("Debe seleccionar un estatus valido")
        } else if (estatusSeleccionado == "Volver a marcar") {
            marcarMasTarde();

        } else if (estatusSeleccionado == "Cliente") {
            compra();
        } else {
            guardarDatos("")
        }
    }
}


var uid = getAllUrlParams().uid;

function compra() {
    var db = firebase.database();
    var refGuardarCompra = db.ref("Contacto").child("compras");

    var compra = prompt("Describe la compra que se realizo");
    if (compra == null || compra == "") {
        alert("Debe especificar una compra");
    } else {
        var nombre = document.getElementById("nombre").textContent;
        var uid = document.getElementById("uid").textContent;
        var datosCompra = {
            nombre: nombre,
            uid: uid,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            detalleCompra: compra

        };

        var newKey = refGuardarCompra.push().key;

        refGuardarCompra.child(newKey).set((datosCompra), function (error) {

            if (error) {
                // The write failed...
            } else {
                guardarDatos("");
            }
        });
    }

}


function guardarDatos(volveramarcar) {

    var db = firebase.database();
    var refGuardar = db.ref("Contacto").child("llamadas").child(uid);
    var refPrincipal = db.ref("Usuarios").child(uid).child("contacto");
    var element = document.getElementById("comboEstatus");
    var estatusSeleccionado = element.options[element.selectedIndex].value;
    var elementDuracion = document.getElementById("comboDuracion");
    var duracionSeleccionada = elementDuracion.options[elementDuracion.selectedIndex].value;
    var comentario = document.getElementById("comentario").value;


    if (horaInicio == 0) { horaInicio = firebase.database.ServerValue.TIMESTAMP; }
    if (horaFin == 0) { horaFin = firebase.database.ServerValue.TIMESTAMP; }

    var datosLlamada = {
        comentario: comentario,
        estatus: estatusSeleccionado,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        horaInicio: horaInicio,
        horaFin: horaFin
    };


    console.log("uid dentro", uid);
    var newKey = refGuardar.push().key;

    console.log(newKey);
    refGuardar.child(newKey).set((datosLlamada), function (error) {


        if (error) {
            // The write failed...
        } else {

            var datosEstatusUsuario = {
                comentario: comentario,
                estatus: estatusSeleccionado,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                uid: uid,
                timestamprecordatorio: volveramarcar

            };

            restablecer();
            refPrincipal.set(datosEstatusUsuario);


        }

    });


}


function restablecer() {


    document.getElementById("comentario").value = "";
    document.getElementById("comboDuracion").selectedIndex = 0;
    document.getElementById("comboEstatus").selectedIndex = 0;

    perfil_usuario();
    horaInicio = 0;
    horaFin = 0

}


function marcarMasTarde() {
    var db = firebase.database();

    var sessionsRef = db.ref("sessions");
    sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);


    var x = 0;


    sessionsRef.orderByChild("actual").on("child_added", function (snapshott) {

        horaModif = snapshott.val(); {

            console.log("entra");

            let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };
            var date = new Date(horaModif);
            var horaaaa = date.toLocaleDateString(lang, options);
            console.log("fecha ", date + " dia ", date.getDate() + " mes", date.getMonth() + "año", date.getFullYear() + " hora ", date.getHours());
            let diaInput = date.getDate();
            let mesInput = (date.getMonth() + 1);
            let añoInput = date.getFullYear();
            let horaInput = date.getHours();

            var fechaActual = añoInput + "-" + mesInput + "-" + diaInput + "T" + horaInput + ":00:00";
            //console.log("fechaActual ",fechaActual);

            var fecha = prompt("Modifique los parametros de la fecha, FORMATO: año-mes-diaThora:minutos:segundos (La hora es en formato de 24 horas)", fechaActual);
            if (fecha == null || fecha == "") {
                alert("Debe especificar fecha");
            } else {

                nuevaFecha = fecha.replace(/\s+/g, '');

                try {

                    var fechatimestamp = nuevaFecha.split("-");
                    var separacion = fechatimestamp[2].split("T");
                    console.log(nuevaFecha);
                    var año = fechatimestamp[0];
                    var mes = fechatimestamp[1];
                    var dia = separacion[0];
                    mes = mes - 1;
                    console.log("año ", año);
                    console.log("mes ", mes);
                    console.log("dia ", dia);
                    var horatimestamp = separacion[1].split(":");
                    var hora = horatimestamp[0];
                    var minutos = horatimestamp[1];
                    var segundos = horatimestamp[2];
                    console.log("hora ", hora);
                    console.log("minutos ", minutos);
                    console.log("segundos ", segundos);
                    var datum = new Date(año, mes, dia, hora, minutos, '00');
                    var datumFirebase = datum.getTime();
                    datum = datumFirebase / 1000;

                    if (isValid(dia, mes, año)) {

                        if (hora >= 24 || hora < 1 || minutos >= 60 || segundos >= 60) {

                            $('#carga2').hide();
                            alert("La hora introducida no es correcta");

                        } else {
                            guardarDatos(datumFirebase);
                        }

                    } else {

                        alert("La fecha introducida no es correcta");
                    }

                }

                catch (err) {

                    alert("La fecha no tiene el formato correcto");

                }

            }

        }

    })


}

function daysInMonth(m, y) { // m is 0 indexed: 0-11
    switch (m) {
        case 1:
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8: case 3: case 5: case 10:
            return 30;
        default:
            return 31
    }
}

function isValid(d, m, y) {
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
}


function inicioFinLlamada() {

    var textoBoton = document.getElementById("inicioFinButton").innerHTML;
    console.log("boton ", textoBoton);
    if (textoBoton == "Iniciar LLamada") {

        obtenerInicio()

    } else if (textoBoton == "Terminar LLamada") {

        obtenerFin()

    }


}


function obtenerInicio() {


    var db = firebase.database();
    var sessionsRef = db.ref("sessions");
    sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);

    var x = 0;
    sessionsRef.orderByChild("actual").on("child_added", function (snapshott) {

        horaInicio = snapshott.val(); {
            document.getElementById("inicioFinButton").innerHTML = "Terminar LLamada"        }

    })
}

function obtenerFin() {


    var db = firebase.database();
    var sessionsRef = db.ref("sessions");
    sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);
    var x = 0;
    sessionsRef.orderByChild("actual").on("child_added", function (snapshott) {

        horaFin = snapshott.val(); {
            document.getElementById("inicioFinButton").innerHTML = "Iniciar LLamada"
        }

    })

}

function perfil_usuario() {

    var db = firebase.database();
    var ref = db.ref("Usuarios");

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";


    ref.orderByChild("uid").equalTo(uid).once("value", function (snapshot) {


        snapshot.forEach(function (data) {

            var d = data.val();



            document.getElementById("nombre").innerHTML = "Nombre: " + d.nombre + " " + d.apellido_Paterno + " " + d.apellido_Materno;;
            document.getElementById("uid").innerHTML = "UID: " + d.uid;
            document.getElementById("email").innerHTML = "Email: " + d.email;
            document.getElementById("telefono").innerHTML = "Telefono: " + d.telefono1;
            document.getElementById("direccion").innerHTML = "Dirección: " + d.direccion;



        });

    });

    
    cargarTabla();
    busca_perros(uid);
    $("#loadingOverlay").hide(); // Oculta el overlay después de completar las operaciones

}


function busca_perros(query) {


    var db = firebase.database();
    var ref = db.ref("Perros").child(query);


    var perros = "";
    var primero = true;

    ref.orderByChild("uidUsuario").once("value", function (snapshot) {
        //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
        //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
        var exist = snapshot.val();

        if (exist == null) {

            perros = 'Sin perritos';


        } else {





            snapshot.forEach(function (data) {

                var d = data.val();

                if (primero == true) {

                    perros = d.nombre;
                    primero = false;
                } else {

                    perros = perros.concat(", ", d.nombre);

                }


            });



        }

        document.getElementById("perritos").innerHTML = "Perritos: " + perros;

    });

}


function cargarTabla() {

    var db = firebase.database();
    var ref = db.ref("Contacto").child("llamadas").child(uid);

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";


    var inicio = 1582005601000; //00:00:01 
    var fin = 1582091999000 //23:59:59

    ref.orderByChild("timestamp").limitToLast(10).once("value", function (snapshot) {

        snapshot.forEach(function (data) {

            console.log("entra llamadas")
            var d = data.val();
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = d.comentario;
            cell2.innerHTML = d.estatus;
            var date = new Date(d.timestamp);
            let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };
            cell3.innerHTML = date.toLocaleDateString(lang, options);

        });
        
    });
   
}

window.onload = perfil_usuario();

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