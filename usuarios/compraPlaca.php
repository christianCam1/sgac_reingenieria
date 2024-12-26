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
                    <h1 class="m-0">Plaquitas para perros</h1>
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
                            <h3 class="card-title">Agrega la cantidad de plaquitas a comprar</h3>
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
                                <span id="place-name" class="title"></span><br />
                                <span id="place-address"></span>
                            </div>


                            <br>


                            <div class="form-group">
                                <label for="numInterior" id="numInteriorLabel">Número Interior</label>
                                <input type="text" class="form-control" id="numInterior" name="numInterior"
                                    placeholder="Ingresa el número interior" />
                            </div>



                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="numPlaquitas" id="numPlaquitasLabel">Plaquitas</label>

                                    <input type="number" class="form-control" id="numPlaquitas" name="numPlaquitas"
                                        min="1">

                                </div>


                                <div class="form-group col-md-3">
                                    <label for="pagoSeleccion" id="pagoSeleccionLabel"> Tipo :</label>
                                    <select id="pagoSeleccion" class="form-control">
                                        <option value="tarjetadc">Tarjeta de D/C</option>
                                        <option value="tic">Transferencia Interbancaria (Conekta)</option>
                                        <option value="eop">Efectivo Oxxo Pay</option>
                                        <option value="tdh">Transferencia directa (Humaniia)</option>
                                        <option value="Sin pago">Sin pago</option>

                                    </select>

                                </div>

                            </div>
                            <br>



                            <div class="row" id="rowDatosGenerales">
                                <div class="col-2"></div>
                                <div class="col">Direccion</div>
                                <div class="col" id="direccion">Uno</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Plaquitas</div>
                                <div class="col" id="paseos">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                            </div>

                            <br><br>

                            <div class="row" id="rowCosto">


                                <div class="col-2"></div>

                                <div class="col">Costo</div>
                                <div class="col" id="costo">Uno</div>


                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="col">Subtotal</div>
                                <div class="col" id="subtotal">Dos</div>


                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="col">Envio</div>
                                <div class="col" id="iva">Dos</div>

                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>



                                <div class="col">Total a pagar</div>
                                <div class="col" id="total">Dos</div>


                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                            </div>



                            <div class="container mt-3">

                                <div class="d-flex mb-3">

                                    <div class="p-2 mr-auto ">

                                        <button id="anterior" type="button"
                                            class="btn btn-block bg-gradient-info btn-sm text-white"
                                            onclick="anterior()"><i class="fa-solid fa-arrow-left"></i>
                                            Anterior</button>
                                        <!-- <button id="anterior"
                                            onclick="anterior()">Anterior</button>  -->
                                    </div>
                                    <div class="p-2 "> <button id="siguiente" type="button"
                                            class="btn btn-block bg-gradient-info btn-sm text-white"
                                            onclick="siguiente()">Siguiente <i
                                                class="fa-solid fa-arrow-right"></i></button>
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

<script src="<?php echo $URL; ?>/app/controllers/users/compraPlaca.js"></script>

<!-- Page specific script -->