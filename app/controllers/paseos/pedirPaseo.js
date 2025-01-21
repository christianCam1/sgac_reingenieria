var uid = getAllUrlParams().uid;
var originalID = getAllUrlParams().originalID;
var telefono;
var nombre;
var arrayPerrosSeleccionados = []

if (originalID != null) {
    document.getElementById("Sin_pago").selected = true;
    document.getElementById("1").selected = true;
    document.getElementById('tarjetadc').style.display = 'none';
    document.getElementById('tic').style.display = 'none';
    document.getElementById('eop').style.display = 'none';
    document.getElementById('tdh').style.display = 'none';
    document.getElementById('Descuento').style.display = 'none';
}

var fechas = [];
var elemento = 1;
var perrosSeleccionados = [];
var perrosSeleccionadosNombre = [];
var costoBasico = 0;
var costoSport = 0;
var costoRukys = 0;
var costoVip = 0;
var iva = 0;
var primera = true
var fecha = "";


var costoServicio = 0.0
var descuentoInterno = 0.0
var cuponDescuento = 0.0
var subtotalCompra = 0.0
var ivaDeCompra = 0.0
var totalApagar = 0.0
var porcentajeDescuento = 0.0

//Conekta 

//tarjetadc
var comisionInicialTarjetadc = 0.0
var comisionConektaTarjetadc = 0.0
var porcentajeTarjetadc = 0.034
var agregadoFijoTarjetadc = 3
var iva = 0.16
var ivaDeComision = 0.0
var comisionTotal = 0.0

//tic
var comisionInicialtic = 12.5

//eop

var comisionInicialeop = 0.0
var porcentajeEop = 0.039

//datos respectivos del pais y moneda
var paisPaseo = "";
var tipoMoneda = ""; 


//datos respectivos del pais y moneda
var paisPaseo = "";
var tipoMoneda = ""; 


$(document).ready(function () {
    $('#datetimepicker1').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker2').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker3').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker4').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker5').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker6').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker7').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker8').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker9').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker10').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker11').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker12').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker13').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker14').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker15').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker16').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker17').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker18').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker19').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker20').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker21').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker22').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker23').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker24').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker25').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker26').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker27').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker28').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker29').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

    $('#datetimepicker30').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),

    });

});




function obtener_dirección() {

    var db = firebase.database();
    var ref = db.ref("Usuarios");


    ref.orderByChild("uid").equalTo(uid).once("value", function (snapshot) {


        obtener_perros();
        // obtener_costos();
        obtener_iva();
        obtener_fecha();
        snapshot.forEach(function (data) {

            var d = data.val();

            telefono = d.telefono1
            nombre = d.nombre + " " + d.apellido_Paterno + " " + d.apellido_Materno
            console.log(telefono);
            console.log(nombre);
            if (originalID != undefined) {
                console.log("Viene de una cortesia perteneciente a un paquete")
                obtener_direccion_paqueteOriginal();
            } else if (d.direccion != undefined) {


                console.log(d.direccion);
                console.log(d.latitud);
                console.log(d.longitud);

                cargarMapa(d.direccion, d.latitud, d.longitud)
                obtener_costos(d.direccion);

            } else {

                cargarMapa(null, null, null)
            }




        });

    });


}


function obtener_direccion_paqueteOriginal() {
    var db = firebase.database();
    var ref = db.ref("purchaseHistory");

    ref.orderByChild("order_id").equalTo(originalID).once("value", function (snapshot) {
        snapshot.forEach(function (data) {
            var d = data.val();

            console.log(d.direccion);
            console.log(d.latitud);
            console.log(d.longitud);
            arrayPerrosSeleccionados = d.idPerros.split(",");
            console.log("Dirección tomada de paquete original");
            cargarMapa(d.direccion, d.latitud, d.longitud)
        })
    })
}

function obtener_fecha() {


    vecesPerros = 0;

    var db = firebase.database();

    var sessionsRef = db.ref("sessions");
    sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);






    var x = 0;


    sessionsRef.orderByChild("actual").on("child_added", function (snapshott) {

        x = snapshott.val(); {
        }

    })

    var date = new Date(x);


    fecha = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    console.log(fecha)

}

function obtener_costos(dir) {
    console.log(dir);

    if (dir != null) {
        var res = dir.split(";");
        console.log(res);
        var formattedAddress = res[0].split(", ");
        var lastPart = formattedAddress[formattedAddress.length - 1];
        console.log(formattedAddress);

        if(lastPart == "México"){
            console.log("México");

            var db = firebase.database();
            var ref = db.ref("Costos");

            ref.once("value", function (snapshot) {

                snapshot.forEach(function (data) {
                    var d = data.val();
                    console.log(d.tipo + " " + data.child("1").val())
                    if (d.tipo == "basico") {

                        costoBasico = data.child("1").val()

                    } else if (d.tipo == "rukys") {

                        costoRukys = data.child("1").val()

                    } else if (d.tipo == "sport") {

                        costoSport = data.child("1").val()

                    } else if (d.tipo == "vip") {

                        costoVip = data.child("1").val()

                                }
                    
                    
                })
            })

        }else if (lastPart == "USA" || lastPart == "EE. UU.") {
            console.log("USA");

            // Extraer el estado de la dirección
            var stateCodePart = formattedAddress[formattedAddress.length - 2].split(" ");
            var stateCode = stateCodePart[0];  // Obtener "IL" de "IL 62650"
            console.log("State Code: " + stateCode);

            // Condición: si las siglas son "IL", entonces accede a la referencia de Illinois
            if (stateCode == "IL") {
                console.log("Accediendo a los datos de Illinois...");

               // Conectar a Firebase usando la referencia de Illinois
                var db2 = firebase.database();
                var ref2 = db2.ref("CostosUSA/state/Illinois");  // Acceder directamente a Illinois

                ref2.once("value", function (snapshot) {
                    if (snapshot.exists()) {
                        var stateData = snapshot.val();  // Obtener los datos de Illinois

                        // Mostrar los datos completos para depurar
                        console.log("Datos de Illinois: ", stateData);

                        // Verificar si las propiedades existen en los datos y acceder a los valores "1"
                        if (stateData.Basico && stateData.Basico["1"]) {
                            costoBasico = stateData.Basico["1"];
                            console.log("Basico (1): ", costoBasico);
                        } else {
                            console.log("La clave 'Basico' o el valor '1' no existen.");
                        }

                        if (stateData.Recuperandog && stateData.Recuperandog["1"]) {
                            costoRecuperandog = stateData.Recuperandog["1"];
                            console.log("Recuperandog (1): ", costoRecuperandog);
                        } else {
                            console.log("La clave 'Recuperandog' o el valor '1' no existen.");
                        }

                        if (stateData.Rukys && stateData.Rukys["1"]) {
                            costoRukys = stateData.Rukys["1"];
                            console.log("Rukys (1): ", costoRukys);
                        } else {
                            console.log("La clave 'Rukys' o el valor '1' no existen.");
                        }

                        if (stateData.Sport && stateData.Sport["1"]) {
                            costoSport = stateData.Sport["1"];
                            console.log("Sport (1): ", costoSport);
                        } else {
                            console.log("La clave 'Sport' o el valor '1' no existen.");
                        }

                        if (stateData.VIP && stateData.VIP["1"]) {
                            costoVip = stateData.VIP["1"];
                            console.log("VIP (1): ", costoVip);
                        } else {
                            console.log("La clave 'VIP' o el valor '1' no existen.");
                        }
                    } else {
                        console.log("No se encontraron datos para Illinois.");
                    }
                });
            }
        }
        
        //else if (lastPart == "USA" || lastPart == "EE. UU.") {
        //     console.log("USA");
        
        //     var db2 = firebase.database();
        //     var ref2 = db2.ref("CostosUSA/state");  // Acceder al nivel de "state"
        
        //     ref2.once("value", function(snapshot) {
        //         snapshot.forEach(function(data) {
        //             var stateData = data.val();  // Acceder a los datos del estado
        //             var stateName = data.key;    // Obtener el nombre del estado (por ejemplo, "Illinois")
                    
        //             console.log("Estado: " + stateName);  // Imprimir el nombre del estado
        //             console.log(stateData);  // Imprimir los datos completos del estado
        //         });
        //     });
        // }
    }
    // var db = firebase.database();
    // var ref = db.ref("Costos");
    // var ref2 = db.ref2("Usuarios")

    // ref.once("value", function (snapshot) {



    //     snapshot.forEach(function (data) {

    //         var d = data.val();

    //         console.log(d.tipo + " " + data.child("1").val())

    //         if (d.tipo == "basico") {

    //             costoBasico = data.child("1").val()

    //         } else if (d.tipo == "rukys") {

    //             costoRukys = data.child("1").val()

    //         } else if (d.tipo == "sport") {

    //             costoSport = data.child("1").val()

    //         } else if (d.tipo == "vip") {

    //             costoVip = data.child("1").val()

    //         }


    //     })

    // })

}

function obtener_iva() {


    var db = firebase.database();
    var ref = db.ref("IVA");

    ref.once("value", function (snapshot) {


        iva = snapshot.val().iva;


    })


}

function obtener_perros() {

    var db = firebase.database();
    var ref = db.ref("Perros").child(uid);

    var table = document.getElementById("tablaPerrosbody");

    //limpia la tabla
    table.innerHTML = "";


    ref.orderByChild("nombre").once("value", function (snapshot) {



        snapshot.forEach(function (data) {

            var d = data.val();

            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);



            // asigna a las celdas el valir del Child especificado
            cell1.innerHTML = d.nombre;
            cell2.innerHTML = '<img src=\'' + d.foto + '\' width="50" height="50" />';
            cell3.innerHTML = '<input type="checkbox" name="apple" id="' + d.idPerro + '" onclick ="guardar_perros(\'' + d.idPerro + '\',\'' + d.nombre + '\')" />';

            // Si se genera una cortesia se pre-seleccionan los perros del paquete original para evitar mas pasos
            console.log("Array perros " + arrayPerrosSeleccionados + " idPerro: " + d.idPerro);
            if (arrayPerrosSeleccionados.includes(d.idPerro)) {
                guardar_perros(d.idPerro, d.nombre);
                console.log("guarda perro " + d.idPerro)
            } else {
                console.log("no guarda perro " + d.idPerro);
            }

        });

    });


}


function guardar_perros(idPerro, nombre) {

    document.getElementById(idPerro).checked = true;

    if (perrosSeleccionados.indexOf(idPerro) !== -1) {
        console.log("Value exists!")

        array1 = perrosSeleccionados.filter(item => item != idPerro);

        perrosSeleccionados = array1

        console.log(perrosSeleccionados);
        document.getElementById(idPerro).checked = false;
    } else {
        console.log("Value does not exists!")
        perrosSeleccionados.push(idPerro);
        console.log(perrosSeleccionados);
        document.getElementById(idPerro).checked = true;
    }


    if (perrosSeleccionadosNombre.indexOf(nombre) !== -1) {
        console.log("Value exists!")

        array1 = perrosSeleccionadosNombre.filter(item => item != nombre);

        perrosSeleccionadosNombre = array1

        console.log(perrosSeleccionadosNombre);
    } else {
        console.log("Value does not exists!")
        perrosSeleccionadosNombre.push(nombre);
        console.log(perrosSeleccionadosNombre);
    }


}



function cargarMapa(dir, lat, lng) {

    obtener_perros();
    obtener_costos(dir);
    obtener_iva();
    obtener_fecha();
    configuracionPantalla()

    var latitud = 19.5031560714501;
    var longitud = -99.23319306224586;

    if (dir != null && lat != null && lng != null) {

        var res = dir.split(";");
        console.log(res);

        var formattedAddress = res[0].split(", ");
        var lastPart = formattedAddress[formattedAddress.length - 1];
        console.log(formattedAddress);

        document.getElementById("paisPaseo").value = lastPart;
        paisPaseo = document.getElementById("paisPaseo").value = lastPart;
        console.log(paisPaseo);
        document.getElementById("pac-input").value = res[0];
        document.getElementById("numInterior").value = res[1];


        if(document.getElementById("pac-input").value != ""){

        }

        if(lastPart == "México"  || lastPart =="Mexico"){
            document.getElementById("tipoMoneda").value = "MXM";
            tipoMoneda = document.getElementById("tipoMoneda").value = "MXM";
            console.log(tipoMoneda);
        }else if(lastPart == "USA" || lastPart == "EE. UU."){
            document.getElementById("tipoMoneda").value = "USD";
            tipoMoneda = document.getElementById("tipoMoneda").value = "USD";
            console.log(tipoMoneda);
        }

        latitud = lat;
        longitud = lng;

    }

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitud, lng: longitud },
        zoom: 17,
    });

    colormarker2 = "http://maps.google.com/mapfiles/ms/micons/blue.png";

    Markermio = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: { lat: latitud, lng: longitud },
        icon: colormarker2,
        draggable: true,
        map: map
    });


    google.maps.event.addListener(Markermio, 'dragend', function () {

        console.log("dragend " + Markermio.getPosition());


        var latitud = Markermio.getPosition().lat();
        var longitud = Markermio.getPosition().lng();

        geocodeLatLng(latitud, longitud, map);


    })


    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
    const autocomplete = new google.maps.places.Autocomplete(input);
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo("bounds", map);
    // Set the data fields to return when the user selects a place.
    autocomplete.setFields([
        "address_components",
        "geometry",
        "icon",
        "name",
    ]);
    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
    });
    autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
        const place = autocomplete.getPlace();

        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert(
                "No details available for input: '" + place.name + "'"
            );
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Why 17? Because it looks good.
        }

        colormarker2 = "http://maps.google.com/mapfiles/ms/micons/blue.png";

        Markermio.setPosition(place.geometry.location);



        let address = "";

        if (place.address_components) {
            address = [
                (place.address_components[0] &&
                    place.address_components[0].short_name) ||
                "",
                (place.address_components[1] &&
                    place.address_components[1].short_name) ||
                "",
                (place.address_components[2] &&
                    place.address_components[2].short_name) ||
                "",
            ].join(" ");
        }
        infowindowContent.children["place-icon"].src = place.icon;
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent = address;
        infowindow.open(map, marker);
    });


}



function geocodeLatLng(lat, lng, map) {
    const geocoder = new google.maps.Geocoder();

    const latlng = {
        lat: lat,
        lng: lng,
    };
    geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                map.setZoom(17);

                //Esta linea es la que hay que tener en cuenta para  la direccion
                console.log(results[0].formatted_address)
                var inputValue = document.getElementById("pac-input").value;
                console.log(inputValue);
                document.getElementById("pac-input").value = results[0].formatted_address;


            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
}



function siguiente() {


    var numInterior = document.getElementById("numInterior").value
    var direccion = document.getElementById("pac-input").value
    var numDias = document.getElementById("diasSeleccion").value
    var fecha1 = $("#datetimepicker1").find("input").val();
    var fecha2 = $("#datetimepicker2").find("input").val();
    var fecha3 = $("#datetimepicker3").find("input").val();
    var fecha4 = $("#datetimepicker4").find("input").val();
    var fecha5 = $("#datetimepicker5").find("input").val();
    var fecha6 = $("#datetimepicker6").find("input").val();
    var fecha7 = $("#datetimepicker7").find("input").val();
    var fecha8 = $("#datetimepicker8").find("input").val();
    var fecha9 = $("#datetimepicker9").find("input").val();
    var fecha10 = $("#datetimepicker10").find("input").val();
    var fecha11 = $("#datetimepicker11").find("input").val();
    var fecha12 = $("#datetimepicker12").find("input").val();
    var fecha13 = $("#datetimepicker13").find("input").val();
    var fecha14 = $("#datetimepicker14").find("input").val();
    var fecha15 = $("#datetimepicker15").find("input").val();
    var fecha16 = $("#datetimepicker16").find("input").val();
    var fecha17 = $("#datetimepicker17").find("input").val();
    var fecha18 = $("#datetimepicker18").find("input").val();
    var fecha19 = $("#datetimepicker19").find("input").val();
    var fecha20 = $("#datetimepicker20").find("input").val();
    var fecha21 = $("#datetimepicker21").find("input").val();
    var fecha22 = $("#datetimepicker22").find("input").val();
    var fecha23 = $("#datetimepicker23").find("input").val();
    var fecha24 = $("#datetimepicker24").find("input").val();
    var fecha25 = $("#datetimepicker25").find("input").val();
    var fecha26 = $("#datetimepicker26").find("input").val();
    var fecha27 = $("#datetimepicker27").find("input").val();
    var fecha28 = $("#datetimepicker28").find("input").val();
    var fecha29 = $("#datetimepicker29").find("input").val();
    var fecha30 = $("#datetimepicker30").find("input").val();
    var categoriaSeleccionInput = document.getElementById("categoriaSeleccion").value;
    var pagoSeleccionInput = document.getElementById("pagoSeleccion").value;
    var tiempoValidacionInicial = document.getElementById("tiempoSeleccion").value
    var numPerros = perrosSeleccionados.length;

    console.log("numPerros " + perrosSeleccionados.length)
    if (elemento == 1) {



        if (numInterior.trim() == "") {


            alert("Numero Interior no puede estar vacio");

        } else if (numInterior.indexOf(';') > -1) {

            alert("Numero Interior no puede incluir ;");

        } else if (direccion.trim() == "") {


            alert("Necesita ingresar una dirección");

        } else if (pagoSeleccionInput == "Descuento" && numDias != 30 || pagoSeleccionInput == "Descuento" && tiempoValidacionInicial != 1 || pagoSeleccionInput == "Descuento" && categoriaSeleccionInput != "basico") {

            alert("Descuento caminandog solo es aplicable categoria Basico para paquetes de 30 paseos y de 1 hora");

            console.log(pagoSeleccionInput + " " + numDias + " " + tiempoValidacionInicial + " " + categoriaSeleccionInput)

        } else {

            elemento++
            configuracionPantalla()

        }

    } else if (elemento == 2) {

        primera = true

        if (numPerros == 0) {

            alert("Debe Seleccionar almenos un perro")

        } else {

            if (categoriaSeleccionInput == "sport" && numPerros > 2) {

                alert("La categoría " + categoriaSeleccionInput + " No puede tener mas de 2 perros ")

            } else if (categoriaSeleccionInput == "basico" && numPerros > 4) {

                alert("La categoría " + categoriaSeleccionInput + " No puede tener mas de 4 perros ")

            } else if (categoriaSeleccionInput == "rukys" && numPerros > 4) {

                alert("La categoría " + categoriaSeleccionInput + " No puede tener mas de 4 perros ")

            } else if (categoriaSeleccionInput == "vip" && numPerros > 4) {

                alert("La categoría " + categoriaSeleccionInput + " No puede tener mas de 4 perros ")

            } else {


                if (numDias == 1) {

                    console.log(fecha1);
                    if (fecha1.trim() != "") {


                        elemento++;
                        configuracionPantalla();

                    } else {

                        alert("No puede dejar fechas vacias");

                    }

                } else if (numDias == 2) {

                    if (fecha1.trim() != "" && fecha2.trim() != "") {

                        elemento++;
                        configuracionPantalla();

                    } else {

                        alert("No puede dejar fechas vacias");

                    }


                } else if (numDias == 3) {

                    if (fecha1.trim() != "" && fecha2.trim() != "" && fecha3.trim() != "") {

                        elemento++;
                        configuracionPantalla();

                    } else {

                        alert("No puede dejar fechas vacias");

                    }


                } else if (numDias == 5) {

                    if (fecha1.trim() != "" && fecha2.trim() != "" && fecha3.trim() != "" && fecha4.trim() != "" && fecha5.trim() != "") {

                        elemento++;
                        configuracionPantalla();

                    } else {

                        alert("No puede dejar fechas vacias");

                    }


                } else if (numDias == 10) {

                    if (fecha1.trim() != "" && fecha2.trim() != "" && fecha3.trim() != "" && fecha4.trim() != "" && fecha5.trim() != "" && fecha6.trim() != "" && fecha7.trim() != "" && fecha8.trim() != "" && fecha9.trim() != "" && fecha10.trim() != "") {

                        elemento++;
                        configuracionPantalla();

                    } else {

                        alert("No puede dejar fechas vacias");

                    }


                } else if (numDias == 30) {

                    if (fecha1.trim() != "" && fecha2.trim() != "" && fecha3.trim() != "" && fecha4.trim() != "" && fecha5.trim() != "" && fecha6.trim() != "" && fecha7.trim() != "" && fecha8.trim() != "" && fecha9.trim() != "" && fecha10.trim() != "" && fecha11.trim() != "" && fecha12.trim() != "" && fecha13.trim() != "" && fecha14.trim() != "" && fecha15.trim() != "" && fecha16.trim() != "" && fecha17.trim() != "" && fecha18.trim() != "" && fecha19.trim() != "" && fecha20.trim() != "" && fecha21.trim() != "" && fecha22.trim() != "" && fecha23.trim() != "" && fecha24.trim() != "" && fecha25.trim() != "" && fecha26.trim() != "" && fecha27.trim() != "" && fecha28.trim() != "" && fecha29.trim() != "" && fecha30.trim() != "") {

                        elemento++;
                        configuracionPantalla();

                    } else {

                        alert("No puede dejar fechas vacias");

                    }


                }





            }

        }





    } if (elemento == 3) {


        if (primera == true) {

            primera = false

            console.log("Basico: " + costoBasico);
            console.log("Sport: " + costoSport);
            console.log("Rukys: " + costoRukys);
            console.log("Vip: " + costoVip);
            console.log("Iva: " + iva);

            var categoriaSeleccionInput = document.getElementById("categoriaSeleccion").value;

            var perros = perrosSeleccionados.length;
            var dias = document.getElementById("diasSeleccion").value
            var tiempo = document.getElementById("tiempoSeleccion").value

            if (categoriaSeleccionInput == "basico") {

                costounitario = costoBasico;
                console.log(costounitario);

            } else if (categoriaSeleccionInput == "rukys") {

                costounitario = costoRukys;
                console.log(costounitario);

            } else if (categoriaSeleccionInput == "sport") {
                costounitario = costoSport;
                console.log(costounitario);

            } else if (categoriaSeleccionInput == "vip") {

                costounitario = costoVip;
                console.log(costounitario);

            }


            if (tiempo == 0.5) {

                costoServicio = costounitario * perros * 0.6322 * dias// Obtiene el costo unitario y lo multiplica los perros y por las horas
                console.log(costoServicio);
                porcentajeDescuento = 0

            } else {

                costoServicio = costounitario * perros * tiempo * dias// Obtiene el costo unitario y lo multiplica los perros y por las horas
                console.log(costoServicio);

                if (dias == 1) {

                    if (perros == 1) { porcentajeDescuento = 0; } else if (perros == 2) { porcentajeDescuento = 0.1505; } else if (perros == 3) { porcentajeDescuento = 0.2233; } else if (perros == 4) { porcentajeDescuento = 0.2678; }


                } else if (dias == 3) {

                    if (perros == 1) { porcentajeDescuento = 0.1500; } else if (perros == 2) { porcentajeDescuento = 0.1925; } else if (perros == 3) { porcentajeDescuento = 0.2621; } else if (perros == 4) { porcentajeDescuento = 0.3044 }


                } else if (dias == 5) {

                    if (perros == 1) { porcentajeDescuento = 0.2000; } else if (perros == 2) { porcentajeDescuento = 0.2095; } else if (perros == 3) { porcentajeDescuento = 0.2777; } else if (perros == 4) { porcentajeDescuento = 0.3191; }

                } else if (dias == 10) {

                    if (perros == 1) { porcentajeDescuento = 0.2000; } else if (perros == 2) { porcentajeDescuento = 0.2095; } else if (perros == 3) { porcentajeDescuento = 0.2777; } else if (perros == 4) { porcentajeDescuento = 0.3191; }

                } else if (dias == 30) {

                    if (perros == 1) { porcentajeDescuento = 0.2000; } else if (perros == 2) { porcentajeDescuento = 0.2095; } else if (perros == 3) { porcentajeDescuento = 0.2777; } else if (perros == 4) { porcentajeDescuento = 0.3191; }

                }


            }

            descuentoInterno = costoServicio * porcentajeDescuento;
            subtotalCompra = costoServicio - descuentoInterno;
            ivaDeCompra = subtotalCompra * iva;
            totalApagar = subtotalCompra + ivaDeCompra;

            console.log("Costo Servicio: " + costoServicio.toFixed(2));
            console.log("DescuentoInterno: " + descuentoInterno.toFixed(2));
            console.log("SubtotalCompra: " + subtotalCompra.toFixed(2));
            console.log("Iva: " + ivaDeCompra.toFixed(2));
            console.log("Total a pagar: " + totalApagar.toFixed(2));

            var nuevaDireccion = direccion + ";" + numInterior;
            document.getElementById("direccion").innerHTML = nuevaDireccion;
            // document.getElementById("paseos").innerHTML = numDias

            document.getElementById("paseos").innerHTML = numDias;

            document.getElementById("fecha1").innerHTML = fecha1;
            document.getElementById("fecha2").innerHTML = fecha2;
            document.getElementById("fecha3").innerHTML = fecha3;
            document.getElementById("fecha4").innerHTML = fecha4;
            document.getElementById("fecha5").innerHTML = fecha5;
            document.getElementById("fecha6").innerHTML = fecha6;
            document.getElementById("fecha7").innerHTML = fecha7;
            document.getElementById("fecha8").innerHTML = fecha8;
            document.getElementById("fecha9").innerHTML = fecha9;
            document.getElementById("fecha10").innerHTML = fecha10;
            document.getElementById("fecha11").innerHTML = fecha11;
            document.getElementById("fecha12").innerHTML = fecha12;
            document.getElementById("fecha13").innerHTML = fecha13;
            document.getElementById("fecha14").innerHTML = fecha14;
            document.getElementById("fecha15").innerHTML = fecha15;
            document.getElementById("fecha16").innerHTML = fecha16;
            document.getElementById("fecha17").innerHTML = fecha17;
            document.getElementById("fecha18").innerHTML = fecha18;
            document.getElementById("fecha19").innerHTML = fecha19;
            document.getElementById("fecha20").innerHTML = fecha20;
            document.getElementById("fecha21").innerHTML = fecha21;
            document.getElementById("fecha22").innerHTML = fecha22;
            document.getElementById("fecha23").innerHTML = fecha23;
            document.getElementById("fecha24").innerHTML = fecha24;
            document.getElementById("fecha25").innerHTML = fecha25;
            document.getElementById("fecha26").innerHTML = fecha26;
            document.getElementById("fecha27").innerHTML = fecha27;
            document.getElementById("fecha28").innerHTML = fecha28;
            document.getElementById("fecha29").innerHTML = fecha29;
            document.getElementById("fecha30").innerHTML = fecha30;

            document.getElementById("categoria").innerHTML = categoriaSeleccionInput;
            document.getElementById("tiempo").innerHTML = tiempo;

            console.log("numPerros " + perrosSeleccionados.length);
            document.getElementById("numPerros").innerHTML = numPerros;


            if (pagoSeleccionInput == "tarjetadc") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2);
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2);
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2);
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2);
                document.getElementById("total").innerHTML = totalApagar.toFixed(2);
                document.getElementById("descuentoCaminandog").innerHTML = 0;
                document.getElementById("nuevoCosto").innerHTML = totalApagar.toFixed(2);
                document.getElementById("country").innerHTML = paisPaseo;
                document.getElementById("currencyCharge").innerHTML = tipoMoneda;
                document.getElementById("pagoPaseador").innerHTML = parseFloat(document.getElementById("subtotal").innerHTML);

                console.log("total " + totalApagar)

                comisionInicialTarjetadc = totalApagar * porcentajeTarjetadc;
                comisionConektaTarjetadc = comisionInicialTarjetadc + agregadoFijoTarjetadc;
                ivaDeComision = comisionConektaTarjetadc * iva;
                comisionTotal = comisionConektaTarjetadc + ivaDeComision;

                console.log("comisionTotal " + comisionTotal);

            } else if (pagoSeleccionInput == "tic") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2);
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2);
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2);
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2);
                document.getElementById("total").innerHTML = totalApagar.toFixed(2);
                document.getElementById("descuentoCaminandog").innerHTML = 0;
                document.getElementById("nuevoCosto").innerHTML = totalApagar.toFixed(2);
                document.getElementById("country").innerHTML = paisPaseo;
                document.getElementById("currencyCharge").innerHTML = tipoMoneda;
                document.getElementById("pagoPaseador").innerHTML = parseFloat(document.getElementById("subtotal").innerHTML);

                console.log("total " + totalApagar);

                ivaDeComision = comisionInicialtic * iva;
                comisionTotal = comisionInicialtic + ivaDeComision;

                console.log("comisionTotal " + comisionTotal);

            } else if (pagoSeleccionInput == "eop") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2);
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2);
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2);
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2);
                document.getElementById("total").innerHTML = totalApagar.toFixed(2);
                document.getElementById("descuentoCaminandog").innerHTML = 0;
                document.getElementById("nuevoCosto").innerHTML = totalApagar.toFixed(2);
                document.getElementById("country").innerHTML = paisPaseo;
                document.getElementById("currencyCharge").innerHTML = tipoMoneda;
                document.getElementById("pagoPaseador").innerHTML = parseFloat(document.getElementById("subtotal").innerHTML);

                console.log("total " + totalApagar)

                comisionInicialeop = totalApagar * porcentajeEop;
                ivaDeComision = comisionInicialeop * iva;
                comisionTotal = comisionInicialeop + ivaDeComision;

                console.log("comisionTotal " + comisionTotal);

            } else if (pagoSeleccionInput == "tdh") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2);
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2);
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2);
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2);
                document.getElementById("total").innerHTML = totalApagar.toFixed(2);
                document.getElementById("descuentoCaminandog").innerHTML = 0;
                document.getElementById("nuevoCosto").innerHTML = totalApagar.toFixed(2);
                document.getElementById("country").innerHTML = paisPaseo;
                document.getElementById("currencyCharge").innerHTML = tipoMoneda;
                document.getElementById("pagoPaseador").innerHTML = parseFloat(document.getElementById("subtotal").innerHTML);

                console.log("total " + totalApagar);

                comisionTotal = 0;
                console.log("comisionTotal " + comisionTotal);

            } else if (pagoSeleccionInput == "Sin pago") {

                // $36.30  30 min         --> 60.5
                // $45.55 1 horas         --> 75.92
                // $68.328 1 hora y 30 min --> 113.88
                // $91.1 2 horas          --> 151.83
                //   todas las categorias
                //   1 perro 


                var monto_paseador = 0;

                if (tiempo == 0.5) {

                    monto_paseador = 60.5;

                } else if (tiempo == 1) {

                    monto_paseador = 75.92;

                } else if (tiempo == 1.5) {

                    monto_paseador = 113.88;

                } else if (tiempo == 2) {

                    monto_paseador = 151.83;

                }


                monto_paseador = monto_paseador * numPerros;

                // 36.30     45.55    91.1      68.328

                document.getElementById("costo").innerHTML = 1;
                document.getElementById("descuento").innerHTML = 0;
                document.getElementById("subtotal").innerHTML = 1;
                document.getElementById("iva").innerHTML = 0;
                document.getElementById("total").innerHTML = 1;
                document.getElementById("descuentoCaminandog").innerHTML = 0;
                document.getElementById("nuevoCosto").innerHTML = 1;
                document.getElementById("country").innerHTML = paisPaseo;
                document.getElementById("currencyCharge").innerHTML = tipoMoneda;
                document.getElementById("pagoPaseador").innerHTML = monto_paseador * numDias;

                descuentoInterno = 0

                subtotalCompra = 0
                ivaDeCompra = 0
                totalApagar = 0


                descuentoInterno = 0;
                subtotalCompra = 0;
                ivaDeCompra = 0;
                totalApagar = 0;;
                comisionTotal = 0

            } else if (pagoSeleccionInput == "Descuento") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2);
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2);
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2);
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2);
                document.getElementById("total").innerHTML = totalApagar.toFixed(2);
                var descuentoCam = totalApagar * 0.189257; // 2642.02
                document.getElementById("descuentoCaminandog").innerHTML = descuentoCam.toFixed(2);
                var nuevoCosto = totalApagar - descuentoCam;
                document.getElementById("nuevoCosto").innerHTML = nuevoCosto.toFixed(2);
                document.getElementById("country").innerHTML = paisPaseo;
                document.getElementById("currencyCharge").innerHTML = tipoMoneda;;
                var descuentoenpagopaseador = nuevoCosto * 0.042717
                var nuevoPagoPaseador = (nuevoCosto - descuentoenpagopaseador).toFixed(2);
                document.getElementById("pagoPaseador").innerHTML = nuevoPagoPaseador;
                console.log("paseador " + nuevoPagoPaseador);

            }

        } else {
            var r = confirm("Confirma solo si estas seguro de que todos los datos son correctos");
            if (r == true) {
                elemento++;
            } else {

            }

        }

    }
    if (elemento == 4) {

        console.log("Fechas: " + fecha1);

        var IDperros = perrosSeleccionados.toString() + ",";
        var Nombreperros = perrosSeleccionadosNombre.toString() + ",";
        var fechas = "";

        if (numDias == 1) {

            var res = fecha1.split(",");
            var resHora = res[3].split(" ");

            fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2];
            console.log(fechas);

            fechasConvertidas = convertirFechasATimestamps(fechas);
            fechasConvertidasString = fechasConvertidas.join(", ");
            console.log(fechasConvertidas);


        } else if (numDias == 2) {

            var res = fecha1.split(",");
            var resHora = res[3].split(" ");

            var res2 = fecha2.split(",");
            var res2Hora = res2[3].split(" ");

            fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] + "," + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2];
            console.log(fechas);

            fechasConvertidas = convertirFechasATimestamps(fechas);
            fechasConvertidasString = fechasConvertidas.join(", ");
            console.log(fechasConvertidas);


        } else if (numDias == 3) {

            var res = fecha1.split(",");
            var resHora = res[3].split(" ");

            var res2 = fecha2.split(",");
            var res2Hora = res2[3].split(" ");

            var res3 = fecha3.split(",");
            var res3Hora = res3[3].split(" ");

            fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
                "," + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
                "," + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2];
            console.log(fechas);

            fechasConvertidas = convertirFechasATimestamps(fechas);
            fechasConvertidasString = fechasConvertidas.join(", ");
            console.log(fechasConvertidas);


        } else if (numDias == 5) {


            var res = fecha1.split(",");
            var resHora = res[3].split(" ");

            var res2 = fecha2.split(",");
            var res2Hora = res2[3].split(" ");

            var res3 = fecha3.split(",");
            var res3Hora = res3[3].split(" ");

            var res4 = fecha4.split(",");
            var res4Hora = res4[3].split(" ");

            var res5 = fecha5.split(",");
            var res5Hora = res5[3].split(" ");

            fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
                "," + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
                "," + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2] +
                "," + res4[0] + " " + res4[1] + " " + res4[2] + " " + res4Hora[1] + " a las " + res4Hora[2] +
                "," + res5[0] + " " + res5[1] + " " + res5[2] + " " + res5Hora[1] + " a las " + res5Hora[2];
            console.log(fechas);

            fechasConvertidas = convertirFechasATimestamps(fechas);
            fechasConvertidasString = fechasConvertidas.join(", ");
            console.log(fechasConvertidas);

        } else if (numDias == 10) {


            var res = fecha1.split(",");
            var resHora = res[3].split(" ");

            var res2 = fecha2.split(",");
            var res2Hora = res2[3].split(" ");

            var res3 = fecha3.split(",");
            var res3Hora = res3[3].split(" ");

            var res4 = fecha4.split(",");
            var res4Hora = res4[3].split(" ");

            var res5 = fecha5.split(",");
            var res5Hora = res5[3].split(" ");

            var res6 = fecha6.split(",");
            var res6Hora = res6[3].split(" ");

            var res7 = fecha7.split(",");
            var res7Hora = res7[3].split(" ");

            var res8 = fecha8.split(",");
            var res8Hora = res8[3].split(" ");

            var res9 = fecha9.split(",");
            var res9Hora = res9[3].split(" ");

            var res10 = fecha10.split(",");
            var res10Hora = res10[3].split(" ");

            fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
                "," + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
                "," + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2] +
                "," + res4[0] + " " + res4[1] + " " + res4[2] + " " + res4Hora[1] + " a las " + res4Hora[2] +
                "," + res5[0] + " " + res5[1] + " " + res5[2] + " " + res5Hora[1] + " a las " + res5Hora[2] +
                "," + res6[0] + " " + res6[1] + " " + res6[2] + " " + res6Hora[1] + " a las " + res6Hora[2] +
                "," + res7[0] + " " + res7[1] + " " + res7[2] + " " + res7Hora[1] + " a las " + res7Hora[2] +
                "," + res8[0] + " " + res8[1] + " " + res8[2] + " " + res8Hora[1] + " a las " + res8Hora[2] +
                "," + res9[0] + " " + res9[1] + " " + res9[2] + " " + res9Hora[1] + " a las " + res9Hora[2] +
                "," + res10[0] + " " + res10[1] + " " + res10[2] + " " + res10Hora[1] + " a las " + res10Hora[2];

            console.log(fechas);

            fechasConvertidas = convertirFechasATimestamps(fechas);
            fechasConvertidasString = fechasConvertidas.join(", ");
            console.log(fechasConvertidas);

        } else if (numDias == 30) {


            var res = fecha1.split(",");
            var resHora = res[3].split(" ");

            var res2 = fecha2.split(",");
            var res2Hora = res2[3].split(" ");

            var res3 = fecha3.split(",");
            var res3Hora = res3[3].split(" ");

            var res4 = fecha4.split(",");
            var res4Hora = res4[3].split(" ");

            var res5 = fecha5.split(",");
            var res5Hora = res5[3].split(" ");

            var res6 = fecha6.split(",");
            var res6Hora = res6[3].split(" ");

            var res7 = fecha7.split(",");
            var res7Hora = res7[3].split(" ");

            var res8 = fecha8.split(",");
            var res8Hora = res8[3].split(" ");

            var res9 = fecha9.split(",");
            var res9Hora = res9[3].split(" ");

            var res10 = fecha10.split(",");
            var res10Hora = res10[3].split(" ");

            var res11 = fecha11.split(",");
            var res11Hora = res11[3].split(" ");

            var res12 = fecha12.split(",");
            var res12Hora = res12[3].split(" ");

            var res13 = fecha13.split(",");
            var res13Hora = res13[3].split(" ");

            var res14 = fecha14.split(",");
            var res14Hora = res14[3].split(" ");

            var res15 = fecha15.split(",");
            var res15Hora = res15[3].split(" ");

            var res16 = fecha16.split(",");
            var res16Hora = res16[3].split(" ");

            var res17 = fecha17.split(",");
            var res17Hora = res17[3].split(" ");

            var res18 = fecha18.split(",");
            var res18Hora = res18[3].split(" ");

            var res19 = fecha19.split(",");
            var res19Hora = res19[3].split(" ");

            var res20 = fecha20.split(",");
            var res20Hora = res20[3].split(" ");

            var res21 = fecha21.split(",");
            var res21Hora = res21[3].split(" ");

            var res22 = fecha22.split(",");
            var res22Hora = res22[3].split(" ");

            var res23 = fecha23.split(",");
            var res23Hora = res23[3].split(" ");

            var res24 = fecha24.split(",");
            var res24Hora = res24[3].split(" ");

            var res25 = fecha25.split(",");
            var res25Hora = res25[3].split(" ");

            var res26 = fecha26.split(",");
            var res26Hora = res26[3].split(" ");

            var res27 = fecha27.split(",");
            var res27Hora = res27[3].split(" ");

            var res28 = fecha28.split(",");
            var res28Hora = res28[3].split(" ");

            var res29 = fecha29.split(",");
            var res29Hora = res29[3].split(" ");

            var res30 = fecha30.split(",");
            var res30Hora = res30[3].split(" ");

            fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
                "," + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
                "," + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2] +
                "," + res4[0] + " " + res4[1] + " " + res4[2] + " " + res4Hora[1] + " a las " + res4Hora[2] +
                "," + res5[0] + " " + res5[1] + " " + res5[2] + " " + res5Hora[1] + " a las " + res5Hora[2] +
                "," + res6[0] + " " + res6[1] + " " + res6[2] + " " + res6Hora[1] + " a las " + res6Hora[2] +
                "," + res7[0] + " " + res7[1] + " " + res7[2] + " " + res7Hora[1] + " a las " + res7Hora[2] +
                "," + res8[0] + " " + res8[1] + " " + res8[2] + " " + res8Hora[1] + " a las " + res8Hora[2] +
                "," + res9[0] + " " + res9[1] + " " + res9[2] + " " + res9Hora[1] + " a las " + res9Hora[2] +
                "," + res10[0] + " " + res10[1] + " " + res10[2] + " " + res10Hora[1] + " a las " + res10Hora[2] +
                "," + res11[0] + " " + res11[1] + " " + res11[2] + " " + res11Hora[1] + " a las " + res11Hora[2] +
                "," + res12[0] + " " + res12[1] + " " + res12[2] + " " + res12Hora[1] + " a las " + res12Hora[2] +
                "," + res13[0] + " " + res13[1] + " " + res13[2] + " " + res13Hora[1] + " a las " + res13Hora[2] +
                "," + res14[0] + " " + res14[1] + " " + res14[2] + " " + res14Hora[1] + " a las " + res14Hora[2] +
                "," + res15[0] + " " + res15[1] + " " + res15[2] + " " + res15Hora[1] + " a las " + res15Hora[2] +
                "," + res16[0] + " " + res16[1] + " " + res16[2] + " " + res16Hora[1] + " a las " + res16Hora[2] +
                "," + res17[0] + " " + res17[1] + " " + res17[2] + " " + res17Hora[1] + " a las " + res17Hora[2] +
                "," + res18[0] + " " + res18[1] + " " + res18[2] + " " + res18Hora[1] + " a las " + res18Hora[2] +
                "," + res19[0] + " " + res19[1] + " " + res19[2] + " " + res19Hora[1] + " a las " + res19Hora[2] +
                "," + res20[0] + " " + res20[1] + " " + res20[2] + " " + res20Hora[1] + " a las " + res20Hora[2] +
                "," + res21[0] + " " + res21[1] + " " + res21[2] + " " + res21Hora[1] + " a las " + res21Hora[2] +
                "," + res22[0] + " " + res22[1] + " " + res22[2] + " " + res22Hora[1] + " a las " + res22Hora[2] +
                "," + res23[0] + " " + res23[1] + " " + res23[2] + " " + res23Hora[1] + " a las " + res23Hora[2] +
                "," + res24[0] + " " + res24[1] + " " + res24[2] + " " + res24Hora[1] + " a las " + res24Hora[2] +
                "," + res25[0] + " " + res25[1] + " " + res25[2] + " " + res25Hora[1] + " a las " + res25Hora[2] +
                "," + res26[0] + " " + res26[1] + " " + res26[2] + " " + res26Hora[1] + " a las " + res26Hora[2] +
                "," + res27[0] + " " + res27[1] + " " + res27[2] + " " + res27Hora[1] + " a las " + res27Hora[2] +
                "," + res28[0] + " " + res28[1] + " " + res28[2] + " " + res28Hora[1] + " a las " + res28Hora[2] +
                "," + res29[0] + " " + res29[1] + " " + res29[2] + " " + res29Hora[1] + " a las " + res29Hora[2] +
                "," + res30[0] + " " + res30[1] + " " + res30[2] + " " + res30Hora[1] + " a las " + res30Hora[2];

            console.log(fechas);

            fechasConvertidas = convertirFechasATimestamps(fechas);
            fechasConvertidasString = fechasConvertidas.join(", ");
            console.log(fechasConvertidas);

        }

        console.log("ya en el pago")
        console.log(totalApagar)
        console.log(subtotalCompra * 0.60)
        console.log(comisionTotal)
        console.log(ivaDeCompra)
        console.log((subtotalCompra * 0.40) - comisionTotal)


        var db = firebase.database();
        var ref = db.ref("Agendados");

        var Agendados = ref.push();
        var AgendadosID = Agendados.getKey();
        var finanzas = db.ref("Finanzas").child(AgendadosID);


        if (pagoSeleccionInput == "Sin pago") {
            AgendadosID = AgendadosID + "_" + "cortesia";
        }

        var agendados_guardar = ref.child(AgendadosID);

        console.log("id " + AgendadosID);

        var purchaseHistory = db.ref("purchaseHistory");

        let dias = parseInt(document.getElementById("paseos").innerHTML);
        let direccion = document.getElementById("direccion").innerHTML;
        let amount = parseFloat(document.getElementById("nuevoCosto").innerHTML);
        let categoria = document.getElementById("categoria").innerHTML;
        let latitud = Markermio.getPosition().lat();
        let longitud = Markermio.getPosition().lng();
        let tiempo = parseFloat(document.getElementById("tiempo").innerHTML);
        let num_perros = parseInt(document.getElementById("numPerros").innerHTML);
        let sistemaCurrency = document.getElementById("currencyCharge").innerHTML;
        let sistemaCountry = document.getElementById("country").innerHTML;

        if (originalID == undefined) {
            var paseosPurchaseHistory = dias
            var cortesiasPurchaseHistory = 0
            if (pagoSeleccionInput == "Sin pago") {
                paseosPurchaseHistory = 0
                cortesiasPurchaseHistory = dias
            }
            var purchaseHistoryref = purchaseHistory.child(AgendadosID);
            purchaseHistoryref.set(
                {
                    uid: uid,
                    order_id: AgendadosID,
                    purchaseDate: firebase.database.ServerValue.TIMESTAMP,
                    amount: amount,
                    agendado: true,
                    walks: paseosPurchaseHistory,
                    categoria: categoria,
                    direccion: direccion,
                    latitud: latitud,
                    longitud: longitud,
                    tiempo_paseo: tiempo,
                    numero_perros: num_perros,
                    perrosNombre: Nombreperros,
                    idPerros: IDperros,
                    cortesias: cortesiasPurchaseHistory,
                    country: sistemaCountry,
                    currencyCharge: sistemaCurrency,
                    nombre: nombre,
                    paymentGateway: "Sistema",
                },
                function (errpas1) {
                    if (errpas1) { console.log('error escribiendo en el historial de paseos' + errpas1); }
                }
            );

            originalID = AgendadosID
        }

        agendados_guardar.set({

            amount: parseFloat(document.getElementById("nuevoCosto").innerHTML),
            categoria: document.getElementById("categoria").innerHTML,
            country: paisPaseo,
            currencyCharge: tipoMoneda,
            descripcion: "Paquete de " + numDias + " dias",
            dias: dias,
            diasEleccion: fechas,
            direccion: direccion,
            country: sistemaCountry,
            currencyCharge: sistemaCurrency,
            fecha_creacion: firebase.database.ServerValue.TIMESTAMP,
            fee: 1,
            id_paseador: "no_asignado",
            id_usr: uid,
            latitud: latitud,
            longitud: longitud,
            monto_paseador: parseFloat(document.getElementById("pagoPaseador").innerHTML),
            nombre: nombre,
            num_perros: num_perros,
            numero_usuario: telefono,
            operation_date: fecha,   //2020-6-9T18:49:28+02:00"
            order_id: AgendadosID,
            originalID: originalID,
            perros: IDperros,
            perrosNombre: Nombreperros,
            tiempo_paseo: tiempo,

        }).then(function () {

            if (originalID != AgendadosID) {
                purchaseHistory.orderByChild("order_id").equalTo(originalID).once("value", function (snapshot) {
                    snapshot.forEach(function (data) {
                        var d = data.val();
                        let newCortesias = d.cortesias + parseInt(document.getElementById("paseos").innerHTML);
                        purchaseHistory.child(originalID).child("cortesias").set(newCortesias)
                    })
                })
            }

            var key = db.ref("cambios_ordenes").push().getKey();
            var agendadosModificaciones = db.ref("cambios_ordenes");
            var currentUID = firebase.auth().currentUser.uid;


            agendadosModificaciones.child(key).update({

                id_orden: AgendadosID,
                uid: currentUID,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                cambio: "creacion Paquete de " + numDias + " dias",
                inicial: "",
                final: "",
                country: paisPaseo,               
                currencyCharge: tipoMoneda

            })


            var montoPaseador = 0
            var montoCamin = 0

            if (pagoSeleccionInput == "Sin pago") {

                montoPaseador = parseFloat(document.getElementById("pagoPaseador").innerHTML) * 0.60
                montoCamin = parseFloat(document.getElementById("pagoPaseador").innerHTML) * -1 * 0.60
            } else {

                montoPaseador = subtotalCompra * 0.60
                montoCamin = (subtotalCompra * 0.40) - comisionTotal

            }

            let categoriaDesc = document.getElementById("categoria").innerHTML
            let diasDesc = document.getElementById("paseos").innerHTML
            let tiempoDesc = document.getElementById("tiempo").innerHTML
            let perrosDesc = document.getElementById("numPerros").innerHTML


            var horasDesc = ""

            if (tiempoDesc == "0.5") {

                horasDesc = "30 min"

            } else if (tiempoDesc == "1.5") {

                horasDesc = "90 min"

            } else {

                horasDesc = horasDesc + " horas"
            }

            finanzas.set({

                amount: totalApagar,
                amount_paseador: montoPaseador,
                descripcion: "Paquete " + categoriaDesc + " " + diasDesc + " dias " + perrosDesc + " perros " + horasDesc,
                country: paisPaseo,
                currencyCharge: tipoMoneda,
                fee: comisionTotal,
                iva: ivaDeCompra,
                monto_caminandog: montoCamin,
                nombre: nombre,
                order_id: AgendadosID,
                time_op: firebase.database.ServerValue.TIMESTAMP,
                uid: uid
            }).then(function () {


                console.log('Guardado');

                Swal.fire({
                    title: 'Éxito',
                    text: 'Listo. Ahora el paseo se encuentra en la sección de agendados.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    location.href = "../agenda/" // Recarga la página
                });

                // if (confirm("Listo ahora el paseo se encuentra en la sección agendados")) {
                //     window.location.href = "agenda.php"
                // } else {

                //     window.location.href = "agenda.html"
                // }



            })





        })







    }

}


// Funcion para converitr fechas en formato de cadena a timestamp
function convertirFechasATimestamps(fechasString) {
    var diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    // Dividir la cadena en fechas individuales
    var fechasIndividuales = fechasString.split(", ");

    // Almacenar los timestamps resultantes como strings
    var timestampsStrings = [];

    // Procesar cada fecha individual
    fechasIndividuales.forEach(function (fechaString) {
        // Utilizar una expresión regular para extraer los componentes de la fecha
        var match = fechaString.match(/(\w+) (\d{2}) (\w+) (\d{4}) a las (\d{2}:\d{2})/);

        // Concicional para validar que el formato sea correcto
        if (match) {
            var dia = match[2];
            var mes = meses.indexOf(match[3].toLowerCase());
            var anno = parseInt(match[4]);
            var horaMinutos = match[5].split(":");
            var hora = parseInt(horaMinutos[0]);
            var minutos = parseInt(horaMinutos[1]);

            var fecha = new Date(anno, mes, dia, hora, minutos);

            var timestamp = fecha.getTime();

            // Convertir el valor timestamp a string
            timestampsStrings.push(timestamp.toString());
        } else {
            console.log("Formato de fecha no válido:", fechaString);
        }
    });

    return timestampsStrings;
}


function anterior() {

    if (elemento == 1 || elemento <= 1) {

        elemento = 1

    } else {

        elemento--;

    }

    configuracionPantalla();

}


function configuracionPantalla() {

    var botonAnterior = document.getElementById("anterior");
    var botonSiguiente = document.getElementById("siguiente");

    var mapa = document.getElementById("map");
    var fecha1 = document.getElementById("datetimepicker1");
    var fecha2 = document.getElementById("datetimepicker2");
    var fecha3 = document.getElementById("datetimepicker3");
    var fecha4 = document.getElementById("datetimepicker4");
    var fecha5 = document.getElementById("datetimepicker5");
    var fecha6 = document.getElementById("datetimepicker6");
    var fecha7 = document.getElementById("datetimepicker7");
    var fecha8 = document.getElementById("datetimepicker8");
    var fecha9 = document.getElementById("datetimepicker9");
    var fecha10 = document.getElementById("datetimepicker10");
    var fecha11 = document.getElementById("datetimepicker11");
    var fecha12 = document.getElementById("datetimepicker12");
    var fecha13 = document.getElementById("datetimepicker13");
    var fecha14 = document.getElementById("datetimepicker14");
    var fecha15 = document.getElementById("datetimepicker15");
    var fecha16 = document.getElementById("datetimepicker16");
    var fecha17 = document.getElementById("datetimepicker17");
    var fecha18 = document.getElementById("datetimepicker18");
    var fecha19 = document.getElementById("datetimepicker19");
    var fecha20 = document.getElementById("datetimepicker20");
    var fecha21 = document.getElementById("datetimepicker21");
    var fecha22 = document.getElementById("datetimepicker22");
    var fecha23 = document.getElementById("datetimepicker23");
    var fecha24 = document.getElementById("datetimepicker24");
    var fecha25 = document.getElementById("datetimepicker25");
    var fecha26 = document.getElementById("datetimepicker26");
    var fecha27 = document.getElementById("datetimepicker27");
    var fecha28 = document.getElementById("datetimepicker28");
    var fecha29 = document.getElementById("datetimepicker29");
    var fecha30 = document.getElementById("datetimepicker30");
    var fecha1Label = document.getElementById("datetimepicker1Label");
    var fecha2Label = document.getElementById("datetimepicker2Label");
    var fecha3Label = document.getElementById("datetimepicker3Label");
    var fecha4Label = document.getElementById("datetimepicker4Label");
    var fecha5Label = document.getElementById("datetimepicker5Label");
    var fecha6Label = document.getElementById("datetimepicker6Label");
    var fecha7Label = document.getElementById("datetimepicker7Label");
    var fecha8Label = document.getElementById("datetimepicker8Label");
    var fecha9Label = document.getElementById("datetimepicker9Label");
    var fecha10Label = document.getElementById("datetimepicker10Label");
    var fecha11Label = document.getElementById("datetimepicker11Label");
    var fecha12Label = document.getElementById("datetimepicker12Label");
    var fecha13Label = document.getElementById("datetimepicker13Label");
    var fecha14Label = document.getElementById("datetimepicker14Label");
    var fecha15Label = document.getElementById("datetimepicker15Label");
    var fecha16Label = document.getElementById("datetimepicker16Label");
    var fecha17Label = document.getElementById("datetimepicker17Label");
    var fecha18Label = document.getElementById("datetimepicker18Label");
    var fecha19Label = document.getElementById("datetimepicker19Label");
    var fecha20Label = document.getElementById("datetimepicker20Label");
    var fecha21Label = document.getElementById("datetimepicker21Label");
    var fecha22Label = document.getElementById("datetimepicker22Label");
    var fecha23Label = document.getElementById("datetimepicker23Label");
    var fecha24Label = document.getElementById("datetimepicker24Label");
    var fecha25Label = document.getElementById("datetimepicker25Label");
    var fecha26Label = document.getElementById("datetimepicker26Label");
    var fecha27Label = document.getElementById("datetimepicker27Label");
    var fecha28Label = document.getElementById("datetimepicker28Label");
    var fecha29Label = document.getElementById("datetimepicker29Label");
    var fecha30Label = document.getElementById("datetimepicker30Label");
    var numInteriorInput = document.getElementById("numInterior");
    var numInteriorLabel = document.getElementById("numInteriorLabel");
    var diasSeleccionInput = document.getElementById("diasSeleccion");
    var diasSeleccionLabel = document.getElementById("diasSeleccionLabel");
    var categoriaSeleccionInput = document.getElementById("categoriaSeleccion");
    var categoriaSeleccionLabel = document.getElementById("categoriaSeleccionLabel");
    var pagoSeleccionInput = document.getElementById("pagoSeleccion");
    var pagoSeleccionLabel = document.getElementById("pagoSeleccionLabel");
    var tiempoSeleccionInput = document.getElementById("tiempoSeleccion");
    var tiempoSeleccionLabel = document.getElementById("tiempoSeleccionLabel");
    var paisPaseoInput = document.getElementById("paisPaseo");
    var paisPaseoLabel = document.getElementById("paisPaseoLabel");
    var tipoMonedaInput = document.getElementById("tipoMoneda");
    var tipoMonedaLabel = document.getElementById("tipoMonedaLabel");


    var datosPaseo = document.getElementById("rowDatosGenerales");
    var costos = document.getElementById("rowCosto");


    var numDias = document.getElementById("diasSeleccion").value

    console.log("Pagina: " + elemento)

    if (elemento == 1) {

        botonAnterior.style.display = "none";
        mapa.style.display = "block";
        fecha1.style.display = "none";
        fecha2.style.display = "none";
        fecha3.style.display = "none";
        fecha4.style.display = "none";
        fecha5.style.display = "none";
        fecha6.style.display = "none";
        fecha7.style.display = "none";
        fecha8.style.display = "none";
        fecha9.style.display = "none";
        fecha10.style.display = "none";
        fecha11.style.display = "none";
        fecha12.style.display = "none";
        fecha13.style.display = "none";
        fecha14.style.display = "none";
        fecha15.style.display = "none";
        fecha16.style.display = "none";
        fecha17.style.display = "none";
        fecha18.style.display = "none";
        fecha19.style.display = "none";
        fecha20.style.display = "none";
        fecha21.style.display = "none";
        fecha22.style.display = "none";
        fecha23.style.display = "none";
        fecha24.style.display = "none";
        fecha25.style.display = "none";
        fecha26.style.display = "none";
        fecha27.style.display = "none";
        fecha28.style.display = "none";
        fecha29.style.display = "none";
        fecha30.style.display = "none";
        fecha1Label.style.display = "none";
        fecha2Label.style.display = "none";
        fecha3Label.style.display = "none";
        fecha4Label.style.display = "none";
        fecha5Label.style.display = "none";
        fecha6Label.style.display = "none";
        fecha7Label.style.display = "none";
        fecha8Label.style.display = "none";
        fecha9Label.style.display = "none";
        fecha10Label.style.display = "none";
        fecha11Label.style.display = "none";
        fecha12Label.style.display = "none";
        fecha13Label.style.display = "none";
        fecha14Label.style.display = "none";
        fecha15Label.style.display = "none";
        fecha16Label.style.display = "none";
        fecha17Label.style.display = "none";
        fecha18Label.style.display = "none";
        fecha19Label.style.display = "none";
        fecha20Label.style.display = "none";
        fecha21Label.style.display = "none";
        fecha22Label.style.display = "none";
        fecha23Label.style.display = "none";
        fecha24Label.style.display = "none";
        fecha25Label.style.display = "none";
        fecha26Label.style.display = "none";
        fecha27Label.style.display = "none";
        fecha28Label.style.display = "none";
        fecha29Label.style.display = "none";
        fecha30Label.style.display = "none";
        numInteriorInput.style.display = "block";
        numInteriorLabel.style.display = "block";
        diasSeleccionLabel.style.display = "block";
        diasSeleccionInput.style.display = "block";
        categoriaSeleccionInput.style.display = "block";
        categoriaSeleccionLabel.style.display = "block";
        pagoSeleccionInput.style.display = "block";
        pagoSeleccionLabel.style.display = "block";
        tiempoSeleccionInput.style.display = "block";
        tiempoSeleccionLabel.style.display = "block";
        paisPaseoInput.style.display = "block";
        paisPaseoLabel.style.display = "block";
        tipoMonedaInput.style.display = "block";
        tipoMonedaLabel.style.display = "block";

        $("#rowDatosGenerales").hide();
        $("#rowCosto").hide();

        $("#tablaPerros").hide();

    } else if (elemento == 2) {

        botonAnterior.style.display = "block";
        mapa.style.display = "none"

        numInteriorInput.style.display = "none";
        numInteriorLabel.style.display = "none";
        diasSeleccionInput.style.display = "none";
        diasSeleccionLabel.style.display = "none";
        categoriaSeleccionInput.style.display = "none";
        categoriaSeleccionLabel.style.display = "none";
        pagoSeleccionInput.style.display = "none";
        pagoSeleccionLabel.style.display = "none";
        tiempoSeleccionInput.style.display = "none";
        tiempoSeleccionLabel.style.display = "none";
        paisPaseoInput.style.display = "none";
        paisPaseoLabel.style.display = "none";
        tipoMonedaInput.style.display = "none";
        tipoMonedaLabel.style.display = "none";

        $("#rowDatosGenerales").hide();
        $("#rowCosto").hide();


        $("#tablaPerros").show();

        if (numDias == 1) {

            fecha1.style.display = "flex";

            fecha1Label.style.display = "block";

        } else if (numDias == 2) {

            fecha1.style.display = "flex";
            fecha2.style.display = "flex";


            fecha1Label.style.display = "block";
            fecha2Label.style.display = "block";


        } else if (numDias == 3) {

            fecha1.style.display = "flex";
            fecha2.style.display = "flex";
            fecha3.style.display = "flex";

            fecha1Label.style.display = "block";
            fecha2Label.style.display = "block";
            fecha3Label.style.display = "block";

        } else if (numDias == 5) {

            fecha1.style.display = "flex";
            fecha2.style.display = "flex";
            fecha3.style.display = "flex";
            fecha4.style.display = "flex";
            fecha5.style.display = "flex";

            fecha1Label.style.display = "block";
            fecha2Label.style.display = "block";
            fecha3Label.style.display = "block";
            fecha4Label.style.display = "block";
            fecha5Label.style.display = "block";

        } else if (numDias == 10) {

            fecha1.style.display = "flex";
            fecha2.style.display = "flex";
            fecha3.style.display = "flex";
            fecha4.style.display = "flex";
            fecha5.style.display = "flex";
            fecha6.style.display = "flex";
            fecha7.style.display = "flex";
            fecha8.style.display = "flex";
            fecha9.style.display = "flex";
            fecha10.style.display = "flex";

            fecha1Label.style.display = "block";
            fecha2Label.style.display = "block";
            fecha3Label.style.display = "block";
            fecha4Label.style.display = "block";
            fecha5Label.style.display = "block";
            fecha6Label.style.display = "block";
            fecha7Label.style.display = "block";
            fecha8Label.style.display = "block";
            fecha9Label.style.display = "block";
            fecha10Label.style.display = "block";

        } else if (numDias == 30) {

            fecha1.style.display = "flex";
            fecha2.style.display = "flex";
            fecha3.style.display = "flex";
            fecha4.style.display = "flex";
            fecha5.style.display = "flex";
            fecha6.style.display = "flex";
            fecha7.style.display = "flex";
            fecha8.style.display = "flex";
            fecha9.style.display = "flex";
            fecha10.style.display = "flex";
            fecha11.style.display = "flex";
            fecha12.style.display = "flex";
            fecha13.style.display = "flex";
            fecha14.style.display = "flex";
            fecha15.style.display = "flex";
            fecha16.style.display = "flex";
            fecha17.style.display = "flex";
            fecha18.style.display = "flex";
            fecha19.style.display = "flex";
            fecha20.style.display = "flex";
            fecha21.style.display = "flex";
            fecha22.style.display = "flex";
            fecha23.style.display = "flex";
            fecha24.style.display = "flex";
            fecha25.style.display = "flex";
            fecha26.style.display = "flex";
            fecha27.style.display = "flex";
            fecha28.style.display = "flex";
            fecha29.style.display = "flex";
            fecha30.style.display = "flex";

            fecha1Label.style.display = "block";
            fecha2Label.style.display = "block";
            fecha3Label.style.display = "block";
            fecha4Label.style.display = "block";
            fecha5Label.style.display = "block";
            fecha6Label.style.display = "block";
            fecha7Label.style.display = "block";
            fecha8Label.style.display = "block";
            fecha9Label.style.display = "block";
            fecha10Label.style.display = "block";
            fecha11Label.style.display = "block";
            fecha12Label.style.display = "block";
            fecha13Label.style.display = "block";
            fecha14Label.style.display = "block";
            fecha15Label.style.display = "block";
            fecha16Label.style.display = "block";
            fecha17Label.style.display = "block";
            fecha18Label.style.display = "block";
            fecha19Label.style.display = "block";
            fecha20Label.style.display = "block";
            fecha21Label.style.display = "block";
            fecha22Label.style.display = "block";
            fecha23Label.style.display = "block";
            fecha24Label.style.display = "block";
            fecha25Label.style.display = "block";
            fecha26Label.style.display = "block";
            fecha27Label.style.display = "block";
            fecha28Label.style.display = "block";
            fecha29Label.style.display = "block";
            fecha30Label.style.display = "block";
        }

        console.log("Dias Seleccionados: " + numDias);


    } else if (elemento == 3) {


        $("#tablaPerros").hide();


        if (numDias == 1) {

            fecha1.style.display = "none";

            fecha1Label.style.display = "none";

            fecha1Mostrar.style.display = "block"


            $("#fecha1Mostrar").show();
            $("#fecha2Mostrar").hide();
            $("#fecha3Mostrar").hide();
            $("#fecha4Mostrar").hide();
            $("#fecha5Mostrar").hide();
            $("#fecha6Mostrar").hide();
            $("#fecha7Mostrar").hide();
            $("#fecha8Mostrar").hide();
            $("#fecha9Mostrar").hide();
            $("#fecha10Mostrar").hide();
            $("#fecha11Mostrar").hide();
            $("#fecha12Mostrar").hide();
            $("#fecha13Mostrar").hide();
            $("#fecha14Mostrar").hide();
            $("#fecha15Mostrar").hide();
            $("#fecha16Mostrar").hide();
            $("#fecha17Mostrar").hide();
            $("#fecha18Mostrar").hide();
            $("#fecha19Mostrar").hide();
            $("#fecha20Mostrar").hide();
            $("#fecha21Mostrar").hide();
            $("#fecha22Mostrar").hide();
            $("#fecha23Mostrar").hide();
            $("#fecha24Mostrar").hide();
            $("#fecha25Mostrar").hide();
            $("#fecha26Mostrar").hide();
            $("#fecha27Mostrar").hide();
            $("#fecha28Mostrar").hide();
            $("#fecha29Mostrar").hide();
            $("#fecha30Mostrar").hide();
            $("#fecha1").show();
            $("#fecha2").hide();
            $("#fecha3").hide();
            $("#fecha4").hide();
            $("#fecha5").hide();
            $("#fecha6").hide();
            $("#fecha7").hide();
            $("#fecha8").hide();
            $("#fecha9").hide();
            $("#fecha10").hide();
            $("#fecha11").hide();
            $("#fecha12").hide();
            $("#fecha13").hide();
            $("#fecha14").hide();
            $("#fecha15").hide();
            $("#fecha16").hide();
            $("#fecha17").hide();
            $("#fecha18").hide();
            $("#fecha19").hide();
            $("#fecha20").hide();
            $("#fecha21").hide();
            $("#fecha22").hide();
            $("#fecha23").hide();
            $("#fecha24").hide();
            $("#fecha25").hide();
            $("#fecha26").hide();
            $("#fecha27").hide();
            $("#fecha28").hide();
            $("#fecha29").hide();
            $("#fecha30").hide();
        } else if (numDias == 2) {

            fecha1.style.display = "none";
            fecha2.style.display = "none";

            fecha1Label.style.display = "none";
            fecha2Label.style.display = "none";

            $("#fecha1Mostrar").show();
            $("#fecha2Mostrar").show();
            $("#fecha3Mostrar").hide();
            $("#fecha4Mostrar").hide();
            $("#fecha5Mostrar").hide();
            $("#fecha6Mostrar").hide();
            $("#fecha7Mostrar").hide();
            $("#fecha8Mostrar").hide();
            $("#fecha9Mostrar").hide();
            $("#fecha10Mostrar").hide();
            $("#fecha11Mostrar").hide();
            $("#fecha12Mostrar").hide();
            $("#fecha13Mostrar").hide();
            $("#fecha14Mostrar").hide();
            $("#fecha15Mostrar").hide();
            $("#fecha16Mostrar").hide();
            $("#fecha17Mostrar").hide();
            $("#fecha18Mostrar").hide();
            $("#fecha19Mostrar").hide();
            $("#fecha20Mostrar").hide();
            $("#fecha21Mostrar").hide();
            $("#fecha22Mostrar").hide();
            $("#fecha23Mostrar").hide();
            $("#fecha24Mostrar").hide();
            $("#fecha25Mostrar").hide();
            $("#fecha26Mostrar").hide();
            $("#fecha27Mostrar").hide();
            $("#fecha28Mostrar").hide();
            $("#fecha29Mostrar").hide();
            $("#fecha30Mostrar").hide();
            $("#fecha1").show();
            $("#fecha2").show();
            $("#fecha3").hide();
            $("#fecha4").hide();
            $("#fecha5").hide();
            $("#fecha6").hide();
            $("#fecha7").hide();
            $("#fecha8").hide();
            $("#fecha9").hide();
            $("#fecha10").hide();
            $("#fecha11").hide();
            $("#fecha12").hide();
            $("#fecha13").hide();
            $("#fecha14").hide();
            $("#fecha15").hide();
            $("#fecha16").hide();
            $("#fecha17").hide();
            $("#fecha18").hide();
            $("#fecha19").hide();
            $("#fecha20").hide();
            $("#fecha21").hide();
            $("#fecha22").hide();
            $("#fecha23").hide();
            $("#fecha24").hide();
            $("#fecha25").hide();
            $("#fecha26").hide();
            $("#fecha27").hide();
            $("#fecha28").hide();
            $("#fecha29").hide();
            $("#fecha30").hide();

        } else if (numDias == 3) {

            fecha1.style.display = "none";
            fecha2.style.display = "none";
            fecha3.style.display = "none";

            fecha1Label.style.display = "none";
            fecha2Label.style.display = "none";
            fecha3Label.style.display = "none";

            $("#fecha1Mostrar").show();
            $("#fecha2Mostrar").show();
            $("#fecha3Mostrar").show();
            $("#fecha4Mostrar").hide();
            $("#fecha5Mostrar").hide();
            $("#fecha6Mostrar").hide();
            $("#fecha7Mostrar").hide();
            $("#fecha8Mostrar").hide();
            $("#fecha9Mostrar").hide();
            $("#fecha10Mostrar").hide();
            $("#fecha11Mostrar").hide();
            $("#fecha12Mostrar").hide();
            $("#fecha13Mostrar").hide();
            $("#fecha14Mostrar").hide();
            $("#fecha15Mostrar").hide();
            $("#fecha16Mostrar").hide();
            $("#fecha17Mostrar").hide();
            $("#fecha18Mostrar").hide();
            $("#fecha19Mostrar").hide();
            $("#fecha20Mostrar").hide();
            $("#fecha21Mostrar").hide();
            $("#fecha22Mostrar").hide();
            $("#fecha23Mostrar").hide();
            $("#fecha24Mostrar").hide();
            $("#fecha25Mostrar").hide();
            $("#fecha26Mostrar").hide();
            $("#fecha27Mostrar").hide();
            $("#fecha28Mostrar").hide();
            $("#fecha29Mostrar").hide();
            $("#fecha30Mostrar").hide();
            $("#fecha1").show();
            $("#fecha2").show();
            $("#fecha3").show();
            $("#fecha4").hide();
            $("#fecha5").hide();
            $("#fecha6").hide();
            $("#fecha7").hide();
            $("#fecha8").hide();
            $("#fecha9").hide();
            $("#fecha10").hide();
            $("#fecha11").hide();
            $("#fecha12").hide();
            $("#fecha13").hide();
            $("#fecha14").hide();
            $("#fecha15").hide();
            $("#fecha16").hide();
            $("#fecha17").hide();
            $("#fecha18").hide();
            $("#fecha19").hide();
            $("#fecha20").hide();
            $("#fecha21").hide();
            $("#fecha22").hide();
            $("#fecha23").hide();
            $("#fecha24").hide();
            $("#fecha25").hide();
            $("#fecha26").hide();
            $("#fecha27").hide();
            $("#fecha28").hide();
            $("#fecha29").hide();
            $("#fecha30").hide();

        } else if (numDias == 5) {

            fecha1.style.display = "none";
            fecha2.style.display = "none";
            fecha3.style.display = "none";
            fecha4.style.display = "none";
            fecha5.style.display = "none";


            fecha1Label.style.display = "none";
            fecha2Label.style.display = "none";
            fecha3Label.style.display = "none";
            fecha4Label.style.display = "none";
            fecha5Label.style.display = "none";



            $("#fecha1Mostrar").show();
            $("#fecha2Mostrar").show();
            $("#fecha3Mostrar").show();
            $("#fecha4Mostrar").show();
            $("#fecha5Mostrar").show();
            $("#fecha6Mostrar").hide();
            $("#fecha7Mostrar").hide();
            $("#fecha8Mostrar").hide();
            $("#fecha9Mostrar").hide();
            $("#fecha10Mostrar").hide();
            $("#fecha11Mostrar").hide();
            $("#fecha12Mostrar").hide();
            $("#fecha13Mostrar").hide();
            $("#fecha14Mostrar").hide();
            $("#fecha15Mostrar").hide();
            $("#fecha16Mostrar").hide();
            $("#fecha17Mostrar").hide();
            $("#fecha18Mostrar").hide();
            $("#fecha19Mostrar").hide();
            $("#fecha20Mostrar").hide();
            $("#fecha21Mostrar").hide();
            $("#fecha22Mostrar").hide();
            $("#fecha23Mostrar").hide();
            $("#fecha24Mostrar").hide();
            $("#fecha25Mostrar").hide();
            $("#fecha26Mostrar").hide();
            $("#fecha27Mostrar").hide();
            $("#fecha28Mostrar").hide();
            $("#fecha29Mostrar").hide();
            $("#fecha30Mostrar").hide();
            $("#fecha1").show();
            $("#fecha2").hide();
            $("#fecha3").show();
            $("#fecha4").show();
            $("#fecha5").show();
            $("#fecha6").hide();
            $("#fecha7").hide();
            $("#fecha8").hide();
            $("#fecha9").hide();
            $("#fecha10").hide();
            $("#fecha11").hide();
            $("#fecha12").hide();
            $("#fecha13").hide();
            $("#fecha14").hide();
            $("#fecha15").hide();
            $("#fecha16").hide();
            $("#fecha17").hide();
            $("#fecha18").hide();
            $("#fecha19").hide();
            $("#fecha20").hide();
            $("#fecha21").hide();
            $("#fecha22").hide();
            $("#fecha23").hide();
            $("#fecha24").hide();
            $("#fecha25").hide();
            $("#fecha26").hide();
            $("#fecha27").hide();
            $("#fecha28").hide();
            $("#fecha29").hide();
            $("#fecha30").hide();

        } else if (numDias == 10) {



            fecha1.style.display = "none";
            fecha2.style.display = "none";
            fecha3.style.display = "none";
            fecha4.style.display = "none";
            fecha5.style.display = "none";
            fecha6.style.display = "none";
            fecha7.style.display = "none";
            fecha8.style.display = "none";
            fecha9.style.display = "none";
            fecha10.style.display = "none";

            fecha1Label.style.display = "none";
            fecha2Label.style.display = "none";
            fecha3Label.style.display = "none";
            fecha4Label.style.display = "none";
            fecha5Label.style.display = "none";
            fecha6Label.style.display = "none";
            fecha7Label.style.display = "none";
            fecha8Label.style.display = "none";
            fecha9Label.style.display = "none";
            fecha10Label.style.display = "none";


            $("#fecha1Mostrar").show();
            $("#fecha2Mostrar").show();
            $("#fecha3Mostrar").show();
            $("#fecha4Mostrar").show();
            $("#fecha5Mostrar").show();
            $("#fecha6Mostrar").show();
            $("#fecha7Mostrar").show();
            $("#fecha8Mostrar").show();
            $("#fecha9Mostrar").show();
            $("#fecha10Mostrar").show();
            $("#fecha11Mostrar").hide();
            $("#fecha12Mostrar").hide();
            $("#fecha13Mostrar").hide();
            $("#fecha14Mostrar").hide();
            $("#fecha15Mostrar").hide();
            $("#fecha16Mostrar").hide();
            $("#fecha17Mostrar").hide();
            $("#fecha18Mostrar").hide();
            $("#fecha19Mostrar").hide();
            $("#fecha20Mostrar").hide();
            $("#fecha21Mostrar").hide();
            $("#fecha22Mostrar").hide();
            $("#fecha23Mostrar").hide();
            $("#fecha24Mostrar").hide();
            $("#fecha25Mostrar").hide();
            $("#fecha26Mostrar").hide();
            $("#fecha27Mostrar").hide();
            $("#fecha28Mostrar").hide();
            $("#fecha29Mostrar").hide();
            $("#fecha30Mostrar").hide();
            $("#fecha1").show();
            $("#fecha2").show();
            $("#fecha3").show();
            $("#fecha4").show();
            $("#fecha5").show();
            $("#fecha6").show();
            $("#fecha7").show();
            $("#fecha8").show();
            $("#fecha9").show();
            $("#fecha10").show();
            $("#fecha11").hide();
            $("#fecha12").hide();
            $("#fecha13").hide();
            $("#fecha14").hide();
            $("#fecha15").hide();
            $("#fecha16").hide();
            $("#fecha17").hide();
            $("#fecha18").hide();
            $("#fecha19").hide();
            $("#fecha20").hide();
            $("#fecha21").hide();
            $("#fecha22").hide();
            $("#fecha23").hide();
            $("#fecha24").hide();
            $("#fecha25").hide();
            $("#fecha26").hide();
            $("#fecha27").hide();
            $("#fecha28").hide();
            $("#fecha29").hide();
            $("#fecha30").hide();


        } else if (numDias == 30) {



            fecha1.style.display = "none";
            fecha2.style.display = "none";
            fecha3.style.display = "none";
            fecha4.style.display = "none";
            fecha5.style.display = "none";
            fecha6.style.display = "none";
            fecha7.style.display = "none";
            fecha8.style.display = "none";
            fecha9.style.display = "none";
            fecha10.style.display = "none";
            fecha11.style.display = "none";
            fecha12.style.display = "none";
            fecha13.style.display = "none";
            fecha14.style.display = "none";
            fecha15.style.display = "none";
            fecha16.style.display = "none";
            fecha17.style.display = "none";
            fecha18.style.display = "none";
            fecha19.style.display = "none";
            fecha20.style.display = "none";
            fecha21.style.display = "none";
            fecha22.style.display = "none";
            fecha23.style.display = "none";
            fecha24.style.display = "none";
            fecha25.style.display = "none";
            fecha26.style.display = "none";
            fecha27.style.display = "none";
            fecha28.style.display = "none";
            fecha29.style.display = "none";
            fecha30.style.display = "none";


            fecha1Label.style.display = "none";
            fecha2Label.style.display = "none";
            fecha3Label.style.display = "none";
            fecha4Label.style.display = "none";
            fecha5Label.style.display = "none";
            fecha6Label.style.display = "none";
            fecha7Label.style.display = "none";
            fecha8Label.style.display = "none";
            fecha9Label.style.display = "none";
            fecha10Label.style.display = "none";

            fecha11Label.style.display = "none";
            fecha12Label.style.display = "none";
            fecha13Label.style.display = "none";
            fecha14Label.style.display = "none";
            fecha15Label.style.display = "none";
            fecha16Label.style.display = "none";
            fecha17Label.style.display = "none";
            fecha18Label.style.display = "none";
            fecha19Label.style.display = "none";
            fecha20Label.style.display = "none";
            fecha21Label.style.display = "none";
            fecha22Label.style.display = "none";
            fecha23Label.style.display = "none";
            fecha24Label.style.display = "none";
            fecha25Label.style.display = "none";
            fecha26Label.style.display = "none";
            fecha27Label.style.display = "none";
            fecha28Label.style.display = "none";
            fecha29Label.style.display = "none";
            fecha30Label.style.display = "none";


            $("#fecha1Mostrar").show();
            $("#fecha2Mostrar").show();
            $("#fecha3Mostrar").show();
            $("#fecha4Mostrar").show();
            $("#fecha5Mostrar").show();
            $("#fecha6Mostrar").show();
            $("#fecha7Mostrar").show();
            $("#fecha8Mostrar").show();
            $("#fecha9Mostrar").show();
            $("#fecha10Mostrar").show();

            $("#fecha11Mostrar").show();
            $("#fecha12Mostrar").show();
            $("#fecha13Mostrar").show();
            $("#fecha14Mostrar").show();
            $("#fecha15Mostrar").show();
            $("#fecha16Mostrar").show();
            $("#fecha17Mostrar").show();
            $("#fecha18Mostrar").show();
            $("#fecha19Mostrar").show();
            $("#fecha20Mostrar").show();

            $("#fecha21Mostrar").show();
            $("#fecha22Mostrar").show();
            $("#fecha23Mostrar").show();
            $("#fecha24Mostrar").show();
            $("#fecha25Mostrar").show();
            $("#fecha26Mostrar").show();
            $("#fecha27Mostrar").show();
            $("#fecha28Mostrar").show();
            $("#fecha29Mostrar").show();
            $("#fecha30Mostrar").show();


            $("#fecha1").show();
            $("#fecha2").show();
            $("#fecha3").show();
            $("#fecha4").show();
            $("#fecha5").show();
            $("#fecha6").show();
            $("#fecha7").show();
            $("#fecha8").show();
            $("#fecha9").show();
            $("#fecha10").show();
            $("#fecha11").show();
            $("#fecha12").show();
            $("#fecha13").show();
            $("#fecha14").show();
            $("#fecha15").show();
            $("#fecha16").show();
            $("#fecha17").show();
            $("#fecha18").show();
            $("#fecha19").show();
            $("#fecha20").show();
            $("#fecha21").show();
            $("#fecha22").show();
            $("#fecha23").show();
            $("#fecha24").show();
            $("#fecha25").show();
            $("#fecha26").show();
            $("#fecha27").show();
            $("#fecha28").show();
            $("#fecha29").show();
            $("#fecha30").show();


        }


        $("#rowDatosGenerales").show();
        $("#rowCosto").show();

    }


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
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];


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



window.onload = obtener_dirección();
