<?php
include('../layout/parte1.php');

?>
<!-- <link rel="stylesheet" href="../public/css/estiloChat.css"> -->
<style>
form {
    width: 100%;
    margin: 0 auto;
    padding: 15px;
}

form p,
form input[type="submit"] {
    text-align: center;
    font-size: 50px;
}


input[type="radio"] {
    display: none;
    /*position: absolute;top: -1000em;*/
}

label {
    color: grey;
}

.clasificacion {
    direction: rtl;
    unicode-bidi: bidi-override;
}

label:hover,
label:hover~label {
    color: #00b0c5;
}

input[type="radio"]:checked~label {
    color: #00b0c5;
}

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
                    <h1 class="m-0">Listado de paseos diarios</h1>

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
                            <button class="btn btn-primary" id="paseosCalificar" onclick="no_calificados()">Paseos no
                                calificados</button>
                            <button class="btn btn-primary" id="paseosNormales" onclick="busca_paseos()">Volver</button>
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
                            <div class="table table-responsive" id="table_table_2_todo">
                                <table id="table_table_2" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order id</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Duracion</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Perritos</th>
                                            <th scope="col">Usuario</th>
                                            <th scope="col">Direccion</th>
                                            <th scope="col">Paseador</th>
                                            <th scope="col">Tracking</th>
                                            <th scope="col">Chat</th>
                                            <th scope="col">Calificar</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla2">
                                    </tbody>
                                </table>
                            </div>
                            <div class="table table-responsive" id="table_table_3_todo">
                                <table id="table_table_3" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order id</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Duracion</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Perritos</th>
                                            <th scope="col">Usuario</th>
                                            <th scope="col">Direccion</th>
                                            <th scope="col">Paseador</th>
                                            <th scope="col">Tracking</th>
                                            <th scope="col">Chat</th>
                                            <th scope="col">Calificar</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla3">
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="calificar">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Calificar paseo</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <!-- Date and time -->
                                        <div class="form-group">
                                            <center>
                                                <h6>Asigna una
                                                    estrella por cada elemento que haya cumplido el paseador
                                                    (disponibilidad, aromaterapia, tracking, uniforme,
                                                    puntualidad)</h6>
                                            </center>
                                            <form name="califForm">
                                                <p class="clasificacion">
                                                    <input id="radio2" type="radio" name="estrellas" value="4">
                                                    <label for="radio2">★ </label>
                                                    <input id="radio3" type="radio" name="estrellas" value="3">
                                                    <label for="radio3">★ </label>
                                                    <input id="radio4" type="radio" name="estrellas" value="2">
                                                    <label for="radio4">★ </label>
                                                    <input id="radio5" type="radio" name="estrellas" value="1">
                                                    <label for="radio5">★ </label>
                                                </p>
                                                <center>
                                                    <h6>Una vez calificado este paseo, este no se podra consultar desde
                                                        esta ventana (paseos Diarios</h6>
                                                </center>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-default"
                                            data-dismiss="modal">Salir</button>
                                        <button type="button" class="btn btn-primary" id="btnbtn">Guardar Cambios</button>
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

<script src="<?php echo $URL; ?>/app/controllers/paseos/paseosDiarios.js"></script>

<!-- Page specific script -->