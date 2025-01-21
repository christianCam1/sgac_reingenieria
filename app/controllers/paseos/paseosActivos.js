var paseadorIDEditando = ""
var Operation_dateEditando = ""
var orderIDEditando = ""
var timestampEditando = 0
var uidEditando = ""
var nombreEditando = ""
var cantidadPaseosPaseadorConsultado = 0
var cantidadPaseosPaseadorCargados = 0

var nombrePaseadorTitulo = ""

$(function () {
    // Configurar datetimepicker
    $('#datetimepicker1').datetimepicker({
        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: 0,
    });
});


document.getElementById("usuario").innerHTML = '<a class="nav-item nav-link active" onclick="busca_paseos()" id="usuarios">Regresar</a>';

function busca_paseos() {

    // document.getElementById("paseador").innerHTML = ""

    $('#tabla_paseost').hide();
    $('#tabla_paseost').DataTable().clear().destroy();
    document.getElementById("usuario").style.display = "none";

    $('#tablaPaseadores').show();

    var tabla = $('#tablaPaseadores').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,//Muestra oculta filtro        
        responsive: true,
        info: true,
        columnDefs: [
            { "targets": [9], "visible": false },
            { "orderData": 9, "targets": 8 },
        ],
        "order": [[8, "desc"]],
        pageLength: 20,
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

    reiniciarValoresSpinner()

    $('#carga2').show();

    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    var actual = 0;

    ref.orderByChild("ultima_vez_inicio").once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };



        var datos = snapshot.val();

        for (const property in datos) {

            var d = datos[property]

            if (d["paseosActivos"] != undefined) {

                var nombrePaseador = "Sin dato"
                var uid = "Sin dato"
                var copiarUID = "Sin dato"
                var email = "Sin dato"
                var estatus = "Sin dato"
                var num_perros = "Sin dato"
                var categoria = "Sin dato"
                var celular = "Sin dato"
                var telefono = "Sin dato"
                var ultima_conexión = "Sin dato"
                var ultima_conexión_timestamp = 0
                var version = "Sin dato"
                var paseos = "Sin dato"



                if (d["nombre"] != undefined) {

                    nombrePaseador = d["nombre"];

                    if (d["apellidopa"] != undefined) {

                        nombrePaseador = nombrePaseador + " " + d["apellidopa"];

                        if (d["apellidoma"] != undefined) {

                            nombrePaseador = nombrePaseador + " " + d["apellidoma"];

                        }
                    }
                }

                if (d["idPaseador"] == undefined || d["idPaseador"] == "") { uid = "SR : " + d["idPaseador"]; copiarUid = "SR : " + d["idPaseador"]; } else {
                    
                    uid = d["idPaseador"]; copiarUid = '<center><button class="btn btn-primary" onclick="copyToClipboard(\'' + d["idPaseador"] + '\')"><i class="fa-solid fa-copy"></i></button></center>';
                    paseos = '<button class="btn btn-info" onclick="verpaseos(\'' + d["idPaseador"] + '\',\'' + nombrePaseador + '\')"><i class="fa-solid fa-eye"></i> Ver Paseos</button>'
                
                }

                if (d["email"] != undefined) { email = d["email"] }

                if (d["estatus"] != undefined) {

                    if (d["estatus"] == 0) {

                        estatus = "Disponible";
                        
                    } else {

                        estatus = "No disponible";

                    }

                }

                if (d["cantidadPerros"] != undefined) { num_perros = d["cantidadPerros"] }

                if (d["categoria"] != undefined) { categoria = d["categoria"] }

                if (d["celular"] != undefined) { celular = d["celular"] }

                if (d["telefono"] != undefined) { telefono = d["telefono"] }

                if (d["ultima_vez_inicio"] != undefined) {

                    ultima_conexión = new Date(d["ultima_vez_inicio"]);
                    ultima_conexión = ultima_conexión.toLocaleDateString(lang, options)
                    ultima_conexión_timestamp = d["ultima_vez_inicio"];

                }

                if (d["through"] != undefined) { version = d["through"] }

                var informacionUsuarios = [
                        nombrePaseador,
                        copiarUid,
                        email,
                        estatus,
                        num_perros,
                        categoria,
                        celular,
                        telefono,
                        ultima_conexión,
                        ultima_conexión_timestamp,
                        version,
                        paseos
                    ];


                tabla.rows.add([informacionUsuarios]);

            }
            else {
                console.log("no tiene paseos activos");
            }
        }

        // Dibuja la tabla
        tabla.draw();

        // Oculta el overlay
        $("#loadingOverlay").hide();
    })

}



function reiniciarValoresSpinner() {

    cantidadPaseosPaseadorConsultado = 0
    cantidadPaseosPaseadorCargados = 0
    // document.getElementById("paseos").innerHTML = ""


}

window.onload = busca_paseos;

function verpaseos(idPaseador, nombrePaseador) {


    $("#loadingOverlay").show();

    nombrePaseadorTitulo = nombrePaseador

    /*
    
    
        $('#tablaPaseadores').(".dataTables_info").hide();
     $('#tablaPaseadores').(".dataTables_paginate").hide();
     $('#tablaPaseadores').(".dataTables_filter").hide();
     $('#tablaPaseadores').(".dataTables_length").hide();
    */
    $('#tablaPaseadores').hide();
    $('#tablaPaseadores').DataTable().clear().destroy();
    $('#tabla_paseost').DataTable().clear().destroy();

    $('#tabla_paseost').show();
    document.getElementById("usuario").style.display = "block";
    // document.getElementById("paseador").innerHTML = "Paseos de " + nombrePaseadorTitulo



    var tabla = $('#tabla_paseost').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,//Muestra oculta filtro
        responsive: true,
        info: true,
        columnDefs: [
            { "targets": [5], "visible": false },
            { "orderData": 5, "targets": 4 },
            { "width": "15%", "targets": 4 },
            { "width": "25%", "targets": 9 },
        ],
        "order": [[5, "desc"]],
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

    var table = document.getElementById("tabla_paseos");

    //limpia la tabla
    // table.innerHTML = "";


    var db = firebase.database();
    var ref = db.ref("Paseadores");


    reiniciarValoresSpinner()


    var paseadorRef = ref.child(idPaseador).child("paseosActivos");



    paseadorRef.orderByChild("operation_date").once("value", function (snapshot) {


        const numberOfChildren = snapshot.numChildren()
        cantidadPaseosPaseadorConsultado = snapshot.numChildren();




        snapshot.forEach(function (data) {



            var d = data.val();


            obtenerDirección(d.uid, d.nombre, d.categoria, d.order_id, d.operation_date, d.tiempo_paseo, d.num_perros, d.estatus, idPaseador, d.timestamp, d.perrosNombre, d.timestamp);



        });


    });



}



function obtenerDirección(uid, nombre, categoriaR, order_id, operation_date, tiempo_paseoR, num_perros, estatus, idPaseador, timestamp, perrosNombre, timestamp) {

    var tabla = $('#tabla_paseost').DataTable();

    var db = firebase.database();
    var ref = db.ref("Paseos_usuarios").child(uid);

    let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

    ref.child(order_id).once("value", function (snapshot) {
        var datos = snapshot.val();

        var nombre_usuario = nombre || "Sin dato";
        var uidUsuario = '<center><button class="btn btn-primary" onclick="copyToClipboard(\'' + uid + '\')"><i class="fa-solid fa-copy"></i></button></center>';
        var order_id_dentro = '<center><button class="btn btn-primary" onclick="copyToClipboard(\'' + order_id + '\')"><i class="fa-solid fa-copy"></i></button></center>';
        var categoria = categoriaR || "Sin dato";
        var fecha = "Sin dato";
        var fecha_timestamp = timestamp || 0;
        var tiempo_paseo = "Sin dato";
        var num_perro = num_perros || "Sin dato";
        var nombre_perro = perrosNombre || "Sin dato";
        var direccion = "Sin dato";
        var ver = "Sin dato";
        var cambiar_paseador = "Sin dato";
        var cambiar_fecha = "Sin dato";
        var cambiar_ubicacion = "Sin dato";
        var chat = "Sin dato";
        var reset_paseo = "Sin dato";
        var terminar_paseo = "Sin dato";
        var descripcion = datos?.descripcion || "Sin dato";
        var inicio = datos?.inicio;
        var eliminarPaseo = "Sin dato";
       
        if (datos?.direccion) {
            direccion = datos.direccion + ' <button class="btn btn-info" onclick="abrirMapa(\'' + uid + '\',\'' + order_id + '\')"><i class="fa-solid fa-location-dot"></i></button>';
        }

        if (timestamp) {
            fecha = new Date(timestamp).toLocaleDateString(lang, options);
            fecha_timestamp = timestamp;
        }

        if (tiempo_paseoR) {
            if (tiempo_paseoR == 1) {
                tiempo_paseo = "1 Hora";
            } else if (tiempo_paseoR == 2) {
                tiempo_paseo = "2 Horas";
            } else if (tiempo_paseoR == 0.5) {
                tiempo_paseo = "30 Minutos";
            } else if (tiempo_paseoR == 1.5) {
                tiempo_paseo = "90 Minutos";
            }
        }

        console.log("estatus " + estatus);
        console.log(inicio);
        if (estatus == "agendado") {
            ver = '<center><button class="btn btn-info btn-lg" onclick="mostrarTracking(\'' + uid + '\',\'' + order_id + '\')"><i class="fa-solid fa-location-dot"></i></button></center>';
            cambiar_paseador = '<center><button class="btn btn-success btn-lg" onclick="asignarPaseador(\'' + idPaseador + '\',\'' + categoria + '\',\'' + estatus + '\',\'' + nombre + '\',\'' + num_perros + '\',\'' + operation_date + '\',\'' + order_id + '\',\'' + tiempo_paseoR + '\',\'' + timestamp + '\',\'' + uid + '\',\'' + perrosNombre + '\',\'' + descripcion + '\')"><i class="fas fa-edit"></i></button></center>';
            cambiar_fecha = '<center><button class="btn btn-success btn-lg" onclick="guardar_variables(\'' + idPaseador + '\',\'' + operation_date + '\',\'' + order_id + '\',\'' + timestamp + '\',\'' + uid + '\',\'' + nombre + '\')"><i class="fas fa-edit"></i></button></center>';
            cambiar_ubicacion = '<center><button class="btn btn-success btn-lg" onclick="cambiar_ubicacion(\'' + order_id + '\',\'' + datos.latitud + '\',\'' + datos.longitud + '\',\'' + uid + '\')"><i class="fas fa-edit"></i></button></center>';
            chat = '<center><button class="btn btn-info btn-lg" onclick="mostrarChat(\'' + uid + '\',\'' + order_id + '\')"><i class="fa-solid fa-message"></i></button></center>';
            reset_paseo = 'Agendado';
        } else {
            ver = '<center><button class="btn btn-info btn-lg" onclick="mostrarTracking(\'' + uid + '\',\'' + order_id + '\')"><i class="fa-solid fa-location-dot"></i></button></center>';
            cambiar_paseador = 'En transcurso';
            cambiar_fecha = 'En transcurso';
            chat = '<center><button class="btn btn-info btn-lg" onclick="mostrarChat(\'' + uid + '\',\'' + order_id + '\')"><i class="fa-solid fa-message"></i></button></center>';
            reset_paseo = '<center><button class="btn btn-primary btn-lg" onclick="resetPaseoWeb(\'' + order_id + '\',\'' + idPaseador + '\',\'' + num_perros + '\',\'' + categoria + '\',\'' + uid + '\',\'' + nombre + '\',\'' + operation_date + '\',\'' + tiempo_paseo + '\',\'' + estatus + '\',\'' + timestamp + '\',\'' + perrosNombre + '\')"><i class="fa-solid fa-calendar"></i></button></center>';
        }

        if (!inicio) {
            terminar_paseo = 'Paseo no iniciado';
        } else {
            terminar_paseo = '<center><button class="btn btn-warning btn-lg" onclick="terminarPaseoWeb(\'' + order_id + '\',\'' + idPaseador + '\',\'' + num_perros + '\',\'' + categoria + '\',\'' + uid + '\',\'' + nombre + '\',\'' + operation_date + '\',\'' + tiempo_paseo + '\',\'' + estatus + '\',\'' + timestamp + '\',\'' + perrosNombre + '\')"><i class="fa-solid fa-flag-checkered"></i></button></center>';
        }

        eliminarPaseo = '<center><button class="btn btn-danger btn-lg" onclick="eliminar_paseo(\'' + idPaseador + '\',\'' + uid + '\',\'' + order_id + '\')"><i class="fas fa-trash"></i></button></center>';

        var informacionUsuarios = [
            nombre_usuario,
            uidUsuario,
            order_id_dentro,
            categoria,
            fecha,
            fecha_timestamp,
            tiempo_paseo,
            num_perro,
            nombre_perro,
            direccion,
            ver,
            cambiar_paseador,
            cambiar_fecha,
            cambiar_ubicacion,
            chat,
            reset_paseo,
            terminar_paseo,
            eliminarPaseo
        ];

        tabla.row.add(informacionUsuarios).draw();
        $("#loadingOverlay").hide();

        cantidadPaseosPaseadorCargados++;
        var porcentaje = (100 / cantidadPaseosPaseadorConsultado) * cantidadPaseosPaseadorCargados;
        porcentaje = parseInt(porcentaje);
        document.getElementById("paseos").innerHTML = porcentaje + "%";

        if (cantidadPaseosPaseadorCargados == cantidadPaseosPaseadorConsultado) {
            tabla.draw();
            $("#loadingOverlay").hide();
        }

    });
    $("#loadingOverlay").hide();
}



function cambiar_ubicacion(order_id, latitud, longitud, uid) {

    window.open('cambiarDireccion.php?latitud=' + latitud + "&longitud=" + longitud + "&order_id=" + order_id + "&fuente=paseos" + "&uid=" + uid, '_blank');
}

function eliminar_paseo(id_paseador, id_usuario, id_paseo) {

    Swal.fire({
        title: '¿Estás seguro que quieres eliminar este paseo?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo eliminarlo'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarPaseo(); 
            Swal.fire({
                title: 'Paseo eliminado correctamentee',
                icon: 'success'
            }).then(() => {
                location.reload(); // Recarga la página
            });
        }
    });

    //var r = confirm("¿Estas seguro que quieres eliminar este paseo?");

    function eliminarPaseo(){
        var db = firebase.database();
        var Paseos_usuarios = db.ref("Paseos_usuarios").child(id_usuario).child(id_paseo);
        var Usuarios = db.ref("Usuarios").child(id_usuario).child("paseosActivos").child(id_paseo);
        var Paseadores = db.ref("Paseadores").child(id_paseador).child("paseosActivos").child(id_paseo);
        var Paseos_paseadores = db.ref("Paseos_paseadores").child(id_paseador).child(id_paseo);

        Paseos_usuarios.remove().then(function () {

            Usuarios.remove().then(function () {

                Paseadores.remove().then(function () {

                    Paseos_paseadores.remove().then(function () {

                        var key = db.ref("cambios_ordenes").push().getKey();
                        var agendadosModificaciones = db.ref("cambios_ordenes");
                        var currentUID = firebase.auth().currentUser.uid;


                        agendadosModificaciones.child(key).update({

                            id_orden: id_paseo,
                            uid: currentUID,
                            timestamp: firebase.database.ServerValue.TIMESTAMP,
                            cambio: "Eliminar paseo",
                            inicial: "Paseador: " + id_paseador + " Usuario: " + id_usuario,
                            final: ""

                        })

                        $('#carga2').hide();

                        //alert("Paseo Eliminado correctamente")
                        verpaseos(id_paseador, nombrePaseadorTitulo)



                    }).catch(function (error) {

                    });;

                }).catch(function (error) {


                });;

            }).catch(function (error) {


            });;

        }).catch(function (error) {


        });;
    }


}


function resetPaseoWeb(order_id, paseador_id, num_perros, categoria, uid, nombre, operation_date, tiempo_paseo, estatus, timestamp, perrosNombre) {

    Swal.fire({
        title: '¿Estás seguro de agendar de nuevo este paseo?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo agendar'
    }).then((result) => {
        if (result.isConfirmed) {
            agendarPaseo(); 
            Swal.fire({
                title: 'El paseo regreso al estatus de agendado correctamente',
                icon: 'success'
            }).then(() => {
                location.reload(); // Recarga la página
            });
        }
    });

    //var r = confirm("¿Estas seguro de agendar de nuevo este paseo?");
    reiniciarValoresSpinner()
    function agendarPaseo(){
        //alert("exito");
        var table = document.getElementById("tabla_paseos");
        table.innerHTML = "";

        var addMessage2 = firebase.functions().httpsCallable('resetPaseos');
        addMessage2({ uid: paseador_id, ord: order_id, num_perros: num_perros, categoria: categoria, uidUsuario: uid }).then(function (result) {
            console.log('respuesta ' + result.data)

            $('#carga2').hide();
            //alert("El paseo regreso al estatus de agendado correctamente")
            verpaseos(paseador_id, nombrePaseadorTitulo)

        });
    }

}


function terminarPaseoWeb(order_id, paseador_id, num_perros, categoria, uid, nombre, operation_date, tiempo_paseo, estatus, timestamp, perrosNombre) {

    Swal.fire({
        title: '¿Estás seguro de querer finalizar este paseo?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo agendar'
    }).then((result) => {
        if (result.isConfirmed) {
            terminarPaseo(); 
            Swal.fire({
                title: 'El paseo se ha finalizado correctamente',
                icon: 'success'
            })
        }
    });

    function terminarPaseo(){

        var table = document.getElementById("tabla_paseos");
        table.innerHTML = "";

        var addMessage2 = firebase.functions().httpsCallable('terminarPaseo');
        addMessage2({ paseador_id: paseador_id, uid: uid, ord: order_id, num_perros: num_perros, categoria: categoria }).then(function (result) {
            console.log('respuesta ' + result.data)

            var db = firebase.database();
            var key = db.ref("cambios_ordenes").push().getKey();
            var agendadosModificaciones = db.ref("cambios_ordenes");
            var currentUID = firebase.auth().currentUser.uid;


            agendadosModificaciones.child(key).update({

                id_orden: order_id,
                uid: currentUID,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                cambio: "finalizar paseo",
                inicial: "",
                final: ""

            })

            //$('#carga2').hide();
            //alert("El paseo se ha finalizado correctamente")
            verpaseos(paseador_id, nombrePaseadorTitulo)


        });
    }


    reiniciarValoresSpinner()

    // if (r == true) {

    //     $('#carga2').show();

    //     var table = document.getElementById("tabla_paseos");
    //     table.innerHTML = "";

    //     var addMessage2 = firebase.functions().httpsCallable('terminarPaseo');
    //     addMessage2({ paseador_id: paseador_id, uid: uid, ord: order_id, num_perros: num_perros, categoria: categoria }).then(function (result) {
    //         console.log('respuesta ' + result.data)
    //         var db = firebase.database();
    //         var key = db.ref("cambios_ordenes").push().getKey();
    //         var agendadosModificaciones = db.ref("cambios_ordenes");
    //         var currentUID = firebase.auth().currentUser.uid;
    //         agendadosModificaciones.child(key).update({

    //             id_orden: order_id,
    //             uid: currentUID,
    //             timestamp: firebase.database.ServerValue.TIMESTAMP,
    //             cambio: "finalizar paseo",
    //             inicial: "",
    //             final: ""

    //         })

    //         $('#carga2').hide();
    //         alert("El paseo se ha finalizado correctamente")
    //         verpaseos(paseador_id, nombrePaseadorTitulo)


    //     });

    // } else {



    // }


}



function abrirMapa(id, order_id) {

    window.open('mapa.php?uid=' + id + '&order_id=' + order_id, '_blank');
}



function guardar_variables(idPaseador, operation_date, order_id, timestampRecibido, uid, nombre) {




    paseadorIDEditando = idPaseador
    Operation_dateEditando = operation_date
    orderIDEditando = order_id
    timestampEditando = parseFloat(timestampRecibido)
    uidEditando = uid
    nombreEditando = nombre


    console.log("timestamp editando", timestampEditando)

    // $('#datetimepicker1').data("DateTimePicker").date(new Date(timestampEditando));

    $('#modal-fechas').modal('show');


}



function guardarHora() {


    reiniciarValoresSpinner()
    $('#carga2').show();

    var fecha = $("#datetimepicker1").find("input").val();

    console.log(fecha)


    var yearhour = fecha.split(" ")
    var diasMes = fecha.split(",")
    var mes = ""
    var mesTimestamp = ""



    if (diasMes[2] == "enero") {
        mes = "1";
        mesTimestamp = "0";
    } else if (diasMes[2] == "febrero") {
        mes = "2";
        mesTimestamp = "1";
    } else if (diasMes[2] == "marzo") {
        mes = "3";
        mesTimestamp = "2";
    } else if (diasMes[2] == "abril") {
        mes = "4";
        mesTimestamp = "3";
    } else if (diasMes[2] == "mayo") {
        mes = "5";
        mesTimestamp = "4";
    } else if (diasMes[2] == "junio") {
        mes = "6";
        mesTimestamp = "5";
    } else if (diasMes[2] == "julio") {
        mes = "7";
        mesTimestamp = "6";
    } else if (diasMes[2] == "agosto") {
        mes = "8";
        mesTimestamp = "7";
    } else if (diasMes[2] == "septiembre") {
        mes = "9";
        mesTimestamp = "8";
    } else if (diasMes[2] == "octubre") {
        mes = "10";
        mesTimestamp = "9";
    } else if (diasMes[2] == "noviembre") {
        mes = "11";
        mesTimestamp = "10";
    } else if (diasMes[2] == "diciembre") {
        mes = "12";
        mesTimestamp = "11";
    }

    var nuevo_operation_date = yearhour[1] + "-" + mes + "-" + diasMes[1] + "T" + yearhour[2] + ":00";
    var horas = yearhour[2].split(":")
    console.log("formato nuevo " + nuevo_operation_date)




    var datum = new Date(yearhour[1], mesTimestamp, diasMes[1], horas[0], horas[1], '00');
    var datumFirebase = datum.getTime();

    console.log("timestamp nuevo " + datumFirebase)


    //$('#myModal').modal('hide');


    console.log("Paseador ID " + paseadorIDEditando)
    console.log("operation date " + Operation_dateEditando)
    console.log("order id " + orderIDEditando)
    console.log("timestamp " + datumFirebase)
    console.log("uid " + uidEditando)
    console.log("nombre " + nombreEditando)


    fecha_ultimo_paseo_individual(paseadorIDEditando, nuevo_operation_date, orderIDEditando, datumFirebase, uidEditando, nombreEditando, timestampEditando)


    paseadorIDEditando = ""
    Operation_dateEditando = ""
    orderIDEditando = ""
    timestampEditando = 0
    uidEditando = ""
    nombreEditando = ""
}



function fecha_ultimo_paseo_individual(idPaseador, operation_date, order_id, timestamp, uid, nombre, timestampEditando) {


    var db = firebase.database();
    var ultimo_paseo = db.ref("Ultimo_Paseo");
    var ultimo_paseo_usu = ultimo_paseo.child(uid);


    ultimo_paseo_usu.once("value", function (snapshott) {


        var timestamp_ultimo_paseo_individual = 0

        if (snapshott.exists()) {

            timestamp_ultimo_paseo_individual = snapshott.val().ultimo_time;

        }
        console.log(timestampEditando);
        console.log(timestamp_ultimo_paseo_individual);
        cambiarFecha(idPaseador, operation_date, order_id, timestamp, uid, nombre, timestamp_ultimo_paseo_individual, timestampEditando)

    });


}


function cambiarFecha(idPaseador, operation_date, order_id, timestamp, uid, nombre, timestamp_ultimo_paseo_individual, timestampEditando) {


    var db = firebase.database();



    var datumFirebase = timestamp
    datum = datumFirebase / 1000;



    var ref_ult = db.ref("Ultimo_Paseo").child(uid);

    if (datumFirebase > timestamp_ultimo_paseo_individual) {

        ref_ult.set({

            order_id: order_id,
            uid: uid,
            ultimo_time: datumFirebase,
            nombre: nombre

        });


    }

    var ref_pas = db.ref("Paseos_paseadores");
    var paseospasref = ref_pas.child(idPaseador).child(order_id);
    paseospasref.update({

        operation_date: operation_date,
        time_op: datum

    });



    var ref = db.ref("Paseos_usuarios");
    var paseosursref = ref.child(uid).child(order_id)

    paseosursref.update({

        operation_date: operation_date,
        timestamp: datumFirebase

    });


    var ref_paseador_correcto = db.ref("Paseadores");
    var paseosactivosref_correcto = ref_paseador_correcto.child(idPaseador).child("paseosActivos").child(order_id);

    paseosactivosref_correcto.update({

        operation_date: operation_date,
        timestamp: datumFirebase

    });


    var ref_user_correcto = db.ref("Usuarios");
    var useractivosref_correcto = ref_user_correcto.child(uid).child("paseosActivos").child(order_id);

    useractivosref_correcto.update({

        operation_date: operation_date,
        timestamp: datumFirebase

    });


    var orden_original = order_id.split("_");
    var orden_original_guardar = orden_original[0] + "_" + orden_original[1]


    var key = db.ref("cambios_ordenes").push().getKey();
    var agendadosModificaciones = db.ref("cambios_ordenes");
    var currentUID = firebase.auth().currentUser.uid;


    agendadosModificaciones.child(key).update({

        id_orden: order_id,
        uid: currentUID,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        cambio: "fecha individual",
        inicial: timestampEditando,
        final: datumFirebase

    })
    $('#modal-fechas').modal('hide');

    //$("#startTimePicker").data("DateTimePicker").date(null);
    //$('#carga2').hide();
    Swal.fire({
        title: 'Éxito',
        text: 'La fecha se ha cambiado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    //alert("La fecha se ha cambiado correctamente")
    verpaseos(idPaseador, nombrePaseadorTitulo)




}



function daysInMonth(m, y) { // m is 0 indexed: 0-11
    switch (m) {
        case 1:
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8: case 3: case 5: case 10:
            return 30;
        default:
            return 31
    }
}

function isValid(d, m, y) {
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
}





function asignarPaseador(paseadorIDanterior, categoria, estatus, nombre, num_perros, operation_date, order_id, tiempo_paseo, timestamp, uid, perrosNombre, descripcion) {

    // $('#carga2').show();

    var txt;
    var db = firebase.database();
    var ref = db.ref("Agendados");

    Swal.fire({
        title: 'Ingrese el UID del paseador:',
        input: 'text',
        inputPlaceholder: '',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            if (!value) {
                return 'El UID no puede estar vacío';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            var paseador = result.value;
            // Verificamos que el uid del paseador no sea null o contenga una cadena vacía de ser así,
            // enviamos un mensaje de error para rectificar este problema
            if (paseador == null || paseador == "") {
                Swal.fire({
                    title: 'Error',
                    text: 'El UID no puede estar vacío',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            } else {
                // Si todo sale bien, entramos a la siguiente etapa de asignación de paseador
                var uidPaseador = paseador.replace(/\s+/g, '');
                console.log(uidPaseador);
                // comprobacion de que no sea el mismo paseador
                if (uidPaseador == paseadorIDanterior) {
                    Swal.fire({
                        title: 'Error',
                        text: 'No se puede cambiar un paseo al mismo paseador',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                } else {
                    comprobarPaseador(paseadorIDanterior, uidPaseador, categoria, estatus, nombre, num_perros, operation_date, order_id, tiempo_paseo, timestamp, uid, perrosNombre, descripcion);
                }


            }
        }
    });

    // var paseador = prompt("Ingrese el UID del paseador:", "");
    // if (paseador == null || paseador == "") {
    //     // $('#carga2').hide();
    //     alert("El UID no puede estar vacio");
    // } else {
    //     uidPaseador = paseador.replace(/\s+/g, '');

    //     if (uidPaseador == paseadorIDanterior) {
    //         $('#carga2').hide();
    //         alert("No se puede cambiar un paseo al mismo paseador");

    //     } else {
    //         comprobarPaseador(paseadorIDanterior, uidPaseador, categoria, estatus, nombre, num_perros, operation_date, order_id, tiempo_paseo, timestamp, uid, perrosNombre, descripcion);
    //     }

    // }

}


function comprobarPaseador(paseadorIDanterior, paseadorIDnuevo, categoria, estatus, nombre, num_perros, operation_date, order_id, tiempo_paseo, timestamp, uid, perrosNombre, descripcion) {

    var db = firebase.database();
    var ref_comprobacion = db.ref("Paseadores");
    var ref_comPas = ref_comprobacion.child(paseadorIDnuevo);
    ref_comPas.once("value", function (snapshot) {
        if (snapshot.exists()) {
            console.log('exists');
            //  agenda(uidPaseador,orderID);
            cambiarPaseosActivosPaseador(paseadorIDanterior, paseadorIDnuevo, categoria, estatus, nombre, num_perros, operation_date, order_id, tiempo_paseo, timestamp, uid, perrosNombre, descripcion)

        } else {
            Swal.fire({
                title: 'Error',
                text: 'El paseador no existe',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }

    });


}


function cambiarPaseosActivosPaseador(paseadorIDanterior, paseadorIDnuevo, categoria, estatus, nombre, num_perros, operation_date, order_id, tiempo_paseo, timestamp, uid, perrosNombre, descripcion) {



    var db = firebase.database();


    var num_perrosInt = parseInt(num_perros);
    var tiempo_paseoInt = parseFloat(tiempo_paseo);
    var timestampInt = parseInt(timestamp);

    var ref_paseador_correcto = db.ref("Paseadores");
    var paseosactivosref_correcto = ref_paseador_correcto.child(paseadorIDnuevo).child("paseosActivos").child(order_id).update({ categoria: categoria, num_perros: num_perrosInt, tiempo_paseo: tiempo_paseoInt, operation_date: operation_date, order_id: order_id, uid: uid, nombre: nombre, estatus: estatus, timestamp: timestampInt, perrosNombre: perrosNombre }).then(function () {


        cambiarPaseosRealizadosPaseador(paseadorIDanterior, paseadorIDnuevo, order_id, uid, descripcion);

        var paseosactivosref_correcto_anterior = ref_paseador_correcto.child(paseadorIDanterior).child("paseosActivos").child(order_id);
        paseosactivosref_correcto_anterior.remove();

    }).catch(function (error) {



    });


}



function cambiarPaseosRealizadosPaseador(paseadorIDanterior, paseadorIDnuevo, order_id, uid, descripcion) {

    var db = firebase.database();
    var cambiarPaseos = db.ref("Paseos_paseadores");

    cambiarPaseos.child(paseadorIDanterior).child(order_id).once("value", function (snap) {


        var amount = snap.val().amount;
        var categoria = snap.val().categoria;
        var num_perros = snap.val().num_perros;
        var operation_date = snap.val().operation_date;
        var tiempo_paseo = snap.val().tiempo_paseo;
        var time_op = snap.val().time_op;


        var ref_pas = db.ref("Paseos_paseadores");
        var paseospasref = ref_pas.child(paseadorIDnuevo).child(order_id).update({ categoria: categoria, num_perros: num_perros, tiempo_paseo: tiempo_paseo, operation_date: operation_date, order_id: order_id, amount: amount, time_op: time_op, descripcion: descripcion }).then(function () {


            datos_paseador(paseadorIDnuevo, uid, order_id, paseadorIDanterior);

            var paseospasref_anterior = ref_pas.child(paseadorIDanterior).child(order_id);
            paseospasref_anterior.remove();

        }).catch(function (error) {



        });






    });


}


function datos_paseador(paseadorIDnuevo, uid, order_id, paseadorIDanterior) {

    var db = firebase.database();
    var refPaseadoresfoto = db.ref("Paseadores");
    var pasrefoto = refPaseadoresfoto.child(paseadorIDnuevo);

    pasrefoto.once("value", function (snapshott) {
        var fotopaseador = snapshott.val().direcfoto;
        var nombrepaseador = snapshott.val().nombre;
        var numero_paseador = snapshott.val().celular;


        cambiarPaseosActivosUsuario(paseadorIDnuevo, uid, order_id, nombrepaseador, fotopaseador, numero_paseador, paseadorIDanterior);

    });


}


function cambiarPaseosActivosUsuario(paseadorIDnuevo, uid, order_id, nombrepaseador, fotopaseador, numero_paseador, paseadorIDanterior) {

    var db = firebase.database();


    var ref_user_correcto = db.ref("Usuarios");
    var useractivosref_correcto = ref_user_correcto.child(uid).child("paseosActivos").child(order_id).update({ foto_paseador: fotopaseador, nombre_paseador: nombrepaseador }).then(function () {


        ref_user_correcto.child(uid).child("paseosActivos").child(order_id).child("mensaje").remove()
        ref_user_correcto.child(uid).child("paseosActivos").child(order_id).child("ultimo_msj_texto").remove()
        ref_user_correcto.child(uid).child("paseosActivos").child(order_id).child("ultimo_msj_timestamp").remove()




        var orden_original = order_id.split("_");
        var orden_original_guardar = orden_original[0] + "_" + orden_original[1]


        var key = db.ref("cambios_ordenes").push().getKey();
        var agendadosModificaciones = db.ref("cambios_ordenes");
        var currentUID = firebase.auth().currentUser.uid;




        var ref = db.ref("Paseos_usuarios");
        var paseosursref = ref.child(uid).child(order_id).update({ numero_paseador: numero_paseador, id_paseador: paseadorIDnuevo }).then(function () {


            agendadosModificaciones.child(key).update({

                id_orden: order_id,
                uid: currentUID,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                cambio: "paseador",
                inicial: paseadorIDanterior,
                final: paseadorIDnuevo

            })

            var eliminarMsjAlert = ref.child(uid).child(order_id).child("mensaje").remove()

            var eliminarChat = ref.child(uid).child(order_id).child("chat").remove().then(function () {

                $('#carga2').hide();

                // alerta aqui 

                Swal.fire({
                    title: 'Éxito',
                    text: 'Se ha asignado el paseador exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    location.reload(); // Recarga la página
                });

                //location.reload();

            })



        }).catch(function (error) {


        });


    }).catch(function (error) {


    });


}




function mostrarTracking(uid, order_id) {

    window.open('tracking.php?uid=' + uid + "&order_id=" + order_id, '_blank');

}

function mostrarChat(uid, order_id) {

    window.open('chat.php?uid=' + uid + "&order_id=" + order_id, '_blank');

}




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
        timer: 2500,
    });
    Toast.fire({
        icon: 'success',
        title: 'Copiado'
    });
}