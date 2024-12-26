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
                    <h1 class="m-0">Chat de Candidato</h1>
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
                        <!-- <div class="card-header">
                            <h3 class="card-title">Información y chat con el candidato</h3>
                            <div class="card-tools"> -->
                                <!-- <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button> -->
                            <!-- </div>
                        </div> -->

                        <div class="card-body" style="display: block;">
                            <!--     -->

                            <div class="row">
                                <div class="col-md-5">
                                    <div class="card card-primary card-outline">
                                        <div class="card-body box-profile">
                                            <div class="text-center">
                                                <img class="profile-user-img img-fluid img-circle" id="img_usu"
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
                                            <a class="btn btn-info btn-block" id="verinfo"
                                                onclick="verinformacioncandidato()"><b>Ver información del candidato</b></a>
                                            <a class="btn btn-info btn-block" id="cambiarA" data-toggle="modal"
                                                data-target="#myModal"><b>Cambiar Atención</b></a>
                                            <a class="btn btn-danger btn-block" id="siguiente"
                                                onclick="finalizarAtencion()"><b>Finalizar Atención</b></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <!-- DIRECT CHAT PRIMARY -->
                                    <div class="card card-primary card-outline direct-chat direct-chat-primary">
                                        <div class="card-header">
                                            <h3 class="card-title" id="usrChat"></h3>
                                            <!-- <div class="card-tools">
                                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div> -->
                                        </div>
                                        <!-- /.card-header -->
                                        <div class="card-body">
                                            <!-- Conversations are loaded here -->
                                            <div class="direct-chat-messages">
                                                <section id="mySection"> </section>
                                            </div>
                                            <!--/.direct-chat-messages-->
                                        </div>
                                        <!-- /.card-body -->
                                        <div class="card-footer">
                                            <form action="#" method="post">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" id="mensaje" placeholder=""
                                                        onkeydown="search(this)" />
                                                    <span class="input-group-append">
                                                        <button class="custom-button2" id="siguiente"
                                                            onclick="enviarMensaje()">Enviar</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <!-- /.card-footer-->
                                    </div>
                                    <!--/.direct-chat -->
                                </div>
                            </div>



                            <!-- Modal -->
                            <div class="modal fade" id="myModal" tabindex="-1" role="dialog"
                                aria-labelledby="myModalLabel">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title" id="myModalLabel">Cambiar Atención</h4>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close"><span aria-hidden="true">&times;</span></button>

                                        </div>
                                        <div class="modal-body">

                                            <select required id="ddlcolors" class="form-control input-sm">
                                                <option selected disabled value="">
                                                    <h6>-- Seleccionar compañero --</h6>
                                                </option>
                                                <option class="text-success text-center"
                                                    value="8ikQ8udhWKb91pySDBAaEt1JnRk2">Caren</option>
                                                <option class="text-success text-center"
                                                    value="3aNCxxQp8NOjkfEPiRX7JXY8kkd2">Josue</option>
                                                <option class="text-success text-center"
                                                    value="KXb1vyDGn4UY2qzp56gIIrrbmE62">Claudio</option>
                                                <option class="text-success text-center"
                                                    value="zIZ6h9Jo5MTaltZYdNb8NRIFNqo2">Brandon</option>
                                                <option class="text-success text-center"
                                                    value="ZIk7OrgukmRnQEpk9iZxQmyfmdf1">Alejandro</option>
                                            </select>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default"
                                                data-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-primary"
                                                onclick="cambiarAtencion()">Guardar</button>
                                        </div>

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
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?php include('../layout/parte2.php'); ?>

<script src="<?php echo $URL; ?>/app/controllers/paseadores/chatCaminandogCandidato.js"></script>

<!-- Page specific script -->