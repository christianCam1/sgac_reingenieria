<?php
include('../layout/parte1.php');

?>
<link rel="stylesheet" href="../public/css/estiloChat.css">

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Chat de Usuario</h1>
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
                        <div class="card-body" style="display: block;">
                            <!-- <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div> -->
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h3 class="card-title">Paseo</h3>
                                        </div>
                                        <div class="card-body box-profile">
                                            <h4 class="profile-username text-center">ID Paseo:</h4>
                                            <h5 class="text-center" id="ord_id"></h5>
                                            <ul class="list-group list-group-unbordered mb-3">
                                                <li class="list-group-item">
                                                    <b>Categoria</b>
                                                    <H6 class="float-right" id="categoria_paseo"></H6>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>Duración</b>
                                                    <H6 class="float-right" id="duracion_paseo"></H6>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>Perritos</b>
                                                    <H6 class="float-right" id="perritos_paseo"></H6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h3 class="card-title">Usuario</h3>
                                        </div>
                                        <div class="card-body box-profile">
                                            <div class="text-center">
                                                <h3 class="card-title" id="usrChat"></h3>
                                            </div>
                                            <div class="text-center">
                                                <img class="profile-user-img img-circle" id="img_usu"
                                                    alt="User profile picture">
                                            </div>
                                            <h3 class="profile-username text-center" id="nom_usu"></h3>
                                            <ul class="list-group list-group-unbordered mb-3">
                                                <li class="list-group-item">
                                                    <b>Email</b>
                                                    <H6 class="float-right" id="email_usu"></H6>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>Teléfono</b>
                                                    <H6 class="float-right" id="tel_usu"></H6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h3 class="card-title">Paseador</h3>
                                        </div>
                                        <div class="card-body box-profile">
                                            <div class="text-center">
                                                <img class="profile-user-img img-circle" id="img_pas"
                                                    alt="User profile picture">
                                            </div>
                                            <h3 class="profile-username text-center" id="nom_pas"></h3>
                                            <ul class="list-group list-group-unbordered mb-3">
                                                <li class="list-group-item">
                                                    <b>Email</b>
                                                    <H6 class="float-right" id="email_pas"></H6>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>Teléfono</b>
                                                    <H6 class="float-right" id="tel_pas"></H6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <!-- DIRECT CHAT PRIMARY -->
                                    <div class="card card-primary card-outline direct-chat direct-chat-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Chat de usuario y paseador</h3>
                                        </div>
                                        <!-- /.card-header -->
                                        <div class="card-body">
                                            <div class="direct-chat-messages">
                                                <div id="mySection"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/.direct-chat -->
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?php include('../layout/parte2.php'); ?>

<script src="<?php echo $URL; ?>/app/controllers/paseos/chatUserPaseador.js"></script>

<!-- Page specific script -->