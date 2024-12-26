<?php
include('../layout/parte1.php');

?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js"></script>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Dispersión</h1>
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
                                <button type="button" class="btn btn-primary" onclick="dispersion()"><i
                                        class="fa-regular fa-floppy-disk"></i>
                                    Dispersion
                                </button>
                            </div>
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">UID</th>
                                            <th scope="col">order id</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">No. perros</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Inicio</th>
                                            <th scope="col">Fin</th>
                                            <th scope="col">Monto paseador</th>
                                        </tr>
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


<script src="<?php echo $URL; ?>/app/controllers/finanzas/dispersion.js"></script>

<!-- Page specific script -->

<!-- <script>
    $(document).ready(function () {
    $('#startDate').datetimepicker({
        format: 'L'

    });
    $('#endDate').datetimepicker({
        format: 'L'

    });

});
</script> -->