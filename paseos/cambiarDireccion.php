<?php
include('../layout/parte1.php');

?>
<link rel="stylesheet" href="../public/css/pedirPaseo.css">
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Agendar paseos</h1>
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
                            <h3 class="card-title">Selecciona los paseos para agendar</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>

                        <div class="card-body" style="display: block;">
                            <div class="pac-card" id="pac-card">
                                <div>
                                    <div id="title">Buscar</div>

                                </div>
                                <div id="pac-container">
                                    <input id="pac-input" type="text" placeholder="Introduce una dirección" />
                                </div>
                            </div>
                            <div id="map" style="width:100%;height:400px;text-align:center"></div>
                            <div id="infowindow-content">
                                <img src="" width="16" height="16" id="place-icon" />
                                <span id="place-name" class="title"></span>
                                <span id="place-address"></span>
                            </div>

                            <div class="form-group">
                                <label for="numInterior" id="numInteriorLabel">Número Interior</label>
                                <input type="text" class="form-control" id="numInterior" name="numInterior"
                                    placeholder="Ingresa el número interior" />
                            </div>                            
                            <button type="button" class="btn btn-primary btn-lg float-right"
                                                        id="siguiente" onclick="guardar_cambios()"><i
                                                            class="fa-regular fa-floppy-disk"></i> Guardar Cambios
                                                    </button>



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

<script src="<?php echo $URL; ?>/app/controllers/mapa/cambiarDireccion.js"></script>

<!-- Page specific script -->
