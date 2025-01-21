    var UsuariosPorTimestamp = [];

    function busca_user() {




      var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
      });

      var tabla = $('#tablaDatos').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,//Muestra oculta filtro
        responsive: true,
        info: true,
        columnDefs: [
          { "targets": [7,9], "visible": false },
          { "targets": [7,9], "type": nameType },
          { "orderData": 7, "targets": 6 },
          { "orderData": 9, "targets": 8 },
        ],
        "order": [[6, "desc"]],
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
      var ref = db.ref("purchaseHistory");

      var table = document.getElementById("tabla");

      //limpia la tabla
      table.innerHTML = "";

      //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

      ref.orderByChild("purchaseDate").once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        if (snapshot.exists()) {

          var datos = snapshot.val();
          for (const property in datos) {


            var d = datos[property]


            var uid = "Sin dato"
            var nombre = "Sin dato"
            var orden = "Sin dato"
            var descripcion = "Sin dato"
            var paseos = "Sin dato"
            var cortesias = "Sin dato"
            var fecha = "Sin dato"
            var fechaTimestamp = 0
            var ultimo_paseo_paquete = "Sin dato"
            var ultimo_paseo_paqueteTimestamp = 0
            var ver = "Sin dato"
            var generarCortesia = "Sin dato"

            var agendado = "Sin dato"
            var categoria = "Sin dato"
            var perros = "Sin dato"
            var tiempo = "Sin dato"
            
            var latitud = d["latitud"]
            var longitud = d["longitud"]

            if (d["uid"] != undefined) {

              uid = d["uid"]

            }

            if (d["nombre"] != undefined) {

              nombre = d["nombre"]

            }

            if (d["order_id"] != undefined) {

              orden = d["order_id"]

            }

            if (d["purchaseDate"] != undefined) {


              fecha = new Date(d["purchaseDate"]);
              fecha = fecha.toLocaleDateString(lang, options)
              fechaTimestamp = d["purchaseDate"]

            }

            if (d["agendado"] != undefined) {
              let agendadoData = d["agendado"]
              if (agendadoData == true) {
                agendado = "Paseo agendado"
              } else {
                agendado = "Paseo al momento"
              }
            }

            if (d["categoria"] != undefined) {
              categoria = d["categoria"]
            }

            if (d["numero_perros"] != undefined) {
              let num_perros = d["numero_perros"]
              if (num_perros > 1) {
                perros = num_perros + " perros"
              } else {
                perros = num_perros + " perro"
              }
            }

            if (d["tiempo_paseo"] != undefined) {
              let tiempo_paseo = d["tiempo_paseo"]
              if (tiempo_paseo == 1) {
                tiempo = tiempo_paseo+" hora"
              } else if (tiempo_paseo == 2) {
                tiempo = tiempo_paseo+" horas"
              } else if (tiempo_paseo == 0.5) {
                tiempo = "30 min"
              } else if (tiempo_paseo == 1) {
                tiempo = "90 min"
              }
            }

            descripcion = agendado + " " + categoria + " "+perros+" "+tiempo

            if (d["walks"] != undefined) {
              paseos = d["walks"]
            }

            if (d["cortesias"] != undefined) {
              cortesias = d["cortesias"]
            }

            if (d["ultimo_paseo_paquete"] != undefined) {
              ultimo_paseo_paquete = new Date(d["ultimo_paseo_paquete"]);
              ultimo_paseo_paquete = ultimo_paseo_paquete.toLocaleDateString(lang, options)
              ultimo_paseo_paqueteTimestamp = d["ultimo_paseo_paquete"]
            }

            ver = '<center><button class="btn btn-info" onclick="verpaseoshistorico(\'' + uid + '\',\'' + orden + '\')">Ver mas</button></center>'
            generarCortesia = '<center><button class="btn btn-info" onclick="generarCortesia(\'' + uid + '\',\'' + orden + '\')">Generar Cortesía</button><center>'


            var informacionUsuarios =

              [

                uid,
                nombre,
                orden,
                descripcion,
                paseos,
                cortesias,
                fecha,
                fechaTimestamp,
                ultimo_paseo_paquete,
                ultimo_paseo_paqueteTimestamp,
                ver,
                generarCortesia
              ]



            var table = $('#tablaDatos').dataTable();


            tabla.rows.add([informacionUsuarios]);

          }


          tabla.draw()

        }

      });

    }


    function verpaseoshistorico(uid, order_id) {
      window.open('historial_compras_detalle.php?uid=' + uid + "&order_id=" + order_id, '_blank');

    }

    function generarCortesia(uid, order_id) {
      window.open('pedirPaseo.php?uid='+uid + "&originalID=" + order_id,'_blank');
    }



    window.onload = busca_user();
