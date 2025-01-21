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



                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="diasSeleccion" id="diasSeleccionLabel"> Paseos :</label>
                                    <select id="diasSeleccion" class="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-3">
                                    <label for="categoriaSeleccion" id="categoriaSeleccionLabel"> Categoria
                                        :</label>
                                    <select id="categoriaSeleccion" class="form-control">
                                        <option value="basico">Basico</option>
                                        <option value="sport">Sport</option>
                                        <option value="vip">VIP</option>
                                        <option value="rukys">Rukys</option>
                                    </select>

                                </div>


                                <div class="form-group col-md-3">
                                    <label for="tiempoSeleccion" id="tiempoSeleccionLabel"> Tiempo :</label>
                                    <select id="tiempoSeleccion" class="form-control">
                                        <option value="0.5">30 Minutos</option>
                                        <option value="1">1 Hora</option>
                                        <option value="1.5">90 Minutos</option>
                                        <option value="2">2 Horas</option>

                                    </select>

                                </div>

                                <div class="form-group col-md-3">
                                    <label for="pagoSeleccion" id="pagoSeleccionLabel"> Tipo :</label>
                                    <select id="pagoSeleccion" class="form-control">
                                        <option value="tarjetadc">Tarjeta de D/C</option>
                                        <option value="tic">Transferencia Interbancaria (Conekta)</option>
                                        <option value="eop">Efectivo Oxxo Pay</option>
                                        <option value="tdh">Transferencia directa (Humaniia)</option>
                                        <option value="Sin pago">Sin pago</option>
                                        <option value="Descuento">Descuento Caminandog</option>

                                    </select>

                                </div>

                                <div class="form-group col-md-6">
                                    <label for="paisPaseo" id="paisPaseoLabel"> Pais :</label>
                                    <input type="text" id="paisPaseo" class="form-control" disabled>

                                </div>

                                <div class="form-group col-md-6">
                                    <label for="tipoMoneda" id="tipoMonedaLabel"> Moneda :</label>
                                    <input type="text" id="tipoMoneda" class="form-control" disabled>

                                </div>

                            </div>

                            <!-- Date and time -->
                            <div class="form-group">
                                <label for="datetimepicker1" id="datetimepicker1Label">Fecha 1:</label>
                                <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker1" />
                                    <div class="input-group-append" data-target="#datetimepicker1"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker2" id="datetimepicker2Label">Fecha 2:</label>
                                <div class="input-group date" id="datetimepicker2" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker2" />
                                    <div class="input-group-append" data-target="#datetimepicker2"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker3" id="datetimepicker3Label">Fecha 3:</label>
                                <div class="input-group date" id="datetimepicker3" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker3" />
                                    <div class="input-group-append" data-target="#datetimepicker3"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>                            

                            <div class="form-group">
                                <label for="datetimepicker4" id="datetimepicker4Label">Fecha 4:</label>
                                <div class="input-group date" id="datetimepicker4" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker4" />
                                    <div class="input-group-append" data-target="#datetimepicker4"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker5" id="datetimepicker5Label">Fecha 5:</label>
                                <div class="input-group date" id="datetimepicker5" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker5" />
                                    <div class="input-group-append" data-target="#datetimepicker5"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker6" id="datetimepicker6Label">Fecha 6:</label>
                                <div class="input-group date" id="datetimepicker6" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker6" />
                                    <div class="input-group-append" data-target="#datetimepicker6"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker7" id="datetimepicker7Label">Fecha 7:</label>
                                <div class="input-group date" id="datetimepicker7" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker7" />
                                    <div class="input-group-append" data-target="#datetimepicker7"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker8" id="datetimepicker8Label">Fecha 8:</label>
                                <div class="input-group date" id="datetimepicker8" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker8" />
                                    <div class="input-group-append" data-target="#datetimepicker8"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker9" id="datetimepicker9Label">Fecha 9:</label>
                                <div class="input-group date" id="datetimepicker9" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker9" />
                                    <div class="input-group-append" data-target="#datetimepicker9"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker10" id="datetimepicker10Label">Fecha 10:</label>
                                <div class="input-group date" id="datetimepicker10" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker10" />
                                    <div class="input-group-append" data-target="#datetimepicker10"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker11" id="datetimepicker11Label">Fecha 11:</label>
                                <div class="input-group date" id="datetimepicker11" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker11" />
                                    <div class="input-group-append" data-target="#datetimepicker11"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker12" id="datetimepicker12Label">Fecha 12:</label>
                                <div class="input-group date" id="datetimepicker12" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker12" />
                                    <div class="input-group-append" data-target="#datetimepicker12"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker13" id="datetimepicker13Label">Fecha 13:</label>
                                <div class="input-group date" id="datetimepicker13" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker13" />
                                    <div class="input-group-append" data-target="#datetimepicker13"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker14" id="datetimepicker14Label">Fecha 14:</label>
                                <div class="input-group date" id="datetimepicker14" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker14" />
                                    <div class="input-group-append" data-target="#datetimepicker14"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker15" id="datetimepicker15Label">Fecha 15:</label>
                                <div class="input-group date" id="datetimepicker15" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker15" />
                                    <div class="input-group-append" data-target="#datetimepicker15"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="datetimepicker16" id="datetimepicker16Label">Fecha 16:</label>
                                <div class="input-group date" id="datetimepicker16" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker16" />
                                    <div class="input-group-append" data-target="#datetimepicker16"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker17" id="datetimepicker17Label">Fecha 17:</label>
                                <div class="input-group date" id="datetimepicker17" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker17" />
                                    <div class="input-group-append" data-target="#datetimepicker17"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker18" id="datetimepicker18Label">Fecha 18:</label>
                                <div class="input-group date" id="datetimepicker18" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker18" />
                                    <div class="input-group-append" data-target="#datetimepicker18"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker19" id="datetimepicker19Label">Fecha 19:</label>
                                <div class="input-group date" id="datetimepicker19" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker19" />
                                    <div class="input-group-append" data-target="#datetimepicker19"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker20" id="datetimepicker20Label">Fecha 20:</label>
                                <div class="input-group date" id="datetimepicker20" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker20" />
                                    <div class="input-group-append" data-target="#datetimepicker20"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker21" id="datetimepicker21Label">Fecha 21:</label>
                                <div class="input-group date" id="datetimepicker21" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker21" />
                                    <div class="input-group-append" data-target="#datetimepicker21"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker22" id="datetimepicker22Label">Fecha 22:</label>
                                <div class="input-group date" id="datetimepicker22" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker22" />
                                    <div class="input-group-append" data-target="#datetimepicker22"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker23" id="datetimepicker23Label">Fecha 23:</label>
                                <div class="input-group date" id="datetimepicker23" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker20" />
                                    <div class="input-group-append" data-target="#datetimepicker23"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker24" id="datetimepicker24Label">Fecha 24:</label>
                                <div class="input-group date" id="datetimepicker24" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker24" />
                                    <div class="input-group-append" data-target="#datetimepicker24"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker25" id="datetimepicker25Label">Fecha 25:</label>
                                <div class="input-group date" id="datetimepicker25" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker25" />
                                    <div class="input-group-append" data-target="#datetimepicker25"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker26" id="datetimepicker26Label">Fecha 26:</label>
                                <div class="input-group date" id="datetimepicker26" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker26" />
                                    <div class="input-group-append" data-target="#datetimepicker26"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker27" id="datetimepicker27Label">Fecha 27:</label>
                                <div class="input-group date" id="datetimepicker27" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker27" />
                                    <div class="input-group-append" data-target="#datetimepicker27"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker28" id="datetimepicker28Label">Fecha 28:</label>
                                <div class="input-group date" id="datetimepicker28" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker28" />
                                    <div class="input-group-append" data-target="#datetimepicker28"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker29" id="datetimepicker29Label">Fecha 29:</label>
                                <div class="input-group date" id="datetimepicker29" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker29" />
                                    <div class="input-group-append" data-target="#datetimepicker29"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="datetimepicker60" id="datetimepicker30Label">Fecha 30:</label>
                                <div class="input-group date" id="datetimepicker30" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input"
                                        data-target="#datetimepicker30" />
                                    <div class="input-group-append" data-target="#datetimepicker30"
                                        data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table id="tablaPerros" class="table table-striped">
                                    <thead class="bg2">
                                        <tr>
                                            <th scope="col" style="text-align:center">Nombre</th>
                                            <th scope="col" style="text-align:center">Foto</th>
                                            <th scope="col" style="text-align:center">Seleccionar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tablaPerrosbody" style="text-align:center">
                                    </tbody>
                                </table>
                            </div>



                            <div class="row" id="rowDatosGenerales">
                                <div class="col-2"></div>
                                <div class="col">Direccion</div>
                                <div class="col" id="direccion">Uno</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Paseos</div>
                                <div class="col" id="paseos">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha1Mostrar">Fecha 1</div>
                                <div class="col" id="fecha1"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"> </div>
                                <div class="col" id="fecha2Mostrar">Fecha 2</div>
                                <div class="col" id="fecha2"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha3Mostrar">Fecha 3</div>
                                <div class="col" id="fecha3"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>



                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha4Mostrar">Fecha 4 </div>
                                <div class="col" id="fecha4"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha5Mostrar">Fecha 5</div>
                                <div class="col" id="fecha5"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha6Mostrar">Fecha 6</div>
                                <div class="col" id="fecha6"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha7Mostrar">Fecha 7</div>
                                <div class="col" id="fecha7"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha8Mostrar">Fecha 8</div>
                                <div class="col" id="fecha8"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha9Mostrar">Fecha 9</div>
                                <div class="col" id="fecha9"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha10Mostrar">Fecha 10</div>
                                <div class="col" id="fecha10"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha11Mostrar">Fecha 11</div>
                                <div class="col" id="fecha11"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"> </div>
                                <div class="col" id="fecha12Mostrar">Fecha 12</div>
                                <div class="col" id="fecha12"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha13Mostrar">Fecha 13</div>
                                <div class="col" id="fecha13"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>



                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha14Mostrar">Fecha 14 </div>
                                <div class="col" id="fecha14"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha15Mostrar">Fecha 15</div>
                                <div class="col" id="fecha15"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha16Mostrar">Fecha 16</div>
                                <div class="col" id="fecha16"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha17Mostrar">Fecha 17</div>
                                <div class="col" id="fecha17"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha18Mostrar">Fecha 18</div>
                                <div class="col" id="fecha18"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha19Mostrar">Fecha 19</div>
                                <div class="col" id="fecha19"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha20Mostrar">Fecha 20</div>
                                <div class="col" id="fecha20"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha21Mostrar">Fecha 21</div>
                                <div class="col" id="fecha21"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"> </div>
                                <div class="col" id="fecha22Mostrar">Fecha 22</div>
                                <div class="col" id="fecha22"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha23Mostrar">Fecha 23</div>
                                <div class="col" id="fecha23"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>



                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha24Mostrar">Fecha 24 </div>
                                <div class="col" id="fecha24"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>


                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha25Mostrar">Fecha 25</div>
                                <div class="col" id="fecha25"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha26Mostrar">Fecha 26</div>
                                <div class="col" id="fecha26"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha27Mostrar">Fecha 27</div>
                                <div class="col" id="fecha27"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha28Mostrar">Fecha 28</div>
                                <div class="col" id="fecha28"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha29Mostrar">Fecha 29</div>
                                <div class="col" id="fecha29"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" id="fecha30Mostrar">Fecha 30</div>
                                <div class="col" id="fecha30"> </div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>

                                <div class="col">Categoria</div>
                                <div class="col" id="categoria">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Tiempo</div>
                                <div class="col" id="tiempo">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Perros</div>
                                <div class="col" id="numPerros">Dos</div>
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
                                <div class="col">Descuento</div>
                                <div class="col" id="descuento">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Subtotal</div>
                                <div class="col" id="subtotal">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Iva</div>
                                <div class="col" id="iva">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Total a pagar</div>
                                <div class="col" id="total">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Descuento Caminandog</div>
                                <div class="col" id="descuentoCaminandog">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Nuevo costo</div>
                                <div class="col" id="nuevoCosto">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">País</div>
                                <div class="col" id="country">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col">Tipo de moneda</div>
                                <div class="col" id="currencyCharge">Dos</div>
                                <div class="col-2"></div>
                                <div class="w-100"></div>
                                <div class="col-2"></div>
                                <div class="col" style="display:none">Pago Paseador</div>
                                <div class="col" id="pagoPaseador" style="display:none">Dos</div>
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

<?php include('../layout/parte2Dev.php'); ?>

<script src="<?php echo $URL; ?>/app/controllers/users/pedirPaseo.js"></script>

<!-- Page specific script -->