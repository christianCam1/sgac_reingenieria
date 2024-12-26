var InformeCompras = [];




function muestra_ventas(inicio, fin) {





    var db = firebase.database();
    var ref = db.ref("Contacto").child("compras");


    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    var actual = 0;


    ref.orderByChild("timestamp").startAt(inicio).endAt(fin).once("value", function (snapshot) {




        var total = snapshot.numChildren();


        console.log("total", total)



        snapshot.forEach(function (data) {


            var d = data.val();




            actual = actual + 1;



            if (d.validacion == undefined) {

                guardar(d.uid, d.nombre, d.detalleCompra, d.timestamp, actual, total, "", data.key);


            } else {


                guardar(d.uid, d.nombre, d.detalleCompra, d.timestamp, actual, total, d.validacion, data.key);

            }





        });





    });

}




comboEstatus.addEventListener("input", function (e) {

    var table = document.getElementById("tabla");
    table.innerHTML = "";


    var element = document.getElementById("comboEstatus");
    var estatusSeleccionado = element.options[element.selectedIndex].value;




    var oTable = $('#tablaDatos').DataTable();  //pay attention to capital D, which is mandatory to retrieve "api" datatables' object, as @Lionel said

    console.log(estatusSeleccionado);

    if (estatusSeleccionado == "Seleccionar...") {

        oTable.search("").draw();

    } else {



        oTable.search(estatusSeleccionado).draw();

    }


});



function guardar(uid, nombre, detalle, timestamp, actual, total, validacion, childGuardar) {

    var registroCompras = {
        uid: uid,
        nombre: nombre,
        detalle: detalle,
        timestamp: timestamp,
        validacion: validacion,
        key: childGuardar
    };

    console.log("actual" + actual + "TOTAL" + total);


    InformeCompras.push(registroCompras);


    if (actual == total) {
        mostrar()

    }



}




function mostrar() {


    var table = document.getElementById("tabla");
    table.innerHTML = "";
    InformeCompras.forEach(logArrayElements);
    console.log("tamaño ", InformeCompras.length)
    agregarPaginacion();

    /*  $('#tablaDatos').DataTable( {
          "order": [[ 1, "desc" ]]
       //"order": [[ 1, "asc" ]]
      } );
      */

}



function agregarPaginacion() {

    $('#tablaDatos').dataTable({
        "pagingType": "full_numbers",
        "paging": true, //Muestra la paginacion y el combobox
        "bFilter": true,
        //Muestra oculta filtro
        "info": true, // Texto que indica cuantos registros se estan mostrando
        "columnDefs": [
            { "targets": [4], "visible": false },
            { "orderData": 4, "targets": 3 },
        ],
        "order": [[3, "desc"]],
        //----------------- Configuración Idioma----------------------
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


        //----------------- Termina Configuración Idioma----------------------



    });

}





function logArrayElements(d, index, array) {

    var table = document.getElementById("tabla");

    console.log("a[" + index + "] = " + d);

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);




    // asigna a las celdas el valir del Child especificado
    var date = new Date(d.timestamp);


    let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };


    cell1.innerHTML = d.uid


    cell2.innerHTML = d.nombre;
    cell3.innerHTML = d.detalle
    cell4.innerHTML = date.toLocaleDateString(lang, options);
    cell5.innerHTML = d.timestamp;

    console.log("validado " + d.validacion);

    if (d.validacion == "") {

        cell6.innerHTML = 'Sin Validar';

        row.style.backgroundColor = "#ffcccb";

    } else {


        cell6.innerHTML = "Validado"
        row.style.backgroundColor = "#90EE90";
    }




}



function verpaseos(key) {

    console.log(key);


    var db = firebase.database();
    var ref = db.ref("Contacto").child("compras").child(key);

    var datosActualizar = {
        validacion: true

    };


    ref.update((datosActualizar), function (error) {


        if (error) {
            // The write failed...
        } else {


            var table = document.getElementById("tabla");
            table.innerHTML = "";
            InformeCompras = [];
            var oTable = $('#tablaDatos').DataTable();
            oTable.destroy();
            getDate();


        }



    });


}





function getDate() {

    var db = firebase.database();

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





    var datumInicio = new Date(yearInicio, (monthInicio - 1), day, '00', '00', '01');
    var inicio = datumInicio.getTime();

    console.log("Inicio: ", inicio);
    console.log("Fin: ", dateObj);
    console.log("Hoy: ", hoy);

    //mostrarPerros(datumInicioTimestamp,datumFinTimestamp,filtro,diasRecuperandog);


    let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };

    var timestampini = inicio;
    var dateIni = new Date(timestampini);

    console.log(dateIni.toLocaleDateString(lang, options));




    console.log(dateObj.toLocaleDateString(lang, options));

    document.getElementById("periodo").innerHTML = "Mostrando desde " + dateIni.toLocaleDateString(lang, options) + " ,Hasta: " + dateObj.toLocaleDateString(lang, options);


    muestra_ventas(inicio, hoy)

    // inicio fin 


}








window.onload = getDate();



function copyToClipboard(val) {

    var dummy = document.createElement("input");
    document.body.appendChild(dummy);

    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}