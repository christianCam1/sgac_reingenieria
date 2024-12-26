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
                            <h3 class="card-title" id="periodo"></h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>
                        <!-- /.Tabla de información -->
                        <div class="card-body" style="display: block;">
                        <h6>Generacion de codigos QR.</h6>
	<div class="container">
	<label id="lbl_paseoss">Generar un solo codigo.</label><br>
	<input id="item_txt" type="text" placeholder="Codigo a generar" style="margin:25px;">
	<button id="generarCodigo" class="btn btn-success" width="276">Generar</button> <a href="#" id="descargarCodigo" class="btn btn-success" width="276">Descargar</a><br>
<hr>
	</div>


	<div class="container">

	<label id="lbl_paseoss">Generar varios codigos.</label><br>
	<label id="lbl_paseos" style="margin:25px;">Ultimo Codigo generado:</label>
	<input id="item_txt_consulta" type="text" placeholder="Ultimo generado" ><br>

	<label id="lbl_paseos" style="margin:25px;">Numero de codigos a generar:</label>
	<input id="item_txt_varios" type="text" placeholder="Numero de codigos a generar" style="margin:25px;" >
	<button id="generarVarios" class="btn btn-success" width="276">Generar Varios</button> <a href="#" id="descargarVarios" class="btn btn-success" width="276">Descargar Varios</a>
<hr>
</div>

	<div class="container codigoQR" id="codigoQR"></div>
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
<script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
<script src="<?php echo $URL; ?>/app/controllers/recuperandog/qrCode.js"></script>
<script src="<?php echo $URL; ?>/app/controllers/recuperandog/generarQR.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip-utils/0.1.0/jszip-utils.min.js"></script>

<!-- Page specific script -->