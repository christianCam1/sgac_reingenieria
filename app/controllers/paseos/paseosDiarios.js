let lang = 'es-US'; // puedes usar el idioma del usuario: navigator.language || navigator.userLanguage
let options = { hour: "numeric", minute: "numeric" };
var db = firebase.database();
var ref = db.ref("Paseos_diarios");
var init = moment().startOf("day");
var end = moment().add(1, "day").endOf("day");
var started = true;

function inicializarTabla() {
    return $('#table_table_2').DataTable({
        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, // Muestra la paginación y el combobox
        bFilter: true, // Muestra/oculta filtro        
        responsive: true,
        info: true,
        pageLength: 10,
        order: [[1, 'asc']],
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
        language: {
            sProcessing: "Procesando...",
            sLengthMenu: "Mostrar _MENU_ registros",
            sZeroRecords: "No se encontraron resultados",
            sEmptyTable: "Ningún dato disponible en esta tabla",
            sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
            sInfoPostFix: "",
            sSearch: "Buscar:",
            sUrl: "",
            sInfoThousands: ",",
            sLoadingRecords: "Cargando...",
            oPaginate: {
                sFirst: "Primero",
                sLast: "Último",
                sNext: "Siguiente",
                sPrevious: "Anterior"
            },
            oAria: {
                sSortAscending: ": Activar para ordenar la columna de manera ascendente",
                sSortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
}

function busca_paseos() {
    //$('#table_table_2').hide();
    $('#table_table_2_todo').show();
    $('#table_table_3_todo').hide();
    $('#paseosNormales').hide();
    $('#paseosCalificar').show();
    $('#table_table_3').hide();
    if ($.fn.DataTable.isDataTable('#table_table_2')) {
        $('#table_table_2').DataTable().clear().destroy();
    }

    var tabla = inicializarTabla();
    $('#table_table_2').show();

    ref.orderByChild("timestamp").startAt(init.unix() * 1000).endAt(end.unix() * 1000).on("child_added", function (snapshot) {
        const d = snapshot.val();

        if (d.id_usr !== 'fY8IBcMh66Nl2DcfbXYkQuwJgRo1' || d.id_paseador !== 'TzsgVsAHV2NQklFplsvVZHGWbA63') {
            let hora = new Date(d.timestamp);
            let tiempo;
            let status = d.estatus;
            let nde = d.nde;

            if (nde === undefined) {
                nde = '';
            } else {
                nde = ' · ' + nde;
            }

            if (d.tiempo_paseo === 1) {
                tiempo = '1 Hora';
            } else if (d.tiempo_paseo === 0.5) {
                tiempo = '30 minutos';
            } else if (d.tiempo_paseo === 1.5) {
                tiempo = '1 Hora 30 Min';
            } else {
                tiempo = '2 Horas';
            }

            var orderIDPaseo = d.order_id;
            var fechaHora = hora.toLocaleDateString(lang, options);
            var descripcionPaseo = d.descripcion + "" + nde;
            var duracion = tiempo;
            var catPaseo = d.categoria;
            var statusPaseo = status;
            var nombrePerros = "Sin dato";
            var nombreUsuario = d.nombreUsuario + ' ' + d.apellidoUsuario;
            var direccionUsuario = d.direccion + '<button class="custom-button" onclick="verDireccion(\'' + d.latitud + '\',\'' + d.longitud + '\')">Ver</button>';
            var nombrePaseador = d.nombrePaseador + ' ' + d.apellidoPaseador;
            var tracking = '<center><button class="btn btn-info" onclick="mostrarTracking(\'' + d.id_usr + '\',\'' + d.order_id + '\')">Ver tracking</button></center>';
            var chatPaseo = '<center><button class="btn btn-info" onclick="mostrarChat(\'' + d.id_usr + '\',\'' + d.order_id + '\')">Ver Chat</button></center>';
            var calificarPaseo = '<center><button class="btn btn-primary" onclick="calificarPaseo(\'' + d.id_usr + '\',\'' + d.id_paseador + '\',\'' + d.order_id + '\')">Calificar</button></center>';


            if(d.perrosNombre != undefined ){
                perrosNombre = d.perrosNombre;
            }

            var informacionPaseo = [
                orderIDPaseo,
                fechaHora,
                descripcionPaseo,
                duracion,
                catPaseo,
                statusPaseo,
                nombrePerros,
                nombreUsuario,
                direccionUsuario,
                nombrePaseador,
                tracking,
                chatPaseo,
                calificarPaseo
            ];

            tabla.row.add(informacionPaseo).draw();
        }

        // if (started) {
        //     timeout();
        //     started = false;
        // }
    });
}

window.onload = function() {
    busca_paseos();
};



function no_calificados() {
    $('#table_table_2_todo').hide();
    $('#table_table_3_todo').show();
    $('#paseosCalificar').hide();
    $('#paseosNormales').show();
    $('#table_table_3').show();

     // Destruye la instancia existente de DataTable si ya está inicializada
     if ($.fn.DataTable.isDataTable('#table_table_3')) {
        $('#table_table_3').DataTable().destroy();
    }


    // Inicializa la tabla DataTable y guarda la referencia
    var tabla = $('#table_table_3').DataTable({
        search: { regex: true },
        pagingType: "full_numbers",
        paging: true,
        bFilter: true,
        info: true,
        responsive: true,
        pageLength: 10,
        order: [[1, 'asc']],
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

    let lang = 'es-US'; // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = { hour: "numeric", minute: "numeric" };
    var db = firebase.database();
    var ref = db.ref("Paseos_diarios");
    var init = moment().startOf("day");
    var end = moment().endOf("day");
    var table = document.getElementById("tabla3");
    table.innerHTML = "";
    var started2 = true;
    var dataBatch = [];
    var batchSize = 10;

    ref.orderByChild("timestamp").endAt(end.unix() * 1000).on("child_added", function (snapshot) {
        const d = snapshot.val();

        if (d.id_usr != 'fY8IBcMh66Nl2DcfbXYkQuwJgRo1' || d.id_paseador != 'TzsgVsAHV2NQklFplsvVZHGWbA63') {

            let hora = new Date(d.timestamp);
            let tiempo;
            let status = d.estatus;
            let nde = d.nde || '';

            if (d.tiempo_paseo === 1) {
                tiempo = '1 Hora';
            } else if (d.tiempo_paseo === 0.5) {
                tiempo = '30 minutos';
            } else if (d.tiempo_paseo === 1.5) {
                tiempo = '1 Hora 30 Min';
            } else {
                tiempo = '2 Horas';
            }

            var orderID2 = d.order_id;
            var fechaPaseo = hora.toLocaleDateString(lang, options);
            var descripcionPaseo = d.descripcion ? d.descripcion + "" + nde : "Sin descripcion";
            var tiempoPaseo = tiempo;
            var categoriaPaseo = d.categoria || "Categoria no registrada";
            var estatusPaseo = status;
            var perrosPaseo = d.perrosNombre || "Sin dato";
            var usuario = d.nombreUsuario + ' ' + d.apellidoUsuario;
            var direccionUser = d.direccion ? d.direccion + '<button class="custom-button" onclick="verDireccion(\'' + d.latitud + '\',\'' + d.longitud + '\')">Ver</button>' : "No registrada";
            var paseador = d.nombrePaseador + ' ' + d.apellidoPaseador;
            var verTracking = '<center><button class="btn btn-info" onclick="mostrarTracking(\'' + d.id_usr + '\',\'' + d.order_id + '\')">Ver tracking</button></center>';
            var verChat = '<center><button class="btn btn-info" onclick="mostrarChat(\'' + d.id_usr + '\',\'' + d.order_id + '\')">Ver Chat</button></center>';
            var calificarPaseo = '<center><button class="btn btn-primary" onclick="calificarPaseo(\'' + d.id_usr + '\',\'' + d.id_paseador + '\',\'' + d.order_id + '\')">Calificar</button></center>';


            var informacionPaseo2 = [
                orderID2,
                fechaPaseo,
                descripcionPaseo,
                tiempoPaseo,
                categoriaPaseo,
                estatusPaseo,
                perrosPaseo,
                usuario,
                direccionUser,
                paseador,
                verTracking,
                verChat,
                calificarPaseo
            ];

            dataBatch.push(informacionPaseo2);

            if (dataBatch.length >= batchSize) {
                tabla.rows.add(dataBatch).draw();
                dataBatch = [];
            }
        }
    });

    // Agregar el resto de los datos cuando se termine de cargar
    ref.on("value", function () {
        if (dataBatch.length > 0) {
            tabla.rows.add(dataBatch).draw();
            dataBatch = [];
        }
    });
}


function mostrarTracking(uid, order_id) {

    window.open('tracking.php?uid=' + uid + "&order_id=" + order_id, '_blank');

}

function mostrarChat(uid, order_id) {

    window.open('chat.php?uid=' + uid + "&order_id=" + order_id, '_blank');

}

function verDireccion(latitud, longitud) {
    window.open('direccion.php?latitud=' + latitud + "&longitud=" + longitud, '_blank');
}

function calificarPaseo(uidUsr, uidPas, orderId) {
    $('#calificar').modal('show');
  
    document.getElementById("btnbtn").addEventListener("click", displayDate);
  
    function displayDate() {
      var x = document.forms["califForm"]["estrellas"].value;
      if (x === '') {
        Swal.fire({
          title: 'Error',
          text: 'Se debe asignar una calificación',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      } else {
        Swal.fire({
          title: '¿Está seguro de asignarle esta calificación?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, deseo asignarla'
        }).then((result) => {
          if (result.isConfirmed) {
            asignarCalificacion();
            Swal.fire({
              title: 'Calificación asignada',
              icon: 'success'
            });
          }
        });
  
        function asignarCalificacion() {
          x = Number(x);
          var addMessage2 = firebase.functions().httpsCallable('calificacionInternaPaseadores');
          addMessage2({ uid: uidPas, orderId: orderId, calif: x })
            .then(function (result) {
              console.log(result);
              if (result.data.message === 'correcto') {
                console.log('Calificación asignada correctamente');
              } else {
                console.log('Error al asignar la calificación');
              }
            })
            .catch(function (error) {
              console.error('Error al llamar a la función:', error);
              Swal.fire({
                title: 'Error',
                text: 'Error al asignar la calificación. Por favor, inténtalo de nuevo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
            });
        }
      }
    }
  }
  