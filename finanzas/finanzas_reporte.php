<?php
include('../layout/parte1.php');

?>
<style>
.bg {
    background-color: white;
    text-align: center;
    color: #00B0C5;
    font-size: 20px;
}

.bg2 {
    background-color: #00B0C5;
    text-align: center;
    color: white;
}

.badge {

    right: -15px;
}

list-group-item {
    position: relative;
}

.page,
:target~.default {
    display: none;
}

.default,
:target {
    display: block;
}

.text_nav {
    font-size: 30px;
    color: azure;
    font: bold;
    text-shadow: 1px 1px 30px rgb(0, 0, 0);
}


.edge-danger {
    box-shadow: 0 0 11px 2px #ff0303 !important;
}

.card-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}

.card-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.carrousel_padding {
    padding: 60px 60px 60px;

}

.center {
    margin: auto;
    width: 80%;

    padding: 10px;
}

.bg {
    /* The image used */
    background-color: white;
    text-align: center;
    color: #00B0C5;
    font-size: 20px;

}

.bg2 {
    /* The image used */
    background-color: #00B0C5;
    text-align: center;
    color: white;
}

.btn.btn-success {
    color: #fff;
    background-color: #00B0C5;
    border-color: #00B0C5;
}

.btn.btn-success.focus,
.btn.btn-success:focus {
    color: #00B0C5;
    background-color: white;
    border-color: #00B0C5;
    outline: none;
    box-shadow: none;
}

.btn.btn-success:hover {
    color: #00B0C5;
    background-color: white;
    border-color: #00B0C5;
    outline: none;
    box-shadow: none;
}

.btn.btn-success.active,
.btn.btn-success:active {
    color: #00B0C5;
    background-color: white;
    border-color: #00B0C5;
    outline: none;
}

.btn.btn-success.active.focus,
.btn.btn-success.active:focus,
.btn.btn-success.active:hover,
.btn.btn-success:active.focus,
.btn.btn-success:active:focus,
.btn.btn-success:active:hover {
    color: #00B0C5;
    background-color: white;
    border-color: #00B0C5;
    outline: none;
    box-shadow: none;
}

#myprogressBar {
    width: 1%;
    height: 30px;
    background-color: #00B0C5;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js"></script>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Reporte de finanzas</h1>
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
                            <h3 class="card-title">Paseadores registrados</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>

                        <div class="card-body" style="display: block;">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Fecha de inicio:</label>
                                            <div class="input-group date" id="startDate" data-target-input="nearest">
                                                <input type="text" id="startInput"
                                                    class="form-control datetimepicker-input" data-target="#startDate"
                                                    width="276" />
                                                <div class="input-group-append" data-target="#startDate"
                                                    data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Fecha de finalizacion:</label>
                                            <div class="input-group date" id="endDate" data-target-input="nearest">
                                                <input type="text" id="endInput"
                                                    class="form-control datetimepicker-input" data-target="#endDate"
                                                    width="276" />
                                                <div class="input-group-append" data-target="#endDate"
                                                    data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-info" onclick="dispersion()"><i
                                        class="fa-regular fa-floppy-disk"></i>
                                    Consultar
                                </button>
                                <br>
                            </div>
                            <div class="card-body" id="dash">
                                <div class="row">
                                    <div class="col-sm" style="margin-bottom:10px;">
                                        <div class="card ">
                                            <li class="list-group-item  bg2 border ">Total<br /><span
                                                    class="badge badge-primary badge-pill bg " id="tot"></span></li>
                                        </div>
                                    </div>

                                    <div class="col-sm" style="margin-bottom:10px;">
                                        <div class="card ">
                                            <li class="list-group-item  bg2 border ">Total Paseadores<br /><span
                                                    class="badge badge-primary badge-pill bg" id="tot2"></span></li>

                                        </div>
                                    </div>

                                    <div class="col-sm" style="margin-bottom:10px;">
                                        <div class="card ">
                                            <li class="list-group-item  bg2 border ">Total Conekta<br /><span
                                                    class="badge badge-primary badge-pill bg" id="tot3"></span></li>

                                        </div>
                                    </div>

                                    <div class="col-sm" style="margin-bottom:10px;">
                                        <div class="card ">
                                            <li class="list-group-item  bg2 border ">Total IVA<br /><span
                                                    class="badge badge-primary badge-pill bg" id="tot4"></span></li>

                                        </div>
                                    </div>

                                    <div class="col-sm" style="margin-bottom:10px;">
                                        <div class="card ">
                                            <li class="list-group-item  bg2 border ">Total Caminandog<br /><span
                                                    class="badge badge-primary badge-pill bg" id="tot5"></span></li>

                                        </div>
                                    </div>
                                    <div class="col-sm" style="margin-bottom:10px;">
                                        <div class="card ">
                                            <li class="list-group-item  bg2 border "># Paseos<br /><span
                                                    class="badge badge-primary badge-pill bg" id="tot6"></span></li>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order id</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col"># Paseos</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Monto Paseador</th>
                                            <th scope="col">Comision conekta</th>
                                            <th scope="col">IVA</th>
                                            <th scope="col">Monto Caminandog</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">UID</th>
                                    </thead>
                                    <tbody id="tabla2">
                                    </tbody>
                                </table>
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

<?php include('../layout/parte2Dev.php'); ?>


<script src="<?php echo $URL; ?>/app/controllers/finanzas/reporteFinanzas.js"></script>

<!-- Page specific script -->