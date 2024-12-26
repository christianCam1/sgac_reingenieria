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
                    <h1 class="m-0">Listado de candidatos</h1>
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
                            <h3 class="card-title">Candidatos registrados</h3>
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
                            <div class="table table-responsive">
                                <table id="tablaDatos" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">UID</th>
                                            <th scope="col">UID (Hidden)</th>
                                            <th scope="col">Correo</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Fecha de reg.</th>
                                            <th scope="col">Fecha de reg.(timestamp)</th>
                                            <th scope="col">Dirección </th>
                                            <th scope="col">Municipio trabajo</th>
                                            <th scope="col">Estatus</th>
                                            <th scope="col">Plataforma</th>
                                            <th scope="col">Registro</th>
                                            <th scope="col">Chat</th>
                                        </tr>
                                    </thead>
                                    </thead>
                                    <tbody id="tabla">
                                    </tbody>
                                    <tfoot hidden>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>UID</th>
                                            <th>UID (Hidden)</th>
                                            <th>Correo</th>
                                            <th>Telefono</th>
                                            <th>Fecha de reg</th>
                                            <th>Fecha de reg.(timestamp)</th>
                                            <th>Dirección</th>
                                            <th>Municipio trabajo</th>
                                            <th>Estatus</th>
                                            <th>P</th>
                                            <th>M</th>
                                            <th>C</th>
                                        </tr>
                                    </tfoot>
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

<script src="<?php echo $URL; ?>/app/controllers/paseadores/candidatos.js"></script>

<!-- Page specific script -->