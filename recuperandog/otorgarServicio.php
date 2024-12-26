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
                    <h1 class="m-0">Listado de paseadores</h1>
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
                            <h3 class="card-title"id="periodo"></h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>
                        <!-- /.Tabla de información -->
                        <div class="card-body" style="display: block;">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Minimo de paseos:</label>
                                        <div class="input-group mb-3">
                                            <input type="text" name="paseos" id="paseos" class="form-control rounded-0" value="">
                                            <span class="input-group-append">
                                                <button type="button" class="btn btn-info btn-flat" onclick="cambiarpaseos()" value="consultar">Consultar</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID Perro</th>
                                            <th scope="col">Nombre Perro</th>
                                            <th scope="col">Paseos</th>
                                            <th scope="col">UID</th>
                                            <th scope="col">Nombre Usuario</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Correo</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Fin Tabla de información -->

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

<script src="<?php echo $URL; ?>/app/controllers/recuperandog/otorgarServicio.js"></script>

<!-- Page specific script -->