const iconoCopiar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>';
const iconoPerfil = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg>'
function busca_user_ultima() {


    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    var tabla = $('#tablaDatos').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        responsive:true,        
        info: true,
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
            { "targets": [12], "visible": false },
            { "width": "5%", "targets": 5 },
            { "width": "7%", "targets": 6 },
            { "orderData": 10, "targets": 9 },
            { "orderData": 12, "targets": 11 },
            { "targets": 8, "type": nameType },
            { "targets": 10, "type": nameType },
            { "targets": 13, "type": nameType }
        ],
        "order": [[9, "desc"]],
        pageLength: 10,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
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



    let oldInput = $('.dataTables_filter input');
    let newInput = $('<input>').on('change keyup input', () => {
        let regex = textToRegex(newInput.val());
        oldInput.val(regex).trigger('input');
    });
    oldInput.hide().after(newInput);

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



    var db = firebase.database();
    var ref = db.ref("Paseadores");

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    ref.orderByChild("ultima_vez_inicio").once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };



        var datos = snapshot.val();

        for (const property in datos) {



            var d = datos[property]
            var nombre = d["nombre"] + " " + d["apellidopa"] + " " + d["apellidoma"]
            var uid = "Sin dato"
            var copiarUid = "Sin dato"
            var email = "Sin dato"
            var estatus = "Sin dato"
            var noperros = "Sin dato"
            var categoria = "Sin dato"
            var celular = "Sin dato"
            var telefono = "Sin dato"
            var ultima_vez = "Sin dato"
            var ultima_vez_timestamp = "Sin dato"
            var cierre = "Sin dato"
            var cierre_timestamp = "Sin dato"
            var version = "Sin dato "


            if (d["idPaseador"] == undefined || d["idPaseador"] == "") { 
                uid = "SR : " + d; copiarUid = "SR : " + property; 
            } else { 
                uid = d.idPaseador; copiarUid = '<center><button class="btn btn-info btn-sm" onclick="copyToClipboard(\'' + property + '\')">' + iconoCopiar + " Copiar" + '</button></center>'; 
            }

            if (d["email"] != undefined) { email = d["email"] }

            if (d["estatus"] != undefined) {

                if (d["estatus"] == 0) {
                    estatus = "Disponible"

                } else {

                    estatus = "Desconectado"
                }
            }


            if (d["cantidadPerros"] != undefined) { noperros = d["cantidadPerros"] }


            if (d["categoria"] != undefined) { categoria = d["categoria"] }

            if (d["celular"] != undefined) { celular = d["celular"] }
            if (d["telefono"] != undefined) { telefono = d["telefono"] }



            if (d["ultima_vez_inicio"] != undefined) {
                ultima_vez = new Date(d["ultima_vez_inicio"]);
                ultima_vez = ultima_vez.toLocaleDateString(lang, options)
                ultima_vez_timestamp = d["ultima_vez_inicio"]

            }

            if (d["ultima_vez"] != undefined) {
                cierre = new Date(d["ultima_vez"]);
                cierre = cierre.toLocaleDateString(lang, options)
                cierre_timestamp = d["ultima_vez"]

            }
            if (d["through"] != undefined) { version = d["through"] }






            var informacionUsuarios =

                [

                    nombre,
                    uid,
                    copiarUid,
                    email,
                    estatus,
                    noperros,
                    categoria,
                    celular,
                    telefono,
                    ultima_vez,
                    ultima_vez_timestamp,
                    cierre,
                    cierre_timestamp,
                    version,
                    '<button class="btn btn-app" onclick="ver_perfil(\'' + uid + '\')">'+iconoPerfil+ '<br>Ver Perfil</button>',

                ]



            var table = $('#tablaDatos').dataTable();


            tabla.rows.add([informacionUsuarios]);



        }

        tabla.draw()
        $("#loadingOverlay").hide();

    })





}

function ver_perfil(uid) {


    window.open('paseadorDetalle.php?idPaseador=' + uid, '_blank');


}

function ver_chat(uid) {


    window.open('chatCaminandog.html?uid=' + uid, '_blank');


}

function verDireccion(latitud, longitud) {

    window.open('direccion.html?latitud=' + latitud + "&longitud=" + longitud, '_blank');
}


function generar_paseos(uid, telefono, nombre) {


    window.open('pedirPaseo.html?uid=' + uid + '&telefono=' + telefono + '&nombre=' + nombre, '_blank');

}

window.onload = busca_user_ultima();


// function busca_perros(query) {


//     hideUsersTable();


//     var db = firebase.database();
//     var ref = db.ref("Perros").child(query);

//     var table = document.getElementById("tablaPerrosbody");

//     //limpia la tabla
//     table.innerHTML = "";

//     //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

//     ref.orderByChild("uidUsuario").once("value", function (snapshot) {
//         //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
//         //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
//         var exist = snapshot.val();
//         if (exist == null) {

//             table.innerHTML = 'Sin Resultados'


//         } else {



//         }

//         snapshot.forEach(function (data) {

//             var d = data.val();

//             var row = table.insertRow(0);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             var cell6 = row.insertCell(5);
//             var cell7 = row.insertCell(6);
//             var cell8 = row.insertCell(7);
//             var cell9 = row.insertCell(8);



//             // asigna a las celdas el valir del Child especificado
//             cell1.innerHTML = d.idPerro;
//             cell2.innerHTML = d.nombre;
//             cell3.innerHTML = d.comportamiento;
//             cell4.innerHTML = d.raza;
//             cell9.innerHTML = '<img src=\'' + d.foto + '\' width="200" height="200" />';

//             if (d.vacunas != undefined) {

//                 cell5.innerHTML = d.vacunas.desparacitado;
//                 cell6.innerHTML = d.vacunas.primeraDosis;
//                 cell7.innerHTML = d.vacunas.segundaDosis;
//                 cell8.innerHTML = d.vacunas.terceraDosis;

//             } else {

//                 cell5.innerHTML = "Sin dato";
//                 cell6.innerHTML = "Sin dato";
//                 cell7.innerHTML = "Sin dato";
//                 cell8.innerHTML = "Sin dato";

//             }


//         });


//     });

// }




// function hideUsersTable() {

//     $("#tablaDatos").hide();
//     $(".dataTables_info").hide();
//     $(".dataTables_paginate").hide();
//     $(".dataTables_filter").hide();
//     $(".dataTables_length").hide();


//     $("#tablaPerros").show();

//     $("#regresar").show();


// }

// function showUsersTable() {

//     $("#tablaDatos").show();
//     $(".dataTables_info").show();
//     $(".dataTables_paginate").show();
//     $(".dataTables_filter").show();
//     $(".dataTables_length").show();

//     $("#tablaPerros").hide();

//     $("#regresar").hide();
// }




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