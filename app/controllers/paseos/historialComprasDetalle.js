var uid = getAllUrlParams().uid;
var order_id = getAllUrlParams().order_id;


var UsuariosPorTimestamp = [];

function ultimo_paseo_usuario() {



    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    var tabla = $('#tablaDatos').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        info: true,
        columnDefs: [
            { "targets": [8], "visible": false },
            { "targets": 8, "type": nameType },
            { "orderData": 8, "targets": 7 },
        ],
        "order": [[7, "desc"]],
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
    var ref = db.ref("Paseos_usuarios").child(uid).orderByChild("originalID").equalTo(order_id)

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";
    ref.once('value').then((snapshot) => {

        let lang = 'es-US'
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        var datos = snapshot.val();

        for (const property in datos) {

            var d = datos[property]
            var uidPaseador = "Sin dato"
            var direccion = "Sin dato"
            var orden = "Sin dato"
            var categoria = "Sin dato"
            var duracion = "Sin dato"
            var perros = "Sin dato"
            var agendado = "Sin dato"
            var fecha = "Sin dato"
            var fechaTimestamp = 0
            var estatus = "Sin dato"
            var tracking = "Sin dato"
            var chat = "Sin dato"


            if (d["id_paseador"] != undefined) {
                uidPaseador = d["id_paseador"]
            }

            if (d["direccion"] != undefined) {
                direccion = d["direccion"]
            }

            if (d["order_id"] != undefined) {
                orden = d["order_id"]
            }

            if (d["categoria"] != undefined) {
                categoria = d["categoria"]
            }

            if (d["tiempo_paseo"] != undefined) {
                duracion = d["tiempo_paseo"]
                if (duracion == 1) {
                    duracion = "1 Hora"
                } else if (duracion == 2) {
                    duracion = "2 Horas"
                } else if (duracion == 0.5) {
                    duracion = "30 Minutos"
                } else if (duracion == 1.5) {
                    duracion = "90 Minutos"
                }
            }

            if (d["num_perros"] != undefined) {
                perros = d["num_perros"]
            }

            if (d["agendado"] != undefined) {
                if (d["agendado"] == "true") {
                    agendado = "Agendado";
                } else {
                    agendado = "Al momento";
                }
            }

            if (d["timestamp"] != undefined) {
                fecha = new Date(d["timestamp"]);
                fecha = fecha.toLocaleDateString(lang, options)
                fechaTimestamp = d["timestamp"]
            }

            if (d["estatusPaseo"].estatus != undefined) {
                estatus = d["estatusPaseo"]["estatus"]
                if (estatus == "terminado") {
                    tracking = '<center><button class="btn btn-info" onclick="mostrarTrackingTerminado(\'' + uid + '\',\'' + orden + '\')">Ver mas</button></center>';
                } else {
                    tracking = d["estatusPaseo"]["estatus"]
                }
            }

            console.log(d["estatusPaseo"].estatus)

            chat = '<center><button class="btn btn-primary" onclick="mostrarChat(\'' + uid + '\',\'' + orden + '\')"> <i class="fa-solid fa-comment"> </i></button><center>';

            var informacionUsuarios =
                [
                    uidPaseador,
                    direccion,
                    orden,
                    categoria,
                    duracion,
                    perros,
                    agendado,
                    fecha,
                    fechaTimestamp,
                    tracking,
                    chat
                ]

            var table = $('#tablaDatos').dataTable();


            tabla.rows.add([informacionUsuarios]);

            
        }

        
        tabla.draw();
        $("#loadingOverlay").hide();

    });


}





window.onload = ultimo_paseo_usuario();


function mostrarTrackingTerminado(uid, order_id) {
    window.open('terminado.php?uid=' + uid + "&order_id=" + order_id, '_blank');

}

function mostrarChat(uid, order_id) {

    window.open('chat.php?uid=' + uid + "&order_id=" + order_id, '_blank');

}



function verpaseoshistorico(uid, order_id) {
    window.open('historico.html?uid=' + uid + "&order_id=" + order_id, '_blank');

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

