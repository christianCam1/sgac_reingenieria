<?php
include('layout/parte1.php');
?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-12">
          <!-- Mensaje de bienvenida al sistema -->
          <h1 class="m-0"><p id="user1"></p></h1> 
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
                            <h3 class="card-title">Mapa de Paseos</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>

                        <div class="card-body" style="display: block;">
                          <form>
                            <input type="text" name="coords" value="19.5031560714501,-99.23319306224586"/>
                            <input type="button" class="custom-button"  onclick="ShowMap(coords)" value="Buscar" />
                          </form>
                          <div id="map" style="width:100%;height:700px;"></div>
                        </div>

                    </div>
                </div>
            </div>
      </div>
    </div>
  <!-- /.content -->
</div>
<!-- Message log -->
<div id="log" ></div>
<script>
    // Esta función se ejecutará cuando la página haya cargado completamente
    document.addEventListener("DOMContentLoaded", function() {
        // Obtener las coordenadas del input
        var coordsInput = document.getElementsByName("coords")[0];
        // Llamar a la función ShowMap con las coordenadas actuales
        ShowMap(coordsInput);
    });
</script>

<!-- /.content-wrapper -->
<?php include('layout/parte2.php');

?>