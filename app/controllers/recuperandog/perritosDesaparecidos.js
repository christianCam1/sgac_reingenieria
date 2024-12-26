var tabla = ""

function busca_user_ultima() {


    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    tabla = $('#tablaDatos').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        info: true,
        pageLength: 10,
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
            { "targets": [0], "visible": false },
            { "targets": [2], "visible": false },
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
    var ref = db.ref("RecuperandogQR");

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    ref.orderByChild("numero_codigo").once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };



        var datos = snapshot.val();

        for (const property in datos) {

            var d = datos[property]
            var idPerro = "Sin dato"
            var uid = "Sin dato"
            var codigo = "Sin dato"
            var fecha_vencimiento = "Sin dato"
            var vencimiento_timestamp = "Sin dato"
            var reportado = "false"

            if (d["idPerro"] != undefined) { idPerro = d["idPerro"] }

            if (d["uid"] != undefined) { uid = d["uid"] }

            if (d["numero_codigo"] != undefined) { codigo = d["numero_codigo"] }

            if (d["fechaVencimiento"] != undefined) {
                fecha_vencimiento = new Date(d["fechaVencimiento"]);
                fecha_vencimiento = fecha_vencimiento.toLocaleDateString(lang, options)
                vencimiento_timestamp = d["fechaVencimiento"]

            }


            if (d["reportado"] != undefined) { reportado = d["reportado"] }


            if (reportado == "true") {
                consulta_perro(idPerro, uid, codigo, fecha_vencimiento, vencimiento_timestamp)

            }
        }
    })

}


function consulta_perro(idPerro, uid, codigo, fecha_vencimiento, vencimiento_timestamp) {

    var db = firebase.database();

    var refperros = db.ref("Perros").child(uid);

    refperros.orderByChild("idPerro").equalTo(idPerro).once("value").then(snapshot => {




        var datos = snapshot.val();

        for (const property in datos) {

            var d = datos[property]
            var nombre_perro = d["nombre"]
            poblar_tabla(idPerro, uid, codigo, fecha_vencimiento, vencimiento_timestamp, nombre_perro)

        }



    })


}

function poblar_tabla(idPerro, uid, codigo, fecha_vencimiento, vencimiento_timestamp, nombre_perro) {

    var db = firebase.database();

    var refUsuarios = db.ref("Usuarios");

    refUsuarios.orderByChild("uid").equalTo(uid).once("value").then(snapshot => {

        var datos = snapshot.val();

        for (const property in datos) {

            var d = datos[property]
            var nombre = d["nombre"] + " " + d["apellido_Paterno"] + " " + d["apellido_Materno"]
            var telefono = "Sin dato"
            var email = "Sin dato"

            if (d["telefono1"] != undefined) { telefono = d["telefono1"] }

            if (d["email"] != undefined) { email = d["email"] }


            var informacionUsuarios =

                [

                    idPerro,
                    nombre_perro,
                    uid,
                    nombre,
                    telefono,
                    email,
                    codigo,
                    fecha_vencimiento,
                    vencimiento_timestamp

                ]



            var table = $('#tablaDatos').dataTable();


            tabla.rows.add([informacionUsuarios]);
        }
        tabla.draw()
        $("#loadingOverlay").hide();
    })

}

window.onload = busca_user_ultima();