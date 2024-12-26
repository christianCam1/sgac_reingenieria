var UsuariosPorTimestamp = [];
var totalUtilizados = 0;
var totalNoUtilizados = 0;
var totalClientes = 0;

function muestra_usuarios() {

    var db = firebase.database();
    var ref = db.ref("Usuarios");

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    var actual = 0;

    ref.orderByChild("creation_date").once("value", function (snapshot) {
        var total = snapshot.numChildren();
        snapshot.forEach(function (data) {
            actual = actual + 1;
            obtenerPaseos(data.key, data, actual, total);
        });

    });

}


function obtenerPaseos(uid, datosSnap, actual, total) {

    var db = firebase.database();
    var ref_paseos = db.ref("Paseos_usuarios");


    ref_paseos.child(uid).orderByChild("timestamp").once("value", function (snapshotPaseos) {



        var total_paseos = snapshotPaseos.numChildren();

        if (total_paseos > 1) {

            var estatusGeneral = "Cliente";

            totalClientes = totalClientes + 1;

        } else if (total_paseos <= 1) {

            estatusGeneral = "SD";

        }

        var d = datosSnap.val();

        let nombre = d.nombre + " " + d.apellido_Paterno + " " + d.apellido_Materno;

        if (datosSnap.hasChild("contacto")) {

            var volveramarcar = d.contacto.timestamprecordatorio;
            if (volveramarcar == undefined) { volveramarcar = "" }



            if (datosSnap.hasChild("cupones/DOGLOVER14")) {

                if (d.cupones.DOGLOVER14.activo == true) {

                    guardar(datosSnap.key, d.contacto.timestamp, d.contacto.comentario, d.contacto.estatus, nombre, d.telefono1, d.creation_date, volveramarcar, actual, total, "Cupon no utilizado");

                    totalNoUtilizados = totalNoUtilizados + 1;

                } else {

                    totalUtilizados = totalUtilizados + 1;

                    console.log("total paseos de " + datosSnap.key + " es " + total_paseos);

                    if (total_paseos > 1) {


                        guardar(datosSnap.key, d.contacto.timestamp, d.contacto.comentario, d.contacto.estatus, nombre, d.telefono1, d.creation_date, volveramarcar, actual, total, "Cliente ");

                    } else if (total_paseos <= 1) {

                        guardar(datosSnap.key, d.contacto.timestamp, d.contacto.comentario, d.contacto.estatus, nombre, d.telefono1, d.creation_date, volveramarcar, actual, total, "Cupon utilizado");


                    }

                }

            } else if (datosSnap.hasChild("cupones/PRIMERPASEO")) {



                if (d.cupones.PRIMERPASEO.activo == true) {
                    guardar(datosSnap.key, d.contacto.timestamp, d.contacto.comentario, d.contacto.estatus, nombre, d.telefono1, d.creation_date, volveramarcar, actual, total, "Cupon no utilizado");

                    totalNoUtilizados = totalNoUtilizados + 1;

                } else {

                    totalUtilizados = totalUtilizados + 1;

                    console.log("total paseos de " + datosSnap.key + " es " + total_paseos);

                    if (total_paseos > 1) {
                        guardar(datosSnap.key, d.contacto.timestamp, d.contacto.comentario, d.contacto.estatus, nombre, d.telefono1, d.creation_date, volveramarcar, actual, total, "Cliente ");
                    } else if (total_paseos <= 1) {
                        guardar(datosSnap.key, d.contacto.timestamp, d.contacto.comentario, d.contacto.estatus, nombre, d.telefono1, d.creation_date, volveramarcar, actual, total, "Cupon utilizado");
                    }
                }

            } else {
                guardar(datosSnap.key, d.contacto.timestamp, d.contacto.comentario, d.contacto.estatus, nombre, d.telefono1, d.creation_date, volveramarcar, actual, total, estatusGeneral);
            }

        } else {

            guardar(datosSnap.key, undefined, "SD", "Nuevo", nombre, d.telefono1, d.creation_date, "SD", actual, total, estatusGeneral);

        }
    });

}

function guardar(uid, timestamp, comentario, estatus, nombre, telefono, registro, volveramarcar, actual, total, cupon) {

    var registroUsuarios = {
        uid: uid,
        estatus: estatus,
        nombre: nombre,
        timestamp: timestamp,
        comentario: comentario,
        telefono: telefono,
        volveramarcar: volveramarcar,
        cupon: cupon

    };

    UsuariosPorTimestamp.push(registroUsuarios);

    if (actual == total) {
        mostrar();
        // Oculta el overlay al finalizar la configuración inicial
    
    }

}

function mostrar() {
    var table = document.getElementById("tabla");
    table.innerHTML = "";
    UsuariosPorTimestamp.forEach(logArrayElements);
    console.log("tamaño ", UsuariosPorTimestamp.length)
    agregarPaginacion();

    document.getElementById("demo").innerHTML = "Cupon utilizado: " + totalUtilizados + " Cupon no utilizado: " + totalNoUtilizados + " Clientes: " + totalClientes;
    

}


comboEstatus.addEventListener("input", function (e) {

    var table = document.getElementById("tabla");
    table.innerHTML = "";

    var element = document.getElementById("comboEstatus");
    var estatusSeleccionado = element.options[element.selectedIndex].value;

    var oTable = $('#tablaDatos').DataTable();  

    console.log(estatusSeleccionado);

    if (estatusSeleccionado == "Seleccionar...") {

        oTable.order([[0, 'asc']]);
        oTable.column(3).search("");
        oTable.draw();

    } else {

        if (estatusSeleccionado == "Volver a marcar") {
            oTable.order([[6, 'asc']]);
        }

        oTable.column(3).search('^' + estatusSeleccionado + '$', true, true);
        oTable.draw();

    }

});

comboTipo.addEventListener("input", function (e) {

    var table = document.getElementById("tabla");
    table.innerHTML = "";
    var elementTipo = document.getElementById("comboTipo");
    var tipoSeleccionado = elementTipo.options[elementTipo.selectedIndex].value;

    var oTable = $('#tablaDatos').DataTable();

    if (tipoSeleccionado == "Seleccionar...") {
        oTable.column(4).search("");
        oTable.draw();

    } else {
        oTable.column(4).search('"' + tipoSeleccionado + '"', true, true);
        oTable.draw();
        console.log(tipoSeleccionado);
    }

});



function agregarPaginacion() {

    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'undefined', position: 'top'
    });
    $('#tablaDatos').dataTable({
        "pagingType": "full_numbers",
        "paging": true, //Muestra la paginacion y el combobox
        "bFilter": true,//Muestra oculta filtro
        "info": true, // Texto que indica cuantos registros se estan mostrando
        "responsive": true,
        "columnDefs": [
            { "targets": [7], "visible": false },
            { "targets": [8], "visible": false },
            { "targets": [9], "visible": false },
            { "orderData": 7, "targets": 6 },
            { "orderData": 8, "targets": 0 },
            { "targets": 8, "type": nameType }
        ],
        "layout": {
            "top1Start": {
                "buttons": [
                {
                    "extend": 'colvis',
                    "text": 'Visor de columnas',
                    "collectionLayout": 'three-column'
                }
                ]
            }
        },
        "order": [[0, "asc"]],
        //----------------- Configuración Idioma----------------------
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


        //----------------- Termina Configuración Idioma----------------------



    });

}





function logArrayElements(d, index, array) {

    var table = document.getElementById("tabla");

    //console.log("a[" + index + "] = " + d);

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
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);

    // asigna a las celdas el valir del Child especificado
    var date = new Date(d.timestamp);
    var dateVolver = new Date(d.volveramarcar);
    let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

    if (d.timestamp == undefined) {

        cell1.innerHTML = "SD";

    } else {

        cell1.innerHTML = date.toLocaleDateString(lang, options);

    }

    cell2.innerHTML = d.nombre;
    cell3.innerHTML = d.telefono;
    cell4.innerHTML = d.estatus;
    cell5.innerHTML = d.cupon;
    cell6.innerHTML = d.comentario;

    if (d.volveramarcar == "SD") {


        cell7.innerHTML = "SD";

    } else {



        cell7.innerHTML = dateVolver.toLocaleDateString(lang, options);

    }

    cell8.innerHTML = d.volveramarcar;
    cell9.innerHTML = d.timestamp;
    cell10.innerHTML = d.uid;
    cell11.innerHTML = '<center><button class="btn btn-primary" onclick="verDetalleLLamar(\'' + d.uid + '\',\'' + d.nombre + '\')"><i class="fa-solid fa-phone"></i></button></center>';



    $("#loadingOverlay").hide();
}


window.onload = muestra_usuarios();

function verDetalleLLamar(UID, nombre) {

    var table = $('#tablaDatos').DataTable();

    table.rows().nodes().each(function (a, b) {
        if ($(a).children().eq(7).text() == UID) {
            table.rows(a).remove();
        }
    });


    table.rows().invalidate();
    table.draw();

    window.open('detalle_usuario.php?uid=' + UID, '_blank');
    
}

