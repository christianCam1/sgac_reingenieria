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
</style>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Información del paseador</h1>
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
                            <div class="row">
                                <div class="col-md-3">
                                    <!-- Profile Image -->
                                    <div class="card card-primary card-outline">
                                        <div class="card-body box-profile">
                                            <h3 class="profile-username text-center">Usuario</h3>
                                            <div class="text-center">
                                                <img class="profile-user-img img-circle" id="img_usu"
                                                    alt="User profile picture">
                                            </div>
                                            <ul class="list-group list-group-unbordered mb-3">
                                                <li class="list-group-item">
                                                    <div class="form-group">
                                                        <label for="email" id="emailLabel">Correo</label>
                                                        <input type="text" class="form-control" id="email"
                                                            placeholder="" readonly />
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="form-group">
                                                        <label for="uid" id="uidLabel">UID</label>
                                                        <input type="text" class="form-control" id="uid" placeholder=""
                                                            readonly />
                                                    </div>
                                                <li class="list-group-item">
                                                    <div class="form-group ">
                                                        <label for="fecha_creacion" id="fecha_creacionLabel">Fecha
                                                            creación </label>
                                                        <input type="text" class="form-control" id="fecha_creacion"
                                                            placeholder="" readonly />
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="form-group ">
                                                        <label for="fecha_contratacion"
                                                            id="fecha_contratacionLabel">Fecha contratación </label>
                                                        <input type="text" class="form-control" id="fecha_contratacion"
                                                            placeholder="" readonly />
                                                    </div>
                                                </li>
                                                <li class="list-group-item" hidden>
                                                    <div class="form-group " style="display: none;">
                                                        <label for="etapa_postulacion" id="etapa_postulacionLabel">Etapa
                                                            postulación</label>
                                                        <input type="text" class="form-control" id="etapa_postulacion"
                                                            placeholder="" readonly />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->
                                </div>
                                <!-- /.col -->

                                <div class="col-md-9">
                                    <div class="card">
                                        <!-- Barra de navegacion para intercambiar menus -->
                                        <div class="card-header p-2">
                                            <ul class="nav nav-pills">
                                                <li class="nav-item"><a class="nav-link active" href="#datos"
                                                        data-toggle="tab">Datos</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#documentos"
                                                        data-toggle="tab">Documentos</a></li>
                                            </ul>
                                        </div><!-- /.card-header -->
                                        <div class="card-body">

                                            <div class="tab-content">
                                                <div class="active tab-pane" id="datos">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Datos personales 1 de 4</h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="form-group">
                                                                        <label for="nom" id="nomLabel">Nombre(s)</label>
                                                                        <input type="text" class="form-control" id="nom"
                                                                            placeholder="" />
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="ap" id="apLabel">Apellido
                                                                            Paterno</label>
                                                                        <input type="text" class="form-control" id="ap"
                                                                            placeholder="" />
                                                                    </div>
                                                                    <div class="form-group ">
                                                                        <label for="am" id="amLabel">Apellido materno
                                                                        </label>
                                                                        <input type="text" class="form-control" id="am"
                                                                            placeholder="" />
                                                                    </div>
                                                                    <div class="form-group ">
                                                                        <label for="cel" id="celLabel">Celular (10
                                                                            dígitos)</label>
                                                                        <input type="text" class="form-control" id="cel"
                                                                            placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <!-- /.card-body -->
                                                            </div>
                                                            <!-- /.card -->
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Datos personales 2 de 4</h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="form-group">
                                                                        <label for="genero"
                                                                            id="generoLabel">Genero</label>
                                                                        <select id="genero" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option value="Femenino">Femenino</option>
                                                                            <option value="Masculino">Masculino</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group ">
                                                                        <label for="curp" id="curpLabel">CURP (16
                                                                            dígitos)</label>
                                                                        <input type="text" class="form-control"
                                                                            id="curp" placeholder="" />
                                                                    </div>
                                                                    <div class="form-group ">
                                                                        <label for="edad" id="edadLabel">Fecha de
                                                                            nacimiento</label>
                                                                        <input type="date" class="form-control"
                                                                            id="fnac" placeholder="" />
                                                                    </div>
                                                                    <div class="form-group ">
                                                                        <label for="talla" id="tallaLabel">Talla de
                                                                            playera</label>
                                                                        <select id="talla" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option value="Chica">Chica</option>
                                                                            <option value="Mediana">Mediana</option>
                                                                            <option value="Grande">Grande</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Datos personales 3 de 4</h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="form-group">
                                                                        <label for="nomref1" id="nomref1Label">Nombre
                                                                            completo de referencia 1</label>
                                                                        <input type="text" class="form-control"
                                                                            id="nomref1" placeholder="" />
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="celref1" id="celref1Label">Celular
                                                                            (10 dígitos)</label>
                                                                        <input type="text" class="form-control"
                                                                            id="celref1" placeholder="" />
                                                                    </div>
                                                                    <div class="form-group ">
                                                                        <label for="nomref2" id="nomref2Label">Nombre
                                                                            completo de referencia 2</label>
                                                                        <input type="text" class="form-control"
                                                                            id="nomref2" placeholder="" />
                                                                    </div>
                                                                    <div class="form-group ">
                                                                        <label for="celref2" id="celref2Label">Celular
                                                                            (10 dígitos)</label>
                                                                        <input type="text" class="form-control"
                                                                            id="celref2" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <!-- /.card-body -->
                                                            </div>
                                                            <!-- /.card -->
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Datos personales 4 de 4</h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="form-group">
                                                                        <label for="banco" id="bancoLabel">Banco</label>
                                                                        <select id="banco" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option value="CITI BANAMEX">CITI BANAMEX
                                                                            </option>
                                                                            <option value="BBVA BANCOMER">BBVA BANCOMER
                                                                            </option>
                                                                            <option value="SANTANDER">SANTANDER</option>
                                                                            <option value="HSBC">HSBC</option>
                                                                            <option value="BANBAJIO">BANBAJIO</option>
                                                                            <option value="IXE">IXE</option>
                                                                            <option value="INBURSA">INBURSA</option>
                                                                            <option value="SCOTIABANK">SCOTIABANK
                                                                            </option>
                                                                            <option value="BANREGIO">BANREGIO</option>
                                                                            <option value="AFIRME">AFIRME</option>
                                                                            <option value="BANORTE">BANORTE</option>
                                                                            <option value="AMERICAN EXPRESS">AMERICAN
                                                                                EXPRESS</option>
                                                                            <option value="BANCO AZTECA">BANCO AZTECA
                                                                            </option>
                                                                            <option value="BANCOPPEL">BANCOPPEL</option>
                                                                            <option value="OTRO">OTRO</option>
                                                                        </select>
                                                                    </div>

                                                                    <div class="form-group ">
                                                                        <label for="clabe" id="clabeLabel">Clabe
                                                                            interbancaria (18 dígitos)</label>
                                                                        <input type="text" class="form-control"
                                                                            id="clabe" placeholder="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12 ">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Dirección 1 de 2</h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="calle"
                                                                                    id="calleLabel">Calle</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="calle" placeholder="" />
                                                                            </div>
                                                                            <div class="form-group ">
                                                                                <label for="numInt"
                                                                                    id="numIntLabel">Número
                                                                                    interior</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="numInt" placeholder="" />
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for="cp" id="cpLabel">Codigo
                                                                                    postal</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="cp" placeholder="" />
                                                                            </div>
                                                                            <div class="form-group ">
                                                                                <label for="est"
                                                                                    id="estLabel">Estado</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="est" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label for="col"
                                                                                    id="colLabel">Colonia</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="col" placeholder="" />
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for="numExt"
                                                                                    id="numExtLabel">Número
                                                                                    exterior</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="numExt" placeholder="" />
                                                                            </div>
                                                                            <div class="form-group ">
                                                                                <label for="alcMun"
                                                                                    id="alcMunLabel">Alcaldía /
                                                                                    Municipio </label>
                                                                                <input type="text" class="form-control"
                                                                                    id="alcMun" placeholder="" />
                                                                            </div>
                                                                            <div class="form-group ">
                                                                                <label for="pais"
                                                                                    id="paisLabel">País</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="pais" placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="form-group ">
                                                                                <label for="referenciaDomicilio"
                                                                                    id="referenciaDomicilioLabel">Referencias
                                                                                    o
                                                                                    comentario</label>
                                                                                <input type="text" class="form-control"
                                                                                    id="referenciaDomicilio"
                                                                                    placeholder="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 ">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Dirección 2 de 2</h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="pac-card" id="pac-card">
                                                                        <div>
                                                                            <div id="title">Buscar</div>

                                                                        </div>
                                                                        <div id="pac-container">
                                                                            <input id="pac-input" type="text"
                                                                                placeholder="Introduce una dirección" />
                                                                        </div>
                                                                    </div>
                                                                    <div id="map"
                                                                        style="width:100%;height:400px;text-align:center">
                                                                    </div>
                                                                    <div id="infowindow-content">
                                                                        <img src="" width="16" height="16"
                                                                            id="place-icon" />
                                                                        <span id="place-name"
                                                                            class="title"></span><br />
                                                                        <span id="place-address"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Experiencia laboral 1 de 2
                                                                    </h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="form-group">
                                                                        <label for="tiempo" id="tiempoLabel">¿Tiempo que
                                                                            pretendes dedicarle a CaminanDog?</label>
                                                                        <select id="tiempo" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option value="Tiempo completo">Tiempo
                                                                                completo</option>
                                                                            <option value="Medio tiempo (Matutino)">
                                                                                Medio tiempo (Matutino)</option>
                                                                            <option value="Medio tiempo (Vespertino)">
                                                                                Medio tiempo (Vespertino)</option>
                                                                            <option value="Esporádico o Flexible">
                                                                                Esporádico o Flexible</option>
                                                                            <option value="Solo fines de semana">Solo
                                                                                fines de semana</option>


                                                                        </select>
                                                                    </div>



                                                                    <div class="form-group">
                                                                        <label for="actividad" id="actividadLabel">¿Cúal
                                                                            es tu actividad principal
                                                                            actualmente</label>
                                                                        <input type="text" class="form-control"
                                                                            id="actividad" placeholder="" />

                                                                    </div>


                                                                    <div class="form-group ">
                                                                        <label for="munTrabajo" id="munTrabajoLabel">¿En
                                                                            que Municipio/ Alcaldía te gustaría
                                                                            trabajar?</label>
                                                                        <select id="munTrabajo" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option value="Benito Juárez">Benito Juárez
                                                                            </option>
                                                                            <option value="Cuauhtémoc">Cuauhtémoc
                                                                            </option>
                                                                            <option value="Coyoacán">Coyoacán</option>
                                                                            <option value="Miguel Hidalgo">Miguel
                                                                                Hidalgo</option>
                                                                            <option value="Otro">Otro</option>
                                                                        </select>
                                                                    </div>


                                                                    <div class="form-group ">
                                                                        <label for="medioTransporte"
                                                                            id="medioTransporteLabel">¿Cuentas con algun
                                                                            medio de
                                                                            transporte?</label>
                                                                        <select id="medioTransporte"
                                                                            class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option value="Automóvil">Automóvil</option>
                                                                            <option value="Motocicleta">Motocicleta
                                                                            </option>
                                                                            <option value="Bicicleta">Bicicleta</option>
                                                                            <option value="Patineta o Scooter">Patineta
                                                                                o Scooter</option>
                                                                            <option value="No cuento con ninguno">No
                                                                                cuento con ninguno</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Experiencia laboral 2 de 2
                                                                    </h3>
                                                                    <div class="card-tools">
                                                                        <button type="button" class="btn btn-tool"
                                                                            data-card-widget="collapse"><i
                                                                                class="fas fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="form-group ">
                                                                        <label for="tiempoExp"
                                                                            id="tiempoExpLabel">¿Tiempo de experiencia
                                                                            como paseador?</label>
                                                                        <select id="tiempoExp" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option value="Menos de un año">Menos de un
                                                                                año</option>
                                                                            <option value="De 1 a 2 años">De 1 a 2 años
                                                                            </option>
                                                                            <option value="De 3 a 4 años">De 3 a 4 años
                                                                            </option>
                                                                            <option value="5 o más años">5 o más años
                                                                            </option>
                                                                        </select>
                                                                    </div>


                                                                    <div class="form-group ">
                                                                        <label for="tipoExp" id="tipoExpLabel">¿Tipo de
                                                                            experiencia?</label>
                                                                        <select id="tipoExp" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option
                                                                                value="Pasear perros de conocidos, de amigos o de vecinos">
                                                                                Pasear perros de conocidos, de
                                                                                amigos o de vecinos</option>
                                                                            <option
                                                                                value="Pasear perros de veterinarias, de hospitales u hoteles de perros que me han requerido">
                                                                                Pasear perros de veterinarias, de
                                                                                hospitales u hoteles de perros que me
                                                                                han requerido</option>
                                                                            <option
                                                                                value="De contactos de plataformas digitales a las que me he suscrito">
                                                                                De contactos de
                                                                                plataformas digitales a las que me he
                                                                                suscrito</option>
                                                                            <option
                                                                                value="De terceras personas que me han contactado">
                                                                                De terceras personas que me han
                                                                                contactado</option>
                                                                        </select>
                                                                    </div>


                                                                    <div class="form-group ">
                                                                        <label for="medioPromo"
                                                                            id="medioPromoLabel">¿Has utilizado algún
                                                                            medio digital para
                                                                            promocionarte?</label>
                                                                        <select id="medioPromo" class="form-control">
                                                                            <option disabled selected value> -----
                                                                            </option>
                                                                            <option
                                                                                value="Plataformas de paseo y hosting">
                                                                                Plataformas de paseo y hosting</option>
                                                                            <option
                                                                                value="Tarjetas de presentación o publicidad impresa">
                                                                                Tarjetas de presentación o
                                                                                publicidad impresa</option>
                                                                            <option
                                                                                value="Redes sociales y grupos de Facebook o Whatsapp">
                                                                                Redes sociales y grupos de Facebook
                                                                                o Whatsapp</option>
                                                                            <option
                                                                                value="No he utilizado ningún medio">No
                                                                                he utilizado ningún medio</option>
                                                                        </select>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn btn-primary btn-lg float-right"
                                                        id="siguiente" onclick="guardar_cambios_formulario()"><i
                                                            class="fa-regular fa-floppy-disk"></i> Guardar Cambios
                                                    </button>
                                                </div>
                                                <!-- /.tab-pane -->

                                                <div class="tab-pane" id="documentos">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Documentos 1 de 2</h3>
                                                                    <br>
                                                                    <br>
                                                                    <h6 class="text-muted">Para sustituir un documento,
                                                                        primero elimina el documento actual</h6>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="form-group">
                                                                        <label>Agregar foto de perfil</label>
                                                                        <br><br>
                                                                        <div class="row">
                                                                            <div class="col">
                                                                                <label class="custom-file-upload">
                                                                                    <input type="file"
                                                                                        id="foto_perfil_input" />
                                                                                    <img
                                                                                        src="../public/img/subir_foto.png"></img>
                                                                                    Buscar archivo
                                                                                </label>
                                                                                <!-- <span
                                                                                    class="btn btn-success col fileinput-button dz-clickable">
                                                                                    <i class="fas fa-plus"></i>
                                                                                    <span>Add files</span>
                                                                                </span> -->
                                                                            </div>
                                                                            <div class="col">
                                                                                <img src="" id="foto_perfil"
                                                                                    onclick="ver_imagen(this)"
                                                                                    class="img_documentos"></img>
                                                                            </div>
                                                                            <br>
                                                                            <br>
                                                                            <hr>

                                                                            <label>Agregar identificación oficial
                                                                                (Frontal)</label>
                                                                            <br><br>
                                                                            <div class="row">
                                                                                <div class="col">
                                                                                    <label class="custom-file-upload">
                                                                                        <input type="file"
                                                                                            id="foto_identificacionf_input" />
                                                                                        <img
                                                                                            src="../public/img/subir_foto.png"></img>
                                                                                        Buscar archivo
                                                                                    </label>

                                                                                </div>
                                                                                <div class="col">
                                                                                    <img src=""
                                                                                        id="foto_identificacionf"
                                                                                        onclick="ver_imagen(this)"
                                                                                        class="img_documentos"></img>
                                                                                </div>
                                                                            </div>
                                                                            <hr>
                                                                            <label>Agregar identificación oficial
                                                                                (Trasera)</label>
                                                                            <br><br>
                                                                            <div class="row">
                                                                                <div class="col">
                                                                                    <label class="custom-file-upload">
                                                                                        <input type="file"
                                                                                            id="foto_identificaciont_input" />
                                                                                        <img
                                                                                            src="../public/img/subir_foto.png"></img>
                                                                                        Buscar archivo
                                                                                    </label>
                                                                                </div>
                                                                                <div class="col">
                                                                                    <img src=""
                                                                                        id="foto_identificaciont"
                                                                                        onclick="ver_imagen(this)"
                                                                                        class="img_documentos"></img>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- /.card-body -->
                                                            </div>
                                                            <!-- /.card -->
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="card card-primary card-outline">
                                                                <div class="card-header">
                                                                    <h3 class="card-title">Documentos 2 de 2</h3>
                                                                </div>
                                                                <div class="card-body">
                                                                    <label>Agregar acta de nacimiento</label>
                                                                    <br><br>
                                                                    <div class="row">
                                                                        <div class="col">


                                                                            <label class="custom-file-upload">
                                                                                <input type="file"
                                                                                    id="foto_acta_input" />
                                                                                <img
                                                                                    src="../public/img/subir_foto.png"></img>
                                                                                Buscar archivo
                                                                            </label>
                                                                        </div>
                                                                        <div class="col">
                                                                            <img src="" id="foto_acta"
                                                                                onclick="ver_imagen(this)"
                                                                                class="img_documentos"></img>
                                                                        </div>
                                                                    </div>
                                                                    <br>
                                                                    <hr>
                                                                    <label>Agregar comprobante de domicilio</label>
                                                                    <br><br>
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <label class="custom-file-upload">
                                                                                <input type="file"
                                                                                    id="foto_comprobante_input" />
                                                                                <img
                                                                                    src="../public/img/subir_foto.png"></img>
                                                                                Buscar archivo
                                                                            </label>

                                                                        </div>
                                                                        <div class="col">
                                                                            <img src="" id="foto_comprobante"
                                                                                onclick="ver_imagen(this)"
                                                                                class="img_documentos"></img>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- /.card-body -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /.tab-pane -->
                                            </div>
                                            <!-- /.tab-content -->
                                        </div><!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->
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

<script src="<?php echo $URL; ?>/app/controllers/paseadores/paseadorDetalle.js"></script>

<!-- Page specific script -->