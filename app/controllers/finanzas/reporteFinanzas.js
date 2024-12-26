$(document).ready(function () {
    $('#startDate').datetimepicker({ format: 'L' });
    $('#endDate').datetimepicker({ format: 'L' });
});


$('#dash').hide();

function dispersion() {

    // Verifica si la tabla ya está inicializada y destrúyela si es necesario
    if ($.fn.dataTable.isDataTable('#tablaDatos')) {
        $('#tablaDatos').DataTable().clear().destroy();
    }

    var total = 0;
    var total_paseador = 0;
    var total_conekta = 0;
    var total_iva = 0;
    var total_caminandog = 0;
    var total_paseos = 0;


    $('#dash').show();

    var date1 = document.getElementById('startInput').value;
    var date2 = document.getElementById('endInput').value;
    date1 = date1 + ' 00:00';
    date2 = date2 + ' 23:59';

    console.log('Start date:', date1);
    console.log('End date:', date2);

    var timestamp1 = moment(date1).format("X");
    var timestamp2 = moment(date2).format("X");
    timestamp1 = timestamp1 * 1000;
    timestamp2 = timestamp2 * 1000;

    console.log(timestamp1);
    console.log(timestamp2);


    // Inicializa la tabla DataTable y guarda la referencia
    var tabla = $('#tablaDatos').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,
        //Muestra oculta filtro
        info: true,
        responsive: true,
        layout: {
            top1Start: {
                buttons: [{
                    extend: 'collection',
                    text: 'Reportes',
                    orientation: 'landscape',
                    buttons: [
                        {
                            text: 'Copiar',
                            extend: 'copy',
                        }, {
                            extend: 'csv'
                        }, {
                            extend: 'excel'
                        }, {
                            text: 'Imprimir',
                            extend: 'print'
                        }
                    ]
                },
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
            { "targets": [10], "visible": false }
        ],
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

    // Limpia la tabla antes de agregar nuevos datos
    tabla.clear().draw();

    var db = firebase.database();
    var table = document.getElementById("tabla2");


    var ref2 = db.ref("Finanzas");

    ref2.orderByChild("time_op").startAt(timestamp1).endAt(timestamp2).on("child_added", function (snapshott) {

        var exist = snapshott.val();
        if (exist == null) {
            $('.progress-bar').css('width', 80 + '%').attr('aria-valuenow', 80);
            $('#myprogressBar').hide();
        } else {
        }
        var d = snapshott.val();
        var date = new Date(d.time_op);
        var date2 = new Date(timestamp1);
        var date3 = new Date(timestamp2);
        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        var range_times = moment(d.time_op).isBetween(timestamp1, timestamp2); // true

        if (range_times == true) {
            {
                var order = d.order_id
                var fechaa = date.toLocaleDateString(lang, options);
                var desc = d.descripcion;
                var totalF = Math.round(d.amount * 100) / 100;
                var montoPas = Math.round(d.amount_paseador * 100) / 100;
                var comConek = Math.round(d.fee * 100) / 100;
                var totalIva = Math.round(d.iva * 100) / 100;
                var montoCam = Math.round(d.monto_caminandog * 100) / 100;
                var nombre = d.nombre;
                var uid = d.uid;

                var txt = d.descripcion;
                var numb = txt.match(/\d/g);
                numb = numb.join("");
                var result;
                switch (numb.length) {
                    case 2:
                        result = numb.charAt(0) * numb.charAt(1);
                        //cell4.innerHTML = result;
                        break;
                    case 3:
                        if (numb.charAt(1) == 3 && numb.charAt(2) == 0) {
                            result = numb.charAt(0) * 1;
                            //cell4.innerHTML = result;
                        } else {
                            result = numb.charAt(0) * numb.charAt(1) * numb.charAt(2);
                            //cell4.innerHTML = result;
                        }
                        break;
                    case 4:
                        if (numb.charAt(2) == 3 && numb.charAt(3) == 0) {
                            result = numb.charAt(0) * numb.charAt(1);
                            //cell4.innerHTML = result;
                        } else {
                            result = (numb.charAt(0) + numb.charAt(1)) * numb.charAt(2) * numb.charAt(3);
                            //cell4.innerHTML = result;
                        }

                        break;
                    case 5:
                        result = (numb.charAt(0) + numb.charAt(1)) * numb.charAt(2);
                        //cell4.innerHTML = result;
                        break;
                    default:
                        //cell4.innerHTML = "algo falló";
                        result = numb.charAt(0) * numb.charAt(1) * 1;
                    //cell4.innerHTML = result;
                }
                console.log(numb + " " + d.order_id + " " + result)
                var informacionFinanzas = [
                    order,
                    fechaa,
                    desc,
                    result,
                    totalF,
                    montoPas,
                    comConek,
                    totalIva,
                    montoCam,
                    nombre,
                    uid
                ];
                tabla.row.add(informacionFinanzas).draw();


                total = total + Math.round(d.amount * 100) / 100;
                total_paseador = total_paseador + Math.round(d.amount_paseador * 100) / 100;
                total_conekta = total_conekta + Math.round(d.fee * 100) / 100;
                total_iva = total_iva + Math.round(d.iva * 100) / 100;
                total_caminandog = total_caminandog + Math.round(d.monto_caminandog * 100) / 100;
                total_paseos = total_paseos + result



                document.getElementById("tot").innerHTML = "$ " + formatMoney(Math.round(total * 100) / 100);
                document.getElementById("tot2").innerHTML = "$ " + formatMoney(Math.round(total_paseador * 100) / 100);
                document.getElementById("tot3").innerHTML = "$ " + formatMoney(Math.round(total_conekta * 100) / 100);
                document.getElementById("tot4").innerHTML = "$ " + formatMoney(Math.round(total_iva * 100) / 100);
                document.getElementById("tot5").innerHTML = "$ " + formatMoney(Math.round(total_caminandog * 100) / 100);
                document.getElementById("tot6").innerHTML = total_paseos;

              
                function formatMoney(number, decPlaces, decSep, thouSep) {
                    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
                        decSep = typeof decSep === "undefined" ? "." : decSep;
                    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
                    var sign = number < 0 ? "-" : "";
                    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
                    var j = (j = i.length) > 3 ? j % 3 : 0;

                    return sign +
                        (j ? i.substr(0, j) + thouSep : "") +
                        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
                        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
                }

                    document.getElementById("b").addEventListener("click", event => {
                    document.getElementById("x").innerText = "Result was: " + formatMoney(document.getElementById("d").value);

                });


            }

        }

    });


}
