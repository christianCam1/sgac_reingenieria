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
                    <h1 class="m-0">Alta y baja de paseadores</h1>
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

                        <div class="card-body" style="display: block;">
                            <div class="row">
                                <div class="col-md-6">
                                    <h3>Alta de paseador </h3>
                                    <FONT COLOR="gray">Nota: Ingresa el correo electrónico con el que se dará de alta el
                                        perfil
                                        de paseador, recuerda que deberá no estar previamente registrado. </FONT>
                                    <br>
                                    <br>
                                    <div class="input-group mb-3">
                                        <input type="text" id="emailalta" name="user_name" class="form-control">
                                        <!-- <div class="input-group-prepend"> -->
                                        <button type="button" class="btn btn-info" id="qqa"
                                            onclick="consulta_alta()">Iniciar Alta</button>
                                        <!-- </div> -->
                                        <!-- /btn-group -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3>Baja de paseador </h3>
                                    <FONT COLOR="gray">Nota: Ingresa el correo electrónico que deseas eliminar, recuerda
                                        que debe existir en la base de CaminanDog </FONT>
                                    
                                        <br>
                                    <br>
                                    <div class="input-group mb-3">
                                        <input type="text" id="emailbaja" name="user_name" class="form-control">
                                        <!-- <div class="input-group-prepend"> -->
                                        <button type="button" class="btn btn-danger" id="q"
                                            onclick="consulta_baja()">Iniciar Baja</button>
                                        <!-- </div> -->
                                        <!-- /btn-group -->
                                    </div>
                                </div>
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

<script src="<?php echo $URL; ?>/app/controllers/paseadores/consultaPaseadores.js"></script>

<!-- Page specific script -->