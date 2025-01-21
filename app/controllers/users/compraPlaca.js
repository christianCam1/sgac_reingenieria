var uid = getAllUrlParams().uid;
var telefono = getAllUrlParams().telefono;
var nombre = decodeURI(getAllUrlParams().nombre)
console.log("Nombre " + nombre)



var elemento = 1;
var costoPlaca = 0;
var costoEnvio = 0;
var costoVigencia = 0;
var iva = 0;
var primera = true
var numPlacas = 0


var costoServicio = 0.0
var descuentoInterno = 0.0
var cuponDescuento = 0.0
var subtotalCompra = 0.0
var envioCompra = 0.0
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



function obtener_dirección() {

    var db = firebase.database();
    var ref = db.ref("Usuarios");


    ref.orderByChild("uid").equalTo(uid).once("value", function (snapshot) {


        obtener_costos();
        obtener_iva();
        obtener_fecha();
        snapshot.forEach(function (data) {

            var d = data.val();


            if (d.direccion != undefined) {


                console.log(d.direccion);
                console.log(d.latitud);
                console.log(d.longitud);

                cargarMapa(d.direccion, d.latitud, d.longitud)

            } else {

                cargarMapa(null, null, null)
            }




        });

    });


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

function obtener_costos() {

    var db = firebase.database();
    var ref = db.ref("Costos");

    ref.once("value", function (snapshot) {



        snapshot.forEach(function (data) {

            var d = data.val();

            console.log(d.tipo + " " + data.child("1").val())

            if (d.tipo == "recuperandog") {

                costoPlaca = data.child("1").val()
                costoEnvio = data.child("envio").val()
                costoVigencia = data.child("vigencia").val()

            }


        })

    })

}

function obtener_iva() {


    var db = firebase.database();
    var ref = db.ref("IVA");

    ref.once("value", function (snapshot) {


        iva = snapshot.val().iva


    })


}

function cargarMapa(dir, lat, lng) {

    configuracionPantalla()

    var latitud = 19.5031560714501;
    var longitud = -99.23319306224586;




    if (dir != null && lat != null && lng != null) {

        var res = dir.split(";");
        document.getElementById("pac-input").value = res[0];
        document.getElementById("numInterior").value = res[1];

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


                console.log(results[0].formatted_address)

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
    numPlacas = document.getElementById("numPlaquitas").value


    var pagoSeleccionInput = document.getElementById("pagoSeleccion").value;


    if (elemento == 1) {

        if (numInterior.trim() == "") {


            alert("Numero Interior no puede estar vacio");

        } else if (numInterior.indexOf(';') > -1) {

            alert("Numero Interior no puede incluir ;");

        } else if (direccion.trim() == "") {

            alert("Necesita ingresar una dirección");

        } else if (numPlacas == "" || numPlacas == "0" || numPlacas.includes("-")) {

            alert("Debe comprar almenos una plaquita");


        } else {

            elemento++
            configuracionPantalla()

        }

        primera = true

    }

    if (elemento == 2) {


        if (primera == true) {

            primera = false
            console.log("Costo placa: " + costoPlaca)
            costoServicio = costoPlaca
            envioCompra = costoEnvio
            subtotalCompra = (costoPlaca * numPlacas) + envioCompra
            ivaDeCompra = subtotalCompra * iva
            totalApagar = subtotalCompra



            console.log("Costo Servicio: " + costoServicio.toFixed(2))
            console.log("Iva: " + envioCompra.toFixed(2))
            console.log("Total a pagar: " + totalApagar.toFixed(2))
            var nuevaDireccion = direccion + ";" + numInterior;
            document.getElementById("direccion").innerHTML = nuevaDireccion;
            // document.getElementById("paseos").innerHTML = numDias

            document.getElementById("paseos").innerHTML = numPlacas;

            /*
            
                    tdh
            */

            if (pagoSeleccionInput == "tarjetadc") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2)
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2)
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2)
                document.getElementById("total").innerHTML = totalApagar.toFixed(2)

                console.log("total " + totalApagar)

                // 

                comisionInicialTarjetadc = totalApagar * porcentajeTarjetadc
                comisionConektaTarjetadc = comisionInicialTarjetadc + agregadoFijoTarjetadc
                ivaDeComision = comisionConektaTarjetadc * iva
                comisionTotal = comisionConektaTarjetadc + ivaDeComision

                console.log("comisionTotal " + comisionTotal)

            } else if (pagoSeleccionInput == "tic") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2)
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2)
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2)
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2)
                document.getElementById("total").innerHTML = totalApagar.toFixed(2)


                console.log("total " + totalApagar)

                // 

                ivaDeComision = comisionInicialtic * iva
                comisionTotal = comisionInicialtic + ivaDeComision

                console.log("comisionTotal " + comisionTotal)

            } else if (pagoSeleccionInput == "eop") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2)
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2)
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2)
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2)
                document.getElementById("total").innerHTML = totalApagar.toFixed(2)


                console.log("total " + totalApagar)

                // 

                comisionInicialeop = totalApagar * porcentajeEop
                ivaDeComision = comisionInicialeop * iva
                comisionTotal = comisionInicialeop + ivaDeComision

                console.log("comisionTotal " + comisionTotal)

            } else if (pagoSeleccionInput == "tdh") {


                document.getElementById("costo").innerHTML = costoServicio.toFixed(2)
                document.getElementById("descuento").innerHTML = descuentoInterno.toFixed(2)
                document.getElementById("subtotal").innerHTML = subtotalCompra.toFixed(2)
                document.getElementById("iva").innerHTML = ivaDeCompra.toFixed(2)
                document.getElementById("total").innerHTML = totalApagar.toFixed(2)


                console.log("total " + totalApagar)

                // 


                comisionTotal = 0
                console.log("comisionTotal " + comisionTotal)

            } else if (pagoSeleccionInput == "Sin pago") {



                document.getElementById("costo").innerHTML = 0
                document.getElementById("subtotal").innerHTML = 0
                document.getElementById("iva").innerHTML = 0
                document.getElementById("total").innerHTML = 0



                subtotalCompra = 0
                envioCompra = 40
                totalApagar = 0
                ivaDeCompra = 0


                comisionTotal = 0


            }





        } else {


            var r = confirm("Confirma solo si estas seguro de que todos los datos son correctos");
            if (r == true) {
                elemento++
            } else {

            }

        }



    }
    if (elemento == 3) {


        var db = firebase.database();
        var ref = db.ref("RecuperanDogCompras");

        var Recuperandog = ref.push();
        var RecuperandogID = Recuperandog.getKey();
        var finanzas = db.ref("Finanzas").child(RecuperandogID)
        var descripcionPlacas = ""

        if (numPlacas == "1") {

            descripcionPlacas = "Plaquita"

        } else {

            descripcionPlacas = "Plaquitas"

        }


        Recuperandog.set({

            amount: costoPlaca,
            cantidad: numPlacas,
            descripcion: numPlacas + " " + descripcionPlacas + " RecuperanDog",
            direccion: document.getElementById("direccion").innerHTML,
            entregado: false,
            envio: costoEnvio,
            fee: comisionTotal,
            id_usr: uid,
            latitud: Markermio.getPosition().lat(),
            longitud: Markermio.getPosition().lng(),
            nombre: nombre,
            numero_usuario: telefono,
            order_id: RecuperandogID,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            total: totalApagar
        }).then(function () {


            var key = db.ref("cambios_ordenes").push().getKey();
            var agendadosModificaciones = db.ref("cambios_ordenes");
            var currentUID = firebase.auth().currentUser.uid;


            agendadosModificaciones.child(key).update({

                id_orden: RecuperandogID,
                uid: currentUID,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                cambio: "Generacion de compra de placa",
                inicial: "",
                final: ""

            })

            finanzas.set({

                amount: totalApagar,
                amount_paseador: envioCompra,
                descripcion: numPlacas + " " + descripcionPlacas + " RecuperanDog 1",
                fee: comisionTotal,
                iva: ivaDeCompra,
                monto_caminandog: totalApagar - comisionTotal - envioCompra - ivaDeCompra,
                nombre: nombre,
                order_id: RecuperandogID,
                time_op: firebase.database.ServerValue.TIMESTAMP,
                uid: uid
            }).then(function () {


                console.log('Guardado');

                if (confirm("La compra se ha generado correctamente")) {
                    window.location.href = "../recuperandog/"
                } else {

                    window.location.href = "recuperandogCompras.html"
                }



            })





        })





    }


}

function anterior() {

    if (elemento == 1 || elemento <= 1) {

        elemento = 1

    } else {

        elemento--;

    }

    configuracionPantalla()

}

function configuracionPantalla() {

    var botonAnterior = document.getElementById("anterior");
    var botonSiguiente = document.getElementById("siguiente");

    var mapa = document.getElementById("map");

    var numInteriorInput = document.getElementById("numInterior");
    var numInteriorLabel = document.getElementById("numInteriorLabel");

    var numPlaquitasLabel = document.getElementById("numPlaquitasLabel");
    var numPlaquitas = document.getElementById("numPlaquitas");

    var pagoSeleccionInput = document.getElementById("pagoSeleccion");
    var pagoSeleccionLabel = document.getElementById("pagoSeleccionLabel");

    var tablaPerros = document.getElementById("tablaPerros");


    var datosPaseo = document.getElementById("rowDatosGenerales");
    var costos = document.getElementById("rowCosto");



    console.log("Pagina: " + elemento)

    if (elemento == 1) {

        botonAnterior.style.display = "none";
        mapa.style.display = "block";

        numInteriorInput.style.display = "block";
        numInteriorLabel.style.display = "block";

        numPlaquitas.style.display = "block"
        numPlaquitasLabel.style.display = "block"

        pagoSeleccionInput.style.display = "block";
        pagoSeleccionLabel.style.display = "block";

        $("#rowDatosGenerales").hide();
        $("#rowCosto").hide();

        $("#tablaPerros").hide();

    } else if (elemento == 2) {


        botonAnterior.style.display = "block";
        mapa.style.display = "none"

        numInteriorInput.style.display = "none";
        numInteriorLabel.style.display = "none";


        numPlaquitasLabel.style.display = "none";
        numPlaquitas.style.display = "none";


        pagoSeleccionInput.style.display = "none";
        pagoSeleccionLabel.style.display = "none";



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

function abrirPaseadores(id) {

    window.open('pag.html?uidPaseador=' + id, '_blank');
}