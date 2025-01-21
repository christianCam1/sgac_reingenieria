busca_paseos2()

$(function () {
    $('#datetimepicker1').datetimepicker({

        format: 'MM/DD/YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),


    });

});

function busca_paseos2() {
    var started = true

    var tabla = $('#tablaDatos').DataTable({
        search: { regex: false },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,
        //Muestra oculta filtro
        info: true,
        layout: {
            top1Start: {
                buttons: [{
                    extend: 'collection',
                    text: 'Reportes',
                    orientation: 'landscape',
                    buttons: [
                        {
                            extend: 'excel'
                        }, {
                            text: 'Imprimir',
                            extend: 'print'
                        },
                    ]
                }
                ]
            }
        },
        columnDefs: [
            { "targets": [6], "visible": false },
            { "targets": [7], "visible": false },
            { "orderData": 6, "targets": 4 },
            { "orderData": 7, "targets": 5 },
            { orderable: false, targets: [0, 1, 2, 3] },
        ],
        "order": [[6, "desc"]],
        pageLength: 100,
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
    var ref = db.ref("RecuperandogBbva");


    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    ref.orderByChild("timestamp").once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };


        var datos = snapshot.val();


        for (const property in datos) {


            var d = datos[property]
            //console.log(property)
            var email = d["email"];
            var celular = d["celular"];
            var poliza = d["poliza"];
            var timestamp = "Sin dato";
            var timestampEntrega = "Sin dato";
            var timestampT = d["timestamp"];
            var timestampEntregaT = "0";
            var nombre = d["nombre"] + " " + d["apPaterno"] + " " + d["apMaterno"];


            if (d["timestamp"] != undefined) {
                timestamp = new Date(d["timestamp"]);
                timestamp = timestamp.toLocaleDateString(lang, options)
            }
            if (d["timestampEntrega"] != undefined) {
                timestampEntrega = new Date(d["timestampEntrega"]);
                timestampEntrega = timestampEntrega.toLocaleDateString(lang, options)
            }

            if (d["timestampEntrega"] != undefined) {
                timestampEntregaT = d["timestampEntrega"]
            }

            if (d["email"] != undefined) { email = d["email"] }

            if (d["timestampEntrega"] == undefined) { timestampEntrega = '<center><button class="btn btn-app bg-primary" onclick="asignarFecha(\'' + property + '\')">Fijar Fecha</button></center>' }


            var informacionUsuarios = [
                    nombre,
                    email,
                    celular,
                    poliza,
                    timestamp,
                    timestampEntrega,
                    timestampT,
                    timestampEntregaT
                ];

            var table = $('#tablaDatos').dataTable();

            tabla.rows.add([informacionUsuarios]);

        }
        if (started) {
            timeout()
            started = false
        }

        tabla.draw()


    })
}


function asignarFecha(valueToSend) {

    var valuT = valueToSend
    console.log(valuT)

    $('#modal-compras').modal('show');

    document.getElementById("guardar").addEventListener("click", function () {
        Swal.fire({
            title: '¿Está seguro de asignar esta fecha?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si deseo asignarla'
        }).then((result) => {
            if (result.isConfirmed) {
                asignarFechas();
                Swal.fire({
                    title: 'Fechas cambiada',
                    icon: 'success'
                }).then(() => {
                    location.reload(); // Recarga la página
                });
            }
        });

        function asignarFechas() {

            var fecha1 = null
            fecha1 = $("#datetimepicker1").find("input").val();
            console.log(fecha1);
            var timestamp1 = moment(fecha1).format("X");
            timestamp1 = timestamp1 * 1000;
            console.log(timestamp1);
            console.log(valuT);  

            var addMessage2 = firebase.functions().httpsCallable('SetFechaBBVAEntrega');
            addMessage2({ fechaEntrega: timestamp1, id: valuT }).then(function (result) {
                if (result.data[0] === "correcto") {
                    // var table = document.getElementById("tabla");
                    // table.innerHTML = "";
                    // window.location.reload();
                    // //busca_paseos2()
                    // document.getElementById('id01').style.display = 'none'
                    valuT = ""
                } else {
                    // document.getElementById('id01').style.display = 'none'
                    alert("No se envio el formulario correctamente, intenta nuevamente")
                }
            });

        }
    });




}

function timeout() {
    setTimeout(function () {



        // document.getElementById("loader").style.display = "none";
        // document.getElementById("myDiv").style.display = "block";

    }, 3000);
}

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('tabla');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('ReportePlaquitasBBVA.' + (type || 'xlsx')));
}

