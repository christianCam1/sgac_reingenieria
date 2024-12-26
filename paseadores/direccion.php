<?php
include ('../layout/parte1.php');
?>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.css" />
<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/plug-ins/1.10.20/sorting/absolute.js"></script>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1 class="m-0">Dirección del candidato</h1>
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
                            <h3 class="card-title">Mapa de ubicación de dirección del candidato</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                        class="fas fa-minus"></i>
                                </button>
                            </div>

                        </div>

                        <div class="card-body" style="display: block;">
                            <p id="demo"></p>
                            <div id="map" style="width:100%;height:800px;"></div>
                            <!-- Message log -->
                            <div id="log"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.content -->
</div>

<!-- /.content-wrapper -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>
<!-- <script src="<?php echo $URL; ?>/app/controllers/users/users.js"></script> -->

<?php include ('../layout/parte2.php'); ?>

<script>
    var latitude = getAllUrlParams().latitud;
    var longitude = getAllUrlParams().longitud;
    var categoriaPaseo = getAllUrlParams().categoria;
    var perrosPaseo = getAllUrlParams().numperros;

    var db = firebase.database();
    var firebaseRef = db.ref("UNO");

    var ref2 = db.ref("Paseadores");

    var collection = new Array();


    //var markers = [];


    var circles = [];
    var markers = [];
    var geoFire = new GeoFire(firebaseRef);
    var geoQuery;


    log("This is latitude :" + latitude);
    log("This is longitude :" + longitude);


    var myLatlng = new google.maps.LatLng(latitude, longitude);
    var marker;


    var mapProp = {
        center: myLatlng,
        zoom: 13.2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);


    colormarker2 = "http://maps.google.com/mapfiles/ms/micons/blue.png";

    var Markermio = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: myLatlng,
        icon: colormarker2,
        draggable: true,
        map: map
    });


    google.maps.event.addListener(Markermio, 'dragend', function() {


        for (var i in circles) {
            circles[i].setMap(null);
        }


        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
            log("markers" + markers[i]);
        }
        collection = [];
        markers = [];




        /*markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];*/



        log("dragend " + Markermio.getPosition());

        log("dragend lng " + Markermio.getPosition().lng());

        var latitud = Markermio.getPosition().lat();
        var longitud = Markermio.getPosition().lng();

        var queryLocation = [Markermio.getPosition().lat(), Markermio.getPosition().lng()];
        myLatlng = new google.maps.LatLng(Markermio.getPosition().lat(), Markermio.getPosition().lng());

        var radius = 1500;
        var radius2 = radius * 2;
        var radius3 = radius * 3;


        var radiuskm = radius3 / 1000;

        cityCircle = new google.maps.Circle({
            strokeColor: '#66ff66',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#66ff66',
            fillOpacity: 0.30,
            map: map,
            center: myLatlng,
            radius: radius
        });


        circles.push(cityCircle);

        cityCircle2 = new google.maps.Circle({
            strokeColor: '#ffff4d',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#ffff4d',
            fillOpacity: 0.30,
            map: map,
            center: myLatlng,
            radius: radius2
        });

        circles.push(cityCircle2);
        cityCircle3 = new google.maps.Circle({
            strokeColor: '#ff4d4d',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#ff4d4d',
            fillOpacity: 0.15,
            map: map,
            center: myLatlng,
            radius: radius3
        });

        circles.push(cityCircle3);






        var infowindow = new google.maps.InfoWindow();

        // To add the marker to the map, call setMap()


        // Create a new GeoFire instance at the random Firebase location


        // Create the locations for each fish


        // Create a GeoQuery centered at fish2
        geoQuery = geoFire.query({
            center: queryLocation,
            radius: radiuskm
        });


        // Attach event callbacks to the query
        var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location) {
            var stringlocation = String(location);
            log(key + " entered the query. Hi " + stringlocation);

            stringlocation = stringlocation + "," + String(key)

            collection.push(stringlocation);



        });
        var onReadyRegistration = geoQuery.on("ready", function() {
            log("*** 'ready' event fired - cancelling query ***");
            geoQuery.cancel();
            log(collection);
            for (var i = 0; i < collection.length; i++) {


                log(collection[i]);


                // this will return an array with strings "1", "2", etc.
                temp = collection[i].split(",");
                log(temp[0]);
                log(temp[1]);
                log(temp[2]);




                var x = myFunction(temp[0], temp[1], temp[2],
                i); // Function is called, return value will end up in x
                log("aqui imprime x");
                log(x);

            }

        })
        var colormarker = "";

        function myFunction(lat, long, id, i) {

            ref2.orderByChild("idPaseador").equalTo(id).on("child_added", function(snapshot) {
                //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"

                var d = snapshot.val();

                {

                    log(d.nombre);
                    log(d.estatus);
                    log(d.idPaseador);


                    if (d.estatus == (1)) {

                        log(lat);
                        log(long);

                        log("ocupado");
                        colormarker = "http://maps.google.com/mapfiles/ms/micons/red.png";

                    } else {

                        console.log(perrosPaseo + " " + categoriaPaseo)

                        if (d.categoria == "") {

                            console.log("disponible");
                            colormarker = "http://maps.google.com/mapfiles/ms/micons/green.png";

                        } else if (categoriaPaseo != d.categoria) {

                            console.log("Categoria no compatible");
                            colormarker = "http://maps.google.com/mapfiles/ms/micons/orange.png";

                        } else if (categoriaPaseo == d.categoria) {

                            var totalPerros = parseInt(d.cantidadPerros) + parseInt(perrosPaseo)

                            if (d.categoria == "sport" && totalPerros > 2) {

                                console.log("Maximo perros excedido");
                                colormarker = "http://maps.google.com/mapfiles/ms/micons/orange.png";

                            } else if (d.categoria == "basico" && totalPerros > 4 || d.categoria ==
                                "rukys" && totalPerros > 4) {



                                console.log("Maximo perros excedido, perros = " + totalPerros);
                                colormarker = "http://maps.google.com/mapfiles/ms/micons/orange.png";

                            } else {

                                console.log("disponible");
                                colormarker = "http://maps.google.com/mapfiles/ms/micons/green.png";

                            }

                        }

                    }

                    /*var pointMarker
        
                markers.push(pointMarker = new google.maps.Marker({
                    map: map,
                    icon: colormarker,
                    position: new google.maps.LatLng(lat,long)
                    }));*/


                    var pointMarker = new google.maps.Marker({
                        animation: google.maps.Animation.DROP,
                        position: new google.maps.LatLng(lat, long),
                        icon: colormarker,

                        map: map
                    });

                    log(i);
                    google.maps.event.addListener(pointMarker, 'click', (function(pointMarker, i) {
                        return function() {

                            infowindow.setContent(id + "," + d.nombre +
                                ' <button onclick="abrirPaseadores(\'' + id +
                                '\')">Ver</button>' +
                                ' <button onclick="quitarCategoriaPerros(\'' + id +
                                '\',\'' + i + '\')">Limpiar</button>');

                            infowindow.open(map, pointMarker);
                        }
                    })(pointMarker, i));
                    markers.push(pointMarker);

                    log(temp[2]);


                }

            });

            // Function returns the product of a and b

            log(colormarker);
            return colormarker;
        }

    });


    function log(message) {
        var childDiv = document.createElement("div");
        var textNode = document.createTextNode(message);
        childDiv.appendChild(textNode);
        document.getElementById("log").appendChild(childDiv);
    }

    function getAllUrlParams(url) {

        // get query string from url (optional) or window
        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

        // we'll store the parameters here
        var obj = {};

        // if query string exists
        if (queryString) {

            // stuff after # is not part of query string, so get rid of it
            queryString = queryString.split('#')[0];

            // split our query string into its component parts
            var arr = queryString.split('&');

            for (var i = 0; i < arr.length; i++) {
                // separate the keys and the values
                var a = arr[i].split('=');

                // set parameter name and value (use 'true' if empty)
                var paramName = a[0];
                var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];


                if (typeof paramValue === 'string') paramValue = paramValue;

                // if the paramName ends with square brackets, e.g. colors[] or colors[2]
                if (paramName.match(/\[(\d+)?\]$/)) {

                    // create key if it doesn't exist
                    var key = paramName.replace(/\[(\d+)?\]/, '');
                    if (!obj[key]) obj[key] = [];

                    // if it's an indexed array e.g. colors[2]
                    if (paramName.match(/\[\d+\]$/)) {
                        // get the index value and add the entry at the appropriate position
                        var index = /\[(\d+)\]/.exec(paramName)[1];
                        obj[key][index] = paramValue;
                    } else {
                        // otherwise add the value to the end of the array
                        obj[key].push(paramValue);
                    }
                } else {
                    // we're dealing with a string
                    if (!obj[paramName]) {
                        // if it doesn't exist, create property
                        obj[paramName] = paramValue;
                    } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                        // if property does exist and it's a string, convert it to an array
                        obj[paramName] = [obj[paramName]];
                        obj[paramName].push(paramValue);
                    } else {
                        // otherwise add the property
                        obj[paramName].push(paramValue);
                    }
                }
            }
        }

        return obj;
    }



    function abrirPaseadores(id) {

        window.open('pag.html?uidPaseador=' + id, '_blank');
    }


    function quitarCategoriaPerros(id, idMarker) {

        for (i = 0; i < markers.length; i++) {

            console.log(i)

        }
        var db = firebase.database();

        var ref_paseador_correcto = db.ref("Paseadores").child(id).update({
            categoria: "",
            cantidadPerros: 0,
            verif_paseo: ""
        }).then(function() {


            console.log("id mark " + idMarker)
            colormarker = "http://maps.google.com/mapfiles/ms/micons/green.png";
            markers[idMarker].setIcon(colormarker)

        }).catch(function(error) {

        });
    }
</script>