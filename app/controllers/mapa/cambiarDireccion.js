var order_id = getAllUrlParams().order_id;
var latitud = parseFloat(getAllUrlParams().latitud);
var longitud = parseFloat(getAllUrlParams().longitud);
var fuente = getAllUrlParams().fuente



function cargarMapa() {



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

    map.setCenter({ lat: lat, lng: lng });
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






function guardar_cambios() {


    var numInterior = document.getElementById("numInterior").value
    var direccion = document.getElementById("pac-input").value


    if (numInterior.trim() == "") {


        alert("Numero Interior no puede estar vacio");

    } else if (numInterior.indexOf(';') > -1) {

        alert("Numero Interior no puede incluir ;");

    } else if (direccion.trim() == "") {


        alert("Necesita ingresar una dirección");

    } else {


        var db = firebase.database();
        var ref;
        var redirigir = ""
        var uid;

        if (fuente == "agenda") {

            ref = db.ref("Agendados").child(order_id);
            redirigir = "index.php"

        } else if (fuente == "paseos") {

            uid = getAllUrlParams().uid
            ref = db.ref("Paseos_usuarios").child(uid).child(order_id);
            redirigir = "index.php"

        }

        ref.update({
            direccion: direccion + ";" + numInterior,
            latitud: Markermio.getPosition().lat(),
            longitud: Markermio.getPosition().lng(),

        }).then(function () {


            var key = db.ref("cambios_ordenes").push().getKey();
            var agendadosModificaciones = db.ref("cambios_ordenes");
            var currentUID = firebase.auth().currentUser.uid;


            agendadosModificaciones.child(key).update({

                id_orden: order_id,
                uid: currentUID,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                cambio: "Cambio de direccion " + fuente,
                inicial: "lat: " + latitud + " lng: " + longitud,
                final: "lat: " + Markermio.getPosition().lat() + " lng: " + Markermio.getPosition().lng()

            })


            if (confirm("La direccion se ha modificado correctamente")) {
                window.location.href = redirigir
            } else {

                window.location.href = redirigir
            }

        })


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



window.onload = cargarMapa();
