var uidUsuario = "";
var uid = getAllUrlParams().uid;
document.getElementById("uidBaja").value = uid
console.log(uid);

consulta_baja();

function consulta_baja() {
    var uid = document.getElementById("uidBaja").value
    console.log(uid);
    var db = firebase.database();
    var refUsuarios = db.ref("Usuarios");

    

    refUsuarios.orderByChild('uid').equalTo(uid).once("value").then(snapshot => {
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                console.log(childKey);
                var childData = childSnapshot.val();
                console.log(childData);
                uidUsuario = childKey
                //document.getElementById("foto_perfilUsr").src = childData.direcfoto
                document.getElementById('nombreUsr').innerHTML = childData.nombre + " " + childData.apellido_Paterno + " " + childData.apellido_Materno
                document.getElementById('uidUsr').innerHTML = childKey
                //new Date(detalle.fechaCalificacion).toLocaleDateString()
                document.getElementById('fecUsr').innerHTML = new Date(childData.creation_date).toLocaleDateString();
                document.getElementById('emailbaja').innerHTML = childData.email;
                //alert("El correo ingresado ya se encuentra asociado al usuario "+childData.nombre+" "+childData.apellidopa+" "+childData.apellidoma)
                //window.location.href = "https://sgac.caminandog.com.mx/candidatos_detalle.html?idCandidato="+childKey;
            });
        } else {
            //alert("no existe nimngun usuario con este email")
        }
    });


}

function bajaPaseador() {

    console.log(uidPaseador)
    var db = firebase.database();
    var refPas = db.ref("Usuarios")
    var pasElimi = db.ref("Usuarios_eliminados")
    var agendadosModificaciones = db.ref("cambios_ordenes");
    var currentEMAIL = firebase.auth().currentUser.email;
    var currentUID = firebase.auth().currentUser.uid;
    var key = db.ref("cambios_ordenes").push().getKey();

    refPas.orderByChild("idPaseador").equalTo(uidPaseador).once("value", function (snapshot) {
        console.log(snapshot.val())
        pasElimi.update(snapshot.val())
        pasElimi.child(uidPaseador).update({
            eliminadoPor: currentEMAIL,
            timestampEliminado: firebase.database.ServerValue.TIMESTAMP
        })
        agendadosModificaciones.child(key).update({
            id_orden: uidPaseador,
            uid: currentUID,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            cambio: "Eliminar paseador",
            inicial: "Referencia en /Paseadores",
            final: "Referencia en /PaseadoresEliminados"
        })

        var addMessage2 = firebase.functions().httpsCallable('BajaPaseador');
        addMessage2({ uid: uidPaseador }).then(function (result) {
            console.log(result)
            alert(result.data[0])
            window.location.href = "altaybaja.php";
        });
    });

}


//Baja de usuarios
function bajaUsuario() {
    console.log(uidUsuario)
    var db = firebase.database();
    var ref = db.ref("Usuarios")
    var usElimi = db.ref("Usuarios_eliminados");
    var agendadosModificaciones = db.ref("cambios_ordenes");
    var currentEMAIL = firebase.auth().currentUser.email;
    var currentUID = firebase.auth().currentUser.uid;
    console.log(currentEMAIL);
    console.log(currentUID);

    ref.orderByChild("uid").equalTo(uidUsuario).once("value", function(snapshot){
        console.log(snapshot.val());
        usElimi.update(snapshot.val());
        usElimi.child(uidUsuario).update({
            eliminadoPor: currentEMAIL,
            timestampEliminado: firebase.database.ServerValue.TIMESTAMP
        });
    }); 

    // var addMessage2 = firebase.functions().httpsCallable('BajaUsuario');
    // addMessage2({ uid: uidUsuario }).then(function (result) {
    //     console.log(result)
    //     alert(result.data[0])
    //     //window.location.href = "https://sgac.caminandog.com.mx/bajaPaseadores.html?email=" + Useremail;
    // });
}

function getAllUrlParams(url) {
    // get query string from url (optional) or window
    var queryString = url
        ? url.split("?")[1]
        : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {
        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split("#")[0];

        // split our query string into its component parts
        var arr = queryString.split("&");

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split("=");

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof a[1] === "undefined" ? true : a[1];

            if (typeof paramValue === "string") paramValue = paramValue;

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {
                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, "");
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
                } else if (obj[paramName] && typeof obj[paramName] === "string") {
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
