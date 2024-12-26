const paseadores = {}; // Almacenar datos agrupados por paseadores
const ref = firebase.database().ref('Calificaciones');

// Escuchar datos en Firebase
ref.on('child_added', datos => {
    const data = datos.val();
    if (!paseadores[data.nombrePaseador]) {
        paseadores[data.nombrePaseador] = [];
    }
    paseadores[data.nombrePaseador].push(data);
    renderTablaPaseadores();
});

// Renderizar tabla principal
function renderTablaPaseadores() {
    const tabla = $('#tablaPaseadores').DataTable();
    tabla.clear(); // Limpiar tabla antes de volver a llenarla

    for (const paseador in paseadores) {
        tabla.row.add([
            paseador,
            '<button class="btn-ver-mas" onclick="mostrarDetallesPaseador(\'' + paseador + '\')">Ver más</button>'
        ]);
    }

    tabla.draw();
}

// Inicializar DataTable principal
$(document).ready(() => {
    $('#tablaPaseadores').DataTable({

        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true, //Muestra oculta filtro
        info: true,
        responsive: true,
        columns: [
            { title: "Nombre del Paseador" },
            { title: "Acción", orderable: false }
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

    // Evento para el botón "Ver más"
    // $('#tablaPaseadores').on('click', '.btn-ver-mas', function () {
    //     const paseador = $(this).data('paseador');
    //     mostrarDetallesPaseador(paseador);
    // });
});

// Mostrar detalles del paseador
function mostrarDetallesPaseador(nombrePaseador) {
    console.log("exito");
    console.log(nombrePaseador);
    const detalles = paseadores[nombrePaseador];
    console.log(detalles);
    const tablaDetalles = $('#tablaDetalles').DataTable();
    tablaDetalles.clear();

    detalles.forEach(detalle => {
        tablaDetalles.row.add([
            new Date(detalle.fechaCalificacion).toLocaleDateString(),
            new Date(detalle.fechaPaseo).toLocaleDateString(),
            detalle.calificacion,
            detalle.nombreUsuario
        ]);
    });

    tablaDetalles.draw();    
    $('#modal-lg').modal('show');
}

// Cerrar modal
// function cerrarModal() {
//     $('#detallesModal').hide();
// }

// // Inicializar DataTable de detalles
// $(document).ready(() => {
//     $('#tablaDetalles').DataTable({
//         columns: [
//             { title: "Fecha de Paseo" },
//             { title: "Calificación" },
//             { title: "Nombre del Usuario" }
//         ]
//     });
// });