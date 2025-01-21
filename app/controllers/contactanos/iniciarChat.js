var UsuariosPorTimestamp = [];
var primeraVez = true;
var total = 0
var actual = 0
var progreso = 0
const iconoChatVacio = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>';

function busca_user_ultima() {


    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

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
        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,//Muestra oculta filtro
        info: true,
        columnDefs: [
            { "targets": [0], "visible": false },
            { "targets": [5], "visible": false },
            { "orderData": 5, "targets": 4 },
            { "targets": 5, "type": nameType }
        ],
        order: [[5, "desc"]],
        processing: true,
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
    var ref = db.ref("Usuarios");

    ref.once('value').then((snapshot) => {

        let lang = 'es-US'
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        var datos = snapshot.val();


        for (const property in datos) {

            var d = datos[property]

            var uid = "Sin dato"
            var nombre = "Sin dato"
            var email = "Sin dato"
            var telefono = "Sin dato"
            var ultima_conexion = "Sin dato"
            var ultima_conexion_timestamp = "Sin dato"

            if (d["uid"] != undefined) { uid = d["uid"]; }

            if (d["nombre"] != undefined) { nombre = d["nombre"] + " " + d["apellido_Paterno"] + " " + d["apellido_Materno"]; }

            if (d["email"] != undefined) { email = d["email"] }

            if (d["telefono1"] != undefined) { telefono = d["telefono1"] }

            if (d["ultima_vez"] != undefined) {
                ultima_conexion = new Date(d["ultima_vez"]);
                ultima_conexion = ultima_conexion.toLocaleDateString(lang, options)
                ultima_conexion_timestamp = d["ultima_vez"]

            }

            var informacionUsuarios = [uid, nombre, email, telefono, ultima_conexion, ultima_conexion_timestamp, '<center><button class="btn btn-primary" onclick="ver_chat(\'' + d.uid + '\')">  <i class="fa-solid fa-comment"></i> </button></center>']
            var table = $('#tablaDatos').dataTable();

            tabla.rows.add([informacionUsuarios])


            $('#coverSuave').hide();

        }

        tabla.draw()
        $("#loadingOverlay").hide();
    });

    

}


function ver_chat(uid) {

    window.open('chatCaminandog.php?uid=' + uid, '_blank');

}


window.onload = busca_user_ultima();
