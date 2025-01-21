$(document).ready(function () {
  $('#startDate').datetimepicker({ format: 'L' });
  $('#endDate').datetimepicker({ format: 'L' });
});

function dispersion() {
  var date1 = document.getElementById('startInput').value;
  var date2 = document.getElementById('endInput').value;
  date1 = date1 + ' 00:00:00';
  date2 = date2 + ' 23:59:59';

  console.log('Start date:', date1);
  console.log('End date:', date2);

  var timestamp1 = moment(date1).format("X") * 1000;
  var timestamp2 = moment(date2).format("X") * 1000;

  console.log('Timestamp start:', timestamp1);
  console.log('Timestamp end:', timestamp2);

  var fecha_inicio_consulta = new Date(timestamp1);
  var fecha_fin_consulta = new Date(timestamp2);
  let lang = 'es-US';
  let options2 = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: "numeric", minute: "numeric", second: "numeric" };
  let date1Mostrar = fecha_inicio_consulta.toLocaleDateString(lang, options2);
  let date2Mostrar = fecha_fin_consulta.toLocaleDateString(lang, options2);

  var fechaSplitInicio = date1Mostrar.split(",");
  var diainicio = fechaSplitInicio[0];

  var fechaSplitFin = date2Mostrar.split(",");
  var diafin = fechaSplitFin[0];

  if (diainicio != 'domingo' || diafin != 'sábado') {
    if (confirm('Seleccionaste un dia de inicio diferente a domingo o un dia final diferente a sabado ¿deseas continuar de todas formas?')) {
      realizar_consulta(timestamp1, timestamp2);
    }
  } else {
    realizar_consulta(timestamp1, timestamp2);
  }
}

function realizar_consulta(timestamp1, timestamp2) {
  console.log(timestamp1 + " hoas");

  // Verifica si la tabla ya está inicializada y destrúyela si es necesario
  if ($.fn.dataTable.isDataTable('#tablaDatos')) {
    $('#tablaDatos').DataTable().clear().destroy();
  }

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
      { "targets": [1], "visible": false },
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
  var ref = db.ref("Paseos_paseadores");
  var ref33 = db.ref("Paseadores");

  ref.on("child_added", function (snapshot) {
    var ref2 = db.ref("Paseos_paseadores/" + snapshot.key);

    ref2.orderByChild("fin").startAt(timestamp1).endAt(timestamp2).on("child_added", function (snapshott) {
      var d = snapshott.val();
      var datetoshow = new Date(d.time_op * 1000);

      ref33.orderByChild("idPaseador").equalTo(snapshot.key).on("child_added", function (snapsho) {
        var de = snapsho.val();
        var fecha_inicio = new Date(d.inicio);
        var fecha_fin = new Date(d.fin);

        if (de.nombre === undefined) {
          console.log("undefined nombre " + snapshot.key);
        }

        if (snapshot.key != 'JebxoFHoozYQsKorYuwkfZAEfvA2' && snapshot.key != 'R4wgoZ7l5DWHYdJHRTFCq2YPLJQ2') {
          var uid = snapshott.key;
          var order = snapshott.key;
          var nom = de.nombre + " " + de.apellidopa + " " + de.apellidoma;
          var nperros = d.num_perros;
          var categoria = d.categoria;
          var fecha = datetoshow.toLocaleDateString('es-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: "numeric", minute: "numeric" });
          var fechaInicio = fecha_inicio.toLocaleDateString('es-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: "numeric", minute: "numeric" });
          var fechaFin = fecha_fin.toLocaleDateString('es-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: "numeric", minute: "numeric" });
          var monto = Math.round(d.amount * 100) / 100;

          var informacionDisp = [
            uid,
            order,
            nom,
            nperros,
            categoria,
            fecha,
            fechaInicio,
            fechaFin,
            monto
          ];
          tabla.row.add(informacionDisp).draw();
        }
      });
    });
  });
}
