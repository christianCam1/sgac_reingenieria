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
                    <h1 class="m-0">Historial de Compras de Paseos</h1>

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
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>
                        <div class="usuarioSesion">
                            <p id="usuario"></p>

                        </div>
                        <div class="card-body" style="display: block;">
                            <!-- <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div> -->
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">UID</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Orden</th>
                                            <th scope="col">Descripción</th>
                                            <th scope="col">Paseos</th>
                                            <th scope="col">Cortesias</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Fecha(timestamp)</th>
                                            <th scope="col">Ultimo paseo paquete</th>
                                            <th scope="col">Ultimo paseo paquete(timestamp)</th>
                                            <th scope="col">Historico</th>
                                            <th scope="col">Generar Cortesia</th>
                                        </tr>
                                    </thead>
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

<script src="<?php echo $URL; ?>/app/controllers/paseos/historialCompras.js"></script>

<!-- Page specific script -->