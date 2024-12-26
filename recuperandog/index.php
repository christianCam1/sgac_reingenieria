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
                    <h1 class="m-0">Listado de compras de plaquitas</h1>
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
                        <!-- /.Tabla de información -->
                        <div class="card-body" style="display: block;">
                            <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div>
                            <div class="table table-responsive">
                                <table id="table_table_2" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Uid</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Celular</th>
                                            <th scope="col">Orden</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Direccion</th>
                                            <th scope="col">Fecha de Solicitud</th>
                                            <th scope="col">Fecha de Entrega</th>
                                            <th scope="col">Fecha de SolicitudT</th>
                                            <th scope="col">Fecha de EntregaT</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Fin Tabla de información -->
                        <!-- Modal -->
                        <div class="modal fade" id="modal-compras">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Asignar Fecha</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <!-- Date and time -->
                                        <div class="form-group">
                                            <center><label for="datetimepicker1" id="datetimepicker1Label">Asignar una
                                                    fecha de entrega para esta plaquita</label></center>
                                            <div class="input-group date" id="datetimepicker1"
                                                data-target-input="nearest">
                                                <input type="text" class="form-control datetimepicker-input"
                                                    data-target="#datetimepicker1" />
                                                <div class="input-group-append" data-target="#datetimepicker1"
                                                    data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-default"
                                            data-dismiss="modal">Salir</button>
                                        <button type="button" class="btn btn-primary" id="guardar">Guardar
                                            Cambios</button>
                                    </div>
                                </div>
                                <!-- /.modal-content -->
                            </div>
                            <!-- /.modal-dialog -->
                        </div>
                        <!-- /.modal -->
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

<?php include('../layout/parte2Dev.php'); ?>

<script src="<?php echo $URL; ?>/app/controllers/recuperandog/compras.js"></script>

<!-- Page specific script -->