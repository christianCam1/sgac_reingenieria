var idUsuarioModal = ""
var telefonoUsuarioModal = ""
var nombreUsuarioModal = ""
const iconoCopiar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>';
const iconoMapaUbicacion = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>';
const iconoPerros = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>';
const iconoChat = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>';
const iconoVenta = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></svg>'
const iconoCompra = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16"><path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>';


function busca_user_ultima() {

    // Configuracion de tipo de ordenamiento absoluto para ciertos valores
    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    // Configuracion de DataTable con diferentes opciones
    var tabla = $('#tablaDatos').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        info: true,
        responsive: true,
        layout: {
            top1Start: {
                buttons: [
                {
                    extend: 'colvis',
                    text: 'Visor de columnas',
                    collectionLayout: 'three-column'
                }
                ]
            }
        },
        columnDefs: [
            { "targets": [1], "visible": false },
            { "targets": [8], "visible": false },
            { "targets": [10], "visible": false },
            { "width": "15%", "targets": 0 },
            { "width": "25%", "targets": 6 },
            { "width": "7%", "targets": 13 },
            { "orderData": 8, "targets": 7 },
            { "orderData": 10, "targets": 9 },
            { "targets": 8, "type": nameType },
            { "targets": 10, "type": nameType }
        ],
        "order": [[7, "desc"]],
        pageLength: 10,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
        // Configuracion de idioma
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

    // Oculta el filtro de busqueda predeterminado
    // Crea un nuevo campo de entrada que se muestra en su lugar       
    let oldInput = $('.dataTables_filter input');
    let newInput = $('<input>').on('change keyup input', () => {
        // Convierte el textto en una expresion regular
        let regex = textToRegex(newInput.val());
        oldInput.val(regex).trigger('input');
    });

    oldInput.hide().after(newInput);

    // Funcion para converir el texto de busqueda en una expresión regular
    function textToRegex(value) {
        return value
            .toLowerCase()
            .split('')
            .map(c => {
                if (/[-[\]{}()*+?.,\\^$|#]/.test(c)) {
                    return '\\' + c;
                }
                [
                    /[aàáâãäå]/, /[oòóôõöø]/, /[eèéêë]/, /[cç]/, /[dð]/,
                    /[ii̇ìíîï]/, /[uùúûü]/, /[nñ]/, /[sš]/, /[yÿý]/, /[zž]/
                ].some(r => {
                    if (r.test(c)) {
                        c = r.source;
                        return true;
                    }
                });
                return c;
            })
            .join('');
    }

    // Variables de conexion a la base de datos y referencia a Usuarios        
    var db = firebase.database();
    var ref = db.ref("Usuarios");

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    // Realiza una consulta ordenada por la propiedad "ultima_vez"
    ref.orderByChild("ultima_vez").once("value").then(snapshot => {

        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        var datos = snapshot.val();
        // itera sobre los datos recuperados de FB y se extraen las propiedades necesarias para mostrar en la DataTable
        for (const property in datos) {

            var d = datos[property]
            var fecha_ultima_vez = "Sin dato"
            var fecha_registro = "Sin dato"
            var uid = "Sin dato"
            var copiarUid = "Sin dato"
            var direccion = "No registrada"
            var generar_paseo = "Falta nombre o telefono del usuario"
            var nombre = d["nombre"] + " " + d["apellido_Paterno"] + " " + d["apellido_Materno"]
            var ultima_vez = "Sin dato"
            var registro = "Sin dato"
            var through = "Sin dato"
            var email = "Sin dato"
            var telefono1 = "Sin dato"
            var telefono2 = "Sin dato"
            var perros = "Sin dato"
            var fcompras = "Sin dato"

            //Asigna los valores obtenidos de property a la variable d y a sus correspondientes valores
            if (d["uid"] == undefined || d["uid"] == "") {
                uid = "SR : " + d;
                copiarUid = "SR : " + d;
            } else {
                uid = d.uid; copiarUid = '<button class="btn btn-outline-info btn-lg" onclick="copyToClipboard(\'' + d["uid"] + '\')" data-toggle="tooltip" title="Copiar UID">' + iconoCopiar + '</button>';
                perros = '<button class="btn btn-warning" onclick="busca_perros(\'' + d["uid"] + '\')" data-toggle="tooltip" title="Ver perros">' + iconoPerros + '</button>'
                fcompras = '<button class="btn btn-success" onclick="verFCompras(\'' + d["uid"] + '\')" data-toggle="tooltip" title="Ver compras">' + iconoCompra + '</button>';
            }

            if (d["direccion"] != undefined) { direccion = d["direccion"] + '<button class="btn btn-block bg-gradient-warning" onclick="verDireccion(\'' + d["latitud"] + '\',\'' + d["longitud"] + '\')" data-toggle="tooltip" title="Ver direccion">' + iconoMapaUbicacion + '</button>' }

            if (nombre != "" && nombre != undefined && d.telefono1 != "" && d.telefono1 != undefined) { generar_paseo = '<button class="btn bg-secondary" onclick="generar_paseos(\'' + uid + '\',\'' + d["telefono1"] + '\',\'' + nombre + '\')" data-toggle="tooltip" title="Realizar venta">' + iconoVenta + '</button>' }

            if (d["ultima_vez"] != undefined) {
                fecha_ultima_vez = new Date(d["ultima_vez"]);
                fecha_ultima_vez = fecha_ultima_vez.toLocaleDateString(lang, options)
                ultima_vez = d["ultima_vez"]

            }

            if (d["creation_date"] != undefined) {
                fecha_registro = new Date(d["creation_date"]);
                fecha_registro = fecha_registro.toLocaleDateString(lang, options)
                registro = d["creation_date"]
            }

            if (d["through"] != undefined) { through = d["through"] }

            if (d["email"] != undefined) { email = d["email"] }

            if (d["telefono1"] != undefined) { telefono1 = d["telefono1"] }

            if (d["telefono2"] != undefined) { telefono2 = d["telefono2"] }

            // Array con los valores correspondientes a los datos del usuario
            var informacionUsuarios = [
                nombre,
                uid,
                copiarUid,
                email,
                telefono1,
                telefono2,
                direccion,
                fecha_ultima_vez,
                ultima_vez,
                fecha_registro,
                registro,
                through,
                perros,
                generar_paseo,
                '<button class="btn bg-info" onclick="ver_chat(\'' + uid + '\')">' + iconoChat + '</button>',
                fcompras
            ]
            // Se añade la fila a la dataTable
            tabla.rows.add([informacionUsuarios]);
        }
        // Dibuja la tabla en la pagina
        tabla.draw()
        $("#loadingOverlay").hide();

    })


    


}


// Funcion para visualizar el chat
function ver_chat(uid) {

    // Abre una nueva ventana para visualizar el chat
    window.open('chatCaminandog.php?uid=' + uid, '_blank');


}

// Funcion para visualizar la direccion, abre un mapa
function verDireccion(latitud, longitud) {
    // Abre en una nueva ventana un mapa para visualizar la dirección del usuario.
    window.open('mapa.php?latitud=' + latitud + "&longitud=" + longitud, '_blank');
}


function generar_paseos(uid, telefono, nombre) {

    idUsuarioModal = uid
    telefonoUsuarioModal = telefono
    nombreUsuarioModal = nombre

    $('#myModal').modal('show');

}

function generar_compra_paseos() {


    window.open('pedirPaseo.php?uid=' + idUsuarioModal + '&telefono=' + telefonoUsuarioModal + '&nombre=' + nombreUsuarioModal, '_blank');

}


function generar_compra_placas() {


    window.open('compraPlaca.php?uid=' + idUsuarioModal + '&telefono=' + telefonoUsuarioModal + '&nombre=' + nombreUsuarioModal, '_blank');

}



function generar_compra_vigencia() {


    window.open('compraVigencia.php?uid=' + idUsuarioModal + '&telefono=' + telefonoUsuarioModal + '&nombre=' + nombreUsuarioModal, '_blank');

}


function verFCompras(uid) {

    window.open('comprasfinuser.php?uid=' + uid, '_blank');
}


window.onload = busca_user_ultima();


function busca_perros(query) {


    hideUsersTable();


    var db = firebase.database();
    var ref = db.ref("Perros").child(query);
    console.log(query);
    console.log(ref);
    var table = document.getElementById("tablaPerrosbody");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    ref.orderByChild("uidUsuario").once("value", function (snapshot) {
        //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
        //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
        var exist = snapshot.val();
        if (exist == null) {

            table.innerHTML = 'Sin Resultados'


        } else {



        }

        snapshot.forEach(function (data) {

            var d = data.val();
            console.log(d);
            console.log(data.val());
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);



            // asigna a las celdas el valir del Child especificado
            cell1.innerHTML = d.idPerro;
            cell2.innerHTML = d.nombre;
            cell3.innerHTML = d.comportamiento;
            cell4.innerHTML = d.raza;
            cell9.innerHTML = '<img src=\'' + d.foto + '\' width="200" height="200" />';

            if (d.vacunas != undefined) {

                cell5.innerHTML = d.vacunas.desparacitado;
                cell6.innerHTML = d.vacunas.primeraDosis;
                cell7.innerHTML = d.vacunas.segundaDosis;
                cell8.innerHTML = d.vacunas.terceraDosis;

            } else {

                cell5.innerHTML = "Sin dato";
                cell6.innerHTML = "Sin dato";
                cell7.innerHTML = "Sin dato";
                cell8.innerHTML = "Sin dato";

            }


        });


    });
    $('#modalPerros').modal('show');

}




function hideUsersTable() {

    // $( "#tablaDatos" ).hide();
    // $(".dataTables_info").hide();
    // $(".dataTables_paginate").hide();
    // $(".dataTables_filter").hide();
    // $(".dataTables_length").hide();


    $("#tablaPerros").show();

    //$( "#regresar" ).show();


}

//Funcion para ver y ocultar elementos de la tabla
function showUsersTable() {

    $("#tablaDatos").show();
    $(".dataTables_info").show();
    $(".dataTables_paginate").show();
    $(".dataTables_filter").show();
    $(".dataTables_length").show();

    $("#tablaPerros").hide();

    $("#regresar").hide();
}

function copyToClipboard(val) {

    var dummy = document.createElement("input");
    document.body.appendChild(dummy);

    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}