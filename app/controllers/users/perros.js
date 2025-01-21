var usuariosArray = [];
const iconoCopiar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>';

function consulta_perros() {


    $('#tablaDatos').DataTable().clear().destroy();

    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    var tabla = $('#tablaDatos').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        responsive: true,
        info: true,
        columnDefs: [
            { "targets": [0], "visible": false },
            { "targets": [4], "visible": false },
            { "targets": 1, "type": nameType },
            { "orderData": 3, "targets": 4 },
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
        "order": [[1, "asc"]],
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
    var ref = db.ref("Perros");


    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";


    ref.orderByChild("nombre").once("value").then(snapshot => {

        if (snapshot.exists()) {

            var datos = snapshot.val();
            for (const property in datos) {


                var d = datos[property]

                for (const property2 in d) {


                    var d2 = d[property2]

                    var idPerro = "Sin dato"
                    var nombre = "Sin dato"
                    var raza = "Sin dato"
                    var uid = "Sin dato"
                    var nombreUsuario = "Sin dato"


                    if (d2["idPerro"] != undefined) {

                        idPerro = d2["idPerro"]

                    }
                    if (d2["nombre"] != undefined) {

                        nombre = d2["nombre"]
                        if (nombre == "") { nombre = "Sin dato" }
                    }
                    if (d2["raza"] != undefined) {

                        raza = d2["raza"]

                    } if (property != undefined) {

                        uid = '<button class="btn btn-info btn-lg btn-block" onclick="copyToClipboard(\'' + property + '\')">' + iconoCopiar + " Copiar" + '</button>';


                    }

                    var filtered = usuariosArray.find(x => x.value === property);


                    if (filtered != null) {
                        nombreUsuario = filtered.nombre + " " + filtered.apellidoP + " " + filtered.apellidoM
                    }


                    var informacionUsuarios =

                        [

                            idPerro,
                            nombre,
                            raza,
                            uid,
                            property,
                            nombreUsuario,
                            '<button class="btn btn-danger btn-lg btn-block" onclick="eliminarPerro(\'' + idPerro + '\',\'' + property + '\',\'' + nombre + '\')">Eliminar perro</button>'

                        ]



                    var table = $('#tablaDatos').dataTable();


                    tabla.rows.add([informacionUsuarios]);

                }



            }


            tabla.draw()
            $("#loadingOverlay").hide();

        }


        else {

            $("#loadingOverlay").hide();
        }

    });


}




function eliminarPerro(idPerro, uid, nombre) {

    Swal.fire({
        title: '¿Está seguro de eliminar a este perro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                eliminar(),
                'Perro eliminado',
                'success'
            )
        }
    });

    function eliminar(){
        var db = firebase.database();
        var agendados = db.ref("Perros").child(uid).child(idPerro);

        agendados.remove().then(function () {
            var key = db.ref("cambios_ordenes").push().getKey();
            var agendadosModificaciones = db.ref("cambios_ordenes");
            var currentUID = firebase.auth().currentUser.uid;

            agendadosModificaciones.child(key).update({

                id_orden: "Sin orden",
                uid: currentUID,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                cambio: "Eliminar perrro",
                inicial: idPerro + " " + uid,
                final: ""

            })
            consulta_perros();

        }).catch(function (error) {
            console.log("Ocurrio un error")
        });
    }
}


function consulta_usuarios() {


    var db = firebase.database();
    var ref = db.ref("Usuarios");



    ref.orderByChild("nombre").once("value").then(snapshot => {

        if (snapshot.exists()) {

            var datos = snapshot.val();
            for (const property in datos) {


                var d = datos[property]


                var uid = "Sin dato"
                var nombre = "Sin dato"
                var apPaterno = ""
                var apMaterno = ""


                if (d["uid"] != undefined) {

                    uid = d["uid"]

                }
                if (d["nombre"] != undefined) {

                    nombre = d["nombre"]

                }

                if (d["apellido_Paterno"] != undefined) {

                    apPaterno = d["apellido_Paterno"]

                }

                if (d["apellido_Materno"] != undefined) {

                    apMaterno = d["apellido_Materno"]

                }


                var informacionUsuariosSelect =

                {

                    value: uid,
                    nombre: nombre,
                    apellidoP: apPaterno,
                    apellidoM: apMaterno

                }



                usuariosArray.push(informacionUsuariosSelect)




            }

            consulta_perros();

        }


        else {


        }

    });


}



window.onload = consulta_usuarios();



function copyToClipboard(val) {

    var dummy = document.createElement("input");
    document.body.appendChild(dummy);

    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
