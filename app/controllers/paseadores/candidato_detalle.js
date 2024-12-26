var idCandidato = getAllUrlParams().idCandidato;

var email = ""
var idPaseador = ""
var etapa = ""
var foto_perfil = ""
var acta_nac_url = ""
var comprobante_url = ""
var inef = ""
var inet = ""
var fecha_registro = 0



var fnac = document.getElementById("fnac").value

let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

var storage = firebase.storage();
var storageRef = storage.ref();

var db = firebase.database();

$("input[type=file]").change(function () {

    if (this.id == "foto_perfil_input") {

        $("#coverSuave").show();

        var desertRef = storageRef.child("imagenesPaseadores").child(idCandidato + ".jpeg");

        var fileButton = document.getElementById(this.id);
        var file = fileButton.files[0];

        var refNueva = db.ref("Candidatos").child(idCandidato).child("direcfoto");

        desertRef.put(file).then(function () {
            desertRef.getDownloadURL().then(function (url) {

                refNueva.set(url).then(function () {

                    document.getElementById("img_usu").src = url
                    document.getElementById("foto_perfil").src = url
                    foto_perfil = url
                    console.log("correcto")
                    console.log(idCandidato)
                    $("#coverSuave").hide();

                });

            })
        })


    } else if (this.id == "foto_identificacionf_input") {
        $("#coverSuave").show();

        var desertRef = storageRef.child("documentacion").child("ine.jpeg");

        var fileButton = document.getElementById(this.id);
        var file = fileButton.files[0];

        var refNueva = db.ref("Candidatos").child(idCandidato).child("ine");

        desertRef.put(file).then(function () {
            desertRef.getDownloadURL().then(function (url) {

                refNueva.set(url).then(function () {
                    console.log(url);

                    document.getElementById("foto_identificacionf").src = url

                    inef = url


                    console.log("correcto")
                    $("#coverSuave").hide();

                });

            })
        })


    } else if (this.id == "foto_identificaciont_input") {



        $("#coverSuave").show();

        var desertRef = storageRef.child("documentacion").child("ine2.jpeg");

        var fileButton = document.getElementById(this.id);
        var file = fileButton.files[0];

        var refNueva = db.ref("Candidatos").child(idCandidato).child("ine2");

        desertRef.put(file).then(function () {
            desertRef.getDownloadURL().then(function (url) {

                refNueva.set(url).then(function () {

                    document.getElementById("foto_identificaciont").src = url

                    var inet = url

                    console.log("correcto")
                    $("#coverSuave").hide();

                });

            })
        })


    } else if (this.id == "foto_acta_input") {



        $("#coverSuave").show();

        var desertRef = storageRef.child("documentacion").child("nacimiento.jpeg");

        var fileButton = document.getElementById(this.id);
        var file = fileButton.files[0];

        var refNueva = db.ref("Candidatos").child(idCandidato).child("actanac");

        desertRef.put(file).then(function () {
            desertRef.getDownloadURL().then(function (url) {

                refNueva.set(url).then(function () {

                    document.getElementById("foto_acta").src = url

                    var acta_nac_url = url

                    console.log("correcto")
                    $("#coverSuave").hide();

                });

            })
        })


    } else if (this.id == "foto_comprobante_input") {



        $("#coverSuave").show();

        var desertRef = storageRef.child("documentacion").child("domicilio.jpeg");

        var fileButton = document.getElementById(this.id);
        var file = fileButton.files[0];

        var refNueva = db.ref("Candidatos").child(idCandidato).child("comprodomi");

        desertRef.put(file).then(function () {
            desertRef.getDownloadURL().then(function (url) {

                refNueva.set(url).then(function () {

                    document.getElementById("foto_comprobante").src = url
                    var comprobante_url = url

                    console.log("correcto")
                    $("#coverSuave").hide();

                });

            })
        })


    }




});

function consulta_candidato() {




    var db = firebase.database();
    var ref = db.ref("Candidatos");


    console.log(idCandidato)
    var cantidatoRef = ref.child(idCandidato);



    cantidatoRef.once("value", function (snapshot) {


        var d = snapshot.val();

        if (d.direcfoto != undefined) {

            document.getElementById("img_usu").src = d.direcfoto
            document.getElementById("foto_perfil").src = d.direcfoto
            foto_perfil = d.direcfoto
        } else {

            document.getElementById("img_usu").src = '../public/img/user-profile.svg'

        }

        if (d.email != undefined) { document.getElementById("email").value = d.email, email = d.email }
        if (d.idPaseador != undefined) { document.getElementById("uid").value = d.idPaseador, idPaseador = d.idPaseador }
        if (d.fechareg != undefined) {
            fecha_registro = d.fechareg
            var fecha_registro_mostrar = new Date(d.fechareg);
            var fecha_registro_mostrar = fecha_registro_mostrar.toLocaleDateString(lang, options)
            document.getElementById("fecha_creacion").value = fecha_registro_mostrar
        }
        if (d.etapa != undefined) {


            if (d.etapa == "2-En evaluacion" || d.etapa == "1-En proceso") {



                document.getElementById("tituloTest").innerHTML = "Test 1 de 1 (Maximo 20 aciertos)"

            } else {

                document.getElementById("tituloTest").innerHTML = "Test 1 de 1 (Maximo 10 aciertos)"

            }

            document.getElementById("etapa_postulacion").value = d.etapa, etapa = d.etapa
        } else {

            document.getElementById("etapa_postulacion").value = "0"
        }


        if (d.nombre != undefined) { document.getElementById("nom").value = d.nombre }
        if (d.apellidopa != undefined) { document.getElementById("ap").value = d.apellidopa }
        if (d.apellidoma != undefined) { document.getElementById("am").value = d.apellidoma }

        var fecha = ""





        if (d.fnacimiento != undefined) {



            var fecha = []
            var fecha_buen_formato = ""

            if (d.fnacimiento.includes("/")) {

                fecha = d.fnacimiento.split("/");



                if (fecha[1].length == 1) {

                    fecha[1] = "0" + fecha[1]

                }


                if (fecha[0].length == 1) {

                    fecha[0] = "0" + fecha[0]

                }
                var fecha_buen_formato = fecha[2] + "-" + fecha[1] + "-" + fecha[0]


            } else {

                fecha = d.fnacimiento.split("-");

                var fecha_buen_formato = fecha[0] + "-" + fecha[1] + "-" + fecha[2]


            }


            console.log("fecha " + fecha_buen_formato)
            document.getElementById("fnac").value = fecha_buen_formato;


        }


        if (d.genero != undefined) { document.getElementById("genero").value = d.genero }
        if (d.curp != undefined) { document.getElementById("curp").value = d.curp }
        if (d.celular != undefined) { document.getElementById("cel").value = d.celular }
        if (d.talla != undefined) { document.getElementById("talla").value = d.talla }
        if (d.referencia1 != undefined) { document.getElementById("nomref1").value = d.referencia1 }
        if (d.reftelefono1 != undefined) { document.getElementById("celref1").value = d.reftelefono1 }
        if (d.referencia2 != undefined) { document.getElementById("nomref2").value = d.referencia2 }
        if (d.reftelefono2 != undefined) { document.getElementById("celref2").value = d.reftelefono2 }

        if (d.banco != undefined) {


            if (d.banco == "") { banco = "" }

            var banco = d.banco

            if (d.banco == "Banamex") { banco = "CITI BANAMEX" }
            if (d.banco == "Bancomer") { banco = "BBVA BANCOMER" }
            if (d.banco == "Banjio" || d.banco == "Banco Multiva" || d.banco == "Banjercito") { banco = "OTRO" }
            if (d.banco == "") { banco = "" }
            if (d.banco == "") { banco = "" }

            document.getElementById("banco").value = banco



        }
        if (d.claveib != undefined) { document.getElementById("clabe").value = d.claveib }
        if (d.calle != undefined) { document.getElementById("calle").value = d.calle }
        if (d.numero != undefined) { document.getElementById("numExt").value = d.numero }
        if (d.ninterior != undefined) { document.getElementById("numInt").value = d.ninterior }
        if (d.refDomicilio != undefined) { document.getElementById("referenciaDomicilio").value = d.refDomicilio }
        if (d.colonia != undefined) { document.getElementById("col").value = d.colonia }
        if (d.cpostal != undefined) { document.getElementById("cp").value = d.cpostal }
        if (d.municipio != undefined) { document.getElementById("alcMun").value = d.municipio }
        if (d.estado != undefined) { document.getElementById("est").value = d.estado }
        if (d.pais != undefined) { document.getElementById("pais").value = d.pais }


        if (d.menteraste != undefined) {

            var menteraste = d.menteraste

            if (d.menteraste == "Twitter") { menteraste = "Otro medio" }
            if (d.menteraste == "Nuestra página web") { menteraste = "Nuestra página" }
            if (d.menteraste == "Amistades") { menteraste = "Por un familiar o conocido" }
            if (d.menteraste == "Otro") { menteraste = "Otro medio" }

            console.log(menteraste)
            document.getElementById("medioEntero").value = menteraste

        }

        if (d.disponibilidad != undefined) {

            var disponibilidad = d.disponibilidad

            if (d.disponibilidad == "Esporadico/Flexible") { disponibilidad = "Esporádico o Flexible" }
            if (d.disponibilidad == "Medio tiempo (M)") { disponibilidad = "Medio tiempo (Matutino)" }
            if (d.disponibilidad == "Medio tiempo (V)") { disponibilidad = "Medio tiempo (Vespertino)" }
            if (d.disponibilidad == "Fines de semana") { disponibilidad = "Solo fines de semana" }

            document.getElementById("tiempo").value = disponibilidad

        }

        if (d.expecingreso != undefined) {


            var expecingreso = d.expecingreso

            if (d.expecingreso == "1,000 - $2,900.00 pesos") { expecingreso = "De $1,000 a $2,900 pesos" }
            if (d.expecingreso == "$3,000 - $5,900.00 pesos") { expecingreso = "De $3,000 a $5,900 pesos" }
            if (d.expecingreso == "$6,000 - $8,900.00 pesos") { expecingreso = "De $6,000 a $8,900 pesos" }
            if (d.expecingreso == "$9,000 - $12,000.00 pesos") { expecingreso = "De $9,000 a $12,000 pesos" }
            if (d.expecingreso == "Mas de $12,000 pesos mensuales") { expecingreso = "Mas de $12,000" }


            document.getElementById("expectativaIngreso").value = expecingreso


        }


        if (d.gbdata != undefined) {


            var gbdata = d.gbdata

            if (d.gbdata == "0.5GB - 1.4GB") { gbdata = "De 0.5 GB a 1.4 GB" }
            if (d.gbdata == "1.5GB - 2.4GB") { gbdata = "De 1.5 GB a 2.4 GB" }
            if (d.gbdata == "2.5GB - más") { gbdata = "De 2.5 GB a 5.0 GB" }
            if (d.gbdata == "Sin plan de datos") { gbdata = "Ni cuento con plan de datos, solo hago recargas" }


            document.getElementById("planDatos").value = gbdata

        }
        if (d.actividad_dedica != undefined) { document.getElementById("actividad").value = d.actividad_dedica }


        if (d.muntrabajo != undefined) {

            var muntrabajo = d.muntrabajo

            if (d.muntrabajo == "Cuauhtemoc") { muntrabajo = "Cuauhtémoc" }

            console.log(muntrabajo)
            if (muntrabajo != "Benito Juárez" && muntrabajo != "Cuauhtémoc" && muntrabajo != "Coyoacán" && muntrabajo != "Miguel Hidalgo") {
                console.log("entra aqui")
                muntrabajo = "Otro"

            }

            console.log(muntrabajo)

            document.getElementById("munTrabajo").value = muntrabajo


        }
        if (d.transporte != undefined) { document.getElementById("medioTransporte").value = d.transporte }


        if (d.exptiempo != undefined) {


            var exptiempo = d.exptiempo

            if (d.exptiempo == "Menor a un año") { exptiempo = "Menos de un año" }
            if (d.exptiempo == "1-2 años") { exptiempo = "De 1 a 2 años" }
            if (d.exptiempo == "3-4 años") { exptiempo = "De 3 a 4 años" }
            if (d.exptiempo == "5 años-más") { exptiempo = "5 o más años" }

            document.getElementById("tiempoExp").value = exptiempo

        }
        if (d.exptipo != undefined) {


            var exptipo = d.exptipo

            if (d.exptipo == "Pasear perros de veterinarias, de hospitales u hoteles") { exptipo = "Pasear perros de veterinarias, de hospitales u hoteles de perros que me han requerido" }
            if (d.exptipo == "Pasear perros conocidos,amigos,vecinos") { exptipo = "Pasear perros de conocidos, de amigos o de vecinos" }
            if (d.exptipo == "Pasear perros veterinarias,hospitales,hoteles") { exptipo = "Pasear perros de veterinarias, de hospitales u hoteles de perros que me han requerido" }
            if (d.exptipo == "En plataformas digitales") { exptipo = "De contactos de plataformas digitales a las que me he suscrito" }

            document.getElementById("tipoExp").value = exptipo

        }

        if (d.plataformas != undefined) {

            var plataformas = d.plataformas

            if (d.plataformas == "Facebook" || d.plataformas == "Twitter") { plataformas = "Redes sociales y grupos de Facebook o Whatsapp" }
            if (d.plataformas == "Plataformas de paseo y hosting de mascotas") { plataformas = "Plataformas de paseo y hosting" }


            document.getElementById("medioPromo").value = plataformas

        }


        if (d.calitutorial != undefined) { document.getElementById("calif").value = d.calitutorial }

        if (d.ine != undefined) {

            document.getElementById("foto_identificacionf").src = d.ine
            inef = d.ine
        }

        if (d.ine2 != undefined) {

            document.getElementById("foto_identificaciont").src = d.ine2
            inet = d.ine2
        }

        if (d.actanac != undefined) {

            document.getElementById("foto_acta").src = d.actanac
            acta_nac_url = d.actanac

        }


        if (d.comprodomi != undefined) {

            document.getElementById("foto_comprobante").src = d.comprodomi
            comprobante_url = d.comprodomi

        }


        if (d.Latitude != undefined && d.Longitude != undefined) {

            cargarMapa("", d.Latitude, d.Longitude)

        } else {

            cargarMapa()

        }       


        if (d.checkbox != undefined) {


            if (d.checkbox.datosPersonales != undefined) {

                document.getElementById("datosPersonales").checked = d.checkbox.datosPersonales

            }

            if (d.checkbox.direccion != undefined) {

                document.getElementById("direccion").checked = d.checkbox.direccion

            }

            if (d.checkbox.experiencia_laboral != undefined) {

                document.getElementById("experiencia_laboral").checked = d.checkbox.experiencia_laboral

            }


            if (d.checkbox.test_confianza != undefined) {

                document.getElementById("test_confianza").checked = d.checkbox.test_confianza

            }


            if (d.checkbox.documentos != undefined) {

                document.getElementById("documentos").checked = d.checkbox.documentos

            }



            if (d.checkbox.contacto_candidato != undefined) {

                document.getElementById("contacto_candidato").checked = d.checkbox.contacto_candidato

            }


            if (d.checkbox.validacion_contactos != undefined) {

                document.getElementById("validacion_contactos").checked = d.checkbox.validacion_contactos

            }


            if (d.checkbox.disponibilidad != undefined) {

                document.getElementById("disponibilidad").checked = d.checkbox.disponibilidad

            }

            if (d.checkbox.tecnica_paseo != undefined) {

                document.getElementById("tecnica_paseo").checked = d.checkbox.tecnica_paseo

            }


            if (d.checkbox.uso_app != undefined) {

                document.getElementById("uso_app").checked = d.checkbox.uso_app

            }

        }

    });


}



function guardar_cambios_formulario() {

    $("#coverSuave").show();

    var nom = document.getElementById("nom").value
    var ap = document.getElementById("ap").value
    var am = document.getElementById("am").value

    var fnac = document.getElementById("fnac").value


    var genero = document.getElementById("genero").value
    var curp = document.getElementById("curp").value
    var cel = document.getElementById("cel").value
    var talla = document.getElementById("talla").value
    var nomref1 = document.getElementById("nomref1").value
    var celref1 = document.getElementById("celref1").value
    var nomref2 = document.getElementById("nomref2").value
    var celref2 = document.getElementById("celref2").value
    var banco = document.getElementById("banco").value
    var clabe = document.getElementById("clabe").value
    var calle = document.getElementById("calle").value
    var numExt = document.getElementById("numExt").value
    var numInt = document.getElementById("numInt").value
    var referenciaDomicilio = document.getElementById("referenciaDomicilio").value
    var col = document.getElementById("col").value
    var cp = document.getElementById("cp").value
    var alcMun = document.getElementById("alcMun").value
    var est = document.getElementById("est").value
    var pais = document.getElementById("pais").value
    var medioEntero = document.getElementById("medioEntero").value

    var tiempo = document.getElementById("tiempo").value


    var expectativaIngreso = document.getElementById("expectativaIngreso").value
    var planDatos = document.getElementById("planDatos").value
    var actividad = document.getElementById("actividad").value
    var munTrabajo = document.getElementById("munTrabajo").value
    var medioTransporte = document.getElementById("medioTransporte").value
    var tiempoExp = document.getElementById("tiempoExp").value
    var tipoExp = document.getElementById("tipoExp").value
    var medioPromo = document.getElementById("medioPromo").value
    var calif = document.getElementById("calif").value

    var latitud = Markermio.getPosition().lat()
    var longitud = Markermio.getPosition().lng()


    var fecha = fnac.split("-")
    var fecha_buen_formato = fecha[2] + "/" + fecha[1] + "/" + fecha[0]

    var db = firebase.database();
    var ref = db.ref("Candidatos");




    var postData = {
        nombre: nom,
        apellidopa: ap,
        apellidoma: am,
        fnacimiento: fecha_buen_formato,
        genero: genero,
        curp: curp,
        celular: cel,
        talla: talla,
        referencia1: nomref1,
        reftelefono1: celref1,
        referencia2: nomref2,
        reftelefono2: celref2,
        banco: banco,
        claveib: clabe,
        calle: calle,
        numero: numExt,
        ninterior: numInt,
        refDomicilio: referenciaDomicilio,
        colonia: col,
        cpostal: cp,
        municipio: alcMun,
        estado: est,
        pais: pais,
        menteraste: medioEntero,
        disponibilidad: tiempo,
        expecingreso: expectativaIngreso,
        gbdata: planDatos,
        actividad_dedica: actividad,
        muntrabajo: munTrabajo,
        transporte: medioTransporte,
        exptiempo: tiempoExp,
        exptipo: tipoExp,
        plataformas: medioPromo,
        calitutorial: calif,
        Latitude: latitud,
        Longitude: longitud

    };




    console.log(idCandidato)
    var cantidatoRef = ref.child(idCandidato);

    cantidatoRef.update(postData).then(function () {

        alert("Los datos se han guardado exitosamente.");
        $("#coverSuave").hide();



    }).catch(function (error) {
        alert("Lamentablemente no se pudieron guardar los datos." + error);
        $("#coverSuave").hide();


    });




}



function contratar_candidato() {



    $("#coverSuave").show();

    console.log("Validación de checkbox")


    var db = firebase.database();
    var ref = db.ref("Candidatos");


    var checkbox = true


    var cantidatoRef = ref.child(idCandidato).child("checkbox");



    cantidatoRef.once("value").then(snapshot => {

        var datos = snapshot.val()

        /*
        console.log("contacto_candidato "+datos.contacto_candidato)
        console.log("datosPersonales "+datos.datosPersonales)
        console.log("direccion "+datos.direccion)
        console.log("disponibilidad "+datos.disponibilidad)
        console.log("documentos "+datos.documentos)
        console.log("experiencia_laboral "+datos.experiencia_laboral)
        console.log("tecnica_paseo "+datos.tecnica_paseo)
        console.log("test_confianza "+datos.test_confianza)
        console.log("uso_app "+datos.uso_app)
        console.log("validacion_contactos "+datos.validacion_contactos)
        
        */
        if (datos.contacto_candidato == false || datos.datosPersonales == false || datos.direccion == false || datos.disponibilidad == false || datos.documentos == false || datos.experiencia_laboral == false || datos.tecnica_paseo == false || datos.test_confianza == false || datos.uso_app == false || datos.validacion_contactos == false) {


            checkbox = false

        }


        if (checkbox == true) {

            validacion_información_basica()

        } else {

            alert("Debes validar todos los checkbox para continuar con la contratación")
            $("#coverSuave").hide();


        }




    })

}


function validacion_información_basica() {


    console.log("Validación de información básica")

    var nom = document.getElementById("nom").value
    var ap = document.getElementById("ap").value
    var am = document.getElementById("am").value
    var cel = document.getElementById("cel").value


    if (nom == "") {

        alert("Debe ingresar el nombre del candidato (obligatorio)")
        $("#coverSuave").hide();


    } else if (ap == "") {

        alert("Debe ingresar el apellido paterno del candidato (obligatorio)")
        $("#coverSuave").hide();


    } else if (am == "") {

        alert("Debe ingresar el apellido materno del candidato (obligatorio)")
        $("#coverSuave").hide();



    } else if (cel == "") {

        alert("Debe ingresar el numero celular del candidato (obligatorio)")
        $("#coverSuave").hide();


    } else if (cel.length != 10) {

        alert("El numero celular del candidato debe estar a 10 digitos")
        $("#coverSuave").hide();


    } else {

        escribe_paseador()


    }

}


function escribe_paseador() {




    console.log("Escribe referencia paseador")


    var nom = document.getElementById("nom").value
    var ap = document.getElementById("ap").value
    var am = document.getElementById("am").value
    var cel = document.getElementById("cel").value
    var fnac = document.getElementById("fnac").value


    var genero = document.getElementById("genero").value
    var curp = document.getElementById("curp").value

    var talla = document.getElementById("talla").value
    var nomref1 = document.getElementById("nomref1").value
    var celref1 = document.getElementById("celref1").value
    var nomref2 = document.getElementById("nomref2").value
    var celref2 = document.getElementById("celref2").value
    var banco = document.getElementById("banco").value
    var clabe = document.getElementById("clabe").value
    var calle = document.getElementById("calle").value
    var numExt = document.getElementById("numExt").value
    var numInt = document.getElementById("numInt").value
    var referenciaDomicilio = document.getElementById("referenciaDomicilio").value
    var col = document.getElementById("col").value
    var cp = document.getElementById("cp").value
    var alcMun = document.getElementById("alcMun").value
    var est = document.getElementById("est").value
    var pais = document.getElementById("pais").value
    var medioEntero = document.getElementById("medioEntero").value

    var tiempo = document.getElementById("tiempo").value


    var expectativaIngreso = document.getElementById("expectativaIngreso").value
    var planDatos = document.getElementById("planDatos").value
    var actividad = document.getElementById("actividad").value
    var munTrabajo = document.getElementById("munTrabajo").value
    var medioTransporte = document.getElementById("medioTransporte").value
    var tiempoExp = document.getElementById("tiempoExp").value
    var tipoExp = document.getElementById("tipoExp").value
    var medioPromo = document.getElementById("medioPromo").value
    var calif = document.getElementById("calif").value

    var latitud = Markermio.getPosition().lat()
    var longitud = Markermio.getPosition().lng()




    var fecha = []

    if (fnac.includes("/")) {

        fecha = fnac.split("/");


    } else {

        fecha = fnac.split("-");


    }

    var fecha_buen_formato = fecha[2] + "/" + fecha[1] + "/" + fecha[0]






    var db = firebase.database();
    var ref = db.ref("Paseadores");




    var postData = {


        Latitude: latitud,
        Longitude: longitud,
        actanac: acta_nac_url,
        actividad_dedica: actividad,
        //----------------------------------------------------------------
        android_device: "",
        apellidoma: am,
        apellidopa: ap,
        banco: banco,
        calificacion: 5,
        calificacionInterna: 1,
        calificacion_final: 5,
        calificacion_finalInterna: 1,
        calitutorial: calif,
        calle: calle,
        cantidadPerros: 0,
        categoria: "",
        cbcaminandog: "",
        celular: cel,
        claveib: clabe,
        colonia: col,
        comprobacion: {
            "ok": ""
        },
        comprodomi: comprobante_url,  //----------------------------------------------------------------
        confirmar: {
            confirmar: 0
        },
        contactado: "",
        contra_activ: "",
        contratado_por: firebase.auth().currentUser.uid,
        costopromedio: "",
        cpostal: cp,
        curp: curp,
        direcfoto: foto_perfil,  //----------------------------------------------------------------
        edad: 0,       //---------------------------este campo que p2 --------------------------------
        email: email,
        estado: est,
        estatus: 0,
        etapa: etapa,
        expecingreso: expectativaIngreso,
        exppaseador: "",
        exptiempo: tiempoExp,
        exptipo: tipoExp,
        fecha_contratacion: firebase.database.ServerValue.TIMESTAMP,
        fechakit: "",
        fechareg: fecha_registro,   //----------------------------------------------------------------
        fnacimiento: fecha_buen_formato,
        gbdata: planDatos,
        genero: genero,
        id: "",
        idPaseador: idPaseador,
        ine: inef,  //----------------------------------------------------------------
        ine2: inet,
        kitpaseador: "",
        menteraste: medioEntero,
        municipio: alcMun,
        muntrabajo: munTrabajo,
        ncuenta: "",
        ninterior: numInt,
        nombre: nom,
        numero: numExt,
        pais: pais,
        plataformas: medioPromo,
        precapacita: "",
        promoplata: "",
        referencia1: nomref1,
        referencia2: nomref2,
        reftelefono1: celref1,
        reftelefono2: celref2,
        refDomicilio: referenciaDomicilio,
        reftipo1: "",
        reftipo2: "",
        solicitud: {
            solicitud: 0
        },
        talla: talla,
        telefono: cel,
        through: "",
        transporte: medioTransporte,
        ultima_vez: firebase.database.ServerValue.TIMESTAMP,
        ultima_vez_inicio: firebase.database.ServerValue.TIMESTAMP,
        veces_calificado: 1,
        veces_calificado_interna: 1,
        verif_paseo: "",
        verificador: "",
        verificasa: ""

    };





    var cantidatoRef = ref.child(idCandidato);

    cantidatoRef.update(postData).then(function () {

        escribe_historio_candidato()

    }).catch(function (error) {
        alert("Lamentablemente no se pudieron guardar los datos." + error);

        $("#coverSuave").hide();


    });;
}


function escribe_historio_candidato() {


    var nom = document.getElementById("nom").value
    var ap = document.getElementById("ap").value
    var am = document.getElementById("am").value

    var fnac = document.getElementById("fnac").value


    var genero = document.getElementById("genero").value
    var curp = document.getElementById("curp").value
    var cel = document.getElementById("cel").value
    var talla = document.getElementById("talla").value
    var nomref1 = document.getElementById("nomref1").value
    var celref1 = document.getElementById("celref1").value
    var nomref2 = document.getElementById("nomref2").value
    var celref2 = document.getElementById("celref2").value
    var banco = document.getElementById("banco").value
    var clabe = document.getElementById("clabe").value
    var calle = document.getElementById("calle").value
    var numExt = document.getElementById("numExt").value
    var numInt = document.getElementById("numInt").value
    var referenciaDomicilio = document.getElementById("referenciaDomicilio").value
    var col = document.getElementById("col").value
    var cp = document.getElementById("cp").value
    var alcMun = document.getElementById("alcMun").value
    var est = document.getElementById("est").value
    var pais = document.getElementById("pais").value
    var medioEntero = document.getElementById("medioEntero").value

    var tiempo = document.getElementById("tiempo").value


    var expectativaIngreso = document.getElementById("expectativaIngreso").value
    var planDatos = document.getElementById("planDatos").value
    var actividad = document.getElementById("actividad").value
    var munTrabajo = document.getElementById("munTrabajo").value
    var medioTransporte = document.getElementById("medioTransporte").value
    var tiempoExp = document.getElementById("tiempoExp").value
    var tipoExp = document.getElementById("tipoExp").value
    var medioPromo = document.getElementById("medioPromo").value
    var calif = document.getElementById("calif").value

    var latitud = Markermio.getPosition().lat()
    var longitud = Markermio.getPosition().lng()


    var fecha = fnac.split("-")
    var fecha_buen_formato = fecha[2] + "/" + fecha[1] + "/" + fecha[0]

    var db = firebase.database();
    var ref = db.ref("Candidatos_contratados");




    var postData = {
        nombre: nom,
        apellidopa: ap,
        apellidoma: am,
        fnacimiento: fecha_buen_formato,
        genero: genero,
        curp: curp,
        celular: cel,
        talla: talla,
        referencia1: nomref1,
        reftelefono1: celref1,
        referencia2: nomref2,
        reftelefono2: celref2,
        banco: banco,
        claveib: clabe,
        calle: calle,
        numero: numExt,
        ninterior: numInt,
        refDomicilio: referenciaDomicilio,
        colonia: col,
        cpostal: cp,
        municipio: alcMun,
        estado: est,
        pais: pais,
        menteraste: medioEntero,
        disponibilidad: tiempo,
        expecingreso: expectativaIngreso,
        gbdata: planDatos,
        actividad_dedica: actividad,
        muntrabajo: munTrabajo,
        transporte: medioTransporte,
        exptiempo: tiempoExp,
        exptipo: tipoExp,
        plataformas: medioPromo,
        calitutorial: calif,
        Latitude: latitud,
        Longitude: longitud,
        actanac: acta_nac_url,
        comprodomi: comprobante_url,
        direcfoto: foto_perfil,
        ine: inef,
        ine2: inet,
        email: email,
        idPaseador: idPaseador,
        fechareg: fecha_registro,
        etapa: etapa


    };



    var cantidatoRef = ref.child(idCandidato);

    cantidatoRef.update(postData).then(function () {



        eliminar_info_candidatos()

    }).catch(function (error) {
        alert("Lamentablemente no se pudieron guardar los datos." + error);
        $("#coverSuave").hide();


    });


}


function eliminar_info_candidatos() {


    console.log("eliminando candidato")


    var db = firebase.database();
    var key = db.ref("cambios_ordenes").push().getKey();
    var agendadosModificaciones = db.ref("cambios_ordenes");
    var currentUID = firebase.auth().currentUser.uid;


    agendadosModificaciones.child(key).update({

        id_orden: key,
        uid: currentUID,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        cambio: "Contratacion paseador",
        inicial: idCandidato,
        final: ""

    })



    var db = firebase.database();
    var ref = db.ref("Candidatos");

    var cantidatoRef = ref.child(idCandidato);

    cantidatoRef.remove().then(function () {

        alert("El paseador ha sido contratado ¡Felicitaciones!.");
        location.href = "candidatos.html";
        $("#coverSuave").hide();



    }).catch(function (error) {
        alert("Lamentablemente no se pudieron guardar los datos." + error);
        $("#coverSuave").hide();


    });


}




function check_click(checkbox) {


    var refCheckbox = db.ref("Candidatos").child(idCandidato).child("checkbox");


    $("#coverSuave").show();

    refCheckbox.child(checkbox.id).set(checkbox.checked).then(function () {

        validar_etapa_candidato()

    });




}


function validar_etapa_candidato() {



    $("#coverSuave").show();

    console.log("Validación de checkbox")


    var db = firebase.database();
    var ref = db.ref("Candidatos");


    var checkbox = true


    var cantidatoRef = ref.child(idCandidato).child("checkbox");



    cantidatoRef.once("value").then(snapshot => {

        var datos = snapshot.val()


        if (datos.datosPersonales == true && datos.direccion == true && datos.experiencia_laboral == true && datos.test_confianza == true && datos.documentos == true) {


            var postData = { etapaEvaluacion: 1 }
            ref.child(idCandidato).update(postData)

            if (datos.contacto_candidato == true && datos.validacion_contactos == true && datos.disponibilidad == true) {

                var postData = { etapaEvaluacion: 2 }
                ref.child(idCandidato).update(postData)

                if (datos.tecnica_paseo == true && datos.uso_app == true) {

                    var postData = { etapaEvaluacion: 3 }
                    ref.child(idCandidato).update(postData)





                }


            }

        } else {

            var postData = { etapaEvaluacion: 0 }
            ref.child(idCandidato).update(postData)

        }





        $("#coverSuave").hide();




    })

}


function ver_imagen(img) {


    if (img.src == "" || img.src == undefined) {

        alert("Aun no hay una imagen para mostrar")

    } else {

        window.open(img.src, '_blank');

    }

}


function ver_chat() {


    window.open('chatCaminandogCandidato.php?uid=' + idCandidato, '_blank');


}

window.onload = consulta_candidato()


function cargarMapa(dir, lat, lng) {


    var latitud = 19.5031560714501;
    var longitud = -99.23319306224586;




    if (dir != null && lat != null && lng != null) {

        var res = dir.split(";");
        document.getElementById("pac-input").value = res[0];

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

                map.setCenter(latlng);
                //   map.setZoom(17)


                console.log(results[0].formatted_address)

                document.getElementById("pac-input").value = results[0].formatted_address;


                console.log(results[0].formatted_address)

                var num = results[0].address_components[0].long_name
                var calle = results[0].address_components[1].long_name
                var col = results[0].address_components[2].long_name
                var mun = results[0].address_components[3].long_name
                var estado = results[0].address_components[4].long_name
                var pais = results[0].address_components[5].long_name
                var cp = results[0].address_components[6].long_name

                document.getElementById("pac-input").value = results[0].formatted_address;


                document.getElementById("col").value = calle
                document.getElementById("cp").value = cp
                document.getElementById("alcMun").value = mun
                document.getElementById("est").value = estado;
                document.getElementById("pais").value = pais;
                document.getElementById("cp").value = cp;

                /*
                              console.log(results)
                
                              console.log(results[0].address_components[0].long_name)
                              console.log(results[0].address_components[1].long_name)
                              console.log(results[0].address_components[2].long_name)
                              console.log(results[0].address_components[3].long_name)
                              console.log(results[0].address_components[4].long_name)
                              console.log(results[0].address_components[5].long_name)
                              console.log(results[0].address_components[6].long_name)
                */



            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
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