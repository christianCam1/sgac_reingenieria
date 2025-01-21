<?php
include('../layout/parte1.php');

?>
<style>
/* Define el estilo para la clase personalizada */
.my-toast {
    font-size: 12px;
    /* Tamaño de fuente más pequeño */
    padding: 10px;
    /* Reduce el padding */
    width: 150px;
    /* Ajusta el ancho */
}
</style>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Listado de paseos activos</h1>

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
                            <h3 class="card-title">Selecciona un paseo para editarlo</h3>
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
                            <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div>

                            <div class="table table-responsive">
                                <table id="tablaPaseadores" class="table table-striped table-bordered"
                                    style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre Paseador</th>
                                            <th scope="col">UID</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Estatus</th>
                                            <th scope="col">No. perros</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Celular</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Ultima Vez</th>
                                            <th scope="col">Ultima Vez time</th>
                                            <th scope="col">Version</th>
                                            <th scope="col">Ver</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla">
                                    </tbody>
                                </table>
                            </div>
                            <div class="table table-responsive">
                                <table id="tabla_paseost" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre Usuario</th>
                                            <th scope="col">UID</th>
                                            <th scope="col">ID Orden</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Fecha timestamp</th>
                                            <th scope="col">Tiempo Paseo</th>
                                            <th scope="col">Numero Perros</th>
                                            <th scope="col">Nombre Perros</th>
                                            <th scope="col">Dirección</th>
                                            <th scope="col">Ver</th>
                                            <th scope="col">Cambiar Paseador</th>
                                            <th scope="col">Cambiar Fecha</th>
                                            <th scope="col">Cambiar ubicación</th>
                                            <th scope="col">Chat</th>
                                            <th scope="col">Reset Paseo </th>
                                            <th scope="col">Terminar Paseo</th>
                                            <th scope="col">Eliminar Paseo</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla_paseos">
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="modal-fechas">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Cambiar Fecha</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <!-- Date and time -->
                                        <div class="form-group">
                                            <center><label for="datetimepicker1" id="datetimepicker1Label">Asignar una fecha de entrega para esta plaquita</label></center>
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
                                        <button type="button" class="btn btn-primary" id="guardar" onclick="guardarHora()">Guardar Cambios</button>
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

<script src="<?php echo $URL; ?>/app/controllers/paseos/paseosActivos.js"></script>

<!-- Page specific script -->