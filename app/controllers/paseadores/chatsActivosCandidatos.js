var UsuariosPorTimestamp = [];
var primeraVez = true;
var myVar = 0;
var iphone = isMobile()
const iconoChatVacio = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>';
const iconoChatEntrante = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dcaf0" class="bi bi-chat-left-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>`;



function busca_user_ultima() {

    var tabla = $('#tablaDatos').DataTable({

        footerCallback: function (row, data, start, end, display) {
            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };
        },

        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,
        //Muestra oculta filtro
        info: true,
        columnDefs: [
            { "targets": [0], "visible": false },
            { "targets": [5], "visible": false },
            { "targets": [7], "visible": false },
            { "orderData": 5, "targets": 4 },
            { "orderData": 7, "targets": 6 },
        ],
        order: [[5, "desc"]],
        pageLength: 10,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
        data: UsuariosPorTimestamp,
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });

    let Caminandog_usuarios = [

        { "uid": "3aNCxxQp8NOjkfEPiRX7JXY8kkd2", "value": "Josue" },
        { "uid": "8ikQ8udhWKb91pySDBAaEt1JnRk2", "value": "Caren" },
        { "uid": "ZIk7OrgukmRnQEpk9iZxQmyfmdf1", "value": "Alejandro" },
        { "uid": "zIZ6h9Jo5MTaltZYdNb8NRIFNqo2", "value": "Brandon" },
        { "uid": "ESkn7GXBEjgbNKP4PTMGNCEB9Ef2", "value": "Abraham" },
        { "uid": "R4wgoZ7l5DWHYdJHRTFCq2YPLJQ2", "value": "Jacob" },
        { "uid": "KXb1vyDGn4UY2qzp56gIIrrbmE62", "value": "Claudio" }

    ];

    var db = firebase.database();
    var ref = db.ref("Chats_candidato_caminandog").child("tabla_chat");

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    // ref.orderByChild("ultima_vez").on("value", function(snapshot){ aqui se puede poner la hora de llegada del mensaje

    ref.on('child_added', datos => {

        console.log("child_added")

        var d = datos.val();


        var nombre = "Sin dato"
        var email = "Sin dato"
        var telefono = "Sin dato"
        var hora_inicio_conversacion = "Sin dato"
        var hora_ultimo_msj = "Sin dato"
        var ultimo_texto_mensaje = "Sin dato"
        var mensaje_sin_responder = false
        var en_atencion = "Sin dato"
        var emisor_mensaje = ""
        var uid = ""


        let lang = 'es-US'
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        if (d.uid != undefined) {

            uid = d.uid;

        }

        if (d.nombre != undefined) {

            nombre = d.nombre;

        }

        if (d.email != undefined) {

            email = d.email;

        }

        if (d.telefono != undefined) {

            telefono = d.telefono;

        }

        if (d.hora_inicio_conversacion != undefined) {

            var dateInicio = new Date(d.hora_inicio_conversacion);

            hora_inicio_conversacion = dateInicio.toLocaleDateString(lang, options);

        }
        if (d.hora_ultimo_msj != undefined) {

            var dateUltimo = new Date(d.hora_ultimo_msj);

            hora_ultimo_msj = dateUltimo.toLocaleDateString(lang, options);

        }

        if (d.ultimo_texto_mensaje != undefined) {

            ultimo_texto_mensaje = d.ultimo_texto_mensaje

        }
        if (d.mensaje_sin_responder != undefined) {

            mensaje_sin_responder = d.mensaje_sin_responder;

        }
        if (d.en_atencion != undefined) {

            en_atencion = d.en_atencion;

        }



        if (mensaje_sin_responder == true) {

            img = iconoChatEntrante;

        } else {

            img = iconoChatVacio;

        }

        if (d.emisor_mensaje != undefined) {

            emisor_mensaje = d.emisor_mensaje
        }


        if (en_atencion == true) {

            imgAtencion = "../public/img/call_center.png";

            var obtenObjecto = Caminandog_usuarios.find(e => e.uid === d.uidAtencion);
            console.log(obtenObjecto.value);
            var nombreAtencion = obtenObjecto.value

        } else {

            imgAtencion = "../public/img/espera.png";
            nombreAtencion = "Esperando atención"

        }

        var informacionUsuarios = [d.uid, nombre, email, telefono, hora_inicio_conversacion, d.hora_inicio_conversacion, hora_ultimo_msj, d.hora_ultimo_msj, ultimo_texto_mensaje, '<img id="msjAt" src=\'' + imgAtencion + '\'  width="30" height=" 30">   ' + nombreAtencion, '<center><button class="btn btn-lg" onclick="ver_chat(\'' + d.uid + '\')">'+img+'</button></center>']

        var table = $('#tablaDatos').dataTable();


        tabla.rows.add([informacionUsuarios]).draw();

        $("#loadingOverlay").hide();

        if (emisor_mensaje == "usuario") {

            if (iphone == true) {

            } else {

                checkFocus(uid, nombre, ultimo_texto_mensaje)
            }
        }

    });

    ref.on('child_removed', datos => {

        console.log(datos.key)

        var d = datos.val();

        var table = $('#tablaDatos').dataTable();

        var rowId = table.fnFindCellRowIndexes(d.uid, 0);


        table.fnDeleteRow(rowId, false)



    });


    ref.on('child_changed', datos => {

        console.log("child_changed")

        var d = datos.val();


        var nombre = "Sin dato"
        var email = "Sin dato"
        var telefono = "Sin dato"
        var hora_inicio_conversacion = "Sin dato"
        var hora_ultimo_msj = "Sin dato"
        var ultimo_texto_mensaje = "Sin dato"
        var mensaje_sin_responder = false
        var en_atencion = false
        var emisor_mensaje = ""
        var uid = ""

        let lang = 'es-US'
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        if (d.uid != undefined) {

            uid = d.uid;

        }

        if (d.nombre != undefined) {

            nombre = d.nombre;

        }

        if (d.email != undefined) {

            email = d.email;

        }

        if (d.telefono != undefined) {

            telefono = d.telefono;

        }

        if (d.hora_inicio_conversacion != undefined) {

            var dateInicio = new Date(d.hora_inicio_conversacion);

            hora_inicio_conversacion = dateInicio.toLocaleDateString(lang, options);

        }
        if (d.hora_ultimo_msj != undefined) {

            var dateUltimo = new Date(d.hora_ultimo_msj);

            hora_ultimo_msj = dateUltimo.toLocaleDateString(lang, options);

        }

        if (d.ultimo_texto_mensaje != undefined) {

            ultimo_texto_mensaje = d.ultimo_texto_mensaje

        }
        if (d.mensaje_sin_responder != undefined) {

            mensaje_sin_responder = d.mensaje_sin_responder;

        }
        if (d.en_atencion != undefined) {

            en_atencion = d.en_atencion;

        }

        if (d.emisor_mensaje != undefined) {

            emisor_mensaje = d.emisor_mensaje
        }


        if (mensaje_sin_responder == true) {

            img = iconoChatEntrante;

        } else {

            img = iconoChatVacio;

        }


        if (en_atencion == true) {

            imgAtencion = "img/call_center.png";

            var obtenObjecto = Caminandog_usuarios.find(e => e.uid === d.uidAtencion);
            console.log(obtenObjecto.value);
            var nombreAtencion = obtenObjecto.value

        } else {

            imgAtencion = "img/espera.png";
            nombreAtencion = "Esperando atención"
        }

        var informacionUsuarios = [d.uid, nombre, email, telefono, hora_inicio_conversacion, d.hora_inicio_conversacion, hora_ultimo_msj, d.hora_ultimo_msj, ultimo_texto_mensaje, '<img id="msjAt" src=\'' + imgAtencion + '\'  width="30" height=" 30">   ' + nombreAtencion, '<center><button class="btn btn-lg" onclick="ver_chat(\'' + d.uid + '\')">'+img+'</button></center>']



        var table = $('#tablaDatos').dataTable();


        var rowId = table.fnFindCellRowIndexes(d.uid, 0);

        table.fnUpdate(informacionUsuarios, rowId, undefined);


        if (emisor_mensaje == "usuario") {

            if (iphone == true) {

            } else {
                checkFocus(uid, nombre, ultimo_texto_mensaje)

            }
        }

    });

}




function checkFocus(uid, nombre, ultimo_texto_mensaje) {
    console.log("entra checar")
    if (document.hasFocus()) {

        document.title = "Chats candidatos"
        clearInterval(myVar);

    } else {

        clearInterval(myVar);
        myVar = setInterval(cambiarTitulo, 1000);

        showNotification(uid, nombre, ultimo_texto_mensaje)


    }
}


function cambiarTitulo() {

    console.log("Ejecutandose")

    if (document.title == "Nuevo mensaje") {

        document.title = "Chats candidatos";

    } else {

        document.title = "Nuevo mensaje";

    }


}



function checkFocusTitle() {
    if (document.hasFocus()) {

        document.title = "Chats candidatos"
        clearInterval(myVar);
    }
}


function showNotification(uid, nombre, texto) {

    if (texto == "") {

        texto = ""
    }

    const greeting = new Notification(nombre, {
        body: texto,
        tag: uid,
        icon: "favicon.ico"
    });
}


if (iphone == true) {

} else {
    console.log(Notification.permission)

    if (Notification.permission == "granted") {



        console.log("hi")
    } else if (Notification.permission != "denied") {

        Notification.requestPermission().then(permission => {
            console.log(permission);
        })

    }


}


var audioUrl = 'http://www.realmofdarkness.net/audio/vg/sf/sf2/perfect.mp3';

// SIMPLE EXEMPLE
$('.btn').click(() => new Audio(audioUrl).play()); // that will do the trick !!



function ver_chat(uid) {


    window.open('chatCaminandogCandidato.php?uid=' + uid, '_blank');

}


setInterval(function () { checkFocusTitle(); }, 300)

window.onload = busca_user_ultima();



function isMobile() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true
    }
    else {
        return false
    }
}
