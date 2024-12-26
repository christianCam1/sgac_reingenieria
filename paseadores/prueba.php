<?php
include('../layout/parte1.php');

?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Calificaciones</h1>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->


    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-12">
                    <div class="card card-outline card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Lista de calificaciones de usuarios</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>

                        <div class="card-body" style="display: block;">
                            <!-- <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div> -->
                            <div class="table table-responsive">
                                <table id="tablaPaseadores">
                                    <thead>
                                        <tr>
                                            <th>Nombre del Paseador</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                            <!-- Modal para mostrar detalles -->
                            <div id="detallesModal" style="display: none; position: fixed; top: 20%; left: 50%; transform: translate(-50%, -20%); background: white; border: 1px solid #ccc; padding: 20px;">
                                <h2>Detalles del Paseador</h2>
                                <table border="1">
                                    <thead>
                                        <tr>
                                            <th>Fecha de Paseo</th>
                                            <th>Calificación</th>
                                            <th>Nombre del Usuario</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <button onclick="cerrarModal()">Cerrar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>

</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?php include('../layout/parte2.php'); ?>

<!-- <script src="<?php echo $URL; ?>/app/controllers/paseadores/pruebaCalificaciones.js"></script> -->

<!-- Page specific script -->

<script>
    // Objeto para almacenar los datos agrupados por paseadores
const paseadores = {};

// Referencia a la base de datos Firebase
const ref = firebase.database().ref('Calificaciones');

// Escuchar cambios en la referencia
ref.on('child_added', datos => {
    const data = datos.val();

    // Agrupar datos por nombrePaseador
    if (!paseadores[data.nombrePaseador]) {
        paseadores[data.nombrePaseador] = [];
    }
    paseadores[data.nombrePaseador].push(data);

    // Renderizar tabla principal
    renderTablaPaseadores();
});

// Función para renderizar la tabla principal
function renderTablaPaseadores() {
    const tbody = document.getElementById('tablaPaseadores').querySelector('tbody');
    tbody.innerHTML = ''; // Limpiar contenido previo

    for (const paseador in paseadores) {
        const row = document.createElement('tr');

        // Columna: Nombre del Paseador
        const colNombre = document.createElement('td');
        colNombre.textContent = paseador;
        row.appendChild(colNombre);

        // Columna: Botón "Ver más"
        const colAccion = document.createElement('td');
        const btnVerMas = document.createElement('button');
        btnVerMas.textContent = 'Ver más';
        btnVerMas.onclick = () => mostrarDetallesPaseador(paseador);
        colAccion.appendChild(btnVerMas);
        row.appendChild(colAccion);

        tbody.appendChild(row);
    }
}

// Función para mostrar los detalles de un paseador
function mostrarDetallesPaseador(nombrePaseador) {
    const detalles = paseadores[nombrePaseador];
    const modal = document.getElementById('detallesModal');
    const tbody = modal.querySelector('tbody');

    // Limpiar tabla de detalles
    tbody.innerHTML = '';

    // Agregar filas con los detalles del paseador
    detalles.forEach(detalle => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date(detalle.fechaPaseo).toLocaleDateString()}</td>
            <td>${detalle.calificacion}</td>
            <td>${detalle.nombreUsuario}</td>
        `;
        tbody.appendChild(row);
    });

    // Mostrar el modal
    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('detallesModal').style.display = 'none';
}

</script>
