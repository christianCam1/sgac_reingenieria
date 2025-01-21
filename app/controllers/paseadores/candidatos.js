const iconoCopiar =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>';
const iconoMapaUbicacion =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>';
const iconoPerfil =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg>';
const iconoChat =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>';

function busca_user_ultima() {

  // Muestra/oculta elementos como tablas y botones
    $('#tablaDatosTodo').show();
    $('#tablaDatos2Todo').hide();
    $('#paseosCompletos').show();
    $('#paseosParcial').hide();

  // Destruye la instancia existente de DataTable si ya está inicializada
  if ($.fn.DataTable.isDataTable('#tablaDatos')) {
    $('#tablaDatos').DataTable().clear().destroy();
  }


  var nameType = $.fn.dataTable.absoluteOrder({
    value: "Sin dato",
    position: "bottom",
  });

  $("#tablaDatos tfoot th").each(function () {
    var title = $(this).text();
    if (title != "M" && title != "C" && title != "P" && title != "UID") {
      $(this).html('<input type="text" placeholder="Busca ' + title + '" />');
    } else {
      $(this).html("");
    }
  });

  /*Define como se va a visualizar la tabla en la pagina*/
  var tabla = $("#tablaDatos").DataTable({
    search: { regex: true },
    pagingType: "full_numbers",
    paging: true, //Muestra la paginacion y el combobox
    bFilter: true, //Muestra oculta filtro
    info: true,
    responsive: true,
    layout: {
      top1Start: {
        buttons: [
          {
            extend: "colvis",
            text: "Visor de columnas",
            collectionLayout: "three-column",
          },
        ],
      },
    },
    columnDefs: [
      { targets: [2], visible: false },
      { targets: [6], visible: false },
      { orderData: 0, targets: 1 },
      { orderData: 6, targets: 5 },
      { targets: 1, type: nameType },
      { targets: 5, type: nameType },
    ],
    order: [[5, "desc"]],
    pageLength: 10,
    lengthMenu: [
      [5, 10, 20, -1],
      [5, 10, 20, "Todos"],
    ],
    language: {
      sProcessing: "Procesando...",
      sLengthMenu: "Mostrar _MENU_ registros",
      sZeroRecords: "No se encontraron resultados",
      sEmptyTable: "Ningún dato disponible en esta tabla",
      sInfo:
        "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
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
        sPrevious: "Anterior",
      },
      oAria: {
        sSortAscending:
          ": Activar para ordenar la columna de manera ascendente",
        sSortDescending:
          ": Activar para ordenar la columna de manera descendente",
      },
    },

    initComplete: function () {
      // Apply the search
      this.api()
        .columns()
        .every(function () {
          var that = this;

          $("input", this.footer()).on("keyup change clear", function () {
            if (that.search() !== this.value) {
              that.search(this.value).draw();

              console.log("busca " + this.value + " en " + this.search);
            }
          });
        });
    },
  });

  // DataTable

  var db = firebase.database();
  var ref = db.ref("Candidatos");
  var ref2 = db.ref("Usuarios_Sistema");
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var uidusr = user.uid;
      console.log(uidusr);
    }
    ref2
      .orderByChild("uid")
      .equalTo(uidusr)
      .once("value", function (snapshot) {
        // Si hay datos que coincidadn con el UID del usuario
        if (snapshot.exists()) {
          // Itera sobre los resultados de la consulta - Inicio de la funcion
          snapshot.forEach(function (data) {
            // Guarda los valores en una nueva variable
            let userSisInfo = data.val();
            // Muestra los valores en pantalla
            console.log(userSisInfo);
            console.log("Nombre de usuario:", userSisInfo.nombre);
            console.log("Rol del usuario: ", userSisInfo.rol);
            console.log("UID del usuario: ", userSisInfo.uid);
            console.log("Pais del usuario: ", userSisInfo.country);
            console.log("------------------------");
            console.log("Finalizacion de verificacion de informacion");
            console.log("-----------");

            // Esto permite mostrar/ocultar el boton para ver todos los candidatos
            // Función para manejar la acción del botón
            document.getElementById("paseosCompletos").addEventListener("click", function () {
              if (userSisInfo.nombre === "Christian NJ") {
                verCandidatosCompleto(); // Llama a la función si la condición es verdadera
              } else {
                Swal.fire({
                  title: 'Error',
                  text: 'No estas autorizado para realizar esta accion. Contacta al administrador para mas detalles',
                  icon: 'error',
                  confirmButtonText: 'Aceptar'
              });
              }
            });

            // Aqui se hace el trabajo para mostrar los datos dependiendo del pais en el cual este registrado
            // el usuario del sistema correspondiente
            if (userSisInfo.country == "MX") {
                
              console.log("El usuario tiene acceso a los datos de MX");
              var query = "México";
              ref
                .orderByChild("pais")
                .equalTo(query)
                .once("value")
                .then((snapshot) => {
                  let lang = "es-US"; // you may use user's computer language: navigator.language || navigator.userLanguage
                  let options = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  };

                  var datos = snapshot.val();
                  console.log(datos);
                  for (const property in datos) {
                    var d = datos[property];

                    var uid = "Sin dato";
                    var copiarUid = "Sin dato";
                    var nombre = "Sin dato";
                    var correo = "Sin dato";
                    var celular = "Sin dato";
                    var fecha_reg = "Sin dato";
                    var fecha_reg_timestamp = 0;
                    var direccion = "No registrada";
                    var municipio_trabajo = "Sin dato";
                    var estatus = "Sin dato";
                    var plataforma = "Sin plataforma";

                    if (d["idPaseador"] == undefined || d["idPaseador"] == "") {
                      uid = "SR : " + d;
                      copiarUid = "SR : " + property;
                    } else {
                      uid = d.idPaseador;
                      copiarUid =
                        '<button class="btn btn-outline-info btn-lg swalDefaultInfo toastsDefaultInfo" onclick="copyToClipboard(\'' +
                        d["idPaseador"] +
                        '\')" data-toggle="tooltip" title="Copiar UID">' +
                        iconoCopiar +
                        "</button>";
                    }

                    if (d["nombre"] != undefined) {
                      nombre =
                        d["nombre"] +
                        " " +
                        d["apellidopa"] +
                        " " +
                        d["apellidoma"];
                    }

                    if (d["email"] != undefined) {
                      correo = d["email"];
                    }

                    if (d["celular"] != undefined) {
                      celular = d["celular"];
                    }

                    if (d["fechareg"] != undefined) {
                      fecha_reg = new Date(d["fechareg"]);
                      fecha_reg = fecha_reg.toLocaleDateString(lang, options);
                      fecha_reg_timestamp = d["fechareg"];
                    }

                    if (d["colonia"] != undefined) {
                      direccion =
                        d["colonia"] +
                        " " +
                        d["numero"] +
                        " " +
                        d["ninterior"] +
                        " " +
                        d["municipio"] +
                        '<button class="btn btn-block bg-gradient-warning" onclick="verDireccion(\'' +
                        d["Latitude"] +
                        "','" +
                        d["Longitude"] +
                        '\')" data-toggle="tooltip" title="Ver direccion">' +
                        iconoMapaUbicacion +
                        "</button>";
                    }

                    if (d["muntrabajo"] != undefined) {
                      municipio_trabajo = d["muntrabajo"];
                    }

                    if (d["through"] != undefined) {
                      plataforma = d["through"];
                    }

                    if (d["etapa"] != undefined) {
                      estatus = d["etapa"];

                      if (estatus == "2-En evaluacion" || estatus == "6") {
                        estatus = "Finalizado";
                      } else {
                        estatus = "En proceso";
                      }
                    } else {
                      estatus = "En proceso";
                    }

                    var informacionUsuarios = [
                      nombre,
                      copiarUid,
                      uid,
                      correo,
                      celular,
                      fecha_reg,
                      fecha_reg_timestamp,
                      direccion,
                      municipio_trabajo,
                      estatus,
                      plataforma,
                      '<button class="btn btn-app" onclick="ver_registro(\'' +
                        uid +
                        "')\">" +
                        iconoPerfil +
                        "<br>Ver Registro</button>",
                      '<button class="btn bg-info btn-sm" onclick="ver_chat(\'' +
                        uid +
                        "')\">" +
                        iconoChat +
                        "<br>Ver Chat</button>",
                    ];

                    var table = $("#tablaDatos").dataTable();

                    tabla.rows.backgroundColor = "#90EE90";
                    tabla.rows.add([informacionUsuarios]);
                  }

                  tabla.draw();

                  $("#loadingOverlay").hide();
                });
            } else if (userSisInfo.country == "US") {
              console.log("El usuario tiene acceso a los datos de US");
              var query = "Estados Unidos";
              ref
                .orderByChild("pais")
                .equalTo(query)
                .once("value")
                .then((snapshot) => {
                  let lang = "es-US"; // you may use user's computer language: navigator.language || navigator.userLanguage
                  let options = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  };

                  var datos = snapshot.val();
                  console.log(datos);
                  for (const property in datos) {
                    var d = datos[property];

                    var uid = "Sin dato";
                    var copiarUid = "Sin dato";
                    var nombre = "Sin dato";
                    var correo = "Sin dato";
                    var celular = "Sin dato";
                    var fecha_reg = "Sin dato";
                    var fecha_reg_timestamp = 0;
                    var direccion = "No registrada";
                    var municipio_trabajo = "Sin dato";
                    var estatus = "Sin dato";
                    var plataforma = "Sin plataforma";

                    if (d["idPaseador"] == undefined || d["idPaseador"] == "") {
                      uid = "SR : " + d;
                      copiarUid = "SR : " + property;
                    } else {
                      uid = d.idPaseador;
                      copiarUid =
                        '<button class="btn btn-outline-info btn-lg swalDefaultInfo toastsDefaultInfo" onclick="copyToClipboard(\'' +
                        d["idPaseador"] +
                        '\')" data-toggle="tooltip" title="Copiar UID">' +
                        iconoCopiar +
                        "</button>";
                    }

                    if (d["nombre"] != undefined) {
                      nombre =
                        d["nombre"] +
                        " " +
                        d["apellidopa"] +
                        " " +
                        d["apellidoma"];
                    }

                    if (d["email"] != undefined) {
                      correo = d["email"];
                    }

                    if (d["celular"] != undefined) {
                      celular = d["celular"];
                    }

                    if (d["fechareg"] != undefined) {
                      fecha_reg = new Date(d["fechareg"]);
                      fecha_reg = fecha_reg.toLocaleDateString(lang, options);
                      fecha_reg_timestamp = d["fechareg"];
                    }

                    if (d["colonia"] != undefined) {
                      direccion =
                        d["colonia"] +
                        " " +
                        d["numero"] +
                        " " +
                        d["ninterior"] +
                        " " +
                        d["municipio"] +
                        '<button class="btn btn-block bg-gradient-warning" onclick="verDireccion(\'' +
                        d["Latitude"] +
                        "','" +
                        d["Longitude"] +
                        '\')" data-toggle="tooltip" title="Ver direccion">' +
                        iconoMapaUbicacion +
                        "</button>";
                    }

                    if (d["muntrabajo"] != undefined) {
                      municipio_trabajo = d["muntrabajo"];
                    }

                    if (d["through"] != undefined) {
                      plataforma = d["through"];
                    }

                    if (d["etapa"] != undefined) {
                      estatus = d["etapa"];

                      if (estatus == "2-En evaluacion" || estatus == "6") {
                        estatus = "Finalizado";
                      } else {
                        estatus = "En proceso";
                      }
                    } else {
                      estatus = "En proceso";
                    }

                    var informacionUsuarios = [
                      nombre,
                      copiarUid,
                      uid,
                      correo,
                      celular,
                      fecha_reg,
                      fecha_reg_timestamp,
                      direccion,
                      municipio_trabajo,
                      estatus,
                      plataforma,
                      '<button class="btn btn-app" onclick="ver_registro(\'' +
                        uid +
                        "')\">" +
                        iconoPerfil +
                        "<br>Ver Registro</button>",
                      '<button class="btn bg-info btn-sm" onclick="ver_chat(\'' +
                        uid +
                        "')\">" +
                        iconoChat +
                        "<br>Ver Chat</button>",
                    ];

                    var table = $("#tablaDatos").dataTable();

                    tabla.rows.backgroundColor = "#90EE90";
                    tabla.rows.add([informacionUsuarios]);
                  }

                  tabla.draw();

                  $("#loadingOverlay").hide();
                });
            }
          });
        }
      });
  });
  var table = document.getElementById("tabla");

  //limpia la tabla
  table.innerHTML = "";

  //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

  var actual = 0;

  /*
        Aqui se establecen las nuevas variables para poder hacer el filtrado de informacion

        var query = null;
        var query "US";

        ref.orderByChild("country").equalTo(query).once("value").then(snapshot =>

    */

  
}

function verCandidatosCompleto(){
  $('#tablaDatosTodo').hide();
  $('#tablaDatos2Todo').show();
  $('#paseosCompletos').hide();
  $('#paseosParcial').show();

  // Destruye la instancia existente de DataTable si ya está inicializada
  if ($.fn.DataTable.isDataTable('#tablaDatos2')) {
    $('#tablaDatos2').DataTable().clear().destroy();
  }


  var nameType = $.fn.dataTable.absoluteOrder({
    value: "Sin dato",
    position: "bottom",
  });

  $("#tablaDatos tfoot th").each(function () {
    var title = $(this).text();
    if (title != "M" && title != "C" && title != "P" && title != "UID") {
      $(this).html('<input type="text" placeholder="Busca ' + title + '" />');
    } else {
      $(this).html("");
    }
  });

  /*Define como se va a visualizar la tabla en la pagina*/
  var tabla = $("#tablaDatos2").DataTable({
    search: { regex: true },
    pagingType: "full_numbers",
    paging: true, //Muestra la paginacion y el combobox
    bFilter: true, //Muestra oculta filtro
    info: true,
    responsive: true,
    layout: {
      top1Start: {
        buttons: [
          {
            extend: "colvis",
            text: "Visor de columnas",
            collectionLayout: "three-column",
          },
        ],
      },
    },
    columnDefs: [
      { targets: [2], visible: false },
      { targets: [6], visible: false },
      { orderData: 0, targets: 1 },
      { orderData: 6, targets: 5 },
      { targets: 1, type: nameType },
      { targets: 5, type: nameType },
    ],
    order: [[5, "desc"]],
    pageLength: 10,
    lengthMenu: [
      [5, 10, 20, -1],
      [5, 10, 20, "Todos"],
    ],
    language: {
      sProcessing: "Procesando...",
      sLengthMenu: "Mostrar _MENU_ registros",
      sZeroRecords: "No se encontraron resultados",
      sEmptyTable: "Ningún dato disponible en esta tabla",
      sInfo:
        "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
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
        sPrevious: "Anterior",
      },
      oAria: {
        sSortAscending:
          ": Activar para ordenar la columna de manera ascendente",
        sSortDescending:
          ": Activar para ordenar la columna de manera descendente",
      },
    },

    initComplete: function () {
      // Apply the search
      this.api()
        .columns()
        .every(function () {
          var that = this;

          $("input", this.footer()).on("keyup change clear", function () {
            if (that.search() !== this.value) {
              that.search(this.value).draw();

              console.log("busca " + this.value + " en " + this.search);
            }
          });
        });
    },
  });

  // DataTable

  var db = firebase.database();
  var ref = db.ref("Candidatos");

  ref
    .orderByChild("fechareg")
    .once("value")
    .then((snapshot) => {
      let lang = "es-US"; // you may use user's computer language: navigator.language || navigator.userLanguage
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };

      var datos = snapshot.val();

      for (const property in datos) {

          var d = datos[property]

          var uid = "Sin dato"
          var copiarUid = "Sin dato"
          var nombre = "Sin dato"
          var correo = "Sin dato"
          var celular = "Sin dato"
          var fecha_reg = "Sin dato"
          var fecha_reg_timestamp = 0
          var direccion = "No registrada"
          var municipio_trabajo = "Sin dato"
          var estatus = "Sin dato"
          var plataforma = "Sin plataforma"

          if (d["idPaseador"] == undefined || d["idPaseador"] == "") { uid = "SR : " + d; copiarUid = "SR : " + property; } else { uid = d.idPaseador; copiarUid = '<button class="btn btn-outline-info btn-lg swalDefaultInfo toastsDefaultInfo" onclick="copyToClipboard(\'' + d["idPaseador"] + '\')" data-toggle="tooltip" title="Copiar UID">'+iconoCopiar+'</button>'; }

          if (d["nombre"] != undefined) { nombre = d["nombre"] + " " + d["apellidopa"] + " " + d["apellidoma"] }

          if (d["email"] != undefined) { correo = d["email"] }

          if (d["celular"] != undefined) { celular = d["celular"] }

          if (d["fechareg"] != undefined) {
              fecha_reg = new Date(d["fechareg"]);
              fecha_reg = fecha_reg.toLocaleDateString(lang, options)
              fecha_reg_timestamp = d["fechareg"]

          }

          if (d["colonia"] != undefined) { direccion = d["colonia"] + " " + d["numero"] + " " + d["ninterior"] + " " + d["municipio"] + '<button class="btn btn-block bg-gradient-warning" onclick="verDireccion(\'' + d["Latitude"] + '\',\'' + d["Longitude"] + '\')" data-toggle="tooltip" title="Ver direccion">'+ iconoMapaUbicacion +'</button>' }

          if (d["muntrabajo"] != undefined) { municipio_trabajo = d["muntrabajo"] }

          if (d["through"] != undefined) { plataforma = d["through"] }

          if (d["etapa"] != undefined) {

              estatus = d["etapa"]

              if (estatus == "2-En evaluacion" || estatus == "6") {

                  estatus = "Finalizado"

              } else {
                  estatus = "En proceso"
              }

          } else { estatus = "En proceso" }

          var informacionUsuarios =[
                  nombre,
                  copiarUid,
                  uid,
                  correo,
                  celular,
                  fecha_reg,
                  fecha_reg_timestamp,
                  direccion,
                  municipio_trabajo,
                  estatus,
                  plataforma,
                  '<button class="btn btn-app" onclick="ver_registro(\'' + uid + '\')">'+iconoPerfil+'<br>Ver Registro</button>',
                  '<button class="btn bg-info btn-sm" onclick="ver_chat(\'' + uid + '\')">'+ iconoChat +'<br>Ver Chat</button>'
              ];

          var table = $('#tablaDatos').dataTable();

          tabla.rows.backgroundColor = "#90EE90";
          tabla.rows.add([informacionUsuarios]);

      }

      tabla.draw()

      $("#loadingOverlay").hide();
    });
}

function ver_registro(uid) {
  window.open("candidatos_detalle.php?idCandidato=" + uid, "_blank");
}

function ver_chat(uid) {
  window.open("chatCaminandogCandidato.php?uid=" + uid, "_blank");
}

function verDireccion(latitud, longitud) {
  window.open(
    "direccion.php?latitud=" + latitud + "&longitud=" + longitud,
    "_blank"
  );
}

function generar_paseos(uid, telefono, nombre) {
  window.open(
    "pedirPaseo.html?uid=" +
      uid +
      "&telefono=" +
      telefono +
      "&nombre=" +
      nombre,
    "_blank"
  );
}

window.onload = busca_user_ultima();

function busca_perros(query) {
  hideUsersTable();

  var db = firebase.database();
  var ref = db.ref("Perros").child(query);

  var table = document.getElementById("tablaPerrosbody");

  //limpia la tabla
  table.innerHTML = "";

  //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

  ref.orderByChild("uidUsuario").once("value", function (snapshot) {
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    var exist = snapshot.val();
    if (exist == null) {
      table.innerHTML = "Sin Resultados";
    } else {
    }

    snapshot.forEach(function (data) {
      var d = data.val();

      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);

      // asigna a las celdas el valir del Child especificado
      cell1.innerHTML = d.idPerro;
      cell2.innerHTML = d.nombre;
      cell3.innerHTML = d.comportamiento;
      cell4.innerHTML = d.raza;
      cell9.innerHTML =
        "<img src='" + d.foto + '\' width="200" height="200" />';

      if (d.vacunas != undefined) {
        cell5.innerHTML = d.vacunas.desparacitado;
        cell6.innerHTML = d.vacunas.primeraDosis;
        cell7.innerHTML = d.vacunas.segundaDosis;
        cell8.innerHTML = d.vacunas.terceraDosis;
      } else {
        cell5.innerHTML = "Sin dato";
        cell6.innerHTML = "Sin dato";
        cell7.innerHTML = "Sin dato";
        cell8.innerHTML = "Sin dato";
      }
    });
  });
}


function hideUsersTable() {
  $("#tablaDatos").hide();
  $(".dataTables_info").hide();
  $(".dataTables_paginate").hide();
  $(".dataTables_filter").hide();
  $(".dataTables_length").hide();

  $("#tablaPerros").show();

  $("#regresar").show();
}

function showUsersTable() {
  $("#tablaDatos").show();
  $(".dataTables_info").show();
  $(".dataTables_paginate").show();
  $(".dataTables_filter").show();
  $(".dataTables_length").show();

  $("#tablaPerros").hide();

  $("#regresar").hide();
}

function copyToClipboard(val) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);

  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value = val;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  $(".toastsDefaultInfo").click(function () {
    $(document).Toasts("create", {
      class: "bg-info",
      title: "Toast Title",
      subtitle: "Subtitle",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    });
  });

  //var x = document.getElementById("snackbar");
  //x.className = "show";
  // setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
