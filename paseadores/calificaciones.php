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
                            <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div>
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Fecha Paseo (Oculto)</th>
                                            <th scope="col">Fecha Paseo</th>
                                            <th scope="col">Fecha Calificación (Oculto)</th>
                                            <th scope="col">Fecha Calificación</th>
                                            <th scope="col">Order ID</th>
                                            <th scope="col">ID Paseador</th>
                                            <th scope="col">Nombre Paseador</th>
                                            <th scope="col">ID Usuario</th>
                                            <th scope="col">Nombre Usuario</th>
                                            <th scope="col">Encuesta contestada</th>
                                            <th scope="col">Puntualidad</th>
                                            <th scope="col">Vestimenta</th>
                                            <th scope="col">Aromaterapia</th>
                                            <th scope="col">Calificación promediada</th>
                                            <th scope="col">Calificación</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tabla">
                                    </tbody>
                                </table>
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

<script src="<?php echo $URL; ?>/app/controllers/paseadores/calificaciones.js"></script>

<!-- Page specific script -->