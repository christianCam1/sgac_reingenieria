function solicitudes_paseos() {
  var tabla = $('#tablaDatos').DataTable({
    search: { regex: true },
    pagingType: "full_numbers",
    paging: true,
    bFilter: true,
    info: true,
    pageLength: 10,
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

  var db = firebase.database();
  var ref = db.ref("Solicitudes");
  var ref2 = db.ref("Usuarios");

  var sessionsRef = db.ref("sessions");
  sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);

  var cont = 0;
  var x = 0;

  //limpia el cuerpo de la tabla
  tabla.clear().draw();

  sessionsRef.orderByChild("actual").on("child_added", function (snapshott) {
    x = snapshott.val();
  });

  var s = x - 72000000;
  var startDate = s;
  var endDate = x;

  var dateInicio = new Date(s);
  var dateFin = new Date(x);
  let lang = 'es-US';
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

  document.getElementById("demo").innerHTML = "Inicio " + dateInicio.toLocaleDateString(lang, options) + " ------------- Fin " + dateFin.toLocaleDateString(lang, options);

  ref.orderByChild("time").startAt(startDate).endAt(endDate).on("child_added", function (snapshot) {
    cont++;
    var d = snapshot.val();

    if (d.uid !== "moExA4KZolZrlXf0tAWeASQQNfr2" && d.uid !== "fY8IBcMh66Nl2DcfbXYkQuwJgRo1") {
      var timestamp = d.time;
      var date = new Date(timestamp);
      var direccion = d.direccion;

      ref2.orderByChild("uid").startAt(d.uid).endAt(d.uid + "\uf8ff").on("child_added", function (snapshotUser) {
        var d2 = snapshotUser.val();
        var fechayHora = date.toLocaleDateString(lang, options);
        
        var informacionSolicitud = [
          direccion,
          fechayHora,
          d2.nombre + " " + d2.apellido_Paterno + " " + d2.apellido_Materno,          
          d2.telefono1,
          d2.email,
          d.categoria,
          d.perrosNombre,
          d.num_perros,
          d.tiempo_paseo,
          d.existencia_paseadores,
          d.through,
          '<a class="btn btn-app bg-warning" onclick="verDireccion(\'' + d.latitud + '\',\'' + d.longitud + '\',\'' + d.categoria + '\',\'' + d.num_perros + '\')" data-toggle="tooltip" title="Ver direccion"><i class="fa fa-map-marker"></i>Ver</a>'
          // '<button class="custom-button"  onclick="verDireccion(\'' + d.latitud + '\',\'' + d.longitud + '\',\'' + d.categoria + '\',\'' + d.num_perros + '\')">Ver</button>'
          
        ];

        tabla.row.add(informacionSolicitud).draw();
      });
    }
  });
}




function verDireccion(latitud, longitud, categoria, perros) {

  window.open('direccion.php?latitud=' + latitud + "&longitud=" + longitud + "&categoria=" + categoria + "&numperros=" + perros, '_blank');
}



window.onload = solicitudes_paseos();
