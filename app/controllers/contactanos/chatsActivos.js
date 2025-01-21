
var UsuariosPorTimestamp = [];
var primeraVez = true;
var myVar = 0;
var iphone = isMobile()

const iconoChatVacio = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>';
const iconoChatEntrante = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dcaf0" class="bi bi-chat-left-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>`;


function busca_user_ultima() {

    var tabla = $('#tablaDatos').DataTable({

        pagingType: "full_numbers",
        paging: true, // Muestra la paginación y el combobox
        bFilter: true, // Muestra/oculta filtro
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
        language: {
            sProcessing: "Procesando...",
            sLengthMenu: "Mostrar _MENU_ registros",
            sZeroRecords: "No se encontraron resultados",
            sEmptyTable: "Ningún dato disponible en esta tabla",
            sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
            sSearch: "Buscar:",
            oPaginate: {
                sFirst: "Primero",
                sLast: "Último",
                sNext: "Siguiente",
                sPrevious: "Anterior"
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
    var ref = db.ref("Chats_usuario_caminandog/tabla_chat");

    // Limpia la tabla
    $('#tablaDatos').DataTable().clear().draw();

    const formatDate = (timestamp) => {
        if (!timestamp) return "Sin dato";
        return new Date(timestamp).toLocaleDateString('es-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric"
        });
    };

    ref.on('child_added', datos => {
        console.log("child_added", datos.val());

        const d = datos.val();

        const nombreAtencion = d.en_atencion
            ? Caminandog_usuarios.find(e => e.uid === d.uidAtencion)?.value || "Sin dato"
            : "Esperando atención";

        const informacionUsuarios = [
            d.uid || "Sin dato",
            d.nombre || "Sin dato",
            d.email || "Sin dato",
            d.telefono || "Sin dato",
            formatDate(d.hora_inicio_conversacion),
            d.hora_inicio_conversacion || 0,
            formatDate(d.hora_ultimo_msj),
            d.hora_ultimo_msj || 0,
            d.ultimo_texto_mensaje || "Sin dato",
            `<img id="msjAt" src="${d.en_atencion ? "../public/img/call_center.png" : "../public/img/espera.png"}" width="30" height="30"> ${nombreAtencion}`,
            `<button class="btn btn-lg" onclick="ver_chat('${d.uid}')">
                <img id="msjImg" src="${d.mensaje_sin_responder ? "../public/img/mensajeS.png" : "../public/img/mensaje.png"}" width="30" height="30">
            </button>`
        ];

        tabla.row.add(informacionUsuarios).draw(false);

        if (d.emisor_mensaje === "usuario" && !iphone) {
            checkFocus(d.uid, d.nombre || "Sin dato", d.ultimo_texto_mensaje || "Sin dato");
        }
    });

    ref.on('child_removed', datos => {
        console.log("child_removed", datos.key);

        const row = tabla.rows().eq(0).filter(idx => {
            return tabla.cell(idx, 0).data() === datos.val().uid;
        });

        if (row.length) {
            tabla.row(row[0]).remove().draw(false);
        }
    });

    ref.on('child_changed', datos => {
        console.log("child_changed:", datos.val());
    
        var d = datos.val();
    
        // Datos del usuario
        let informacionUsuarios = [
            d.uid,
            d.nombre || "Sin dato",
            d.email || "Sin dato",
            d.telefono || "Sin dato",
            d.hora_inicio_conversacion
                ? formatDate(d.hora_inicio_conversacion)
                : "Sin dato",
            d.hora_inicio_conversacion,
            d.hora_ultimo_msj
                ? formatDate(d.hora_ultimo_msj)
                : "Sin dato",
            d.hora_ultimo_msj,
            d.ultimo_texto_mensaje || "Sin dato",
            `<img id="msjAt" src='${d.en_atencion ? "../public/img/call_center.png" : "../public/img/espera.png"}' width="30" height="30"> ${
                d.en_atencion
                    ? Caminandog_usuarios.find(e => e.uid === d.uidAtencion)?.value || "Sin dato"
                    : "Esperando atención"
            }`,
            `<button class="btn btn-lg" onclick="ver_chat('${d.uid}')">
                <img id="msjImg" src='${d.mensaje_sin_responder ? "../public/img/mensajeS.png" : "../public/img/mensaje.png"}' width="30" height="30">
            </button>`
        ];
    
        // Obtener referencia a la tabla DataTable
        var tabla = $('#tablaDatos').DataTable();
    
        // Buscar la fila correspondiente al UID
        var rowId = tabla.rows().eq(0).filter(idx => {
            return tabla.row(idx).data()[0] === d.uid;
        });
    
        if (rowId.length > 0) {
            // Si existe, actualizar los datos de la fila
            tabla.row(rowId[0]).data(informacionUsuarios).draw();
        } else {
            // Si no existe, agregarla como nueva fila
            tabla.row.add(informacionUsuarios).draw();
        }
    
        // Reordenar la tabla para colocar la fila actualizada al inicio
        tabla.order([5, 'desc']).draw(false); // Ordenar por la columna de timestamp (índice 5)
    });
    

    $("#loadingOverlay").hide();
}

function checkFocus(uid, nombre, ultimo_texto_mensaje) {
    console.log("entra checar")
    if (document.hasFocus()) {

        document.title = "Chats"
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

        document.title = "Chats";

    } else {

        document.title = "Nuevo mensaje";

    }


}



function checkFocusTitle() {
    if (document.hasFocus()) {

        document.title = "Chats"
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


    window.open('chatCaminandog.php?uid=' + uid, '_blank');

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
