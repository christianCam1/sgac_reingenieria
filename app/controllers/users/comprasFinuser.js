function busca_user_ultima() {

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
            { "targets": [3], "visible": false },
            { "orderData": 3, "targets": 2 }

        ],
        "order": [[3, "desc"]],
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

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var userId = getAllUrlParams().uid;
    var db = firebase.database();
    var ref = db.ref("Finanzas");

    console.log(userId)

    ref.orderByChild("uid").equalTo(userId).once("value").then(snapshot => {

        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };
        var datos = snapshot.val();


        //console.log(datos)


        for (const property in datos) {

            //console.log(d);

            var d = datos[property]

            console.log(d);
            $("#userCompra").text("Ordenes de compra del usuario "+d["nombre"]);
            if (d["time_op"] != undefined) {

                var ordid = "Sin dato"
                var nombrec = "Sin dato"
                var fchord = "Sin dato"
                var fchord_time = 0
                var descrip = "Sin dato"
                var monto = 0
                var montocam = 0

                if (d["order_id"] != undefined) {
                    ordid = d["order_id"]
                }

                if (d["nombre"] != undefined) {
                    nombrec = d["nombre"]
                }

                if (d["time_op"] != undefined) {
                    fchord = new Date(d["time_op"]);
                    fchord = fchord.toLocaleDateString(lang, options)
                    fchord_time = d["time_op"]
                }

                if (d["descripcion"] != undefined) {
                    descrip = d["descripcion"]
                }

                if (d["amount"] != undefined) {
                    monto = d["amount"]
                    monto = monto.toFixed(2)
                }

                if (d["monto_caminandog"] != undefined) {
                    montocam = d["monto_caminandog"]
                    montocam = montocam.toFixed(2)
                }

                var informacionUsuarios =
                    [
                        ordid,
                        nombrec,
                        fchord,
                        fchord_time,
                        descrip,
                        monto,
                        montocam
                    ]

                var table = $('#tablaDatos').dataTable();

                tabla.rows.add([informacionUsuarios]);
            }
        }

        tabla.draw()

    })

}

// function busca_datos_user() {

//     //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

//     var userId = getAllUrlParams().uid;
//     var db = firebase.database();
//     var ref = db.ref("Usuarios").child(userId);

//     ref.orderByChild("uid").once("value").then(snapshot => {

//         var datos = snapshot.val();

//         console.log(datos);

//         var d = datos
//         var nombrecomple = "Sin datos"

//         console.log(d["nombre"]);
//         console.log(d["apellido_Paterno"]);
//         console.log(d["apellido_Materno"]);

//         if (d["nombre"] != undefined) {
//             nombrecomple = d["nombre"]
//             if (d["apellido_Paterno"] != undefined) {
//                 nombrecomple = nombrecomple + " " + d["apellido_Paterno"];
//                 if (d["apellido_Materno"] != undefined) {
//                     nombrecomple = nombrecomple + " " + d["apellido_Materno"];
//                 }
//             }
//         }

//         //document.getElementById('nombre_comple').innerHTML = nombrecomple

//     })

// }

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

window.onload = busca_user_ultima();
window.onload = busca_datos_user();
