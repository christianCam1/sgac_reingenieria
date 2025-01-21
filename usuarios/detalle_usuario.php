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
                    <h1 class="m-0">Contactar al usuario</h1>
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
                            <div class="card card-primary card-outline">
                                <div id="loadingOverlay" class="overlay-wrapper">
                                    <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                        <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h5 class="card-title" id="nombre">Nombre</h5>
                                            <p class="card-text" id="uid">UID</p>
                                            <p class="card-text" id="direccion">Dirección</p>
                                            <p class="card-text" id="telefono">Teléfono</p>
                                            <p class="card-text" id="email">Email</p>
                                            <p class="card-text" id="perritos">Perritos</p>
                                        </div>
                                        <div class="col-md-6">
                                            <center><img src="../public/img/perfil.png" alt="Photo"></center>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <br>
                                            <button onclick="inicioFinLlamada()" id="inicioFinButton"
                                                class="btn btn-block btn-primary">Iniciar LLamada</button>
                                        </div>

                                        <div class="col-md-4">
                                            <label for="comboDuracion">Duración</label>
                                            <select class="form-control select2" style="width: 100%;"
                                                id="comboDuracion">
                                                <option value="Seleccionar...">Seleccionar...</option>
                                                <option value="0">0 min</option>
                                                <option value="1">1 min</option>
                                                <option value="2">2 min</option>
                                                <option value="3">3 min</option>
                                                <option value="4">4 min</option>
                                                <option value="5">5 min</option>
                                                <option value="6">6 min</option>
                                                <option value="7">7 min</option>
                                                <option value="8">8 min</option>
                                                <option value="9">9 min</option>
                                                <option value="10">10 min</option>
                                                <option value="11">11 min</option>
                                                <option value="12">12 min</option>
                                                <option value="13">13 min</option>
                                                <option value="14">14 min</option>
                                                <option value="15">15 min</option>
                                                <option value="16">Más de 15 min</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="estatus">Estatus</label>
                                            <select class="form-control select2" style="width: 100%;" id="comboEstatus">
                                                <option value="Seleccionar...">Seleccionar...</option>
                                                <option value="Interesado">Interesado</option>
                                                <option value="No interesado">No interesado</option>
                                                <option value="Numero Incorrecto">Numero incorrecto</option>
                                                <option value="No Contesto">No Contesto</option>
                                                <option value="Volver a marcar">Volver a marcar</option>
                                                <option value="Posible compra">Posible compra</option>
                                                <option value="Cliente">Cliente</option>
                                            </select>
                                        </div>

                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h5 class="card-title">Comentario:</h5>
                                            <textarea class="form-control" id="comentario"
                                                rows="4"></textarea>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button type="button" class="btn btn-primary float-left"
                                                onclick="guardarRegistro()"><i class="fa-regular fa-floppy-disk"></i>
                                                Guardar Cambios
                                            </button>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="table table-responsive">
                                                <table id="tablaDatos" class="table table-striped table-bordered"
                                                    style="width:100%">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Comentario</th>
                                                            <th scope="col">Estatus</th>
                                                            <th scope="col">Ultima LLamada</th>
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

<script src="<?php echo $URL; ?>/app/controllers/users/detalleUsuario.js"></script>

<!-- Page specific script -->