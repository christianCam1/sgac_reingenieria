const paseadores = {}; // Almacenar datos agrupados por paseadores
const ref = firebase.database().ref('Calificaciones');

// Escuchar datos en Firebase
ref.on('child_added', datos => {
    const data = datos.val();
    if (!paseadores[data.nombrePaseador]) {
        paseadores[data.nombrePaseador] = [];
    }
    paseadores[data.nombrePaseador].push(data);
    renderTablaPaseadores(); // Actualizar la tabla principal cada vez que se agrega un dato
});

// Declaración de la tabla principal y de detalles
let tablaPaseadores;
let tablaDetalles;

// Inicializar tablas
$(document).ready(() => {
    // Inicializar DataTable principal (solo una vez)
    tablaPaseadores = $('#tablaPaseadores').DataTable({
        pagingType: "full_numbers",
        paging: true,
        bFilter: true,
        info: true,
        responsive: true,
        columns: [
            { title: "Nombre del Paseador" },
            { title: "Acción", orderable: false }
        ],
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
            sSearch: "Buscar:",
            oPaginate: {
                sFirst: "Primero",
                sLast: "Último",
                sNext: "Siguiente",
                sPrevious: "Anterior"
            }
        }
    });

    // Inicializar DataTable de detalles (solo una vez)
    tablaDetalles = $('#tablaDetalles').DataTable({
        pagingType: "full_numbers",
        paging: true,
        bFilter: true,
        info: true,
        responsive: true,
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
            sSearch: "Buscar:",
            oPaginate: {
                sFirst: "Primero",
                sLast: "Último",
                sNext: "Siguiente",
                sPrevious: "Anterior"
            }
        }
    });
});

// Renderizar tabla principal
function renderTablaPaseadores() {
    tablaPaseadores.clear(); // Limpiar tabla antes de volver a llenarla

    for (const paseador in paseadores) {
        tablaPaseadores.row.add([
            paseador,
            '<center><button class="btn btn-info" onclick="mostrarDetallesPaseador(\'' + paseador + '\')">Ver más</button></center>'
        ]);
    }

    tablaPaseadores.draw(); // Dibujar la tabla con los nuevos datos
    $("#loadingOverlay").hide();
}

// Mostrar detalles del paseador
function mostrarDetallesPaseador(nombrePaseador) {
    const detalles = paseadores[nombrePaseador];
    tablaDetalles.clear(); // Limpiar datos previos

    detalles.forEach(detalle => {
        let fechaPaseo = detalle.fechaPaseo ? new Date(detalle.fechaPaseo).toLocaleDateString() : "Sin dato";
        let fechaCalificacion = detalle.fechaCalificacion ? new Date(detalle.fechaCalificacion).toLocaleDateString() : "Sin dato";
        let nombre_usuario = detalle.nombreUsuario || "Sin dato";
        let encuesta_contestada = detalle.contestada ? "Sí" : "No";
        let puntualidad = detalle.p1 ? "Sí" : "No";
        let vestimenta = detalle.p2 ? "Sí" : "No";
        let aromaterapia = detalle.p3 ? "Sí" : "No";
        let calificacion_promediada = detalle.Promediado ? "Sí" : "No";
        let calificacion = detalle.calificacion || "Sin dato";

        tablaDetalles.row.add([
            fechaPaseo,
            fechaCalificacion,
            nombre_usuario,
            encuesta_contestada,
            puntualidad,
            vestimenta,
            aromaterapia,
            calificacion_promediada,
            calificacion
        ]);
    });

    tablaDetalles.draw(); // Dibujar tabla con nuevos datos
    $('#modal-xl').modal('show'); // Mostrar el modal
}
