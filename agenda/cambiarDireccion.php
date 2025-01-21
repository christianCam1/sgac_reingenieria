<?php
include('../layout/parte1.php');

?>
<style type="text/css">
/* Always set the map height explicitly to define the size of the div
       * element that contains the map. */

/* Optional: Makes the sample page fill the window. */
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

#description {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
}

#infowindow-content .title {
    font-weight: bold;
}

#infowindow-content {
    display: none;
}

#map #infowindow-content {
    display: inline;
}

.pac-card {
    margin: 10px 10px 0 0;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    font-family: Roboto;
}

#pac-container {
    padding-bottom: 12px;
    margin-right: 12px;
}

.pac-controls {
    display: inline-block;
    padding: 5px 11px;
}

.pac-controls label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
}

#pac-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    margin-left: 12px;
    padding: 0 11px 0 13px;
    text-overflow: ellipsis;
    width: 400px;
}

#pac-input:focus {
    border-color: #4d90fe;
}

#title {
    color: #fff;
    background-color: #4d90fe;
    font-size: 25px;
    font-weight: 500;
    padding: 6px 12px;
}


.demo-non-form {
    color: initial;
    width: 100%;
    padding: 10px;
    margin: 6px 0 12px 0;
    border: 1px solid #ccc;
    border-radius: 0;
    font-family: arial, verdana, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-appearance: none;
}

.external-container button.external-button {
    font-weight: 400;
    padding: 10px;
    margin: 6px 0 13px 0;
    width: 100%;
}
</style>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Editar direccion del paseo agendado</h1>
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
                            <div class="pac-card" id="pac-card">
                                <div>
                                    <div id="title">Buscar</div>

                                </div>
                                <div id="pac-container">
                                    <input id="pac-input" type="text" placeholder="Introduce una dirección" />
                                </div>
                            </div>
                            <div id="map" style="width:100%;height:500px;text-align:center"></div>
                            <div id="infowindow-content">
                                <img src="" width="16" height="16" id="place-icon" />
                                <span id="place-name" class="title"></span><br />
                                <span id="place-address"></span>
                            </div>


                            <br>


                            <div class="form-group">
                                <label for="numInterior" id="numInteriorLabel">Número Interior</label>
                                <input type="text" class="form-control" id="numInterior" name="numInterior"
                                    placeholder="Ingresa el número interior" />
                            </div>


                            <div class="row">


                                <div class="col-sm-4 ">

                                </div>

                                <div class="col-sm-4 ">

                                </div>

                                <div class="col-sm-4 ">
                                    <div class="card border-0">
                                        <body>
                                            <button class="btn btn-primary" id="siguiente" onclick="guardar_cambios()">Guardar cambios</button>
                                        </body>
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

<script src="<?php echo $URL; ?>/app/controllers/mapa/cambiarDireccion.js"></script>

<!-- Page specific script -->