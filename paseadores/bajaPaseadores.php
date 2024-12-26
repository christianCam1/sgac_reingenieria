<?php
include('../layout/parte1.php');

?>
<style>
#snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #00B0C5;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
}

#snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }

    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }

    to {
        bottom: 0;
        opacity: 0;
    }

}


input.form-control:read-only {
    background-color: #fff;
}


input[type="file"] {
    display: none;
}

.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}

.img_documentos {
    width: 150px;
    height: 150px;
  
  }


button.b {
    position: absolute;
    right: 0;
    margin-right: 5%;
}
</style>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Baja de paseador</h1>
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
                    <div class="card card-outline card-danger">
                        <div class="card-header">
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>
                            <FONT COLOR="gray">Nota: Si el correo electrónico se encuentra en mas de una de las
                                referencias y/o
                                tiene un paseo activo no podrá ser eliminado </FONT>
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <input type="text" id="emailbaja" name="user_name">
                                </li>

                            </ul>
                        </div><!-- /.col -->
                        <div class="card-body" style="display: block;">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card card-danger card-outline">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                Candidato
                                            </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="row align-items-center" style="margin: 0.5em; ">
                                                <div class="col">
                                                    <div class="col">
                                                        <img src="../public/img/subir_foto.png" id="foto_perfilCand"
                                                            class="img_documentos"></img>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="container">
                                                        <div class="form-group">
                                                            <p style="color: gray; font-size: medium;">Nombre </p>
                                                            <h4 id="nombreCand">sin dato</h4>
                                                        </div>
                                                        <div class="form-group">
                                                            <p style="color: gray; font-size: medium;">Uid </p>
                                                            <h5 id="uidCand">sin dato</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="container">
                                                        <div class="form-group">
                                                            <h5>Fecha de creacion</h5>
                                                            <p style="font-size: medium;" id="fecCand">sin dato </p>
                                                        </div>
                                                        <div class="form-group">
                                                            <h5>Etapa de registro</h5>
                                                            <p style="font-size: medium;" id="etapaCand"> sin dato</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-danger btn-lg float-right"
                                                id="siguiente" onclick="bajaCandidato()"><i
                                                    class="fa-solid fa-trash"></i> Eiminar registro
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-12">
                                    <div class="card card-danger card-outline">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                Paseador
                                            </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="row align-items-center" style="margin: 0.5em; ">
                                                <div class="col">
                                                    <div class="col">
                                                        <img src="../public/img/subir_foto.png" id="foto_perfil"
                                                            class="img_documentos"></img>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="container">
                                                        <div class="form-group">
                                                            <p style="color: gray; font-size: medium;">Nombre </p>
                                                            <h4 id="nombrePas">sin dato</h4>
                                                        </div>
                                                        <div class="form-group">
                                                            <p style="color: gray; font-size: medium;">Uid </p>
                                                            <h5 id="uidPas">sin dato</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="container">
                                                        <div class="form-group">
                                                            <h5>Fecha de creacion</h5>
                                                            <p style="font-size: medium;" id="fecPas"> sin dato</p>
                                                        </div>
                                                        <div class="form-group">
                                                            <h5>Paseos activos</h5>
                                                            <p style="font-size: medium;" id="numpasAct">sin dato </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-danger btn-lg float-right"
                                                id="siguiente" onclick="bajaPaseador()"><i
                                                    class="fa-solid fa-trash"></i> Eiminar registro
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12" hidden>
                                    <div class="card card-danger card-outline">
                                        <div class="card-header">
                                            <h4 class="card-title w-100">
                                                Usuario
                                            </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="row align-items-center" style="margin: 0.5em; ">
                                                <div class="col">
                                                    <div class="col">
                                                        <img src="../public/img/subir_foto.png" id="foto_perfilUsr"
                                                            class="img_documentos"></img>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="container">
                                                        <div class="form-group">
                                                            <p style="color: gray; font-size: medium;">Nombre </p>
                                                            <h4 id="nombreUsr">sin dato</h4>
                                                        </div>
                                                        <div class="form-group">
                                                            <p style="color: gray; font-size: medium;">Uid </p>
                                                            <h5 id="uidUsr">sin dato</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="container">
                                                        <div class="form-group">
                                                            <h5>Fecha de creacion</h5>
                                                            <p style="font-size: medium;" id="fecUsr">sin dato </p>
                                                        </div>
                                                        <div class="form-group">
                                                            <h5>Etapa de registro</h5>
                                                            <p style="font-size: medium;" id="etapaUsr"> sin dato</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- /.col -->
                </div>
                <!-- /.row -->
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

<script src="<?php echo $URL; ?>/app/controllers/paseadores/bajaPaseadores.js"></script>

<!-- Page specific script -->