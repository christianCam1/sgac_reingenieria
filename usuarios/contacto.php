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
                    <h1 class="m-0">Contacto de usuarios</h1>
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
                            <h3 class="card-title" id="demo"></h3>
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
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="estatus">Estatus
                                        <select class="mdb-select md-form" id="comboEstatus">
                                            <option value="Seleccionar...">Seleccionar...</option>
                                            <option value="Nuevo">Nuevo</option>
                                            <option value="Interesado">Interesado</option>
                                            <option value="No interesado">No interesado</option>
                                            <option value="Numero Incorrecto">Numero incorrecto</option>
                                            <option value="No Contesto">No Contesto</option>
                                            <option value="Volver a marcar">Volver a marcar</option>
                                            <option value="Posible compra">Posible compra</option>
                                            <option value="Cliente">Cliente</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="estatus"> Tipo Usuarios
                                        <select class="mdb-select md-form" id="comboTipo">
                                            <option value="Seleccionar...">Seleccionar...</option>
                                            <option value="Cliente">Cliente</option>
                                            <option value="Cupon utilizado">Cupon utilizado</option>
                                            <option value="Cupon no utilizado">Cupon no utilizado</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Ultima LLamada</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Estatus</th>
                                            <th scope="col">Tipo Usuario</th>
                                            <th scope="col">Comentario</th>
                                            <th scope="col">Volver a marcar</th>
                                            <th scope="col">Timestamp volver (oculto)</th>
                                            <th scope="col">Timestamp ultima (oculto)</th>
                                            <th scope="col">UID</th>
                                            <th scope="col">Contactar</th>

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

<script src="<?php echo $URL; ?>/app/controllers/users/contacto.js"></script>

<!-- Page specific script -->