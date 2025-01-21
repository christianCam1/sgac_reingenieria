var arrayRecuperangodQR = []
var arrayPerros = []

var arraysCompletados = 0

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
var numVigencias = 0
var mergedData;
var x = 0;

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


let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };




function obtener_dirección() {

    document.getElementById("numVigencias").value = numVigencias
    obtener_costos();
    obtener_iva();
    obtener_fecha();
    configuracionPantalla()
    obtener_perros();
    consulta_perros();


}


function obtener_perros() {




    var db = firebase.database();
    var ref = db.ref("RecuperandogQR");


    ref.orderByChild("uid").equalTo(uid).once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };



        var datos = snapshot.val();

        for (const property in datos) {



            var d = datos[property]


            var idPerro = property
            var nombrePerro = "Sin dato" //
            var uid = "Sin dato"
            var nombreUsuario = "Sin dato" //
            var telefono = "Sin dato" //
            var correo = "Sin dato" //
            var codigo = "Sin dato"
            var servicio = "Sin dato"
            var fecha_otorgamiento_timestamp = "Sin dato"
            var fecha_otorgamiento = "Sin dato"
            var fecha_vencimiento_timestamp = "Sin dato"
            var fecha_vencimiento = "Sin dato"
            var desvincular = "Sin dato"



            if (d["uid"] != undefined) { uid = d["uid"] }
            if (d["QR"] != undefined) { codigo = d["QR"] }


            if (d["servicio"] != undefined) {
                servicio = d["servicio"]

                if (servicio == "true") {

                    servicio = "Activo"

                } else {

                    servicio = "Inactivo"
                }
            }



            if (d["fechaOtorgamiento"] != undefined) {
                fecha_otorgamiento = new Date(d["fechaOtorgamiento"]);
                fecha_otorgamiento = fecha_otorgamiento.toLocaleDateString(lang, options)
                fecha_otorgamiento_timestamp = d["fechaOtorgamiento"]

            }
            if (d["fechaVencimiento"] != undefined) {
                fecha_vencimiento = new Date(d["fechaVencimiento"]);
                fecha_vencimiento = fecha_vencimiento.toLocaleDateString(lang, options)
                fecha_vencimiento_timestamp = d["fechaVencimiento"]
            }




            var informacionUsuarios =

            {

                idPerro: idPerro,
                nombrePerro: nombrePerro,
                uid: uid,
                nombreUsuario: nombreUsuario,
                telefono: telefono,
                correo: correo,
                codigo: codigo,
                servicio: servicio,
                fecha_otorgamiento: fecha_otorgamiento,
                fecha_otorgamiento_timestamp: fecha_otorgamiento_timestamp,
                fecha_vencimiento: fecha_vencimiento,
                fecha_vencimiento_timestamp: fecha_vencimiento_timestamp,
                vigencias: 0,
                nueva_fecha_vencimiento_timestamp: fecha_vencimiento_timestamp

            }



            arrayRecuperangodQR.push(informacionUsuarios)



            /*
                    var table = $('#tablaDatos').dataTable();
            
             
                  tabla.rows.add([informacionUsuarios]);
            */


        }


        /*
            tabla.draw()
        consulta_codigos_qr_ref()
        consulta_info_usuarios()
        */

        console.log("Array RecuperandogQR")
        console.log(arrayRecuperangodQR)
        arraysCompletados++

        if (arraysCompletados == 2) {

            combinaArrays()
        }


    })


}

function consulta_perros() {

    var db = firebase.database();
    var ref = db.ref("Perros").child(uid);

    ref.orderByChild("idPerro").once("value").then(snapshot => {


        let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

        var datos = snapshot.val();

        for (const property in datos) {

            var d = datos[property]


            var idPerro = "Sin dato"
            var nombre = "Sin dato"
            var raza = "Sin dato"
            var foto = ""



            if (d["idPerro"] != undefined) { idPerro = d["idPerro"] }
            if (d["nombre"] != undefined) { nombre = d["nombre"] }
            if (d["raza"] != undefined) { raza = d["raza"] }

            if (d["foto"] != undefined) { foto = d["foto"] }

            console.log("foto " + foto)



            var informacionUsuarios =

            {

                idPerro: idPerro,
                nombrePerro: nombre,
                raza: raza,
                foto: foto
            }

            arrayPerros.push(informacionUsuarios)

        }


        console.log("Array perros")
        console.log(arrayPerros)

        arraysCompletados++

        if (arraysCompletados == 2) {

            combinaArrays()
        }


    })


}


function combinaArrays() {


    mergedData = arrayRecuperangodQR.map(data => ({
        ...data,
        ...arrayPerros.find(newData => newData.idPerro == data.idPerro)
    }))



    console.log("Tabla completa")
    console.log(mergedData)

    creaTabla(mergedData)


}

function creaTabla(datos) {

    var nameType = $.fn.dataTable.absoluteOrder({
        value: 'Sin dato', position: 'bottom'
    });

    var tabla = $('#tablaPerros').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,
        //Muestra oculta filtro
        info: true,
        columnDefs: [
            { "targets": [0], "visible": false },
            { "targets": [3], "visible": false },
            { "targets": [8], "visible": false }
        ],
        "order": [[1, "asc"]],
        pageLength: 10,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }

    });
    let oldInput = $('.dataTables_filter input');
    let newInput = $('<input>').on('change keyup input', () => {
        let regex = textToRegex(newInput.val());
        oldInput.val(regex).trigger('input');
    });
    oldInput.hide().after(newInput);

    function textToRegex(value) {
        return value
            .toLowerCase()
            .split('')
            .map(c => {
                if (/[-[\]{}()*+?.,\\^$|#]/.test(c)) {
                    return '\\' + c;
                }
                [
                    /[aàáâãäå]/, /[oòóôõöø]/, /[eèéêë]/, /[cç]/, /[dð]/,
                    /[ii̇ìíîï]/, /[uùúûü]/, /[nñ]/, /[sš]/, /[yÿý]/, /[zž]/
                ].some(r => {
                    if (r.test(c)) {
                        c = r.source;
                        return true;
                    }
                });
                return c;
            })
            .join('');
    }



    for (const property in datos) {

        var d = datos[property]
        var idPerro = "Sin dato"
        var nombrePerro = "Sin dato"
        var uid = "Sin dato"
        var foto = ""
        var servicio = "Sin dato"
        var fecha_vinculacion = "Sin dato"
        var fecha_vinculacion_timestamp = "Sin dato"
        var fecha_vencimiento = "Sin dato"
        var fecha_vencimiento_timestamp = "Sin dato"
        var nueva_fecha_vencimiento = "Sin dato"
        var nueva_fecha_vencimiento_timestamp = "Sin dato"
        var vigencias = 0

        if (d['idPerro'] != undefined) { idPerro = d['idPerro'] }
        if (d['nombrePerro'] != undefined) { nombrePerro = d['nombrePerro'] }
        if (d['uid'] != undefined) { uid = d['uid'] }

        if (d['servicio'] != undefined) { servicio = d['servicio'] }
        if (d['fecha_vinculacion'] != undefined) { fecha_vinculacion = d['fecha_vinculacion'] }
        if (d['fecha_vinculacion_timestamp'] != undefined) { fecha_vinculacion_timestamp = d['fecha_vinculacion_timestamp'] }
        if (d['fecha_vencimiento_timestamp'] != undefined) { fecha_vencimiento_timestamp = d['fecha_vencimiento_timestamp'] }
        if (d['foto'] != undefined) { foto = d['foto'] }
        if (d['vigencias'] != undefined) { vigencias = d['vigencias'] }
        if (d['nueva_fecha_vencimiento_timestamp'] != undefined) { nueva_fecha_vencimiento_timestamp = d['nueva_fecha_vencimiento_timestamp'] }


        fecha_vencimiento = new Date(d["fecha_vencimiento_timestamp"]);
        fecha_vencimiento = fecha_vencimiento.toLocaleDateString(lang, options)


        nueva_fecha_vencimiento = new Date(d["nueva_fecha_vencimiento_timestamp"]);
        nueva_fecha_vencimiento = nueva_fecha_vencimiento.toLocaleDateString(lang, options)

        var informacionUsuarios =

            [
                idPerro,
                nombrePerro,
                '<img src=\'' + foto + '\' width="50" height="50" />',
                fecha_vencimiento_timestamp,
                fecha_vencimiento,
                '<button class="transparent_button" onclick="restarVigencia(\'' + idPerro + '\')">  <img id="msjImg" src="img/btnMenos.png"  width="50" height=" 50"> </button>',
                '<button class="transparent_button" onclick="sumarVigencia(\'' + idPerro + '\')">  <img id="msjImg" src="img/btnMas.png"  width="50" height=" 50"> </button>',
                vigencias,
                nueva_fecha_vencimiento_timestamp,
                nueva_fecha_vencimiento


            ]



        var table = $('#tablaPerros').dataTable();


        tabla.rows.add([informacionUsuarios]);


    }

    tabla.draw()

}


// function sumarVigencia(idPerro) {


//     numVigencias = numVigencias + 1
//     document.getElementById("numVigencias").value = numVigencias

//     objIndex = mergedData.findIndex((obj => obj.idPerro == idPerro));

//     //Log object to Console.
//     console.log("Before update: ", mergedData[objIndex])

//     //Update object's name property.
//     mergedData[objIndex].vigencias = mergedData[objIndex].vigencias + 1


//     var nuevoTimestamp = 0

//     if (mergedData[objIndex].nueva_fecha_vencimiento_timestamp < x) {


//         var fecha = new Date(x);
//         fecha.setFullYear(fecha.getFullYear() + 1);
//         fecha.setHours(23, 59, 0)
//         nuevoTimestamp = fecha.getTime()


//     } else {

//         var fecha = new Date(mergedData[objIndex].nueva_fecha_vencimiento_timestamp);
//         fecha.setFullYear(fecha.getFullYear() + 1);
//         fecha.setHours(23, 59, 0)
//         nuevoTimestamp = fecha.getTime()
//     }


//     var nueva_fecha_vencimiento = "Sin Dato"


//     nueva_fecha_vencimiento = new Date(nuevoTimestamp);
//     nueva_fecha_vencimiento = nueva_fecha_vencimiento.toLocaleDateString(lang, options)

//     mergedData[objIndex].nueva_fecha_vencimiento_timestamp = nuevoTimestamp
//     mergedData[objIndex].nueva_fecha_vencimiento = nueva_fecha_vencimiento

//     console.log("After update: ", mergedData[objIndex])



//     var tabla = new DataTable('#tablaPerros')

//     var rowId = tabla.row().index(idPerro);
//     console.log(rowId);




//     var informacionUsuarios =

//         [
//             mergedData[objIndex].idPerro,
//             mergedData[objIndex].nombrePerro,
//             '<img src=\'' + mergedData[objIndex].foto + '\' width="50" height="50" />',
//             mergedData[objIndex].fecha_vencimiento_timestamp,
//             mergedData[objIndex].fecha_vencimiento,
//             '<button class="transparent_button" onclick="restarVigencia(\'' + mergedData[objIndex].idPerro + '\')">  <img id="msjImg" src="img/btnMenos.png"  width="50" height=" 50"> </button>',
//             '<button class="transparent_button" onclick="sumarVigencia(\'' + mergedData[objIndex].idPerro + '\')">  <img id="msjImg" src="img/btnMas.png"  width="50" height=" 50"> </button>',
//             mergedData[objIndex].vigencias,
//             mergedData[objIndex].nueva_fecha_vencimiento_timestamp,
//             mergedData[objIndex].nueva_fecha_vencimiento


//         ]


//     tabla.cell().data(informacionUsuarios, rowId, undefined);

// }

function sumarVigencia(idPerro) {
    // Buscar el índice del objeto en `mergedData` por `idPerro`
    const objIndex = mergedData.findIndex(obj => obj.idPerro === idPerro);
    if (objIndex === -1) {
        console.error("No se encontró el perro con ID:", idPerro);
        return;
    }

    // Incrementar el número de vigencias en el objeto
    mergedData[objIndex].vigencias += 1;

    // Determinar el nuevo timestamp para la vigencia
    let nuevoTimestamp;
    if (mergedData[objIndex].nueva_fecha_vencimiento_timestamp < Date.now()) {
        const fecha = new Date(Date.now());
        fecha.setFullYear(fecha.getFullYear() + 1);
        fecha.setHours(23, 59, 0);
        nuevoTimestamp = fecha.getTime();
    } else {
        const fecha = new Date(mergedData[objIndex].nueva_fecha_vencimiento_timestamp);
        fecha.setFullYear(fecha.getFullYear() + 1);
        fecha.setHours(23, 59, 0);
        nuevoTimestamp = fecha.getTime();
    }

    // Actualizar la nueva fecha de vencimiento
    const nueva_fecha_vencimiento = new Date(nuevoTimestamp).toLocaleDateString(lang, options);
    mergedData[objIndex].nueva_fecha_vencimiento_timestamp = nuevoTimestamp;
    mergedData[objIndex].nueva_fecha_vencimiento = nueva_fecha_vencimiento;

    // Obtener el índice de la fila en la tabla DataTable
    const tabla = $('#tablaPerros').DataTable();
    const rowIndex = tabla.rows().indexes().toArray().find(i => {
        return tabla.row(i).data()[0] === idPerro;
    });

    if (rowIndex === undefined) {
        console.error("No se encontró la fila para el perro con ID:", idPerro);
        return;
    }

    // Actualizar el campo que muestra el total de vigencias en la interfaz de usuario
    const totalVigencias = document.getElementById("numVigencias");
    if (totalVigencias) {
        const currentVigencias = parseInt(totalVigencias.value, 10);
        totalVigencias.value = isNaN(currentVigencias) ? 1 : currentVigencias + 1;
    }

    // Crear la información de la fila actualizada
    const informacionUsuarios = [
        mergedData[objIndex].idPerro,
        mergedData[objIndex].nombrePerro,
        `<img src='${mergedData[objIndex].foto}' width="50" height="50" />`,
        mergedData[objIndex].fecha_vencimiento_timestamp,
        mergedData[objIndex].fecha_vencimiento,
        `<button class="transparent_button" onclick="restarVigencia('${mergedData[objIndex].idPerro}')"> <img src="img/btnMenos.png" width="50" height="50"></button>`,
        `<button class="transparent_button" onclick="sumarVigencia('${mergedData[objIndex].idPerro}')"> <img src="img/btnMas.png" width="50" height="50"></button>`,
        mergedData[objIndex].vigencias,
        mergedData[objIndex].nueva_fecha_vencimiento_timestamp,
        mergedData[objIndex].nueva_fecha_vencimiento,
    ];

    // Actualizar la fila en la tabla DataTable
    tabla.row(rowIndex).data(informacionUsuarios).draw();
}


// function restarVigencia(idPerro) {


//     objIndex = mergedData.findIndex((obj => obj.idPerro == idPerro));




//     if ((mergedData[objIndex].vigencias - 1) == 0) {

//         mergedData[objIndex].nueva_fecha_vencimiento_timestamp = mergedData[objIndex].fecha_vencimiento_timestamp
//         mergedData[objIndex].nueva_fecha_vencimiento = mergedData[objIndex].fecha_vencimiento

//         console.log("entra a vigencia 0 ")

//         mergedData[objIndex].vigencias = 0

//         numVigencias = numVigencias - 1
//         document.getElementById("numVigencias").value = numVigencias

//     } else if ((mergedData[objIndex].vigencias - 1) < 0) {

//         mergedData[objIndex].nueva_fecha_vencimiento_timestamp = mergedData[objIndex].fecha_vencimiento_timestamp
//         mergedData[objIndex].nueva_fecha_vencimiento = mergedData[objIndex].fecha_vencimiento

//         console.log("entra a vigencia menos 0 ")

//         mergedData[objIndex].vigencias = 0


//     } else {


//         numVigencias = numVigencias - 1
//         document.getElementById("numVigencias").value = numVigencias

//         //Log object to Console.
//         console.log("Before update: ", mergedData[objIndex])

//         //Update object's name property.
//         mergedData[objIndex].vigencias = mergedData[objIndex].vigencias - 1


//         var nuevoTimestamp = 0

//         if (mergedData[objIndex].nueva_fecha_vencimiento_timestamp < x) {


//             mergedData[objIndex].nueva_fecha_vencimiento_timestamp = mergedData[objIndex].fecha_vencimiento_timestamp
//             mergedData[objIndex].nueva_fecha_vencimiento = mergedData[objIndex].fecha_vencimiento


//         } else {

//             var fecha = new Date(mergedData[objIndex].nueva_fecha_vencimiento_timestamp);
//             fecha.setFullYear(fecha.getFullYear() - 1);
//             fecha.setHours(23, 59, 0)
//             nuevoTimestamp = fecha.getTime()
//         }


//         var nueva_fecha_vencimiento = "Sin Dato"


//         nueva_fecha_vencimiento = new Date(nuevoTimestamp);
//         nueva_fecha_vencimiento = nueva_fecha_vencimiento.toLocaleDateString(lang, options)

//         mergedData[objIndex].nueva_fecha_vencimiento_timestamp = nuevoTimestamp
//         mergedData[objIndex].nueva_fecha_vencimiento = nueva_fecha_vencimiento

//         console.log("After update: ", mergedData[objIndex])




//     }



//     var tabla = $('#tablaPerros').dataTable()

//     var rowId = tabla.cell().index(idPerro);





//     var informacionUsuarios =

//         [
//             mergedData[objIndex].idPerro,
//             mergedData[objIndex].nombrePerro,
//             '<img src=\'' + mergedData[objIndex].foto + '\' width="50" height="50" />',
//             mergedData[objIndex].fecha_vencimiento_timestamp,
//             mergedData[objIndex].fecha_vencimiento,
//             '<button class="transparent_button" onclick="restarVigencia(\'' + mergedData[objIndex].idPerro + '\')">  <img id="msjImg" src="img/btnMenos.png"  width="50" height=" 50"> </button>',
//             '<button class="transparent_button" onclick="sumarVigencia(\'' + mergedData[objIndex].idPerro + '\')">  <img id="msjImg" src="img/btnMas.png"  width="50" height=" 50"> </button>',
//             mergedData[objIndex].vigencias,
//             mergedData[objIndex].nueva_fecha_vencimiento_timestamp,
//             mergedData[objIndex].nueva_fecha_vencimiento


//         ]


//     tabla.fnUpdate(informacionUsuarios, rowId, undefined);


// }

function restarVigencia(idPerro) {
    const objIndex = mergedData.findIndex(obj => obj.idPerro === idPerro);

    if (objIndex === -1) {
        console.error("No se encontró el perro con ID:", idPerro);
        return;
    }

    const vigenciasActuales = mergedData[objIndex].vigencias;

    if (vigenciasActuales <= 0) {
        console.warn("El número de vigencias es cero o negativo, no se puede restar más.");
        return;
    }

    // Restar una vigencia
    mergedData[objIndex].vigencias -= 1;

    // Si las vigencias llegan a cero, restablecer la fecha de vencimiento
    if (mergedData[objIndex].vigencias === 0) {
        mergedData[objIndex].nueva_fecha_vencimiento_timestamp = mergedData[objIndex].fecha_vencimiento_timestamp;
        mergedData[objIndex].nueva_fecha_vencimiento = mergedData[objIndex].fecha_vencimiento;
    } else {
        // Si no es cero, restar un año a la nueva fecha de vencimiento
        const fecha = new Date(mergedData[objIndex].nueva_fecha_vencimiento_timestamp);
        fecha.setFullYear(fecha.getFullYear() - 1);
        fecha.setHours(23, 59, 0);
        mergedData[objIndex].nueva_fecha_vencimiento_timestamp = fecha.getTime();
        mergedData[objIndex].nueva_fecha_vencimiento = fecha.toLocaleDateString(lang, options);
    }

    // Actualizar el total de vigencias en la interfaz de usuario
    const totalVigencias = document.getElementById("numVigencias");
    if (totalVigencias) {
        const currentVigencias = parseInt(totalVigencias.value, 10);
        totalVigencias.value = isNaN(currentVigencias) ? 0 : currentVigencias - 1;
    }

    // Obtener la fila correspondiente en DataTable
    const tabla = $('#tablaPerros').DataTable();
    const rowIndex = tabla.rows().indexes().toArray().find(i => {
        return tabla.row(i).data()[0] === idPerro;
    });

    if (rowIndex === undefined) {
        console.error("No se encontró la fila para el perro con ID:", idPerro);
        return;
    }

    // Crear la información de la fila actualizada
    const informacionUsuarios = [
        mergedData[objIndex].idPerro,
        mergedData[objIndex].nombrePerro,
        `<img src='${mergedData[objIndex].foto}' width="50" height="50" />`,
        mergedData[objIndex].fecha_vencimiento_timestamp,
        mergedData[objIndex].fecha_vencimiento,
        `<button class="transparent_button" onclick="restarVigencia('${mergedData[objIndex].idPerro}')"> <img src="img/btnMenos.png" width="50" height="50"></button>`,
        `<button class="transparent_button" onclick="sumarVigencia('${mergedData[objIndex].idPerro}')"> <img src="img/btnMas.png" width="50" height="50"></button>`,
        mergedData[objIndex].vigencias,
        mergedData[objIndex].nueva_fecha_vencimiento_timestamp,
        mergedData[objIndex].nueva_fecha_vencimiento,
    ];

    // Actualizar la fila en la tabla DataTable
    tabla.row(rowIndex).data(informacionUsuarios).draw();
}


function obtener_fecha() {


    vecesPerros = 0;

    var db = firebase.database();

    var sessionsRef = db.ref("sessions");
    sessionsRef.child("actual").set(firebase.database.ServerValue.TIMESTAMP);









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



function siguiente() {



    console.log("elemento " + elemento)

    var pagoSeleccionInput = document.getElementById("pagoSeleccion").value;


    if (elemento == 1) {


        if (numVigencias > 0) {

            elemento++
            configuracionPantalla()
        } else {

            alert("Debes otorgar almenos una vigencia")
        }

        primera = true

    }

    if (elemento == 2) {


        if (primera == true) {

            primera = false


            console.log("Costo vigencia: " + costoVigencia)

            costoServicio = costoVigencia

            subtotalCompra = costoVigencia * numVigencias
            ivaDeCompra = subtotalCompra * iva

            totalApagar = subtotalCompra



            console.log("Costo Servicio: " + costoServicio.toFixed(2))
            console.log("Iva: " + envioCompra.toFixed(2))
            console.log("Total a pagar: " + totalApagar.toFixed(2))


            document.getElementById("paseos").innerHTML = numVigencias;

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
                ivaDeCompra = 0
                totalApagar = 0


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


        $('#coverSuave').show();

        var db = firebase.database();
        var ref = db.ref("RecuperanDogComprasVigenciatest");

        var Recuperandog = ref.push();
        var RecuperandogID = Recuperandog.getKey();
        var finanzas = db.ref("Finanzas").child(RecuperandogID)
        var descripcionPlacas = ""

        if (numVigencias == "1") {

            descripcionPlacas = "año de vigencia Plaquita"

        } else {

            descripcionPlacas = "años de vigencia Plaquita"

        }




        Recuperandog.set({

            amount: costoVigencia,
            cantidad: numVigencias,
            descripcion: numVigencias + " " + descripcionPlacas + " RecuperanDog",
            fee: comisionTotal,
            id_usr: uid,
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
                cambio: "Generacion de compra de vigencias",
                inicial: "",
                final: ""

            })



            finanzas.set({

                amount: totalApagar,
                amount_paseador: 0,
                descripcion: numVigencias + " " + descripcionPlacas + " RecuperanDog 1",
                fee: comisionTotal,
                iva: ivaDeCompra,
                monto_caminandog: totalApagar - comisionTotal - ivaDeCompra,
                nombre: nombre,
                order_id: RecuperandogID,
                time_op: firebase.database.ServerValue.TIMESTAMP,
                uid: uid
            }).then(function () {


                console.log('Guardado');


                let escribirVigencia = db.ref("RecuperandogQR")

                for (var dato in mergedData) {

                    var idEscribir = mergedData[dato].idPerro
                    var vigenciaEscribir = mergedData[dato].nueva_fecha_vencimiento_timestamp
                    console.log("ID perro " + idEscribir + " Vigencia nueva " + vigenciaEscribir)

                    escribirVigencia.child(idEscribir).update({

                        fechaVencimiento: vigenciaEscribir,

                    })
                    // ...
                }


                if (confirm("La compra se ha generado correctamente")) {

                    terminacarga()

                } else {

                    terminacarga()
                }





            })





        })





    }


}


function terminacarga() {

    var myVar = setInterval(myTimer, 10000);



    function myTimer() {

        window.location.href = "users.html"


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

    var tablaPerros = document.getElementById("tablaPerros");

    var numVigenciasInput = document.getElementById("numVigencias");
    var numVigenciasLabel = document.getElementById("numVigenciasLabel");

    var pagoSeleccionInput = document.getElementById("pagoSeleccion");
    var pagoSeleccionLabel = document.getElementById("pagoSeleccionLabel");

    var datosPaseo = document.getElementById("rowDatosGenerales");
    var costos = document.getElementById("rowCosto");



    console.log("Pagina: " + elemento)

    if (elemento == 1) {

        botonAnterior.style.display = "none";

        numVigenciasLabel.style.display = "block";
        numVigenciasInput.style.display = "block";

        pagoSeleccionInput.style.display = "block";
        pagoSeleccionLabel.style.display = "block";

        $("#rowDatosGenerales").hide();
        $("#rowCosto").hide();

        $("#tablaPerros").show();
        $(".dataTables_info").show();
        $(".dataTables_paginate").show();
        $(".dataTables_filter").show();
        $(".dataTables_length").show();

    } else if (elemento == 2) {

        $("#tablaPerros").hide();
        $(".dataTables_info").hide();
        $(".dataTables_paginate").hide();
        $(".dataTables_filter").hide();
        $(".dataTables_length").hide();

        botonAnterior.style.display = "block";


        numVigenciasLabel.style.display = "none";
        numVigenciasInput.style.display = "none";


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

