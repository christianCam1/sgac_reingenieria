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
                    <h1 class="m-0">Historico de paseos</h1>

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
                            <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div>
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">UID Paseador</th>
                                            <th scope="col">Direccion</th>
                                            <th scope="col">Orden</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Duracion</th>
                                            <th scope="col">Num Perros</th>
                                            <th scope="col">Tipo de paseo</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Fecha (timestamp)</th>
                                            <th scope="col">Ver</th>
                                            <th scope="col">Chat</th>
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

<script src="<?php echo $URL; ?>/app/controllers/paseos/historico.js"></script>

<!-- Page specific script -->