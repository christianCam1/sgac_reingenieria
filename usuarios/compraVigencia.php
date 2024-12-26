<?php
include('../layout/parte1.php');

?>
<link rel="stylesheet" href="../public/css/pedirPaseo.css">
<style>
    .transparent_button {
    border: none; /* Elimina el borde */
    background: transparent; /* Fondo transparente */
    padding: 0; /* Quita el relleno interno */
    margin: 0; /* Quita el margen */
    outline: none; /* Elimina el contorno cuando se hace clic */
    cursor: pointer; /* Cambia el cursor a la mano al pasar por encima */
}
</style>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Vigencia de placas</h1>
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
                            <h3 class="card-title">Agrega la cantidad de vigencias de plaquitas</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>

                        <div class="card-body" style="display: block;">
                            <div class="table-responsive">
                                <table id="tablaPerros" class="table table-striped">
                                    <thead class="bg2">
                                        <tr>
                                            <th scope="col" style="text-align:center">ID Perro</th>
                                            <th scope="col" style="text-align:center">Nombre</th>
                                            <th scope="col" style="text-align:center">Foto</th>
                                            <th scope="col" style="text-align:center">Vigencia Actual (time)</th>
                                            <th scope="col" style="text-align:center">Vigencia Actual</th>
                                            <th scope="col" style="text-align:center">Restar</th>
                                            <th scope="col" style="text-align:center">Sumar</th>
                                            <th scope="col" style="text-align:center">Años Agregados</th>
                                            <th scope="col" style="text-align:center">Vigencia Nueva (Time)</th>
                                            <th scope="col" style="text-align:center">Vigencia Nueva</th>


                                        </tr>
                                    </thead>
                                    <tbody id="tabla" style="text-align:center">
                                    </tbody>
                                </table>
                            </div>



                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="numVigencias" id="numVigenciasLabel">Vigencias Totales</label>

                                    <input type="number" class="form-control" id="numVigencias" name="numVigencias"
                                        min="0" readonly>

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
                                <div class="col d-flex justify-content-center align-items-center text-center">Vigencias</div>
                                <div class="col d-flex justify-content-center align-items-center text-center" id="paseos">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                            </div>

                            <br><br>

                            <div class="row" id="rowCosto">


                                <div class="col-2"></div>

                                <div class="col d-flex justify-content-center align-items-center text-center">Costo</div>
                                <div class="col d-flex justify-content-center align-items-center text-center" id="costo">Uno</div>


                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="col d-flex justify-content-center align-items-center text-center">Subtotal</div>
                                <div class="col d-flex justify-content-center align-items-center text-center" id="subtotal">Dos</div>


                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="col d-flex justify-content-center align-items-center text-center">Iva</div>
                                <div class="col d-flex justify-content-center align-items-center text-center" id="iva">Dos</div>

                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>



                                <div class="col d-flex justify-content-center align-items-center text-center">Total a pagar</div>
                                <div class="col d-flex justify-content-center align-items-center text-center" id="total">Dos</div>


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

<script src="<?php echo $URL; ?>/app/controllers/users/compraVigencia.js"></script>

<!-- Page specific script -->