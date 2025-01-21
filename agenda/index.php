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
                    <h1 class="m-0">Listado de paseos agendados</h1>
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
                            <div id="loadingOverlay" class="overlay-wrapper">
                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div class="text-bold pt-2">&nbsp;&nbsp;Cargando...</div>
                                </div>
                            </div>
                            <div class="table table-responsive" id="tablaAgendaa">
                                <table id="tablaAgenda" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Orden ID</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Dias</th>
                                            <th scope="col">Tiempo</th>
                                            <th scope="col">Perros</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Nombre Perros</th>
                                            <th scope="col">Direccion</th>
                                            <th scope="col">Pais</th>
                                            <th scope="col">Moneda</th>
                                            <th scope="col">Dias Eleccion</th>
                                            <th scope="col">Acciones</th>
                                            <!-- <th scope="col">Cambiar fechas</th>
                                            <th scope="col">Ubicacion</th> -->
                                            <!--<th scope="col">Cambiar Ubicación</th>
                                            <th scope="col">Asignar</th>
                                            <th scope="col">Asignar Individual</th>
                                            <th scope="col">Eliminar paquete</th>
                                            <th scope="col">Ver compras</th> -->
                                        </tr>
                                    </thead>
                                    <tbody id="tabla">
                                    </tbody>
                                </table>
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

                            <!-- Estos botones realizan las funciones para cambiar las fechas -->
                            <div class="container mt-3">

                                <div class="d-flex mb-3">
                                    <div class="p-2 mr-auto ">
                                        <button class="btn btn-secondary" id="cancelar"
                                            onclick="cancelar()">Cancelar</button>
                                    </div>
                                    <div class="p-2 ">
                                        <button class="btn btn-primary" id="guardar"
                                            onclick="guardar()">Guardar</button>
                                    </div>
                                </div>

                            </div>

                            <div class="form-group">
                                <label for="paseo1" id="paseo1Label">Paseo 1</label>
                                <input type="text" class="form-control" id="paseo1"
                                    placeholder="Ingresa el paseador para el paseo 1" />
                            </div>

                            <div class="form-group">
                                <label for="paseo2" id="paseo2Label">Paseo 2</label>
                                <input type="text" class="form-control" id="paseo2"
                                    placeholder="Ingresa el paseador para el paseo 2" />
                            </div>

                            <div class="form-group">
                                <label for="paseo3" id="paseo3Label">Paseo 3</label>
                                <input type="text" class="form-control" id="paseo3"
                                    placeholder="Ingresa el paseador para el paseo 3" />
                            </div>

                            <div class="form-group">
                                <label for="paseo4" id="paseo4Label">Paseo 4</label>
                                <input type="text" class="form-control" id="paseo4"
                                    placeholder="Ingresa el paseador para el paseo 4" />
                            </div>

                            <div class="form-group">
                                <label for="paseo5" id="paseo5Label">Paseo 5</label>
                                <input type="text" class="form-control" id="paseo5"
                                    placeholder="Ingresa el paseador para el paseo 5" />
                            </div>

                            <div class="form-group">
                                <label for="paseo6" id="paseo6Label">Paseo 6</label>
                                <input type="text" class="form-control" id="paseo6"
                                    placeholder="Ingresa el paseador para el paseo 6" />
                            </div>

                            <div class="form-group">
                                <label for="paseo7" id="paseo7Label">Paseo 7</label>
                                <input type="text" class="form-control" id="paseo7"
                                    placeholder="Ingresa el paseador para el paseo 7" />
                            </div>

                            <div class="form-group">
                                <label for="paseo8" id="paseo8Label">Paseo 8</label>
                                <input type="text" class="form-control" id="paseo8"
                                    placeholder="Ingresa el paseador para el paseo 8" />
                            </div>

                            <div class="form-group">
                                <label for="paseo9" id="paseo9Label">Paseo 9</label>
                                <input type="text" class="form-control" id="paseo9"
                                    placeholder="Ingresa el paseador para el paseo 9" />
                            </div>

                            <div class="form-group">
                                <label for="paseo10" id="paseo10Label">Paseo 10</label>
                                <input type="text" class="form-control" id="paseo10"
                                    placeholder="Ingresa el paseador para el paseo 10" />
                            </div>

                            <div class="form-group">
                                <label for="paseo11" id="paseo11Label">Paseo 11</label>
                                <input type="text" class="form-control" id="paseo11"
                                    placeholder="Ingresa el paseador para el paseo 11" />
                            </div>

                            <div class="form-group">
                                <label for="paseo12" id="paseo12Label">Paseo 12</label>
                                <input type="text" class="form-control" id="paseo12"
                                    placeholder="Ingresa el paseador para el paseo 12" />
                            </div>

                            <div class="form-group">
                                <label for="paseo13" id="paseo13Label">Paseo 13</label>
                                <input type="text" class="form-control" id="paseo13"
                                    placeholder="Ingresa el paseador para el paseo 13" />
                            </div>

                            <div class="form-group">
                                <label for="paseo14" id="paseo14Label">Paseo 14</label>
                                <input type="text" class="form-control" id="paseo14"
                                    placeholder="Ingresa el paseador para el paseo 14" />
                            </div>

                            <div class="form-group">
                                <label for="paseo15" id="paseo15Label">Paseo 15</label>
                                <input type="text" class="form-control" id="paseo15"
                                    placeholder="Ingresa el paseador para el paseo 15" />
                            </div>

                            <div class="form-group">
                                <label for="paseo16" id="paseo16Label">Paseo 16</label>
                                <input type="text" class="form-control" id="paseo16"
                                    placeholder="Ingresa el paseador para el paseo 16" />
                            </div>

                            <div class="form-group">
                                <label for="paseo17" id="paseo17Label">Paseo 17</label>
                                <input type="text" class="form-control" id="paseo17"
                                    placeholder="Ingresa el paseador para el paseo 17" />
                            </div>

                            <div class="form-group">
                                <label for="paseo18" id="paseo18Label">Paseo 18</label>
                                <input type="text" class="form-control" id="paseo18"
                                    placeholder="Ingresa el paseador para el paseo 18" />
                            </div>

                            <div class="form-group">
                                <label for="paseo19" id="paseo19Label">Paseo 19</label>
                                <input type="text" class="form-control" id="paseo19"
                                    placeholder="Ingresa el paseador para el paseo 19" />
                            </div>

                            <div class="form-group">
                                <label for="paseo20" id="paseo20Label">Paseo 20</label>
                                <input type="text" class="form-control" id="paseo20"
                                    placeholder="Ingresa el paseador para el paseo 20" />
                            </div>

                            <div class="form-group">
                                <label for="paseo21" id="paseo21Label">Paseo 21</label>
                                <input type="text" class="form-control" id="paseo21"
                                    placeholder="Ingresa el paseador para el paseo 21" />
                            </div>

                            <div class="form-group">
                                <label for="paseo22" id="paseo22Label">Paseo 22</label>
                                <input type="text" class="form-control" id="paseo22"
                                    placeholder="Ingresa el paseador para el paseo 22" />
                            </div>

                            <div class="form-group">
                                <label for="paseo23" id="paseo23Label">Paseo 23</label>
                                <input type="text" class="form-control" id="paseo23"
                                    placeholder="Ingresa el paseador para el paseo 23" />
                            </div>

                            <div class="form-group">
                                <label for="paseo24" id="paseo24Label">Paseo 24</label>
                                <input type="text" class="form-control" id="paseo24"
                                    placeholder="Ingresa el paseador para el paseo 24" />
                            </div>

                            <div class="form-group">
                                <label for="paseo25" id="paseo25Label">Paseo 25</label>
                                <input type="text" class="form-control" id="paseo25"
                                    placeholder="Ingresa el paseador para el paseo 25" />
                            </div>

                            <div class="form-group">
                                <label for="paseo26" id="paseo26Label">Paseo 26</label>
                                <input type="text" class="form-control" id="paseo26"
                                    placeholder="Ingresa el paseador para el paseo 26" />
                            </div>

                            <div class="form-group">
                                <label for="paseo27" id="paseo27Label">Paseo 27</label>
                                <input type="text" class="form-control" id="paseo27"
                                    placeholder="Ingresa el paseador para el paseo 27" />
                            </div>

                            <div class="form-group">
                                <label for="paseo28" id="paseo28Label">Paseo 28</label>
                                <input type="text" class="form-control" id="paseo28"
                                    placeholder="Ingresa el paseador para el paseo 28" />
                            </div>

                            <div class="form-group">
                                <label for="paseo29" id="paseo29Label">Paseo 29</label>
                                <input type="text" class="form-control" id="paseo29"
                                    placeholder="Ingresa el paseador para el paseo 29" />
                            </div>

                            <div class="form-group">
                                <label for="paseo30" id="paseo30Label">Paseo 30</label>
                                <input type="text" class="form-control" id="paseo30"
                                    placeholder="Ingresa el paseador para el paseo 30" />
                            </div>

                            <!--Modal para cambiar categoria-->
                            <div id="modalPerros" class="modal fade show" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header bg-info text-light">
                                            <h5 class="modal-title" id="exampleModalLabel">Lista de categorias</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close"><span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <input type="text" id="oID" hidden>
                                            <input type="text" id="cID" hidden>
                                            <select required id="ddlcolors" class="form-control input-sm">
                                                <option selected disabled value="">
                                                    <h6>-- Seleccionar categoria --</h6>
                                                </option>
                                                <option class="text-success text-center" value="b">Basico</option>
                                                <option class="text-success text-center" value="s">Sport</option>
                                                <option class="text-success text-center" value="r">Rukys</option>
                                                <option class="text-success text-center" value="v">Vip</option>
                                            </select>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default"
                                                data-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-primary"
                                                onclick="guardarCat()">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--Modal para mostrar los perros-->
                            <div id="modalFechas" class="modal fade show" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header bg-info text-light">
                                            <h5 class="modal-title" id="exampleModalLabel">Lista de categorias</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close"><span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">

                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default"
                                                data-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-primary"
                                                onclick="guardarCat()">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Estos botones realizan las acciones para la asignacion de paseadores individual -->

                            <div class="container mt-3">
                                <div class="d-flex mb-3">
                                    <div class="p-2 mr-auto ">
                                        <button class="btn btn-secondary" id="cancelarAsignarPaseador"
                                            onclick="cancelarAsignarPaseador()">Cancelar</button>
                                    </div>
                                    <div class="p-2 ">
                                        <button class="btn btn-primary" id="guardarAsignarPaseador"
                                            onclick="guardarAsignarPaseador()">Guardar</button>
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

<script src="<?php echo $URL; ?>/app/controllers/agenda/agenda.js"></script>

<!-- Page specific script -->