var UsuariosPorTimestamp = [];



function busca_user_ultima() {



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

        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,
        //Muestra oculta filtro
        info: true,
        responsive: true,
        columnDefs: [
            { "targets": [0], "visible": false },
            { "targets": [2], "visible": false },
            { "targets": [4], "visible": false },
            { "targets": [5], "visible": false },
            { "targets": [7], "visible": false },
            { "orderData": 0, "targets": 1 },
            { "orderData": 2, "targets": 3 },
        ],
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
        order: [[0, "desc"]],
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

    var db = firebase.database();
    var ref = db.ref("Calificaciones");

    var table = document.getElementById("tabla");

    // Desactivar temporalmente ciertas características
    tabla.settings()[0].oFeatures.bFilter = false; // Desactivar búsqueda
    // tabla.settings()[0].oFeatures.bPaginate = false; // Desactivar paginación
    tabla.settings()[0].oFeatures.bInfo = false; // Desactivar información

    //limpia la tabla
    table.innerHTML = "";

    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

    // ref.orderByChild("ultima_vez").on("value", function(snapshot){ aqui se puede poner la hora de llegada del mensaje

    var datosParaAgregar = [];

    ref.on('child_added', datos => {

        console.log("child_added")

        var d = datos.val();
        var fechaPaseo = "Sin dato";
        var fechaCalificacion = "Sin dato";
        var order_id = "Sin dato";
        var id_paseador = "Sin dato";
        var nombre_paseador = "Sin dato";
        var id_usuario = "Sin dato";
        var nombre_usuario = false;
        var puntualidad = "Sin dato";
        var vestimenta = "Sin dato";
        var aromaterapia = "Sin dato";
        var calificacion = "Sin dato";
        var encuesta_contestada = "Sin dato";
        var calificacion_promediada = "Sin dato";


        let lang = 'es-US'
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        if (d.fechaCalificacion != undefined) {
            // Convertir fechaCalificacion de timestamp a objeto Date
            var dateCalificacion = new Date(d.fechaCalificacion);
            fechaCalificacionFormateada = dateCalificacion.toLocaleDateString(lang, options);
    
            // Obtener la fecha actual y calcular el límite de dos meses
            const fechaActual = new Date();
            const fechaLimite = new Date(fechaActual);
            fechaLimite.setMonth(fechaActual.getMonth() - 1);
    
            console.log(`Fecha de calificación: ${fechaCalificacionFormateada}`);
            console.log(`Fecha límite: ${fechaLimite.toLocaleDateString(lang, options)}`);
    
            // Verificar si la fecha está dentro de los últimos dos meses
            if (dateCalificacion >= fechaLimite && dateCalificacion <= fechaActual) {
                console.log(`La fecha ${fechaCalificacionFormateada} está dentro de los últimos 2 meses.`);
    
                // Validar y formatear fechaPaseo si existe
                if (d.fechaPaseo != undefined) {
                    var datePaseo = new Date(d.fechaPaseo);
                    fechaPaseo = datePaseo.toLocaleDateString(lang, options);
                }

                if (d.order_id != undefined) {

                    order_id = d.order_id;

                }

                if (d.idPaseador != undefined) {

                    id_paseador = d.idPaseador;

                }

                if (d.nombrePaseador != undefined) {

                    nombre_paseador = d.nombrePaseador;

                }

                if (d.idUsuario != undefined) {

                    id_usuario = d.idUsuario;

                }

                if (d.nombreUsuario != undefined) {

                    nombre_usuario = d.nombreUsuario;

                }

                if (d.p1 != undefined) {

                    if (d.p1 == true) {

                        puntualidad = "Si";

                    } else {

                        puntualidad = "No";
                    }


                }

                if (d.p2 != undefined) {


                    if (d.p2 == true) {

                        vestimenta = "Si";

                    } else {

                        vestimenta = "No";
                    }

                }

                if (d.p3 != undefined) {


                    if (d.p3 == true) {

                        aromaterapia = "Si";

                    } else {

                        aromaterapia = "No";
                    }

                }

                if (d.calificacion != undefined) {

                    calificacion = d.calificacion;

                }

                if (d.Promediado != undefined) {

                    if (d.Promediado == false) {
                        calificacion_promediada = "No"

                    } else {

                        calificacion_promediada = "Si"
                    }

                    if (d.contestada != undefined) {

                        if (d.contestada == false) {
                            encuesta_contestada = "No"

                        } else {

                            encuesta_contestada = "Si"
                        }
                    }

                } 
    
                // Crear la información del usuario y agregarla al arreglo
                var informacionUsuarios = [d.fechaPaseo, fechaPaseo, d.fechaCalificacion, fechaCalificacion, order_id, id_paseador, nombre_paseador, id_usuario, nombre_usuario, encuesta_contestada, puntualidad, vestimenta, aromaterapia, calificacion_promediada, calificacion];
                datosParaAgregar.push(informacionUsuarios);
    
                console.log("Dato agregado:", informacionUsuarios);
            } else {
                console.log(`La fecha ${fechaCalificacionFormateada} no está dentro de los últimos 2 meses.`);
            }
        }


    });

     // Una vez que se han recolectado todos los datos, agregar a la tabla y dibujar
     ref.once('value', () => {
        tabla.rows.add(datosParaAgregar); // Agregar todas las filas
        tabla.draw(); // Dibujar la tabla
        $("#loadingOverlay").hide();
        // Reactivar características desactivadas
        tabla.settings()[0].oFeatures.bFilter = true;
        tabla.settings()[0].oFeatures.bInfo = true;
        
        $("#cover").hide(); // Ocultar cualquier animación de carga
    });



    ref.on('child_removed', datos => {

        console.log(datos.key)

        var d = datos.val();

        var table = $('#tablaDatos').dataTable();

        var rowId = table.fnFindCellRowIndexes(d.order_id, 4);


        table.fnDeleteRow(rowId, false)



    });



    ref.on('child_changed', datos => {

        console.log("child_changed")

        var d = datos.val();


        var fechaPaseo = "Sin dato"
        var fechaCalificacion = "Sin dato"
        var order_id = "Sin dato"
        var id_paseador = "Sin dato"
        var nombre_paseador = "Sin dato"
        var id_usuario = "Sin dato"
        var nombre_usuario = false
        var puntualidad = "Sin dato"
        var vestimenta = "Sin dato"
        var aromaterapia = "Sin dato"
        var calificacion = "Sin dato"


        let lang = 'es-US'
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };


        if (d.fechaPaseo != undefined) {

            var datePaseo = new Date(d.fechaPaseo);

            fechaPaseo = datePaseo.toLocaleDateString(lang, options);

        }

        if (d.fechaCalificacion != undefined) {

            var dateCalificacion = new Date(d.fechaCalificacion);

            fechaCalificacion = dateCalificacion.toLocaleDateString(lang, options);

        }

        if (d.order_id != undefined) {

            order_id = d.order_id;

        }

        if (d.idPaseador != undefined) {

            id_paseador = d.idPaseador;

        }

        if (d.nombrePaseador != undefined) {

            nombre_paseador = d.nombrePaseador;

        }

        if (d.idUsuario != undefined) {

            id_usuario = d.idUsuario;

        }


        if (d.nombreUsuario != undefined) {

            nombre_usuario = d.nombreUsuario;

        }


        if (d.p1 != undefined) {

            if (d.p1 == true) {

                puntualidad = "Si";

            } else {

                puntualidad = "No";
            }


        }


        if (d.p2 != undefined) {


            if (d.p2 == true) {

                vestimenta = "Si";

            } else {

                vestimenta = "No";
            }

        }

        if (d.p3 != undefined) {


            if (d.p3 == true) {

                aromaterapia = "Si";

            } else {

                aromaterapia = "No";
            }

        }


        if (d.calificacion != undefined) {

            calificacion = d.calificacion;

        }




        var informacionUsuarios = [d.fechaPaseo, fechaPaseo, d.fechaCalificacion, fechaCalificacion, order_id, id_paseador, nombre_paseador, id_usuario, nombre_usuario, puntualidad, vestimenta, aromaterapia, calificacion]




        var table = $('#tablaDatos').dataTable();


        var rowId = table.fnFindCellRowIndexes(d.order_id, 4);

        table.fnUpdate(informacionUsuarios, rowId, undefined);





    });






}





function ver_chat(uid) {


    window.open('chatCaminandog.html?uid=' + uid, '_blank');

}



window.onload = busca_user_ultima();
