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
                                <table id="tablaPaseadores" class="table table-striped table-bordered"
                                    style="width:100%">
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
                            <!-- <div id="detallesModal"
                                style="display: none; position: fixed; top: 20%; left: 50%; transform: translate(-50%, -20%); background: white; border: 1px solid #ccc; padding: 20px;">
                                <h2>Detalles del Paseador</h2>
                                <table id="tablaDetalles" class="display" style="width:100%">
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
                            </div> -->

                            <!--Modal para cambiar categoria-->
                            <div class="modal fade" id="modal-lg">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Large Modal</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <table id="tablaDetalles" class="display" style="width:100%">
                                                <thead>
                                                    <tr>
                                                        <th>Fecha de Paseo</th>
                                                        <th>Fecha de Calificación</th>
                                                        <th>Nombre del Usuario</th>
                                                        <th>Encuesta Contestada</th>
                                                        <th>Puntualidad</th>
                                                        <th>Vestimenta</th>
                                                        <th>Aromaterapia</th>
                                                        <th>Calificación Promediada</th>
                                                        <th>Calificación</th>                                                        
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                        <div class="modal-footer justify-content-between">
                                            <button type="button" class="btn btn-default"
                                                data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                    <!-- /.modal-content -->
                                </div>
                                <!-- /.modal-dialog -->
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

<script src="<?php echo $URL; ?>/app/controllers/paseadores/pruebaCalificaciones.js"></script>

<!-- Page specific script -->