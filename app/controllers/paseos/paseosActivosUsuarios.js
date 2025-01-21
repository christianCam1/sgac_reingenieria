
var paseadorIDEditando = ""
var Operation_dateEditando = ""
var orderIDEditando = ""
var timestampEditando = 0
var uidEditando = ""
var nombreEditando = ""
var cantidadPaseosPaseadorConsultado = 0
var cantidadPaseosPaseadorCargados = 0
var nombreUsuarioTitulo = ""


//Funcion para bucar paseos y generar la tabla de informacion
function busca_paseos() {

    //document.getElementById("tabpausuarios").innerHTML = ""
    $('#tablaUsuarios').show();

    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    // declaracion de tabla usando DataTables
    var tabla = $('#tablaUsuarios').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        info: true,
        responsive: true,
        columnDefs: [
            { "targets": [1, 4, 9, 11], "visible": false },
            { "orderData": 9, "targets": 8 },
            { "orderData": 11, "targets": 10 },
            { "targets": 9, "type": nameType },
            { "width": "20%", "targets": 5 }
        ],
        "order": [[12, "desc"]],

        pageLength: 10
        ,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']
        ],

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

    reiniciarValoresSpinner()

    $('#carga2').show();

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    ref.orderByChild("ultima_vez").once("value").then(snapshot => {

        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };
        var datos = snapshot.val();


        for (const property in datos) {

            var d = datos[property]

            if (d["paseosActivos"] != undefined) {

                var laskeys = Object.keys(d["paseosActivos"])
                var numkeys = Object.keys(laskeys).length;
                console.log(property + " UID con Paseos Activos");
                //console.log(d["paseosActivos"]);
                //console.log(Object.keys(d["paseosActivos"]));
                console.log(numkeys);

                var uid = "Sin dato"
                var copiarUID = "Sin dato"
                var nombreUsuario = "Sin dato"
                var email = "Sin dato"
                var direccion_completa = "Sin dato"
                var celular = "Sin dato"
                var telefono = "Sin dato"
                var registro_conexión = "Sin dato"
                var registro_conexión_timestamp = 0
                var ultima_conexión = "Sin dato"
                var ultima_conexión_timestamp = 0
                var ver_fichas = "Sin dato"
                var ver_chat = "Sin dato"
                var copiar_c = "Sin dato"
                var copias_key = "Sin dato"


                if (d["uid"] == undefined || d["uid"] == "") {
                    uid = "SR : " + d["uid"];
                    copiarUid = "SR : " + d["uid"];
                } else {
                    uid = d["uid"];
                    copiarUid = '<center><button class="btn btn-primary" onclick="copyToClipboard(\'' + d["uid"] + '\')"><i class="fa-solid fa-copy"></i></button></center>';
                    ver_fichas = '<center><button class="btn btn-info" onClick="ver_pactivos(\'' + d.uid + '\')"><i class="fa-solid fa-eye"></i></button></center>';
                    ver_chat = '<center><button class="btn btn-info" onClick="ver_chat(\'' + d.uid + '\')"><i class="fa-solid fa-eye"></i></button></center>';
                }

                if (d["nombre"] != undefined) {
                    nombreUsuario = d["nombre"]
                    if (d["apellido_Paterno"] != undefined) {
                        nombreUsuario = nombreUsuario + " " + d["apellido_Paterno"];
                        if (d["apellido_Materno"] != undefined) {
                            nombreUsuario = nombreUsuario + " " + d["apellido_Materno"];
                        }
                    }
                }


                if (d["email"] != undefined) {
                    email = d["email"];
                    copiar_c = '<center><button class="btn btn-primary" onclick="copyToClipboard(\'' + d["email"] + '\')"><i class="fa-solid fa-copy"></i></button></center>'
                }

                if (d["direccion"] != undefined) {
                    direccion_completa = d["direccion"]
                }

                if (d["telefono1"] != undefined) {
                    celular = d["telefono1"]
                }

                if (d["telefono2"] != undefined) {
                    telefono = d["telefono2"]
                }

                if (d["creation_date"] != undefined) {
                    registro_conexión = new Date(d["creation_date"]);
                    registro_conexión = registro_conexión.toLocaleDateString(lang, options)
                    registro_conexión_timestamp = d["creation_date"]
                }

                if (d["ultima_vez"] != undefined) {
                    ultima_conexión = new Date(d["ultima_vez"]);
                    ultima_conexión = ultima_conexión.toLocaleDateString(lang, options)
                    ultima_conexión_timestamp = d["ultima_vez"]
                }

                if (laskeys != undefined) {
                    copiar_key = '<center><button class="btn btn-primary" onclick="copyToClipboard(\'' + laskeys + '\')"><i class="fa-solid fa-copy"></i></button></center>'
                }

                //Asigna los valores al arreglo
                var informacionUsuarios = [
                        uid,
                        copiarUid,
                        nombreUsuario,
                        email,
                        copiar_c,
                        direccion_completa,
                        celular,
                        telefono,
                        registro_conexión,
                        registro_conexión_timestamp,
                        ultima_conexión,
                        ultima_conexión_timestamp,
                        numkeys,
                        copiar_key,
                        ver_fichas,
                        ver_chat
                    ]

                // Agrega los elementos del arreglo a las filas de la tabla
                tabla.rows.add([informacionUsuarios]);

            }
            else {


                console.log("no tiene paseos activos")

            }

        }
        //Dibuja la tabla
        tabla.draw()
        $("#loadingOverlay").hide();

    }
    )
}

function reiniciarValoresSpinner() {

    cantidadPaseosPaseadorConsultado = 0
    cantidadPaseosPaseadorCargados = 0
    //document.getElementById("paseos").innerHTML = ""

}

window.onload = busca_paseos;


// Funcion para copiar elementos
function copyToClipboard(val) {

    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
    });
    Toast.fire({
        icon: 'success',
        title: 'Copiado'
    });
}

function ver_pactivos(uid) {
    window.open('fichasPaseos.php?uid=' + uid, '_blank');
}

function ver_chat(uid) {
    window.open('chatCaminandog.php?uid=' + uid, '_blank');
}

