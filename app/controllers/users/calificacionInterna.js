busca_paseos2()
busca_paseos3()


function busca_paseos2() {
    var started = true

    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    var tabla = $('#table_table_2').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        info: true,
        columnDefs: [
            { "orderData": 4, "targets": 4 },
            { "orderData": 3, "targets": 3 },
            { orderable: false, targets: [0, 1, 2] },
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

    var db = firebase.database();
    var ref = db.ref("Paseadores");


    var table = document.getElementById("tabla");





    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    ref.orderByChild("calificacion").once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };



        var datos = snapshot.val();


        for (const property in datos) {

            var d = datos[property]
            var uid = "Sin dato"
            var nombre = d["nombre"] + " " + d["apellidopa"] + " " + d["apellidoma"]
            var califInterna = d["calificacionInterna"]
            var calif = d["calificacion_final"]

            if (d["idPaseador"] == undefined || d["idPaseador"] == "") {
                uid = "SR : " + uid;
                copiarUid = "SR : " + uid;
            } else {
                uid = d.idPaseador
            }

            //console.log("prop "+property+ " "+uid)

            calif = Math.round(calif * 100) / 100;

            let nivel = "";
            if (califInterna === undefined) {
                califInterna = "sin calificacion";
            } else {
                if (califInterna < 48) {
                    nivel = " sin nivel";
                } else if (califInterna >= 48 && califInterna < 300) {
                    nivel = " Plata";
                } else if (califInterna >= 300 && califInterna < 452) {
                    nivel = "Oro";
                } else if (califInterna >= 452) {
                    nivel = " Platino";
                }
            }
            var informacionUsuarios =

                [
                    uid,
                    nombre,
                    nivel,
                    califInterna,
                    calif,

                ]
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

function busca_paseos3() {
    var started = true

    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    var tabla = $('#table_table_3').DataTable({
        search: { regex: false },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,//Muestra oculta filtro
        info: true,
        columnDefs: [
            { "orderData": 3, "targets": 3 },
            { orderable: false, targets: [0, 1, , 2] },
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

    var db = firebase.database();
    var ref = db.ref("HistoryCalifPas").child("Diciembre");


    var table = document.getElementById("tabla33");
    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    ref.orderByChild("calificacion").once("value").then(snapshot => {
        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };
        var datos = snapshot.val();


        for (const property in datos) {



            var d = datos[property]
            //console.log(property)
            var uid = d["uid"]
            var nombre = d["nombre"]
            var califInterna = d["calificacion"]

            let nivel = "";
            if (califInterna === undefined) {
                califInterna = "sin calificacion";
            } else {
                if (califInterna < 48) {
                    nivel = " sin nivel";
                } else if (califInterna >= 48 && califInterna < 300) {
                    nivel = " Plata";
                } else if (califInterna >= 300 && califInterna < 452) {
                    nivel = "Oro";
                } else if (califInterna >= 452) {
                    nivel = " Platino";
                }
            }

            var informacionUsuarios =

                [
                    uid,
                    nombre,
                    nivel,
                    califInterna,


                ]
            //var table = $('#tablaDatos').dataTable();


            tabla.rows.add([informacionUsuarios]);



        }
        if (started) {
            // timeout()
            started = false
        }

        tabla.draw()


    })
}

// function busca_paseos() {

//     // var x = document.getElementById("id01");
//     // x.style.display = "none";


//     var functions = firebase.functions();

//     let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
//     let options = { hour: "numeric", minute: "numeric" };

//     var db = firebase.database();
//     var ref = db.ref("HistoryCalifPas").child("Diciembre");

//     var table = document.getElementById("tabla33");

//     //limpia la tabla
//     table.innerHTML = "";

//     var started = true


//     var query = "no_asignado";
//     //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

//     ref.orderByChild("calificacion").once("value", function (snapshot) {
//         //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
//         var exist = snapshot.val();
//         //console.log(exist);
//         if (exist == null) {
//             document.getElementById("demo").innerHTML = "No Hay Paseos Agendados";

//         } else {


//             snapshot.forEach(function (child) {


//                 d = child.val();
//                 var date = new Date(d.timestamp);
//                 var txt2 = date.toLocaleDateString(lang, options);
//                 var dateEntrega = new Date(d.timestampEntrega);
//                 var valueToSend = child.key

//                 //console.log("vTS"+d.id)

//                 var row = table.insertRow(0);
//                 var cell1 = row.insertCell(0);
//                 var cell2 = row.insertCell(1);
//                 var cell3 = row.insertCell(2);
//                 var cell4 = row.insertCell(3);

//                 var califInterna = d.calificacion

//                 let nivel = "";
//                 if (califInterna === undefined) {
//                     califInterna = "sin calificacion";
//                 } else {
//                     if (califInterna < 48) {
//                         nivel = " sin nivel";
//                     } else if (califInterna >= 48 && califInterna < 232) {
//                         nivel = " Plata";
//                     } else if (califInterna >= 232 && califInterna < 434) {
//                         nivel = "Oro";
//                     } else if (califInterna >= 434) {
//                         nivel = " Platino";
//                     }
//                 }


//                 // asigna a las celdas el valir del Child especificado
//                 cell1.innerHTML = d.uid;
//                 cell2.innerHTML = d.nombre;
//                 cell3.innerHTML = nivel;
//                 cell4.innerHTML = d.calificacion


//             });



//         }

//         if (started) {
//             // timeout()
//             started = false
//         }
//     });

// }



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
        XLSX.writeFile(wb, fn || ('ReportePlaquitasCompradas.' + (type || 'xlsx')));
}
