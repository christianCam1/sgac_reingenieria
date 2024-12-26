//Este archivo queda pendiente de revision para saber como se trabaja realmente lo de las placas

var vecesPerros = 0;
var table = document.getElementById("tabla");


function obtenerPaseos() {

    var db = firebase.database();
    var diasRef = db.ref("Configuracion").child("diasRecuperandog");


    diasRef.once("value", function (snapshott) {

        var confdata = snapshott.val();

        diasRecuperandog = confdata;

        document.getElementById("paseos").value = diasRecuperandog;
        getDate(diasRecuperandog)

    })

}

function cambiarpaseos() {


    var table = document.getElementById("tabla");
    table.innerHTML = "";

    diasRecuperandog = document.getElementById("paseos").value;

    getDate(diasRecuperandog)


}


function getDate(diasRecuperandog) {

    vecesPerros = 0;

    var db = firebase.database();
    var refUsuarios = db.ref("Usuarios");
    var refPerros = db.ref("Perros");

    var sessionsRef = db.ref("sessions");
    sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);

    var hoy = 0;


    sessionsRef.orderByChild("actual").on("child_added", function (snapshott) {

        hoy = snapshott.val(); {
        }

    })

    var dateObj = new Date(hoy);

    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();


    var dateObjFin = new Date(hoy);

    dateObjFin.setDate(dateObjFin.getDate() - day);


    var monthFin = dateObjFin.getMonth() + 1; //months from 1-12
    var dayFin = dateObjFin.getDate();
    var yearFin = dateObjFin.getFullYear();

    var dateObjInicio = dateObjFin

    dateObjInicio.setDate(1);


    var monthInicio = dateObjInicio.getUTCMonth() + 1; //months from 1-12
    var dayInicio = dateObjInicio.getUTCDate();
    var yearInicio = dateObjInicio.getUTCFullYear();


    var datumFin = new Date(yearFin, (monthFin - 1), dayFin, '23', '59', '59');
    var fin = datumFin.getTime();


    var datumInicio = new Date(yearInicio, (monthInicio - 1), dayInicio, '00', '00', '01');
    var inicio = datumInicio.getTime();

    console.log("Inicio: ", inicio);
    console.log("Fin: ", fin);
    console.log("Hoy: ", hoy);

    //mostrarPerros(datumInicioTimestamp,datumFinTimestamp,filtro,diasRecuperandog);


    let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

    var timestampini = inicio;
    var dateIni = new Date(timestampini);

    console.log(dateIni.toLocaleDateString(lang, options));



    var timestampfin = fin;
    var datefin = new Date(timestampfin);

    console.log(datefin.toLocaleDateString(lang, options));

    document.getElementById("periodo").innerHTML = "Inicio " + dateIni.toLocaleDateString(lang, options) + " ,Fin: " + datefin.toLocaleDateString(lang, options);


    var ref = db.ref("RecuperandogQR");
    ref.orderByChild("uid").once("value", function (snapshot) {
        console.log(snapshot);


        snapshot.forEach(function (data) {

            var datos = data.val();

            var ref2 = db.ref("RecuperandogQR").child(data.key).child("paseos");

            ref2.orderByChild("fecha").startAt(inicio).endAt(fin).once("value", function (snapshot2) {

                var veces = 0;
                snapshot2.forEach(function (data2) {
                    veces++;
                })


                console.log("Veces totales ", veces);


                if (veces >= diasRecuperandog && datos.QR == "") {

                    console.log("Perro apto y sin qr: ", data.key)

                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);


                    cell1.innerHTML = datos.idPerro
                    cell2.innerHTML = datos.nombre;
                    cell3.innerHTML = veces;

                    refPerros.child(datos.uid).orderByChild("idPerro").equalTo(datos.idPerro).once("value", function (snapshot3) {


                        snapshot3.forEach(function (data3) {
                            var datosPerros = data3.val();
                            cell2.innerHTML = datosPerros.nombre;
                        })
                    })

                    refUsuarios.orderByChild("uid").equalTo(datos.uid).once("value", function (snapshot4) {

                        snapshot4.forEach(function (data4) {
                            var datosUsuario = data4.val();
                            console.log("nombre usuario ", datosUsuario.nombre);

                            cell4.innerHTML = datosUsuario.uid;
                            cell5.innerHTML = datosUsuario.nombre;
                            cell6.innerHTML = datosUsuario.telefono1;
                            cell7.innerHTML = datosUsuario.email;

                        })

                    })

                } else {

                }
            })


        });

    });



}


window.onload = obtenerPaseos();

