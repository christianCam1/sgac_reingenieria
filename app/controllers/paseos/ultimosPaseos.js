var UsuariosPorTimestamp = [];

function busca_user() {
    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    var tabla = $('#tablaDatos').DataTable({
        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        info: true,
        responsive: true,
        columnDefs: [
            { "targets": [4], "visible": false },
            { "targets": 4, "type": nameType },
            { "orderData": 4, "targets": 3 },
        ],
        order: [[3, 'desc']],
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
    var ref = db.ref("Ultimo_Paseo");

    var table = document.getElementById("tabla");

    // limpia la tabla
    table.innerHTML = "";

    // con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    ref.orderByChild("timestamp").once("value").then(snapshot => {
        let lang = 'es-US' // puedes usar el lenguaje del usuario: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        if (snapshot.exists()) {
            var datos = snapshot.val();
            for (const property in datos) {
                var d = datos[property];
                var uid = "Sin dato";
                var nombre = "Sin dato";
                var orden = "Sin dato";
                var fecha = "Sin dato";
                var fechaTimestamp = 0;
                var ver = "Sin dato";

                if (d["uid"] != undefined) {
                    uid = d["uid"];
                }

                if (d["nombre"] != undefined) {
                    nombre = d["nombre"];
                }

                if (d["order_id"] != undefined) {
                    orden = d["order_id"];
                }

                if (d["ultimo_time"] != undefined) {
                    fecha = new Date(d["ultimo_time"]);
                    fecha = fecha.toLocaleDateString(lang, options);
                    fechaTimestamp = d["ultimo_time"];
                }

                ver = '<center><button class="btn btn-info" onclick="verpaseoshistorico(\'' + uid + '\',\'' + orden + '\')">Ver mas</button></center>';

                var informacionUsuarios = [
                    uid,
                    nombre,
                    orden,
                    fecha,
                    fechaTimestamp,
                    ver
                ];

                var table = $('#tablaDatos').dataTable();

                tabla.rows.add([informacionUsuarios]);
            }

            tabla.draw();
            // Ocultar el overlay de carga
            $("#loadingOverlay").hide();
        } else {
            // Ocultar el overlay de carga si no hay datos
            $("#loadingOverlay").hide();
        }
    }).catch(error => {
        console.error("Error al recuperar los datos: ", error);
        // Ocultar el overlay de carga si hay un error
        $("#loadingOverlay").hide();
    });
}

function verpaseoshistorico(uid, order_id) {
    window.open('historico.php?uid=' + uid + "&order_id=" + order_id, '_blank');
}

window.onload = busca_user();
