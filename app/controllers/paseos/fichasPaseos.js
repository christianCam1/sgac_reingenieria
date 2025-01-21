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

            { "targets": [2], "visible": false },
            { "orderData": 2, "targets": 1 }

        ],
        "order": [[2, "asc"]],
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

    var actual = 0;
    var userId = getAllUrlParams().uid;
    var db = firebase.database();
    var ref = db.ref("Paseos_usuarios").child(userId);


    ref.orderByChild("order_i").once("value").then(snapshot => {

        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };
        var datos = snapshot.val();



        for (const property in datos) {

            console.log(property);

            var d = datos[property]
            var dd = Object.values(d["estatusPaseo"])
            var statusp = dd

            console.log(d["inicio"]);
            console.log(d["estatusPaseo"]);
            console.log(statusp);

            if (statusp != "terminado") {

                var order_id = "Sin dato"
                var fechapa = "Sin dato"
                var fechapa_time = "Sin dato"
                var categoria = "Sin dato"
                var teimpopa = "Sin dato"
                var nomperros = "Sin dato"
                var descrip = "Sin dato"
                var idpase = "Sin dato"

                if (d["order_id"] != undefined) {
                    order_id = d["order_id"]
                }

                if (d["timestamp"] != undefined) {
                    fechapa = new Date(d["timestamp"]);
                    fechapa = fechapa.toLocaleDateString(lang, options)
                    fechapa_time = d["timestamp"]
                }

                if (d["categoria"] != undefined) {
                    categoria = d["categoria"]
                }

                if (d["tiempo_paseo"] != undefined) {
                    if (d["tiempo_paseo"] == 1) {
                        teimpopa = "1 Hora"
                    } else if (d["tiempo_paseo"] == 2) {
                        teimpopa = "2 Horas"
                    } else if (d["tiempo_paseo"] == 0.5) {
                        teimpopa = "30 Minutos"
                    } else if (d["tiempo_paseo"] == 1.5) {
                        teimpopa = "90 Minutos"
                    }
                }

                if (d["perrosNombre"] != undefined) {
                    nomperros = d["perrosNombre"]
                }

                if (d["descripcion"] != undefined) {
                    descrip = d["descripcion"]
                }

                if (d["id_paseador"] != undefined) {
                    idpase = d["id_paseador"]
                }

                var informacionUsuarios =[
                        order_id,
                        fechapa,
                        fechapa_time,
                        statusp,
                        categoria,
                        teimpopa,
                        nomperros,
                        descrip,
                        idpase
                    ]

                tabla.rows.add([informacionUsuarios]);
            }
        }

        // Dibuja la tabla
        tabla.draw();

        //Oculta el overlay
        $("#loadingOverlay").hide();

    })

}

function busca_datos_user() {

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var userId = getAllUrlParams().uid;
    var db = firebase.database();
    var ref = db.ref("Usuarios").child(userId);

    ref.orderByChild("uid").once("value").then(snapshot => {

        var datos = snapshot.val();

        console.log(datos);

        var d = datos
        var nombrecomple = "Sin datos"

        console.log(d["nombre"]);
        console.log(d["apellido_Paterno"]);
        console.log(d["apellido_Materno"]);

        if (d["nombre"] != undefined) {
            nombrecomple = d["nombre"]
            if (d["apellido_Paterno"] != undefined) {
                nombrecomple = nombrecomple + " " + d["apellido_Paterno"];
                if (d["apellido_Materno"] != undefined) {
                    nombrecomple = nombrecomple + " " + d["apellido_Materno"];
                }
            }
        }

        document.getElementById('nombre_comple').innerHTML = "Paseos activos de " + nombrecomple;

    })

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



window.onload = busca_user_ultima();
window.onload = busca_datos_user();
