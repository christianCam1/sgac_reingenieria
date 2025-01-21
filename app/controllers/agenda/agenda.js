var diasActual = 0;
var orderActual = "";
var diasEleccionActual = "";

var diasAsignarPaseadorActual = 0;
var orderAsignarPaseadorActual = "";
var timestamp_ultimo_paseo_individual = 0

var timestamp1 = 0
var timestamp2 = 0
var timestamp3 = 0
var timestamp4 = 0
var timestamp5 = 0
var timestamp6 = 0
var timestamp7 = 0
var timestamp8 = 0
var timestamp9 = 0
var timestamp10 = 0
var timestamp11 = 0
var timestamp12 = 0
var timestamp13 = 0
var timestamp14 = 0
var timestamp15 = 0
var timestamp16 = 0
var timestamp17 = 0
var timestamp18 = 0
var timestamp19 = 0
var timestamp20 = 0
var timestamp21 = 0
var timestamp22 = 0
var timestamp23 = 0
var timestamp24 = 0
var timestamp25 = 0
var timestamp26 = 0
var timestamp27 = 0
var timestamp28 = 0
var timestamp29 = 0
var timestamp30 = 0

var actual = 0;
var paseadoresUtilizados = ""

var ordenDatos;


//Iconos de botones
var btnCategoria = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>';
var btnCalendario = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3-week" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/><path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>';
var btnDireccion = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>';
var btnDireccionEditar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>';
var btnPaseador = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16"><path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/><path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/></svg>';
var btnPasadores = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></svg>';
var btnBorrar = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/></svg>';
var btnVer = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg>';


$(function () {
    $('#datetimepicker1').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),


    });

    $('#datetimepicker2').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker3').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker4').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker5').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker6').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker7').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker8').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker9').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker10').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker11').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker12').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker13').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker14').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker15').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker16').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker17').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker18').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker19').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker20').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker21').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker22').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker23').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker24').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker25').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker26').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker27').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker28').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker29').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });

    $('#datetimepicker30').datetimepicker({

        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date().setHours(0, 0, 0, 0),

    });


});



function busca_paseos() {

    $("#tablaAgendaa").show();
    var botonCancelar = document.getElementById("cancelar");
    var botonGuardar = document.getElementById("guardar");

    var botonCancelarAsignarPaseador = document.getElementById("cancelarAsignarPaseador");
    var botonGuardarAsignarPaseador = document.getElementById("guardarAsignarPaseador");

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

    var fecha1Ingresar = document.getElementById("paseo1");
    var fecha2Ingresar = document.getElementById("paseo2");
    var fecha3Ingresar = document.getElementById("paseo3");
    var fecha4Ingresar = document.getElementById("paseo4");
    var fecha5Ingresar = document.getElementById("paseo5");
    var fecha6Ingresar = document.getElementById("paseo6");
    var fecha7Ingresar = document.getElementById("paseo7");
    var fecha8Ingresar = document.getElementById("paseo8");
    var fecha9Ingresar = document.getElementById("paseo9");
    var fecha10Ingresar = document.getElementById("paseo10");
    var fecha11Ingresar = document.getElementById("paseo11");
    var fecha12Ingresar = document.getElementById("paseo12");
    var fecha13Ingresar = document.getElementById("paseo13");
    var fecha14Ingresar = document.getElementById("paseo14");
    var fecha15Ingresar = document.getElementById("paseo15");
    var fecha16Ingresar = document.getElementById("paseo16");
    var fecha17Ingresar = document.getElementById("paseo17");
    var fecha18Ingresar = document.getElementById("paseo18");
    var fecha19Ingresar = document.getElementById("paseo19");
    var fecha20Ingresar = document.getElementById("paseo20");
    var fecha21Ingresar = document.getElementById("paseo21");
    var fecha22Ingresar = document.getElementById("paseo22");
    var fecha23Ingresar = document.getElementById("paseo23");
    var fecha24Ingresar = document.getElementById("paseo24");
    var fecha25Ingresar = document.getElementById("paseo25");
    var fecha26Ingresar = document.getElementById("paseo26");
    var fecha27Ingresar = document.getElementById("paseo27");
    var fecha28Ingresar = document.getElementById("paseo28");
    var fecha29Ingresar = document.getElementById("paseo29");
    var fecha30Ingresar = document.getElementById("paseo30");
    var fecha1LabelIngresar = document.getElementById("paseo1Label");
    var fecha2LabelIngresar = document.getElementById("paseo2Label");
    var fecha3LabelIngresar = document.getElementById("paseo3Label");
    var fecha4LabelIngresar = document.getElementById("paseo4Label");
    var fecha5LabelIngresar = document.getElementById("paseo5Label");
    var fecha6LabelIngresar = document.getElementById("paseo6Label");
    var fecha7LabelIngresar = document.getElementById("paseo7Label");
    var fecha8LabelIngresar = document.getElementById("paseo8Label");
    var fecha9LabelIngresar = document.getElementById("paseo9Label");
    var fecha10LabelIngresar = document.getElementById("paseo10Label");
    var fecha11LabelIngresar = document.getElementById("paseo11Label");
    var fecha12LabelIngresar = document.getElementById("paseo12Label");
    var fecha13LabelIngresar = document.getElementById("paseo13Label");
    var fecha14LabelIngresar = document.getElementById("paseo14Label");
    var fecha15LabelIngresar = document.getElementById("paseo15Label");
    var fecha16LabelIngresar = document.getElementById("paseo16Label");
    var fecha17LabelIngresar = document.getElementById("paseo17Label");
    var fecha18LabelIngresar = document.getElementById("paseo18Label");
    var fecha19LabelIngresar = document.getElementById("paseo19Label");
    var fecha20LabelIngresar = document.getElementById("paseo20Label");
    var fecha21LabelIngresar = document.getElementById("paseo21Label");
    var fecha22LabelIngresar = document.getElementById("paseo22Label");
    var fecha23LabelIngresar = document.getElementById("paseo23Label");
    var fecha24LabelIngresar = document.getElementById("paseo24Label");
    var fecha25LabelIngresar = document.getElementById("paseo25Label");
    var fecha26LabelIngresar = document.getElementById("paseo26Label");
    var fecha27LabelIngresar = document.getElementById("paseo27Label");
    var fecha28LabelIngresar = document.getElementById("paseo28Label");
    var fecha29LabelIngresar = document.getElementById("paseo29Label");
    var fecha30LabelIngresar = document.getElementById("paseo30Label");

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


    botonCancelar.style.display = "none";
    botonGuardar.style.display = "none";


    fecha1Ingresar.style.display = "none";
    fecha2Ingresar.style.display = "none";
    fecha3Ingresar.style.display = "none";
    fecha4Ingresar.style.display = "none";
    fecha5Ingresar.style.display = "none";
    fecha6Ingresar.style.display = "none";
    fecha7Ingresar.style.display = "none";
    fecha8Ingresar.style.display = "none";
    fecha9Ingresar.style.display = "none";
    fecha10Ingresar.style.display = "none";
    fecha11Ingresar.style.display = "none";
    fecha12Ingresar.style.display = "none";
    fecha13Ingresar.style.display = "none";
    fecha14Ingresar.style.display = "none";
    fecha15Ingresar.style.display = "none";
    fecha16Ingresar.style.display = "none";
    fecha17Ingresar.style.display = "none";
    fecha18Ingresar.style.display = "none";
    fecha19Ingresar.style.display = "none";
    fecha20Ingresar.style.display = "none";
    fecha21Ingresar.style.display = "none";
    fecha22Ingresar.style.display = "none";
    fecha23Ingresar.style.display = "none";
    fecha24Ingresar.style.display = "none";
    fecha25Ingresar.style.display = "none";
    fecha26Ingresar.style.display = "none";
    fecha27Ingresar.style.display = "none";
    fecha28Ingresar.style.display = "none";
    fecha29Ingresar.style.display = "none";
    fecha30Ingresar.style.display = "none";


    fecha1LabelIngresar.style.display = "none";
    fecha2LabelIngresar.style.display = "none";
    fecha3LabelIngresar.style.display = "none";
    fecha4LabelIngresar.style.display = "none";
    fecha5LabelIngresar.style.display = "none";
    fecha6LabelIngresar.style.display = "none";
    fecha7LabelIngresar.style.display = "none";
    fecha8LabelIngresar.style.display = "none";
    fecha9LabelIngresar.style.display = "none";
    fecha10LabelIngresar.style.display = "none";
    fecha11LabelIngresar.style.display = "none";
    fecha12LabelIngresar.style.display = "none";
    fecha13LabelIngresar.style.display = "none";
    fecha14LabelIngresar.style.display = "none";
    fecha15LabelIngresar.style.display = "none";
    fecha16LabelIngresar.style.display = "none";
    fecha17LabelIngresar.style.display = "none";
    fecha18LabelIngresar.style.display = "none";
    fecha19LabelIngresar.style.display = "none";
    fecha20LabelIngresar.style.display = "none";
    fecha21LabelIngresar.style.display = "none";
    fecha22LabelIngresar.style.display = "none";
    fecha23LabelIngresar.style.display = "none";
    fecha24LabelIngresar.style.display = "none";
    fecha25LabelIngresar.style.display = "none";
    fecha26LabelIngresar.style.display = "none";
    fecha27LabelIngresar.style.display = "none";
    fecha28LabelIngresar.style.display = "none";
    fecha29LabelIngresar.style.display = "none";
    fecha30LabelIngresar.style.display = "none";

    botonCancelarAsignarPaseador.style.display = "none";
    botonGuardarAsignarPaseador.style.display = "none";

    diasActual = 0
    orderActual = ""

    diasAsignarPaseadorActual = 0
    orderAsignarPaseadorActual = ""

    actual = 0;


    timestamp1 = 0
    timestamp2 = 0
    timestamp3 = 0
    timestamp4 = 0
    timestamp5 = 0
    timestamp6 = 0
    timestamp7 = 0
    timestamp8 = 0
    timestamp9 = 0
    timestamp10 = 0
    timestamp11 = 0
    timestamp12 = 0
    timestamp13 = 0
    timestamp14 = 0
    timestamp15 = 0
    timestamp16 = 0
    timestamp17 = 0
    timestamp18 = 0
    timestamp19 = 0
    timestamp20 = 0
    timestamp21 = 0
    timestamp22 = 0
    timestamp23 = 0
    timestamp24 = 0
    timestamp25 = 0
    timestamp26 = 0
    timestamp27 = 0
    timestamp28 = 0
    timestamp29 = 0
    timestamp30 = 0

    fechaDefinitiva1 = ""
    fechaDefinitiva2 = ""
    fechaDefinitiva3 = ""
    fechaDefinitiva4 = ""
    fechaDefinitiva5 = ""
    fechaDefinitiva6 = ""
    fechaDefinitiva7 = ""
    fechaDefinitiva8 = ""
    fechaDefinitiva9 = ""
    fechaDefinitiva10 = ""
    fechaDefinitiva11 = ""
    fechaDefinitiva12 = ""
    fechaDefinitiva13 = ""
    fechaDefinitiva14 = ""
    fechaDefinitiva15 = ""
    fechaDefinitiva16 = ""
    fechaDefinitiva17 = ""
    fechaDefinitiva18 = ""
    fechaDefinitiva19 = ""
    fechaDefinitiva20 = ""
    fechaDefinitiva21 = ""
    fechaDefinitiva22 = ""
    fechaDefinitiva23 = ""
    fechaDefinitiva24 = ""
    fechaDefinitiva25 = ""
    fechaDefinitiva26 = ""
    fechaDefinitiva27 = ""
    fechaDefinitiva28 = ""
    fechaDefinitiva29 = ""
    fechaDefinitiva30 = ""

    ordenDatos = "";

    paseadoresUtilizados = ""

    // Mostrar la tabla con el id tablaAgenda
    $("#tablaAgenda").show();

    // Verifica si la tabla ya está inicializada y destrúyela si es necesario
    if ($.fn.dataTable.isDataTable('#tablaAgenda')) {
        $('#tablaAgenda').DataTable().clear().destroy();
    }

    // Inicializa la tabla DataTable y guarda la referencia
    var tabla = $('#tablaAgenda').DataTable({

        search: { regex: true },
        pagingType: "full_numbers",
        paging: true, //Muestra la paginacion y el combobox
        bFilter: true,//Muestra oculta filtro
        info: true,
        responsive: true,
        columnDefs: [
            { "targets": [0], "visible": false }
        ],
        layout: {
            top1Start: {
                buttons: [
                {
                    extend: 'colvis',
                    text: 'Visor de columnas',
                    collectionLayout: 'three-column'
                }
                ]
            }
        },
        pageLength: 10,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
        // Configuracion de idioma
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

    // Limpia la tabla antes de agregar nuevos datos
    tabla.clear().draw();

    // Inicializa una instancia de las funciones de Firebase
    var functions = firebase.functions();


    // Variables para iniciar estancia en Firebase y referencia a 2 rutas dentro de Firebase
    var db = firebase.database();
    var ref = db.ref("Agendados");
    var ref2 = db.ref("Usuarios");

    // Obtiene una referencia al elemento con el id tabla
    var table = document.getElementById("tabla");

    //limpia la tabla
    table.innerHTML = "";

    var query = "no_asignado";
    // Con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    // Realiza una consulta a la base de datos de Firebase para obtener todos los datos de la ubicación "Agendados"
    ref.orderByChild("id_paseador").startAt(query).endAt(query + "\uf8ff").once("value", function (snapshot) {

        // Asigna el valor de snapshot a la variable exist
        var exist = snapshot.val();
        console.log(exist);
        if (exist == null) {
            //document.getElementById("demo").innerHTML = "No Hay Paseos Agendados";
        } else {
            // Itera sobre los resultados de la consulta
            snapshot.forEach(function (child) {
                // Repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
                d = child.val();

                if (d.id_usr == "Y6nY3" || d.id_usr == "UulF5Mhqa2") {
                    //document.getElementById("demo").innerHTML = "No Hay Paseos Agendados";
                } else {

                    var nuevo_tiempo = "";
                    if (d.tiempo_paseo == 1) {
                        nuevo_tiempo = "1 Hora";
                    } else if (d.tiempo_paseo == 2) {
                        nuevo_tiempo = "2 Horas";
                    } else if (d.tiempo_paseo == 0.5) {
                        nuevo_tiempo = "30 Minutos";
                    } else if (d.tiempo_paseo == 1.5) {
                        nuevo_tiempo = "90 Minutos";
                    } else {
                        nuevo_tiempo = d.tiempo_paseo;
                    }

                    var uid = d.order_id;
                    var nombreAgendado;
                    var telAgend;
                    var diasTo = d.dias;
                    var tiempoAgend = nuevo_tiempo;
                    var perrosAgend = d.num_perros;
                    var catAgend = d.categoria;
                    var nombrePerros = d.perrosNombre;
                    var direccionAgend = d.direccion;
                    var pais = "Sin dato";
                    var moneda = "Sin dato";
                    var diasEleccAgend = procesarDiasEleccion(d.diasEleccion);
                    var acciones =
                        '<center>' +
                            '<a class="btn btn-app bg-success" onclick="cambiarCategoria(\'' + d.order_id + "','" + d.categoria + '\')" data-toggle="tooltip" title="Cambiar categoria"><i class="fas fa-list"></i>Categoria</a>' +
                            '<a class="btn btn-app bg-success" onclick="cambiarFechas(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\')" data-toggle="tooltip" title="Cambiar fechas"><i class="fas fa-calendar"></i>Fechas</a>' +
                            '<a class="btn btn-app bg-info" onclick="verDireccion(\'' + d.latitud + "','" + d.longitud + '\')" data-toggle="tooltip" title="Ver direccion"><i class="fa fa-map-marker"></i>Ver dirección</a>' +
                            '<a class="btn btn-app bg-success" onclick="cambiar_ubicacion(\'' + d.order_id + "','" + d.latitud + "','" + d.longitud + '\')" data-toggle="tooltip" title="Editar direccion"><i class="fas fa-edit"></i>Editar dirección</a>' +
                            '<a class="btn btn-app bg-success" onclick="asignarPaseador(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\')" data-toggle="tooltip" title="Asignar paseador"><i class="fas fa-user"></i>Paseador</a>' +
                            '<a class="btn btn-app bg-success" onclick="asignarPaseadorIndividual(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\')" data-toggle="tooltip" title="Asignar paseador(es)"><i class="fas fa-users"></i>Paseador(es)</a>'+
                            '<a class="btn btn-app bg-danger" onclick="eliminarPaseo(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\')" data-toggle="tooltip" title="Eliminar"><i class="fas fa-trash"></i>Eliminar</a>'+
                            '<a class="btn btn-app bg-info" onclick="verFCompras(\'' + d.id_usr + '\')" data-toggle="tooltip" title="Ver compras"><i class="fa fa-shopping-cart"></i>Ver compras</a>'
                        '</center>';


                    /*Alternativa de botones
                    // '<button class="btn btn-app bg-success" onclick="cambiarCategoria(\'' + d.order_id + "','" + d.categoria + '\')" data-toggle="tooltip" title="Cambiar categoria">' + btnCategoria + '</button>&nbsp&nbsp&nbsp' +
                    // '<button class="btn btn-app bg-success" onclick="cambiarFechas(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\')" data-toggle="tooltip" title="Cambiar fechas">' + btnCalendario + '</button>&nbsp&nbsp&nbsp' +
                    // '<button class="btn btn-warning" onclick="verDireccion(\'' + d.latitud + "','" + d.longitud + '\') data-toggle="tooltip" title="Ver direccion">'+btnDireccion+'</button>&nbsp&nbsp&nbsp' +
                    // '<button class="btn btn-info" onclick="cambiar_ubicacion(\'' + d.order_id + "','" + d.latitud + "','" + d.longitud + '\')" data-toggle="tooltip" title="Editar direccion">'+btnDireccionEditar+'</button>&nbsp&nbsp&nbsp' +
                    // '<button class="btn btn-info" onclick="asignarPaseador(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\')" data-toggle="tooltip" title="Asignar paseador">'+btnPaseador+'</button>&nbsp&nbsp&nbsp' +
                    // '<button class="btn btn-info" onclick="asignarPaseadorIndividual(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\') data-toggle="tooltip" title="Asignar paseadores">'+btnPasadores+'</button>&nbsp&nbsp&nbsp' +
                    // '<button class="btn btn-info" onclick="eliminarPaseo(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + '\') data-toggle="tooltip" title="Eliminar">'+btnBorrar+'</button>&nbsp&nbsp&nbsp' +
                    // '<button class="btn btn-info" onclick="verFCompras(\'' + d.id_usr + '\') data-toggle="tooltip" title="ver compras">'+btnVer+'</button>'+
                    */
                    
                    if (d.country != undefined) {

                        pais = d.country;
                    }

                    if (d.currencyCharge != undefined) {

                        moneda = d.currencyCharge;
                    }
            

                    ref2.orderByChild("uid").startAt(d.id_usr).endAt(d.id_usr + "\uf8ff").on("child_added", function (snapshotUser) {
                        var d2 = snapshotUser.val();
                        nombreAgendado = d2.nombre + " " + d2.apellido_Paterno + " " + d2.apellido_Materno;
                        telAgend = d2.telefono1;

                        var informacionAgenda = [
                            uid,
                            nombreAgendado,
                            telAgend,
                            diasTo,
                            tiempoAgend,
                            perrosAgend,
                            catAgend,
                            nombrePerros,
                            direccionAgend,
                            pais,
                            moneda,
                            diasEleccAgend,
                            acciones
                        ];
                        tabla.row.add(informacionAgenda).draw();

                    });
                }
            });
            
        }
        $("#loadingOverlay").hide();
    });
    

}


// Función para formatear fechas
function formatearFechas(arrayDates) {
    let fechasFormateadas = "";

    arrayDates.forEach(date => {
        // Obtener el nombre del día de la semana
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const nombreDia = diasSemana[date.getDay()];
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const nombreMes = meses[date.getMonth()];

        // Formatear la hora con ceros si es necesario
        const hora = (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

        // Formatear día y mes con dos dígitos
        const diaFormateado = date.getDate().toString().padStart(2, '0');
        const mesFormateado = (date.getMonth() + 1).toString().padStart(2, '0');

        const fechaFormateada = `${diaFormateado}/${mesFormateado}/${date.getFullYear()} - ${hora} `;

        // Agregar la fecha formateada al string
        fechasFormateadas += `${fechaFormateada}, `;
    });

    // Eliminar la coma extra al final del string
    fechasFormateadas = fechasFormateadas.slice(0, -2);

    return fechasFormateadas;
}

// Función para convertir timestamps a objetos Date
function convertirTimestamps(timestamps) {
    const dates = [];

    timestamps.forEach(timestampString => {
        const timestamp = parseInt(timestampString, 10);
        if (!isNaN(timestamp)) {
            dates.push(new Date(timestamp));
        } else {
            console.error(`Error: "${timestampString}" no es un timestamp válido.`);
        }
    });

    return dates;
}

// Función para convertir fechas de texto a objetos Date
function convertirFechasDeTexto(fechas) {
    const dates = [];

    fechas.forEach(fechaString => {
        const regex = /(\w+) (\d{1,2}) (\w+) (\d{4}) a las (\d{1,2}):(\d{2})/;
        const match = fechaString.trim().match(regex);

        if (match) {
            const [, , dia, mes, anio, horas, minutos] = match;
            const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            const monthIndex = monthNames.indexOf(mes.toLowerCase());

            if (monthIndex >= 0) {
                const date = new Date(anio, monthIndex, dia, horas, minutos);
                dates.push(date);
            } else {
                console.error(`Error: Mes "${mes}" no es válido.`);
            }
        } else {
            console.error(`Error: Formato de fecha "${fechaString}" no es válido.`);
        }
    });

    return dates;
}

// Función para procesar las fechas seleccionadas
function procesarDiasEleccion(entrada) {
    if (entrada) {
        const elementos = entrada.split(',');

        // Determinar si el primer elemento es un timestamp o una fecha de texto
        const primerElemento = elementos[0].trim();

        let dates;

        if (!isNaN(parseInt(primerElemento, 10))) {
            // Si es un número, consideramos que son timestamps
            dates = convertirTimestamps(elementos);
        } else {
            // Si no es un número, consideramos que son fechas de texto
            dates = convertirFechasDeTexto(elementos);
        }

        return formatearFechas(dates);
    } else {
        console.error("Error: La entrada es undefined o nula.");
        return "";
    }
}



// Funcion para eliminar un paseo
function eliminarPaseo(order_id, diasEleccion, dias) {
    Swal.fire({
        title: '¿Está seguro de eliminar este registro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminar(); // Llama a la función eliminar
            Swal.fire({
                title: 'Registro eliminado',
                icon: 'success'
            }).then(() => {
                location.reload(); // Recarga la página
            });
        }
    });
    
    function eliminar(){
        // Regerencia a la base de datos
        var db = firebase.database();
        var agendado = db.ref("Agendados")
        var agendado_eliminar = db.ref("Agendados").child(order_id)
        var agendadoRespaldo = db.ref("Agendados_eliminados")
        var finanzas = db.ref("Finanzas").child(order_id)
        var finanzas_eliminados = db.ref("Finanzas_eliminados").child(order_id)

        // Esta funcion hace un respaldo de la informacion eliminada
        agendado.orderByChild("order_id").equalTo(order_id).once("value", function (snapshot) {

            //  var snap = snapshot.val();

            console.log(snapshot.val())

            // Guarda la  informacion en esta ruta con ayuda de snapshot
            agendadoRespaldo.update(snapshot.val())

            // Elimina el paseo de la ubicacion original con remove()
            agendado_eliminar.remove().then(function () {

                // Regista el cambio en la ubicacion siguiente para mantener un historial de modificaciones
                var key = db.ref("cambios_ordenes").push().getKey();
                var agendadosModificaciones = db.ref("cambios_ordenes");
                var currentUID = firebase.auth().currentUser.uid;

                // Actualiza la informacion
                agendadosModificaciones.child(key).update({

                    id_orden: order_id,
                    uid: currentUID,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    cambio: "eliminacion agenda",
                    inicial: "",
                    final: ""

                })

                // Comprueba si el paseo existe en la ubicacion de finanzas
                finanzas.orderByChild("order_id").equalTo(order_id).once("value", function (snapshotFinanzas) {
                    // Si existe, respalda la informacion completa
                    if (snapshotFinanzas.exists()) {
                        finanzas_eliminados.update(snapshot.val())
                        //location.reload()
                        // En caso contrario, notifica que no existe
                    } else {
                        console.log("No existe en finanzas")
                        //location.reload(); // Recarga la pagina
                    }
                })

            }).catch(function (error) {

            });
        })
    }

    
}

// Funcion para asignar paseos de forma individual
function asignarPaseadorIndividual(order_id_metodo, diasEleccion, dias) {
    console.log("orden busqueda " + order_id_metodo)

    // Verificamos si diasElecc es un string y si contiene comas
    if (typeof diasEleccion === 'string') {
        if (diasEleccion.includes(',')) {
            // Si contiene comas, lo dividimos en una lista
            diasEleccion = diasEleccion.split(',');
        } else {
            // Si no contiene comas, lo convertimos en una lista con un solo elemento
            diasEleccion = [diasEleccion];
        }
    }

    // Convertimos diasTotales a un número si es un string
    dias = parseInt(dias, 10);

    console.log(diasEleccion);
    console.log(`Length of diasElecc: ${diasEleccion.length}, diasTotales: ${dias}`);
    console.log(`Type of diasTotales: ${typeof dias}`);

    // Comprobamos que la longitud de la lista coincida con los días totales
    if ((diasEleccion.length !== dias) || (diasEleccion == null || diasEleccion == "") || dias == null || dias == "") {
        alert('La cantidad de días seleccionados no coincide con los días totales.');
        throw new Error('La cantidad de días seleccionados no coincide con los días totales.');
    } else {
        $("#tablaAgendaa").hide();
        // Variables de referencia para Firebase y ruta de referencia
        var db = firebase.database();
        var refAgG = db.ref("Agendados");

        // Esta función se ejecuta una vez que se ha obtenido el resultado de la consulta.
        refAgG.orderByChild("order_id").equalTo(order_id_metodo).once("value", function (snapshot) {

            //  Recorre cada resultado almacenado en snapshot
            snapshot.forEach(function (child) {

                // Se obtiene el valor de iteracion
                d = child.val();
                ordenDatos = d

                console.log("orden datos ", ordenDatos)
            })

        });

        console.log(diasEleccion);
        $("#tablaAgenda").hide();

        diasAsignarPaseadorActual = dias
        orderAsignarPaseadorActual = order_id_metodo

        var botonCancelarAsignarPaseador = document.getElementById("cancelarAsignarPaseador");
        var botonGuardarAsignarPaseador = document.getElementById("guardarAsignarPaseador");

        var fecha1Ingresar = document.getElementById("paseo1");
        var fecha2Ingresar = document.getElementById("paseo2");
        var fecha3Ingresar = document.getElementById("paseo3");
        var fecha4Ingresar = document.getElementById("paseo4");
        var fecha5Ingresar = document.getElementById("paseo5");
        var fecha6Ingresar = document.getElementById("paseo6");
        var fecha7Ingresar = document.getElementById("paseo7");
        var fecha8Ingresar = document.getElementById("paseo8");
        var fecha9Ingresar = document.getElementById("paseo9");
        var fecha10Ingresar = document.getElementById("paseo10");
        var fecha11Ingresar = document.getElementById("paseo11");
        var fecha12Ingresar = document.getElementById("paseo12");
        var fecha13Ingresar = document.getElementById("paseo13");
        var fecha14Ingresar = document.getElementById("paseo14");
        var fecha15Ingresar = document.getElementById("paseo15");
        var fecha16Ingresar = document.getElementById("paseo16");
        var fecha17Ingresar = document.getElementById("paseo17");
        var fecha18Ingresar = document.getElementById("paseo18");
        var fecha19Ingresar = document.getElementById("paseo19");
        var fecha20Ingresar = document.getElementById("paseo20");
        var fecha21Ingresar = document.getElementById("paseo21");
        var fecha22Ingresar = document.getElementById("paseo22");
        var fecha23Ingresar = document.getElementById("paseo23");
        var fecha24Ingresar = document.getElementById("paseo24");
        var fecha25Ingresar = document.getElementById("paseo25");
        var fecha26Ingresar = document.getElementById("paseo26");
        var fecha27Ingresar = document.getElementById("paseo27");
        var fecha28Ingresar = document.getElementById("paseo28");
        var fecha29Ingresar = document.getElementById("paseo29");
        var fecha30Ingresar = document.getElementById("paseo30");

        var fecha1LabelIngresar = document.getElementById("paseo1Label");
        var fecha2LabelIngresar = document.getElementById("paseo2Label");
        var fecha3LabelIngresar = document.getElementById("paseo3Label");
        var fecha4LabelIngresar = document.getElementById("paseo4Label");
        var fecha5LabelIngresar = document.getElementById("paseo5Label");
        var fecha6LabelIngresar = document.getElementById("paseo6Label");
        var fecha7LabelIngresar = document.getElementById("paseo7Label");
        var fecha8LabelIngresar = document.getElementById("paseo8Label");
        var fecha9LabelIngresar = document.getElementById("paseo9Label");
        var fecha10LabelIngresar = document.getElementById("paseo10Label");
        var fecha11LabelIngresar = document.getElementById("paseo11Label");
        var fecha12LabelIngresar = document.getElementById("paseo12Label");
        var fecha13LabelIngresar = document.getElementById("paseo13Label");
        var fecha14LabelIngresar = document.getElementById("paseo14Label");
        var fecha15LabelIngresar = document.getElementById("paseo15Label");
        var fecha16LabelIngresar = document.getElementById("paseo16Label");
        var fecha17LabelIngresar = document.getElementById("paseo17Label");
        var fecha18LabelIngresar = document.getElementById("paseo18Label");
        var fecha19LabelIngresar = document.getElementById("paseo19Label");
        var fecha20LabelIngresar = document.getElementById("paseo20Label");
        var fecha21LabelIngresar = document.getElementById("paseo21Label");
        var fecha22LabelIngresar = document.getElementById("paseo22Label");
        var fecha23LabelIngresar = document.getElementById("paseo23Label");
        var fecha24LabelIngresar = document.getElementById("paseo24Label");
        var fecha25LabelIngresar = document.getElementById("paseo25Label");
        var fecha26LabelIngresar = document.getElementById("paseo26Label");
        var fecha27LabelIngresar = document.getElementById("paseo27Label");
        var fecha28LabelIngresar = document.getElementById("paseo28Label");
        var fecha29LabelIngresar = document.getElementById("paseo29Label");
        var fecha30LabelIngresar = document.getElementById("paseo30Label");

        botonCancelarAsignarPaseador.style.display = "block";
        botonGuardarAsignarPaseador.style.display = "block";

        if (dias == 1) {

            fecha1Ingresar.style.display = "block";
            fecha1LabelIngresar.style.display = "block";

        } else if (dias == 2) {

            fecha1Ingresar.style.display = "block";
            fecha2Ingresar.style.display = "block";

            fecha1LabelIngresar.style.display = "block";
            fecha2LabelIngresar.style.display = "block";

        } else if (dias == 3) {

            fecha1Ingresar.style.display = "block";
            fecha2Ingresar.style.display = "block";
            fecha3Ingresar.style.display = "block";

            fecha1LabelIngresar.style.display = "block";
            fecha2LabelIngresar.style.display = "block";
            fecha3LabelIngresar.style.display = "block";
        } else if (dias == 5) {

            fecha1Ingresar.style.display = "block";
            fecha2Ingresar.style.display = "block";
            fecha3Ingresar.style.display = "block";
            fecha4Ingresar.style.display = "block";
            fecha5Ingresar.style.display = "block";

            fecha1LabelIngresar.style.display = "block";
            fecha2LabelIngresar.style.display = "block";
            fecha3LabelIngresar.style.display = "block";
            fecha4LabelIngresar.style.display = "block";
            fecha5LabelIngresar.style.display = "block";

        } else if (dias == 10) {

            fecha1Ingresar.style.display = "block";
            fecha2Ingresar.style.display = "block";
            fecha3Ingresar.style.display = "block";
            fecha4Ingresar.style.display = "block";
            fecha5Ingresar.style.display = "block";
            fecha6Ingresar.style.display = "block";
            fecha7Ingresar.style.display = "block";
            fecha8Ingresar.style.display = "block";
            fecha9Ingresar.style.display = "block";
            fecha10Ingresar.style.display = "block";

            fecha1LabelIngresar.style.display = "block";
            fecha2LabelIngresar.style.display = "block";
            fecha3LabelIngresar.style.display = "block";
            fecha4LabelIngresar.style.display = "block";
            fecha5LabelIngresar.style.display = "block";
            fecha6LabelIngresar.style.display = "block";
            fecha7LabelIngresar.style.display = "block";
            fecha8LabelIngresar.style.display = "block";
            fecha9LabelIngresar.style.display = "block";
            fecha10LabelIngresar.style.display = "block";

        } else if (dias == 30) {

            fecha1Ingresar.style.display = "block";
            fecha2Ingresar.style.display = "block";
            fecha3Ingresar.style.display = "block";
            fecha4Ingresar.style.display = "block";
            fecha5Ingresar.style.display = "block";
            fecha6Ingresar.style.display = "block";
            fecha7Ingresar.style.display = "block";
            fecha8Ingresar.style.display = "block";
            fecha9Ingresar.style.display = "block";
            fecha10Ingresar.style.display = "block";
            fecha11Ingresar.style.display = "block";
            fecha12Ingresar.style.display = "block";
            fecha13Ingresar.style.display = "block";
            fecha14Ingresar.style.display = "block";
            fecha15Ingresar.style.display = "block";
            fecha16Ingresar.style.display = "block";
            fecha17Ingresar.style.display = "block";
            fecha18Ingresar.style.display = "block";
            fecha19Ingresar.style.display = "block";
            fecha20Ingresar.style.display = "block";
            fecha21Ingresar.style.display = "block";
            fecha22Ingresar.style.display = "block";
            fecha23Ingresar.style.display = "block";
            fecha24Ingresar.style.display = "block";
            fecha25Ingresar.style.display = "block";
            fecha26Ingresar.style.display = "block";
            fecha27Ingresar.style.display = "block";
            fecha28Ingresar.style.display = "block";
            fecha29Ingresar.style.display = "block";
            fecha30Ingresar.style.display = "block";


            fecha1LabelIngresar.style.display = "block";
            fecha2LabelIngresar.style.display = "block";
            fecha3LabelIngresar.style.display = "block";
            fecha4LabelIngresar.style.display = "block";
            fecha5LabelIngresar.style.display = "block";
            fecha6LabelIngresar.style.display = "block";
            fecha7LabelIngresar.style.display = "block";
            fecha8LabelIngresar.style.display = "block";
            fecha9LabelIngresar.style.display = "block";
            fecha10LabelIngresar.style.display = "block";
            fecha11LabelIngresar.style.display = "block";
            fecha12LabelIngresar.style.display = "block";
            fecha13LabelIngresar.style.display = "block";
            fecha14LabelIngresar.style.display = "block";
            fecha15LabelIngresar.style.display = "block";
            fecha16LabelIngresar.style.display = "block";
            fecha17LabelIngresar.style.display = "block";
            fecha18LabelIngresar.style.display = "block";
            fecha19LabelIngresar.style.display = "block";
            fecha20LabelIngresar.style.display = "block";
            fecha21LabelIngresar.style.display = "block";
            fecha22LabelIngresar.style.display = "block";
            fecha23LabelIngresar.style.display = "block";
            fecha24LabelIngresar.style.display = "block";
            fecha25LabelIngresar.style.display = "block";
            fecha26LabelIngresar.style.display = "block";
            fecha27LabelIngresar.style.display = "block";
            fecha28LabelIngresar.style.display = "block";
            fecha29LabelIngresar.style.display = "block";
            fecha30LabelIngresar.style.display = "block";

        }
        // Si diasEleccion es un número, booleano, etc.
        var diasEleccionString = diasEleccion.toString();
        console.log(typeof diasEleccionString)
        // recordar cambiar nombre de funtion
        var array = formatearFecha(diasEleccionString);
        var fecha = diasEleccionString.split(" ");
        console.log('sss')
        console.log(array);
        console.log(fecha);


        var mesenviar;
        for (var io = 0; io < dias; io++) {

            // Divide la fecha en partes y almacena en un array nuevo
            var fecha1 = array[io].split(" ").map(componente => componente.trim());
            console.log(fecha1[8]);
            var mes = ""

            // Condicionales para comparar el tercer elemento del arreglo, el cual es el mes
            if (fecha1[3] == "enero") {
                mes = "1";
                mesenviar = "0";
            } else if (fecha1[3] == "febrero") {
                mes = "2";
                mesenviar = "1";
            } else if (fecha1[3] == "marzo") {
                mes = "3";
                mesenviar = "2";
            } else if (fecha1[3] == "abril") {
                mes = "4";
                mesenviar = "3";
            } else if (fecha1[3] == "mayo") {
                mes = "5";
                mesenviar = "4";
            } else if (fecha1[3] == "junio") {
                mes = "6";
                mesenviar = "5";
            } else if (fecha1[3] == "julio") {
                mes = "7";
                mesenviar = "6";
            } else if (fecha1[3] == "agosto") {
                mes = "8";
                mesenviar = "7";
            } else if (fecha1[3] == "septiembre") {
                mes = "9";
                mesenviar = "8";
            } else if (fecha1[3] == "octubre") {
                mes = "10";
                mesenviar = "9";
            } else if (fecha1[3] == "noviembre") {
                mes = "11";
                mesenviar = "10";
            } else if (fecha1[3] == "diciembre") {
                mes = "12";
                mesenviar = "11";
            }

            // Construye una cadena de fecha en un formato específico con los elementos de fecha1
            var fechaDefinitiva = fecha1[5] + "-" + mes + "-" + fecha1[1] + "T" + fecha1[8] + ":00";
            var fechatimestamp = fecha1[8].split(":");

            console.log(fechaDefinitiva);
            console.log(fechatimestamp);


            console.log(fecha1[5], mesenviar, fecha1[1], fechatimestamp[0], fechatimestamp[1], '00');

            //Convierte la cadena de fecha en un objeto Date y obtiene su valor de tiempo (timestamp) que se utiliza más adelante.
            var datum = new Date(fecha1[5], mesenviar, fecha1[1], fechatimestamp[0], fechatimestamp[1], '00');
            console.log(datum);
            var datumFirebase = datum.getTime();
            console.log(datumFirebase);


            if (io == 0) {
                console.log(array[io]);
                fecha1LabelIngresar.innerHTML = "Paseo 1 " + array[io]
                timestamp1 = datumFirebase
                fechaDefinitiva1 = fechaDefinitiva

            } else if (io == 1) {

                fecha2LabelIngresar.innerHTML = "Paseo 2 " + array[io]
                timestamp2 = datumFirebase
                fechaDefinitiva2 = fechaDefinitiva

            } else if (io == 2) {

                fecha3LabelIngresar.innerHTML = "Paseo 3 " + array[io]
                timestamp3 = datumFirebase
                fechaDefinitiva3 = fechaDefinitiva

            } else if (io == 3) {

                fecha4LabelIngresar.innerHTML = "Paseo 4 " + array[io]
                timestamp4 = datumFirebase
                fechaDefinitiva4 = fechaDefinitiva

            } else if (io == 4) {

                fecha5LabelIngresar.innerHTML = "Paseo 5 " + array[io]
                timestamp5 = datumFirebase
                fechaDefinitiva5 = fechaDefinitiva

            } else if (io == 5) {

                fecha6LabelIngresar.innerHTML = "Paseo 6 " + array[io]
                timestamp6 = datumFirebase
                fechaDefinitiva6 = fechaDefinitiva

            } else if (io == 6) {

                fecha7LabelIngresar.innerHTML = "Paseo 7 " + array[io]
                timestamp7 = datumFirebase
                fechaDefinitiva7 = fechaDefinitiva

            } else if (io == 7) {

                fecha8LabelIngresar.innerHTML = "Paseo 8 " + array[io]
                timestamp8 = datumFirebase
                fechaDefinitiva8 = fechaDefinitiva

            } else if (io == 8) {

                fecha9LabelIngresar.innerHTML = "Paseo 9 " + array[io]
                timestamp9 = datumFirebase
                fechaDefinitiva9 = fechaDefinitiva

            } else if (io == 9) {

                fecha10LabelIngresar.innerHTML = "Paseo 10 " + array[io]
                timestamp10 = datumFirebase
                fechaDefinitiva10 = fechaDefinitiva

            } if (io == 10) {

                fecha11LabelIngresar.innerHTML = "Paseo 11 " + array[io]
                timestamp11 = datumFirebase
                fechaDefinitiva11 = fechaDefinitiva

            } else if (io == 11) {

                fecha12LabelIngresar.innerHTML = "Paseo 12 " + array[io]
                timestamp12 = datumFirebase
                fechaDefinitiva12 = fechaDefinitiva

            } else if (io == 12) {

                fecha13LabelIngresar.innerHTML = "Paseo 13 " + array[io]
                timestamp13 = datumFirebase
                fechaDefinitiva13 = fechaDefinitiva

            } else if (io == 13) {

                fecha14LabelIngresar.innerHTML = "Paseo 14 " + array[io]
                timestamp14 = datumFirebase
                fechaDefinitiva14 = fechaDefinitiva

            } else if (io == 14) {

                fecha15LabelIngresar.innerHTML = "Paseo 15 " + array[io]
                timestamp15 = datumFirebase
                fechaDefinitiva15 = fechaDefinitiva

            } else if (io == 15) {

                fecha16LabelIngresar.innerHTML = "Paseo 16 " + array[io]
                timestamp16 = datumFirebase
                fechaDefinitiva16 = fechaDefinitiva

            } else if (io == 16) {

                fecha17LabelIngresar.innerHTML = "Paseo 17 " + array[io]
                timestamp17 = datumFirebase
                fechaDefinitiva17 = fechaDefinitiva

            } else if (io == 17) {

                fecha18LabelIngresar.innerHTML = "Paseo 18 " + array[io]
                timestamp18 = datumFirebase
                fechaDefinitiva18 = fechaDefinitiva

            } else if (io == 18) {

                fecha19LabelIngresar.innerHTML = "Paseo 19 " + array[io]
                timestamp19 = datumFirebase
                fechaDefinitiva19 = fechaDefinitiva

            } else if (io == 19) {

                fecha20LabelIngresar.innerHTML = "Paseo 20 " + array[io]
                timestamp20 = datumFirebase
                fechaDefinitiva20 = fechaDefinitiva

            } if (io == 20) {

                fecha21LabelIngresar.innerHTML = "Paseo 21 " + array[io]
                timestamp21 = datumFirebase
                fechaDefinitiva21 = fechaDefinitiva

            } else if (io == 21) {

                fecha22LabelIngresar.innerHTML = "Paseo 22 " + array[io]
                timestamp22 = datumFirebase
                fechaDefinitiva22 = fechaDefinitiva

            } else if (io == 22) {

                fecha23LabelIngresar.innerHTML = "Paseo 23 " + array[io]
                timestamp23 = datumFirebase
                fechaDefinitiva23 = fechaDefinitiva

            } else if (io == 23) {

                fecha24LabelIngresar.innerHTML = "Paseo 24 " + array[io]
                timestamp24 = datumFirebase
                fechaDefinitiva24 = fechaDefinitiva

            } else if (io == 24) {

                fecha25LabelIngresar.innerHTML = "Paseo 25 " + array[io]
                timestamp25 = datumFirebase
                fechaDefinitiva25 = fechaDefinitiva

            } else if (io == 25) {

                fecha26LabelIngresar.innerHTML = "Paseo 26 " + array[io]
                timestamp26 = datumFirebase
                fechaDefinitiva26 = fechaDefinitiva

            } else if (io == 26) {

                fecha27LabelIngresar.innerHTML = "Paseo 27 " + array[io]
                timestamp27 = datumFirebase
                fechaDefinitiva27 = fechaDefinitiva

            } else if (io == 27) {

                fecha28LabelIngresar.innerHTML = "Paseo 28 " + array[io]
                timestamp28 = datumFirebase
                fechaDefinitiva28 = fechaDefinitiva

            } else if (io == 28) {

                fecha29LabelIngresar.innerHTML = "Paseo 29 " + array[io]
                timestamp29 = datumFirebase
                fechaDefinitiva29 = fechaDefinitiva

            } else if (io == 29) {

                fecha30LabelIngresar.innerHTML = "Paseo 30 " + array[io]
                timestamp30 = datumFirebase
                fechaDefinitiva30 = fechaDefinitiva

            }

        }
    }




}

// Función para procesar y formatear fechas a partir de timestamps o fechas de texto
function formatearFecha(entrada) {
    // Dividir la cadena de entrada en un array de valores
    const valores = entrada.split(',');

    // Crear un array para almacenar las fechas formateadas
    const fechasFormateadas = [];

    // Determinar si el primer valor es un número o un texto
    const esTimestamp = !isNaN(parseInt(valores[0].trim()));

    // Si es un timestamp, convertimos todos a Date y formateamos
    if (esTimestamp) {
        valores.forEach((valor) => {
            const timestamp = parseInt(valor.trim());
            const fecha = new Date(timestamp);
            const opcionesFecha = {
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            };
            let fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
            fechaFormateada = fechaFormateada.replace(/, (\d{1,2}:\d{2})$/, ' a las $1');
            fechasFormateadas.push(fechaFormateada);
        });
    } else {
        // Si es un texto, asumimos que tiene un formato como "miércoles 30 abril 2025 a las 15:04"
        valores.forEach((texto) => {
            const regex = /(\w+) (\d{1,2}) (\w+) (\d{4}) a las (\d{1,2}:\d{2})/;
            const match = texto.trim().match(regex);

            if (match) {
                const [_, diaSemana, dia, mes, anio, hora] = match;
                const meses = {
                    enero: 0,
                    febrero: 1,
                    marzo: 2,
                    abril: 3,
                    mayo: 4,
                    junio: 5,
                    julio: 6,
                    agosto: 7,
                    septiembre: 8,
                    octubre: 9,
                    noviembre: 10,
                    diciembre: 11,
                };
                const fecha = new Date(parseInt(anio), meses[mes.toLowerCase()], parseInt(dia), ...hora.split(':'));

                const opcionesFecha = {
                    weekday: 'long',
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                };
                let fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
                fechaFormateada = fechaFormateada.replace(/, (\d{1,2}:\d{2})$/, ' a las $1');

                fechasFormateadas.push(fechaFormateada);
            } else {
                console.error(`Error: Formato de fecha "${texto.trim()}" no es válido.`);
            }
        });
    }

    // Devolver un objeto con las fechas formateadas
    return fechasFormateadas;
}


// Funcion para cambiar de categoria
function cambiarCategoria(order_id, categoria) {
    $('#modalPerros').modal('show');
    console.log(order_id);
    console.log(categoria);
    document.getElementById("oID").value = order_id;
    document.getElementById("cID").value = categoria;

    var txt;

}

function guardarCat() {
    const order = document.getElementById("oID").value;
    const cat = document.getElementById("cID").value;
    console.log(order);
    console.log(cat);
    var opcionCat = $("#ddlcolors option:selected").val();
    console.log(opcionCat)

    Swal.fire({
        title: '¿Está seguro de cambiar la categoria de este paseo?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo cambiar'
    }).then((result) => {
        if (result.isConfirmed) {
            cambiar();
            Swal.fire({
                title: 'Categoria Cambiada',
                icon: 'success'
        }).then(() => {
            location.reload(); // Recarga la página
        });
        }
    });

    function cambiar(){
        if (opcionCat == "b" || opcionCat == "s" || opcionCat == "r" || opcionCat == "v") {
        console.log('exito')

        // Entrada a firebase y referencia a la ruta
        var db = firebase.database();
        var agendados = db.ref("Agendados").child(order);

        // Genera una clave unica para un nuevo registro
        var key = db.ref("cambios_ordenes").push().getKey();
        console.log(key);
        var agendadosModificaciones = db.ref("cambios_ordenes");
        var currentUID = firebase.auth().currentUser.uid;

        var nuevaCategoria

        if (opcionCat == "b") {
            nuevaCategoria = "basico"
        } else if (opcionCat == "s") {
            nuevaCategoria = "sport"
        } else if (opcionCat == "r") {
            nuevaCategoria = "rukys"
        } else if (opcionCat == "v") {
            nuevaCategoria = "vip"
        }

        console.log(nuevaCategoria);

        //Actualiza la categoria del paseo
        agendados.update({

            categoria: nuevaCategoria,

        }).then(function () {  // Si la actualización se realizo con exito
            // Se realiza la operacion de actualizacion en el nodo "cambios_ordenes"
            agendadosModificaciones.child(key).update({

                id_orden: order,
                uid: currentUID,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                cambio: "cat",
                inicial: cat,
                final: nuevaCategoria

            })
            //alert("La categoria se ha cambiado exitosamente");
            busca_paseos(); // Llamada a la funcion

        }).catch(function (error) {
            console.log("Ocurrio un error");
        });
    } else {
        alert("La letra introducida es incorrecta");
    }
    }


    
}



function cambiarFechas(order_id, diasEleccion, dias) {

    // Declaración de variables
    diasActual = dias
    orderActual = order_id
    diasEleccionActual = diasEleccion

    $("#tablaAgendaa").hide();

    var botonCancelar = document.getElementById("cancelar");
    var botonGuardar = document.getElementById("guardar");

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

    botonCancelar.style.display = "block";
    botonGuardar.style.display = "block";


    if (dias == 1) {

        fecha1.style.display = "flex";
        fecha1Label.style.display = "flex";

    } else if (dias == 2) {

        fecha1.style.display = "flex";
        fecha2.style.display = "flex";

        fecha1Label.style.display = "flex";
        fecha2Label.style.display = "flex";

    } else if (dias == 3) {

        fecha1.style.display = "flex";
        fecha2.style.display = "flex";
        fecha3.style.display = "flex";

        fecha1Label.style.display = "flex";
        fecha2Label.style.display = "flex";
        fecha3Label.style.display = "flex";

    } else if (dias == 5) {

        fecha1.style.display = "flex";
        fecha2.style.display = "flex";
        fecha3.style.display = "flex";
        fecha4.style.display = "flex";
        fecha5.style.display = "flex";

        fecha1Label.style.display = "flex";
        fecha2Label.style.display = "flex";
        fecha3Label.style.display = "flex";
        fecha4Label.style.display = "flex";
        fecha5Label.style.display = "flex";

    } else if (dias == 10) {

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

        fecha1Label.style.display = "flex";
        fecha2Label.style.display = "flex";
        fecha3Label.style.display = "flex";
        fecha4Label.style.display = "flex";
        fecha5Label.style.display = "flex";
        fecha6Label.style.display = "flex";
        fecha7Label.style.display = "flex";
        fecha8Label.style.display = "flex";
        fecha9Label.style.display = "flex";
        fecha10Label.style.display = "flex";

    } else if (dias == 30) {

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

        fecha1Label.style.display = "flex";
        fecha2Label.style.display = "flex";
        fecha3Label.style.display = "flex";
        fecha4Label.style.display = "flex";
        fecha5Label.style.display = "flex";
        fecha6Label.style.display = "flex";
        fecha7Label.style.display = "flex";
        fecha8Label.style.display = "flex";
        fecha9Label.style.display = "flex";
        fecha10Label.style.display = "flex";
        fecha11Label.style.display = "flex";
        fecha12Label.style.display = "flex";
        fecha13Label.style.display = "flex";
        fecha14Label.style.display = "flex";
        fecha15Label.style.display = "flex";
        fecha16Label.style.display = "flex";
        fecha17Label.style.display = "flex";
        fecha18Label.style.display = "flex";
        fecha19Label.style.display = "flex";
        fecha20Label.style.display = "flex";
        fecha21Label.style.display = "flex";
        fecha22Label.style.display = "flex";
        fecha23Label.style.display = "flex";
        fecha24Label.style.display = "flex";
        fecha25Label.style.display = "flex";
        fecha26Label.style.display = "flex";
        fecha27Label.style.display = "flex";
        fecha28Label.style.display = "flex";
        fecha29Label.style.display = "flex";
        fecha30Label.style.display = "flex";
    }


    var array = diasEleccion.split(",");
    var fecha = diasEleccion.split(" ");

    console.log("cantidad array", array.length);

    // Itera sobre dias y asigna los valores a mes y mesenviar
    for (var io = 0; io < dias; io++) {

        // Divide la fecha en partes y almacena en un array nuevo
        var fecha1 = array[io].split(" ");
        var mes = ""

        // Condicionales para comparar el tercer elemento del arreglo, el cual es el mes
        if (fecha1[2] == "enero") {
            mes = "1";
            mesenviar = "0";
        } else if (fecha1[2] == "febrero") {
            mes = "2";
            mesenviar = "1";
        } else if (fecha1[2] == "marzo") {
            mes = "3";
            mesenviar = "2";
        } else if (fecha1[2] == "abril") {
            mes = "4";
            mesenviar = "3";
        } else if (fecha1[2] == "mayo") {
            mes = "5";
            mesenviar = "4";
        } else if (fecha1[2] == "junio") {
            mes = "6";
            mesenviar = "5";
        } else if (fecha1[2] == "julio") {
            mes = "7";
            mesenviar = "6";
        } else if (fecha1[2] == "agosto") {
            mes = "8";
            mesenviar = "7";
        } else if (fecha1[2] == "septiembre") {
            mes = "9";
            mesenviar = "8";
        } else if (fecha1[2] == "octubre") {
            mes = "10";
            mesenviar = "9";
        } else if (fecha1[2] == "noviembre") {
            mes = "11";
            mesenviar = "10";
        } else if (fecha1[2] == "diciembre") {
            mes = "12";
            mesenviar = "11";
        }

        // Construye una cadena de fecha en un formato específico con los elementos de fecha1
        var fechaDefinitiva = fecha1[3] + "-" + mes + "-" + fecha1[1] + "T" + fecha1[6] + ":00";
        console.log(fechaDefinitiva)
        var fechatimestamp = fecha1[6].split(":");

        console.log(fecha1[3], mesenviar, fecha1[1], fechatimestamp[0], fechatimestamp[1], '00');

        //Convierte la cadena de fecha en un objeto Date y obtiene su valor de tiempo (timestamp) que se utiliza más adelante.
        var datum = new Date(fecha1[3], mesenviar, fecha1[1], fechatimestamp[0], fechatimestamp[1], '00');
        var datumFirebase = datum.getTime();

        console.log(io)
        console.log(datumFirebase);

        // actualizar el valor de fechas en elementos de la interfaz de usuario
        if (io == 0) {

            console.log("aqui entra a la fecha 1 " + datumFirebase)

            $('#datetimepicker1').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 1) {

            $('#datetimepicker2').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 2) {

            $('#datetimepicker3').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 3) {

            $('#datetimepicker4').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 4) {

            $('#datetimepicker5').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 5) {

            $('#datetimepicker6').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 6) {

            $('#datetimepicker7').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 7) {

            $('#datetimepicker8').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 8) {

            $('#datetimepicker9').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 9) {

            $('#datetimepicker10').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 10) {

            $('#datetimepicker11').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 11) {

            $('#datetimepicker12').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 12) {

            $('#datetimepicker13').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 13) {

            $('#datetimepicker14').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 14) {

            $('#datetimepicker15').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 15) {

            $('#datetimepicker16').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 16) {

            $('#datetimepicker17').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 17) {

            $('#datetimepicker18').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 18) {

            $('#datetimepicker19').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 19) {

            $('#datetimepicker20').data("DateTimePicker").date(new Date(datumFirebase));

        } if (io == 20) {

            $('#datetimepicker21').data("DateTimePicker").date(new Date(datumFirebase));


        } else if (io == 21) {

            $('#datetimepicker22').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 22) {

            $('#datetimepicker23').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 23) {

            $('#datetimepicker24').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 24) {

            $('#datetimepicker25').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 25) {

            $('#datetimepicker26').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 26) {

            $('#datetimepicker27').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 27) {

            $('#datetimepicker28').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 28) {

            $('#datetimepicker29').data("DateTimePicker").date(new Date(datumFirebase));

        } else if (io == 29) {

            $('#datetimepicker30').data("DateTimePicker").date(new Date(datumFirebase));

        }

    }

}

// Cancelar
function cancelar() {

    busca_paseos();
    
}

function guardar() {

    $('#carga2').show();

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

    // Condicionales para formatear la variable de fehcas
    if (diasActual == 1) {

        // Divide la fecha y hora con delimitadores de , y espacio
        var res = fecha1.split(",");
        var resHora = res[3].split(" ");

        // Asigna el nuevo formateo
        fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2];
        console.log(fechas)

        fechasConvertidas = convertirFechasATimestamps(fechas);
        fechasConvertidasString = fechasConvertidas.join(", ");
        console.log(fechasConvertidas);

        //console.log(timestampConvert);

    } else if (diasActual == 2) {

        // Divide la fecha y hora con delimitadores de , y espacio
        var res = fecha1.split(",");
        var resHora = res[3].split(" ");

        var res2 = fecha2.split(",");
        var res2Hora = res2[3].split(" ");

        // Asigna el nuevo formateo
        fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] + ", " + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2];
        console.log(fechas)

        fechasConvertidas = convertirFechasATimestamps(fechas);
        fechasConvertidasString = fechasConvertidas.join(", ");
        console.log(fechasConvertidas);

    } else if (diasActual == 3) {

        // Divide la fecha y hora con delimitadores de , y espacio
        var res = fecha1.split(",");
        var resHora = res[3].split(" ");

        var res2 = fecha2.split(",");
        var res2Hora = res2[3].split(" ");

        var res3 = fecha3.split(",");
        var res3Hora = res3[3].split(" ");

        // Asigna el nuevo formateo
        fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
            ", " + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
            ", " + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2];
        console.log(fechas)

        fechasConvertidas = convertirFechasATimestamps(fechas);
        fechasConvertidasString = fechasConvertidas.join(", ");
        console.log(fechasConvertidas);


    } else if (diasActual == 5) {

        // Divide la fecha y hora con delimitadores de , y espacio
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

        // Asigna el nuevo formateo
        fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
            ", " + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
            ", " + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2] +
            ", " + res4[0] + " " + res4[1] + " " + res4[2] + " " + res4Hora[1] + " a las " + res4Hora[2] +
            ", " + res5[0] + " " + res5[1] + " " + res5[2] + " " + res5Hora[1] + " a las " + res5Hora[2];
        console.log(fechas)

        fechasConvertidas = convertirFechasATimestamps(fechas);
        fechasConvertidasString = fechasConvertidas.join(", ");
        console.log(fechasConvertidas);

    } else if (diasActual == 10) {

        // Divide la fecha y hora con delimitadores de , y espacio
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

        // Asigna el nuevo formateo
        fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
            ", " + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
            ", " + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2] +
            ", " + res4[0] + " " + res4[1] + " " + res4[2] + " " + res4Hora[1] + " a las " + res4Hora[2] +
            ", " + res5[0] + " " + res5[1] + " " + res5[2] + " " + res5Hora[1] + " a las " + res5Hora[2] +
            ", " + res6[0] + " " + res6[1] + " " + res6[2] + " " + res6Hora[1] + " a las " + res6Hora[2] +
            ", " + res7[0] + " " + res7[1] + " " + res7[2] + " " + res7Hora[1] + " a las " + res7Hora[2] +
            ", " + res8[0] + " " + res8[1] + " " + res8[2] + " " + res8Hora[1] + " a las " + res8Hora[2] +
            ", " + res9[0] + " " + res9[1] + " " + res9[2] + " " + res9Hora[1] + " a las " + res9Hora[2] +
            ", " + res10[0] + " " + res10[1] + " " + res10[2] + " " + res10Hora[1] + " a las " + res10Hora[2];

        console.log(fechas)

        fechasConvertidas = convertirFechasATimestamps(fechas);
        fechasConvertidasString = fechasConvertidas.join(", ");
        console.log(fechasConvertidas);

    } else if (diasActual == 30) {

        // Divide la fecha y hora con delimitadores de , y espacio
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

        // Asigna el nuevo formateo
        fechas = res[0] + " " + res[1] + " " + res[2] + " " + resHora[1] + " a las " + resHora[2] +
            ", " + res2[0] + " " + res2[1] + " " + res2[2] + " " + res2Hora[1] + " a las " + res2Hora[2] +
            ", " + res3[0] + " " + res3[1] + " " + res3[2] + " " + res3Hora[1] + " a las " + res3Hora[2] +
            ", " + res4[0] + " " + res4[1] + " " + res4[2] + " " + res4Hora[1] + " a las " + res4Hora[2] +
            ", " + res5[0] + " " + res5[1] + " " + res5[2] + " " + res5Hora[1] + " a las " + res5Hora[2] +
            ", " + res6[0] + " " + res6[1] + " " + res6[2] + " " + res6Hora[1] + " a las " + res6Hora[2] +
            ", " + res7[0] + " " + res7[1] + " " + res7[2] + " " + res7Hora[1] + " a las " + res7Hora[2] +
            ", " + res8[0] + " " + res8[1] + " " + res8[2] + " " + res8Hora[1] + " a las " + res8Hora[2] +
            ", " + res9[0] + " " + res9[1] + " " + res9[2] + " " + res9Hora[1] + " a las " + res9Hora[2] +
            ", " + res10[0] + " " + res10[1] + " " + res10[2] + " " + res10Hora[1] + " a las " + res10Hora[2] +
            ", " + res11[0] + " " + res11[1] + " " + res11[2] + " " + res11Hora[1] + " a las " + res11Hora[2] +
            ", " + res12[0] + " " + res12[1] + " " + res12[2] + " " + res12Hora[1] + " a las " + res12Hora[2] +
            ", " + res13[0] + " " + res13[1] + " " + res13[2] + " " + res13Hora[1] + " a las " + res13Hora[2] +
            ", " + res14[0] + " " + res14[1] + " " + res14[2] + " " + res14Hora[1] + " a las " + res14Hora[2] +
            ", " + res15[0] + " " + res15[1] + " " + res15[2] + " " + res15Hora[1] + " a las " + res15Hora[2] +
            ", " + res16[0] + " " + res16[1] + " " + res16[2] + " " + res16Hora[1] + " a las " + res16Hora[2] +
            ", " + res17[0] + " " + res17[1] + " " + res17[2] + " " + res17Hora[1] + " a las " + res17Hora[2] +
            ", " + res18[0] + " " + res18[1] + " " + res18[2] + " " + res18Hora[1] + " a las " + res18Hora[2] +
            ", " + res19[0] + " " + res19[1] + " " + res19[2] + " " + res19Hora[1] + " a las " + res19Hora[2] +
            ", " + res20[0] + " " + res20[1] + " " + res20[2] + " " + res20Hora[1] + " a las " + res20Hora[2] +
            ", " + res21[0] + " " + res21[1] + " " + res21[2] + " " + res21Hora[1] + " a las " + res21Hora[2] +
            ", " + res22[0] + " " + res22[1] + " " + res22[2] + " " + res22Hora[1] + " a las " + res22Hora[2] +
            ", " + res23[0] + " " + res23[1] + " " + res23[2] + " " + res23Hora[1] + " a las " + res23Hora[2] +
            ", " + res24[0] + " " + res24[1] + " " + res24[2] + " " + res24Hora[1] + " a las " + res24Hora[2] +
            ", " + res25[0] + " " + res25[1] + " " + res25[2] + " " + res25Hora[1] + " a las " + res25Hora[2] +
            ", " + res26[0] + " " + res26[1] + " " + res26[2] + " " + res26Hora[1] + " a las " + res26Hora[2] +
            ", " + res27[0] + " " + res27[1] + " " + res27[2] + " " + res27Hora[1] + " a las " + res27Hora[2] +
            ", " + res28[0] + " " + res28[1] + " " + res28[2] + " " + res28Hora[1] + " a las " + res28Hora[2] +
            ", " + res29[0] + " " + res29[1] + " " + res29[2] + " " + res29Hora[1] + " a las " + res29Hora[2] +
            ", " + res30[0] + " " + res30[1] + " " + res30[2] + " " + res30Hora[1] + " a las " + res30Hora[2];

        console.log(fechas);

        fechasConvertidas = convertirFechasATimestamps(fechas);
        fechasConvertidasString = fechasConvertidas.join(", ");
        console.log(fechasConvertidas);

    }

    Swal.fire({
        title: '¿Está seguro de cambiar las fechas?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo cambiar'
    }).then((result) => {
        if (result.isConfirmed) {
            cambiarFechasFinal();
            Swal.fire({
                title: 'Fechas cambiada',
                icon: 'success'
        }).then(() => {
            location.reload(); // Recarga la página
        });
        }
    });

    function cambiarFechasFinal(){
    // Variables para ingresar a firebase y entrar a la referencia "Agendados"
    var db = firebase.database();
    var agendados = db.ref("Agendados").child(orderActual);

    // Genera una clave unica para un nuevo registro
    var key = db.ref("cambios_ordenes").push().getKey();
    var agendadosModificaciones = db.ref("cambios_ordenes");
    var currentUID = firebase.auth().currentUser.uid;

    // Actualiza los dias de eleccion 
    agendados.update({

        diasEleccion: fechasConvertidasString,

    }).then(function () { // Si la actualizacion es correcta        

        // Se realiza la operacion de actualizacion en el nodo "cambios_ordenes"
        agendadosModificaciones.child(key).update({

            id_orden: orderActual,
            uid: currentUID,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            cambio: "fecha total",
            inicial: diasEleccionActual,
            final: fechas

        })
        
    }).catch(function (error) {
       
        console.log("Ocurrio un error")
    });
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

// Funcion para cancelar operaciones como guardar, actualizar y/o asignar
function cancelarAsignarPaseador() {
    busca_paseos();
}

// Funcion para guardar y asignar paseadores 
function guardarAsignarPaseador() {

    //Arreglo para almacenar los paseador
    var paseadores = [];

    var paseador1 = document.getElementById("paseo1").value.replace(/\s+/g, '')
    var paseador2 = document.getElementById("paseo2").value.replace(/\s+/g, '')
    var paseador3 = document.getElementById("paseo3").value.replace(/\s+/g, '')
    var paseador4 = document.getElementById("paseo4").value.replace(/\s+/g, '')
    var paseador5 = document.getElementById("paseo5").value.replace(/\s+/g, '')
    var paseador6 = document.getElementById("paseo6").value.replace(/\s+/g, '')
    var paseador7 = document.getElementById("paseo7").value.replace(/\s+/g, '')
    var paseador8 = document.getElementById("paseo8").value.replace(/\s+/g, '')
    var paseador9 = document.getElementById("paseo9").value.replace(/\s+/g, '')
    var paseador10 = document.getElementById("paseo10").value.replace(/\s+/g, '')
    var paseador11 = document.getElementById("paseo11").value.replace(/\s+/g, '')
    var paseador12 = document.getElementById("paseo12").value.replace(/\s+/g, '')
    var paseador13 = document.getElementById("paseo13").value.replace(/\s+/g, '')
    var paseador14 = document.getElementById("paseo14").value.replace(/\s+/g, '')
    var paseador15 = document.getElementById("paseo15").value.replace(/\s+/g, '')
    var paseador16 = document.getElementById("paseo16").value.replace(/\s+/g, '')
    var paseador17 = document.getElementById("paseo17").value.replace(/\s+/g, '')
    var paseador18 = document.getElementById("paseo18").value.replace(/\s+/g, '')
    var paseador19 = document.getElementById("paseo19").value.replace(/\s+/g, '')
    var paseador20 = document.getElementById("paseo20").value.replace(/\s+/g, '')
    var paseador21 = document.getElementById("paseo21").value.replace(/\s+/g, '')
    var paseador22 = document.getElementById("paseo22").value.replace(/\s+/g, '')
    var paseador23 = document.getElementById("paseo23").value.replace(/\s+/g, '')
    var paseador24 = document.getElementById("paseo24").value.replace(/\s+/g, '')
    var paseador25 = document.getElementById("paseo25").value.replace(/\s+/g, '')
    var paseador26 = document.getElementById("paseo26").value.replace(/\s+/g, '')
    var paseador27 = document.getElementById("paseo27").value.replace(/\s+/g, '')
    var paseador28 = document.getElementById("paseo28").value.replace(/\s+/g, '')
    var paseador29 = document.getElementById("paseo29").value.replace(/\s+/g, '')
    var paseador30 = document.getElementById("paseo30").value.replace(/\s+/g, '')

    // Se verifica la cantidad de días para asignar paseadores
    if (diasAsignarPaseadorActual == 1) {
        // Se verifica que el paseador no esté vacío
        if (paseador1 == "") {

            Swal.fire({
                title: 'Error',
                text: 'Debes asignar todos los paseadores',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else {
            // Si no esta vacio, agrega el paseador al arreglo
            paseadores.push(paseador1.replace(/\s+/g, ''));

        }

    } else if (diasAsignarPaseadorActual == 2) {

        if (paseador1 == "" || paseador2 == "") {

            Swal.fire({
                title: 'Error',
                text: 'Debes asignar todos los paseadores',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else {

            paseadores.push(paseador1);
            paseadores.push(paseador2);

        }

    } else if (diasAsignarPaseadorActual == 3) {

        if (paseador1 == "" || paseador2 == "" || paseador3 == "") {

            Swal.fire({
                title: 'Error',
                text: 'Debes asignar todos los paseadores',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else {

            paseadores.push(paseador1);
            paseadores.push(paseador2);
            paseadores.push(paseador3);

        }

    } else if (diasAsignarPaseadorActual == 5) {

        if (paseador1 == "" || paseador2 == "" || paseador3 == "" || paseador4 == "" || paseador5 == "") {

            Swal.fire({
                title: 'Error',
                text: 'Debes asignar todos los paseadores',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else {

            paseadores.push(paseador1);
            paseadores.push(paseador2);
            paseadores.push(paseador3);
            paseadores.push(paseador4);
            paseadores.push(paseador5);

        }

    } else if (diasAsignarPaseadorActual == 10) {

        if (paseador1 == "" || paseador2 == "" || paseador3 == "" || paseador4 == "" || paseador5 == "" || paseador6 == "" || paseador7 == "" || paseador8 == "" || paseador9 == "" || paseador10 == "") {

            Swal.fire({
                title: 'Error',
                text: 'Debes asignar todos los paseadores',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else {

            paseadores.push(paseador1);
            paseadores.push(paseador2);
            paseadores.push(paseador3);
            paseadores.push(paseador4);
            paseadores.push(paseador5);
            paseadores.push(paseador6);
            paseadores.push(paseador7);
            paseadores.push(paseador8);
            paseadores.push(paseador9);
            paseadores.push(paseador10);

        }

    } else if (diasAsignarPaseadorActual == 30) {

        if (paseador1 == "" || paseador2 == "" || paseador3 == "" || paseador4 == "" || paseador5 == "" || paseador6 == "" || paseador7 == "" || paseador8 == "" || paseador9 == "" || paseador10 == "" || paseador11 == "" || paseador12 == "" || paseador13 == "" || paseador14 == "" || paseador15 == "" || paseador16 == "" || paseador17 == "" || paseador18 == "" || paseador19 == "" || paseador20 == "" || paseador21 == "" || paseador22 == "" || paseador23 == "" || paseador24 == "" || paseador25 == "" || paseador26 == "" || paseador27 == "" || paseador28 == "" || paseador29 == "" || paseador30 == "") {

            Swal.fire({
                title: 'Error',
                text: 'Debes asignar todos los paseadores',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else {

            paseadores.push(paseador1);
            paseadores.push(paseador2);
            paseadores.push(paseador3);
            paseadores.push(paseador4);
            paseadores.push(paseador5);
            paseadores.push(paseador6);
            paseadores.push(paseador7);
            paseadores.push(paseador8);
            paseadores.push(paseador9);
            paseadores.push(paseador10);

            paseadores.push(paseador11);
            paseadores.push(paseador12);
            paseadores.push(paseador13);
            paseadores.push(paseador14);
            paseadores.push(paseador15);
            paseadores.push(paseador16);
            paseadores.push(paseador17);
            paseadores.push(paseador18);
            paseadores.push(paseador19);
            paseadores.push(paseador20);

            paseadores.push(paseador21);
            paseadores.push(paseador22);
            paseadores.push(paseador23);
            paseadores.push(paseador24);
            paseadores.push(paseador25);
            paseadores.push(paseador26);
            paseadores.push(paseador27);
            paseadores.push(paseador28);
            paseadores.push(paseador29);
            paseadores.push(paseador30);

        }

    }

    // Filtra los paseadores para eliminar duplicados 
    let paseadoresSinRepetidos = paseadores.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);

    console.log(paseadoresSinRepetidos);

    // Llama a una función para comprobar o procesar los paseadores
    comprobarPaseadores(paseadoresSinRepetidos);
}

// Funcion que verifica la existencia de paseadores en la base de datos
function comprobarPaseadores(arregloPaseadores) {

    // Inicialización de variables
    var paseadorNoExiste = 0
    var numeroInteracciones = 0
    var paseadoresInvalidos = ""

    // Variables para referencia a FB y ruta en FB
    var db = firebase.database();
    var ref_comprobacion = db.ref("Paseadores");

    // Ciclo para recorrer la longitud del arreglo y verificar los paseadores
    for (var io = 0; io < arregloPaseadores.length; io++) {

        var ref_comPas = ref_comprobacion.child(arregloPaseadores[io]);

        console.log(arregloPaseadores[io]);

        ref_comPas.once("value", function (snapshot) {

            numeroInteracciones++

            if (snapshot.exists()) {

                d = snapshot.val();
                console.log('exists ' + d.idPaseador);

            } else {

                console.log("key " + snapshot.val())

                // alert("El paseador "+arregloPaseadores[io]+" no existe")
                paseadorNoExiste++
                paseadoresInvalidos += arregloPaseadores[io] + " "
            }

            console.log(numeroInteracciones)
            console.log(arregloPaseadores.length)

            if (numeroInteracciones == arregloPaseadores.length) {

                console.log("termina de verdad")
                console.log("paseadores que no existen " + paseadorNoExiste)

                if (paseadorNoExiste == 0) {

                    paseadoresUtilizados = arregloPaseadores
                    guardarPaseos(paseadoresUtilizados)

                } else {
                    
                    Swal.fire({
                        title: 'Error',
                        text: 'Se encontraron ' + paseadorNoExiste + ' paseadores incorrectos, verifique e intente nuevamente',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });

                }
            }

        });

    }
    console.log("termina");
}

// Función para guardar paseos
function guardarPaseos(paseadoresUtilizados) {

    var perros = ordenDatos.perros;
    var uid = ordenDatos.id_usr;


    console.log("orden perros " + ordenDatos)
    obtenerPerros(uid, perros)


}

// Funcion para obtener los datos de los perros
function obtenerPerros(uid, perros, paseadoresUtilizados) {

    console.log("Entra a obtener perros")
    console.log("'Perros " + perros)

    var db = firebase.database();

    var jsonPerros = {};
    var limite = 0

    lastCharacter = perros.substring(perros.length - 1);

    console.log("ultimo caracter " + lastCharacter)

    if (lastCharacter == ",") {

        perros = perros.substring(0, perros.length - 1);

    }

    console.log("Nuevos perros ", perros)

    var data_array = perros.split(',');


    limite = data_array.length - 1;

    console.log("limite" + limite)

    var actualFor = -1

    // Bucle que itera sobre cada identificador de perro en el array obtenido
    for (var i in data_array) {

        // Referencia a la base de datos en ubicacion "Perros"
        var ref2 = db.ref("Perros");
        var perrosref = ref2.child(uid);
        var query = perrosref.orderByChild("idPerro").equalTo(data_array[i]);

        query.on("value", function (snapshot) {

            snapshot.forEach(function (childSnapshot) {

                var childData = childSnapshot.val();
                var nombre = childData.nombre;
                var foto = childData.foto;
                var idPerro = childData.idPerro;
                var objredy = { nombre: nombre, foto: foto, idPerro: idPerro, pipi: 0, popo: 0 };

                jsonPerros[idPerro] = objredy;

                actualFor++;
                console.log("i " + actualFor);

                // Si el numero de iteraciones alcanza el limite 
                if (actualFor == limite) {

                    // Convierte el objeto a una cadena JSON
                    var stringified = JSON.stringify(jsonPerros);
                    var myJsonString = JSON.parse(stringified);
                    // console.log(myJsonString)

                    console.log("Termina con los perros")
                    obtenerDatosUsuario(uid, myJsonString, paseadoresUtilizados)

                }

            });

        });


    }

}

// Funcion para obtener los datos del usuario
function obtenerDatosUsuario(uid, jsonPerros, paseadoresUtilizados) {


    console.log("Entra a obtener datos usuario")

    var db = firebase.database();
    var refusername = db.ref("Usuarios");
    var usrrefname = refusername.child(uid);

    usrrefname.once("value", function (snapshottt) {

        var nombreuser = snapshottt.val().nombre;
        var apuser = snapshottt.val().apellido_Paterno;
        var numero_usuario = snapshottt.val().telefono1;

        console.log("nombre", nombreuser);
        console.log("apellido", apuser);
        console.log("numero_usuario", numero_usuario);
        console.log("user id", uid);

        guardarPaseos2(jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)
        fecha_ultimo_paseo_individual(uid)


    });


}


function fecha_ultimo_paseo_individual(uid) {


    var db = firebase.database();
    var ultimo_paseo = db.ref("Ultimo_Paseo");
    var ultimo_paseo_usu = ultimo_paseo.child(uid);

    ultimo_paseo_usu.once("value", function (snapshott) {




        if (snapshott.exists()) {

            timestamp_ultimo_paseo_individual = snapshott.val().ultimo_time;
        }



    });


}

function guardarPaseos2(jsonPerros, nombreuser, apuser, numero_usuario) {


    console.log("Entra a guardar paseo 2")

    var paseador1 = document.getElementById("paseo1").value.replace(/\s+/g, '')
    var paseador2 = document.getElementById("paseo2").value.replace(/\s+/g, '')
    var paseador3 = document.getElementById("paseo3").value.replace(/\s+/g, '')
    var paseador4 = document.getElementById("paseo4").value.replace(/\s+/g, '')
    var paseador5 = document.getElementById("paseo5").value.replace(/\s+/g, '')
    var paseador6 = document.getElementById("paseo6").value.replace(/\s+/g, '')
    var paseador7 = document.getElementById("paseo7").value.replace(/\s+/g, '')
    var paseador8 = document.getElementById("paseo8").value.replace(/\s+/g, '')
    var paseador9 = document.getElementById("paseo9").value.replace(/\s+/g, '')
    var paseador10 = document.getElementById("paseo10").value.replace(/\s+/g, '')
    var paseador11 = document.getElementById("paseo11").value.replace(/\s+/g, '')
    var paseador12 = document.getElementById("paseo12").value.replace(/\s+/g, '')
    var paseador13 = document.getElementById("paseo13").value.replace(/\s+/g, '')
    var paseador14 = document.getElementById("paseo14").value.replace(/\s+/g, '')
    var paseador15 = document.getElementById("paseo15").value.replace(/\s+/g, '')
    var paseador16 = document.getElementById("paseo16").value.replace(/\s+/g, '')
    var paseador17 = document.getElementById("paseo17").value.replace(/\s+/g, '')
    var paseador18 = document.getElementById("paseo18").value.replace(/\s+/g, '')
    var paseador19 = document.getElementById("paseo19").value.replace(/\s+/g, '')
    var paseador20 = document.getElementById("paseo20").value.replace(/\s+/g, '')
    var paseador21 = document.getElementById("paseo21").value.replace(/\s+/g, '')
    var paseador22 = document.getElementById("paseo22").value.replace(/\s+/g, '')
    var paseador23 = document.getElementById("paseo23").value.replace(/\s+/g, '')
    var paseador24 = document.getElementById("paseo24").value.replace(/\s+/g, '')
    var paseador25 = document.getElementById("paseo25").value.replace(/\s+/g, '')
    var paseador26 = document.getElementById("paseo26").value.replace(/\s+/g, '')
    var paseador27 = document.getElementById("paseo27").value.replace(/\s+/g, '')
    var paseador28 = document.getElementById("paseo28").value.replace(/\s+/g, '')
    var paseador29 = document.getElementById("paseo29").value.replace(/\s+/g, '')
    var paseador30 = document.getElementById("paseo30").value.replace(/\s+/g, '')




    console.log(diasAsignarPaseadorActual)

    for (var io = 0; io < diasAsignarPaseadorActual; io++) {


        if (io == 0) {

            obtenerDatosPaseador("1", timestamp1, fechaDefinitiva1, paseador1, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)
            console.log(fechaDefinitiva1)
        } else if (io == 1) {

            obtenerDatosPaseador("2", timestamp2, fechaDefinitiva2, paseador2, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)
            console.log(fechaDefinitiva2)
        } else if (io == 2) {

            obtenerDatosPaseador("3", timestamp3, fechaDefinitiva3, paseador3, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 3) {

            obtenerDatosPaseador("4", timestamp4, fechaDefinitiva4, paseador4, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 4) {

            obtenerDatosPaseador("5", timestamp5, fechaDefinitiva5, paseador5, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 5) {

            obtenerDatosPaseador("6", timestamp6, fechaDefinitiva6, paseador6, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 6) {

            obtenerDatosPaseador("7", timestamp7, fechaDefinitiva7, paseador7, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 7) {

            obtenerDatosPaseador("8", timestamp8, fechaDefinitiva8, paseador8, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 8) {

            obtenerDatosPaseador("9", timestamp9, fechaDefinitiva9, paseador9, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 9) {

            obtenerDatosPaseador("10", timestamp10, fechaDefinitiva10, paseador10, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 10) {

            obtenerDatosPaseador("11", timestamp11, fechaDefinitiva11, paseador11, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 11) {

            obtenerDatosPaseador("12", timestamp12, fechaDefinitiva12, paseador12, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 12) {

            obtenerDatosPaseador("13", timestamp13, fechaDefinitiva13, paseador13, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 13) {

            obtenerDatosPaseador("14", timestamp14, fechaDefinitiva14, paseador14, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 14) {

            obtenerDatosPaseador("15", timestamp15, fechaDefinitiva15, paseador15, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 15) {

            obtenerDatosPaseador("16", timestamp16, fechaDefinitiva16, paseador16, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 16) {

            obtenerDatosPaseador("17", timestamp17, fechaDefinitiva17, paseador17, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 17) {

            obtenerDatosPaseador("18", timestamp18, fechaDefinitiva18, paseador18, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 18) {

            obtenerDatosPaseador("19", timestamp19, fechaDefinitiva19, paseador19, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 19) {

            obtenerDatosPaseador("20", timestamp20, fechaDefinitiva20, paseador20, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 20) {

            obtenerDatosPaseador("21", timestamp21, fechaDefinitiva21, paseador21, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 21) {

            obtenerDatosPaseador("22", timestamp22, fechaDefinitiva22, paseador22, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 22) {

            obtenerDatosPaseador("23", timestamp23, fechaDefinitiva23, paseador23, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 23) {

            obtenerDatosPaseador("24", timestamp24, fechaDefinitiva24, paseador24, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 24) {

            obtenerDatosPaseador("25", timestamp25, fechaDefinitiva25, paseador25, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 25) {

            obtenerDatosPaseador("26", timestamp26, fechaDefinitiva26, paseador26, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 26) {

            obtenerDatosPaseador("27", timestamp27, fechaDefinitiva27, paseador27, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 27) {

            obtenerDatosPaseador("28", timestamp28, fechaDefinitiva28, paseador28, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 28) {

            obtenerDatosPaseador("29", timestamp29, fechaDefinitiva29, paseador29, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        } else if (io == 29) {

            obtenerDatosPaseador("30", timestamp30, fechaDefinitiva30, paseador30, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados)

        }

    }

}


function obtenerDatosPaseador(num, datum, fechaDefinitiva, paseador, jsonPerros, nombreuser, apuser, numero_usuario, paseadoresUtilizados) {


    console.log("Entra a obtener datos paseador")
    console.log(fechaDefinitiva)

    var db = firebase.database();
    var refPaseadoresfoto = db.ref("Paseadores");
    var pasrefoto = refPaseadoresfoto.child(paseador);

    pasrefoto.once("value", function (snapshott) {
        var fotopaseador = snapshott.val().direcfoto;
        var nombrepaseador = snapshott.val().nombre;
        var numero_paseador = snapshott.val().celular;




        guardarAgendadosIndividual(num, datum, fechaDefinitiva, paseador, jsonPerros, nombreuser, apuser, numero_usuario, fotopaseador, nombrepaseador, numero_paseador, paseadoresUtilizados)

    });


}


function guardarAgendadosIndividual(num, datumFirebase, fechaDefinitiva, id_paseador, jsonPerros, nombreuser, apuser, numero_usuario, fotopaseador, nombrepaseador, numero_paseador, paseadoresUtilizados) {
    console.log("Entra a guardar agendados individual")

    var amount = ordenDatos.amount;
    var categoria = ordenDatos.categoria;
    var numero_perros = ordenDatos.num_perros;
    var perros = ordenDatos.perros;
    var tiempo = ordenDatos.tiempo_paseo;
    var latitud = ordenDatos.latitud;
    var longitud = ordenDatos.longitud;
    var direccion = ordenDatos.direccion;
    var monto_paseador = ordenDatos.monto_paseador;
    var dias = ordenDatos.dias;
    var diasEleccion = ordenDatos.diasEleccion;
    var op_date = ordenDatos.operation_date;
    var uid = ordenDatos.id_usr;
    var perrosNombre = ordenDatos.perrosNombre;
    var fee = ordenDatos.fee;
    var descripcion = ordenDatos.descripcion;
    var orderid = ordenDatos.order_id

    var amount = (amount / dias);
    var monto_paseador = (monto_paseador / dias);
    var nuevoFee = (fee / dias);

    console.log(datumFirebase);
    console.log(fechaDefinitiva);
    console.log(diasEleccion)

    datum = datumFirebase / 1000;
    console.log(datum)
    console.log(id_paseador);

    nuevaOrden = orderid + "_" + num;
    var nde = num + ' de ' + diasAsignarPaseadorActual

    //Variables de conexion a la base de datos
    var db = firebase.database();

    var ref_agendaguarda = db.ref("Agendados");
    console.log("orden ID ", orderid)
    var ref_ordenguarda = ref_agendaguarda.child(orderid);

    var ref_ult = db.ref("Ultimo_Paseo").child(uid);

    if (datumFirebase > timestamp_ultimo_paseo_individual) {

        ref_ult.set({

            order_id: nuevaOrden,
            uid: uid,
            ultimo_time: datumFirebase,
            nombre: nombreuser + " " + apuser

        });

        timestamp_ultimo_paseo_individual = datumFirebase

    }

    var ref_pas = db.ref("Paseos_paseadores");
    var paseospasref = ref_pas.child(id_paseador).child(nuevaOrden);

    paseospasref.set({

        categoria: categoria,
        num_perros: numero_perros,
        tiempo_paseo: tiempo,
        operation_date: fechaDefinitiva,
        amount: monto_paseador * 0.60,
        order_id: nuevaOrden,
        time_op: datum,
        descripcion: descripcion

    });

    var res = direccion.split(";");
    var nuevaDireccion = "";


    if (res[1].trim() != "") {
        nuevaDireccion = direccion;
    } else {
        nuevaDireccion = direccion + "SN";
    }

    var ref = db.ref("Paseos_usuarios");
    var paseosursref = ref.child(uid).child(nuevaOrden);

    paseosursref.update({

        calificacion: 5.0,
        categoria: categoria,
        id_paseador: id_paseador,
        id_usr: uid,
        num_perros: numero_perros,
        perros: perros,
        tiempo_paseo: tiempo,
        latitud: latitud,
        longitud: longitud,
        direccion: nuevaDireccion,
        order_id: nuevaOrden,
        operation_date: fechaDefinitiva,
        amount: amount,
        numero_usuario: numero_usuario,
        numero_paseador: numero_paseador,
        timestamp: datumFirebase,
        vistocalif: "",
        agendado: "true",
        fee: nuevoFee,
        'estatusPaseo/estatus': "progreso",
        descripcion: descripcion,
        monto_paseador: monto_paseador * 0.60,
        nde: nde,
        perrosEstatus: jsonPerros,
        perrosNombre: perrosNombre

    });

    for (var perro in jsonPerros) {

        console.log(perro + " -> " + jsonPerros[perro]);
        // comrpobarSiExiste(perro,uid,nuevaOrden,datumFirebase)
    }

    var data_array = perros.split(',');

    var ref_paseador_correcto = db.ref("Paseadores");
    var paseosactivosref_correcto = ref_paseador_correcto.child(id_paseador).child("paseosActivos").child(nuevaOrden);

    paseosactivosref_correcto.set({

        categoria: categoria,
        num_perros: numero_perros,
        tiempo_paseo: tiempo,
        operation_date: fechaDefinitiva,
        order_id: nuevaOrden,
        uid: uid,
        nombre: nombreuser + " " + apuser,
        estatus: "agendado",
        timestamp: datumFirebase,
        perrosNombre: perrosNombre

    });

    var ref_user_correcto = db.ref("Usuarios");
    var useractivosref_correcto = ref_user_correcto.child(uid).child("paseosActivos").child(nuevaOrden);

    useractivosref_correcto.set({

        tipo: categoria,
        num_perros: numero_perros,
        tiempo_paseo: tiempo,
        operation_date: fechaDefinitiva,
        order_id: nuevaOrden,
        perros: perros,
        foto_paseador: fotopaseador,
        nombre_paseador: nombrepaseador,
        estatus: "agendado",
        timestamp: datumFirebase,
        perrosNombre: perrosNombre

    });

    paseosursref.child("numero_paseador").set(numero_paseador);

    actual++
    if (actual == dias) {

        var paseadores = "";

        for (x in paseadoresUtilizados) {

            paseadores += paseadoresUtilizados[x] + ",";

        }


        ref_ordenguarda.child("id_paseador").set(paseadores);


        var key = db.ref("cambios_ordenes").push().getKey();
        var agendadosModificaciones = db.ref("cambios_ordenes");
        var currentUID = firebase.auth().currentUser.uid;
        console.log(key)

        agendadosModificaciones.child(key).update({

            id_orden: orderid,
            uid: currentUID,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            cambio: "asignacion individual",
            inicial: "sin paseador",
            final: paseadores

        })

        Swal.fire({
            title: 'Éxito',
            text: 'Se ha asignado los paseador exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            location.reload(); // Recarga la página
        });
    }


}



function verDireccion(latitud, longitud) {

    window.open('direccion.php?latitud=' + latitud + "&longitud=" + longitud, '_blank');
}

function verFCompras(id_usr) {

    window.open('../usuarios/comprasfinuser.php?uid=' + id_usr, '_blank');
}



function cambiar_ubicacion(order_id, latitud, longitud) {

    window.open('cambiarDireccion.php?latitud=' + latitud + "&longitud=" + longitud + "&order_id=" + order_id + "&fuente=agenda", '_blank');
}

window.onload = busca_paseos;


//Para revisar 
function asignarPaseador(orderID, diasElecc, diasTotales) {

    var txt;
    var db = firebase.database();
    var ref = db.ref("Agendados");

    // Verificamos si diasElecc es un string y si contiene comas
    if (typeof diasElecc === 'string') {
        if (diasElecc.includes(',')) {
            // Si contiene comas, lo dividimos en una lista
            diasElecc = diasElecc.split(',');
        } else {
            // Si no contiene comas, lo convertimos en una lista con un solo elemento
            diasElecc = [diasElecc];
        }
    }

    // Convertimos diasTotales a un número si es un string
    diasTotales = parseInt(diasTotales, 10);

    console.log(diasElecc);
    console.log(`Length of diasElecc: ${diasElecc.length}, diasTotales: ${diasTotales}`);
    console.log(`Type of diasTotales: ${typeof diasTotales}`);

    // Comprobamos que la longitud de la lista coincida con los días totales
    if ((diasElecc.length !== diasTotales) || (diasElecc == null || diasElecc == "") || diasTotales == null || diasTotales == "") {
        alert('La cantidad de días seleccionados no coincide con los días totales.');
        throw new Error('La cantidad de días seleccionados no coincide con los días totales.');
    } else {
        // En caso de que coincidan, entramos a la siguiente comprobación
        Swal.fire({
            title: 'Ingrese el UID del paseador:',
            input: 'text',
            inputPlaceholder: '',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                if (!value) {
                    return 'El UID no puede estar vacío';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                var paseador = result.value;
                // Verificamos que el uid del paseador no sea null o contenga una cadena vacía de ser así,
                // enviamos un mensaje de error para rectificar este problema
                if (paseador == null || paseador == "") {
                    Swal.fire({
                        title: 'Error',
                        text: 'El UID no puede estar vacío',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                } else {
                    // Si todo sale bien, entramos a la siguiente etapa de asignación de paseador
                    var uidPaseador = paseador.replace(/\s+/g, '');
                    var txt = "Paseador: " + uidPaseador + " Order: " + orderID;
                    // ref.child(orderID).remove();
                    // location.reload();
                    comprobarPaseador(uidPaseador, orderID);
                }
            }
        });
    }

    
    // } else {
        //     //Si todo sale bien, entramos a la siguiente etapa de asignacion de paseador
        //     uidPaseador = paseador.replace(/\s+/g, '');
        //     txt = "Paseador: " + uidPaseador + " Order: " + orderID;
        //     console.log(uidPaseador)
        //     console.log(orderID)
        //     //ref.child(orderID).remove();
        //     //location.reload();
        //     //comprobarPaseador(uidPaseador, orderID);
        // }
}



function comprobarPaseador(id_paseador, orderID) {
    

    var db = firebase.database();
    var ref_comprobacion = db.ref("Paseadores");
    var ref_comPas = ref_comprobacion.child(id_paseador);

    console.log(id_paseador);

    ref_comPas.once("value", function (snapshot) {
        if (snapshot.exists()) {
            console.log('exists');
            console.log(id_paseador)
            agenda(id_paseador, orderID);
        } else {

            Swal.fire({
                title: 'Error',
                text: 'El paseador no existe',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }

    });




}




function agenda(id_paseador, orderID) {


    $('#carga2').show();

    var orderid = orderID
    var id_paseador = id_paseador;
    var uid = "";

    var db = firebase.database();
    var ref_agenda = db.ref("Agendados");
    var ref_orden = ref_agenda.child(orderid);

    ref_orden.once("value", function (snap) {


        var amount = snap.val().amount;
        var categoria = snap.val().categoria;
        var numero_perros = snap.val().num_perros;
        var perros = snap.val().perros;
        var tiempo = snap.val().tiempo_paseo;
        var latitud = snap.val().latitud;
        var longitud = snap.val().longitud;
        var direccion = snap.val().direccion;
        var monto_paseador = snap.val().monto_paseador;
        var dias = snap.val().dias;
        var diasEleccion = snap.val().diasEleccion;
        var op_date = snap.val().operation_date;
        var uid = snap.val().id_usr;
        var perrosNombre = snap.val().perrosNombre;
        var fee = snap.val().fee;
        var descripcion = snap.val().descripcion;
        var currencyCharge = snap.val().currencyCharge;        


        var nuevoAmount = (amount / dias);
        var nuevoMonto_paseador = (monto_paseador / dias);
        var nuevoFee = (fee / dias);
        console.log("user id", uid);


        var refusername = db.ref("Usuarios");
        var usrrefname = refusername.child(uid);

        usrrefname.once("value", function (snapshottt) {

            var nombreuser = snapshottt.val().nombre;
            var apuser = snapshottt.val().apellido_Paterno;
            var numero_usuario = snapshottt.val().telefono1;

            console.log("nombre", nombreuser);
            console.log("apellido", apuser);
            console.log("numero_usuario", numero_usuario);
            console.log("user id", uid);



            obtenerPerrosTotal(nuevoAmount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, nuevoMonto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, orderid, perrosNombre, nuevoFee, descripcion, currencyCharge);



        });

    });

}




function obtenerPerrosTotal(nuevoAmount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, nuevoMonto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, orderid, perrosNombre, nuevoFee, descripcion, currencyCharge) {


    console.log("Entra a obtener perros")
    console.log("'Perros " + perros)

    var db = firebase.database();

    var jsonPerros = {};
    var limite = 0


    lastCharacter = perros.substring(perros.length - 1);

    console.log("ultimo caracter " + lastCharacter)

    if (lastCharacter == ",") {

        perros = perros.substring(0, perros.length - 1);

    }


    console.log("Nuevos perros ", perros)

    var data_array = perros.split(',');


    limite = data_array.length - 1;

    console.log("limite" + limite)

    var actualFor = -1

    for (var i in data_array) {

        var ref2 = db.ref("Perros");
        var perrosref = ref2.child(uid);
        var query = perrosref.orderByChild("idPerro").equalTo(data_array[i]);

        query.on("value", function (snapshot) {

            snapshot.forEach(function (childSnapshot) {


                var childData = childSnapshot.val();
                var nombre = childData.nombre;
                var foto = childData.foto;
                var idPerro = childData.idPerro;
                var objredy = { nombre: nombre, foto: foto, idPerro: idPerro, pipi: 0, popo: 0 };

                jsonPerros[idPerro] = objredy

                actualFor++
                console.log("i " + actualFor)


                if (actualFor == limite) {

                    var stringified = JSON.stringify(jsonPerros);
                    var myJsonString = JSON.parse(stringified);
                    // console.log(myJsonString)

                    console.log("Termina con los perros")
                    datos_paseador(nuevoAmount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, nuevoMonto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, orderid, perrosNombre, nuevoFee, descripcion, currencyCharge, myJsonString)

                }


            });

        });


    }



}



function datos_paseador(amount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, monto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, orderIDborrar, perrosNombre, nuevoFee, descripcion, currencyCharge, jsonPerros) {

    var db = firebase.database();
    var refPaseadoresfoto = db.ref("Paseadores");
    var pasrefoto = refPaseadoresfoto.child(id_paseador);

    pasrefoto.once("value", function (snapshott) {
        var fotopaseador = snapshott.val().direcfoto;
        var nombrepaseador = snapshott.val().nombre;
        var numero_paseador = snapshott.val().celular;




        fecha_ultimo_paseo(amount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, monto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, fotopaseador, nombrepaseador, numero_paseador, orderIDborrar, perrosNombre, nuevoFee, descripcion, currencyCharge, jsonPerros)




    });


}



function fecha_ultimo_paseo(amount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, monto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, fotopaseador, nombrepaseador, numero_paseador, orderIDborrar, perrosNombre, nuevoFee, descripcion, currencyCharge, jsonPerros) {


    var db = firebase.database();
    var ultimo_paseo = db.ref("Ultimo_Paseo");
    var ultimo_paseo_usu = ultimo_paseo.child(uid);

    ultimo_paseo_usu.once("value", function (snapshott) {

        var ultimo_time = 0


        if (snapshott.exists()) {

            ultimo_time = snapshott.val().ultimo_time;
        }



        guardar_agendados(amount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, monto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, fotopaseador, nombrepaseador, numero_paseador, orderIDborrar, perrosNombre, nuevoFee, descripcion, currencyCharge, ultimo_time, jsonPerros)




    });


}

function guardar_agendados(amount, categoria, numero_perros, perros, tiempo, latitud, longitud, direccion, monto_paseador, dias, diasEleccion, op_date, orderid, nombreuser, apuser, numero_usuario, uid, id_paseador, fotopaseador, nombrepaseador, numero_paseador, orderIDborrar, perrosNombre, nuevoFee, descripcion, currencyCharge, timestamp_ultimo_paseo, jsonPerros) {
    //Definicion de variables para realizar conexion a la BD de firebase
    var db = firebase.database();
    var ref_agendaguarda = db.ref("Agendados");
    var ref_ordenguarda = ref_agendaguarda.child(orderid);


    var array = diasEleccion.split(",");
    var esTimestamps = /^\d+$/.test(array[0]); // Verificar si el primer valor es un número

    // Días de la semana en español
    var diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

    // Mapeo de nombres de meses a números de meses
    var mesesMap = {
        "enero": "01",
        "febrero": "02",
        "marzo": "03",
        "abril": "04",
        "mayo": "05",
        "junio": "06",
        "julio": "07",
        "agosto": "08",
        "septiembre": "09",
        "octubre": "10",
        "noviembre": "11",
        "diciembre": "12"
    };

    console.log(array)
    console.log("cantidad array", array.length);

    //Comprobar valores si son timestamps o fecha tipo texto
    if (esTimestamps) {
        // Verificar si los valores están separados por comas
        var valoresSeparados = array.map(function (valor) {
            return valor.trim(); // Eliminar espacios en blanco alrededor del valor
        });

        for (var i = 0; i < dias; i++) {

            var nuevaOrden = "";
            nuevaOrden = orderid + "_" + (i + 1);
            var nde = (i + 1) + ' de ' + dias

            // Obtener el valor actual como cadena y como número
            var valorOriginalCadena = valoresSeparados[i % valoresSeparados.length];
            var datumFirebase = parseInt(valorOriginalCadena);
            var datum = datumFirebase / 1000

            // Crear un objeto de fecha con el valor actual
            var fecha = new Date(parseInt(datumFirebase));

            // Obtener el nombre del día de la semana
            var nombreDia = diasSemana[fecha.getDay()];
            // Formatear la fecha y hora según el formato requerido
            var fechaFormateada = `${nombreDia} ${fecha.getDate()} ${obtenerNombreMes(fecha.getMonth())} ${fecha.getFullYear()} a las ${agregarCeros(fecha.getHours())}:${agregarCeros(fecha.getMinutes())}`;

            // Separar los valores de fechaFormateada usando el método split
            var fecha1 = fechaFormateada.split(" ");

            // Obtener el número de mes utilizando el mapeo
            var mes = mesesMap[fecha1[2]];

            // Crear la nueva fecha utilizando los valores descompuestos
            var nuevaFecha = fecha1[3] + '-' + mes + '-' + fecha1[1] + "T" + fecha1[6] + ":00"


            // Imprimir los valores: valor original como cadena, fecha formateada, valor original como número, hora, valores de fecha1, la nueva variable y la nueva variable dependiente
            console.log(`Fecha formateada: ${fechaFormateada}`);
            console.log(`Nueva variable de fecha: ${nuevaFecha}, ${typeof (nuevaFecha)}`);
            console.log(`Valor original como cadena: ${valorOriginalCadena}`);
            console.log(`Valor original como número: ${datumFirebase} (valor que se guardara)`);

            var ref_ult = db.ref("Ultimo_Paseo").child(uid);

            if (datumFirebase > timestamp_ultimo_paseo) {

                ref_ult.set({

                    order_id: nuevaOrden,
                    uid: uid,
                    ultimo_time: datumFirebase,
                    nombre: nombreuser + " " + apuser,
                    currencyCharge: currencyCharge

                });

                timestamp_ultimo_paseo = datumFirebase

            }

            var ref_pas = db.ref("Paseos_paseadores");
            var paseospasref = ref_pas.child(id_paseador).child(nuevaOrden);

            paseospasref.set({

                categoria: categoria,                
                currencyCharge: currencyCharge,
                num_perros: numero_perros,
                tiempo_paseo: tiempo,
                operation_date: nuevaFecha, //Mantener valor en el formato anterior
                amount: monto_paseador * 0.60,
                order_id: nuevaOrden,
                time_op: datum,
                descripcion: descripcion

            });

            var res = direccion.split(";");
            var nuevaDireccion = "";

            if (res[1].trim() != "") {


                nuevaDireccion = direccion

            } else {

                nuevaDireccion = direccion + "SN"

            }

            var ref = db.ref("Paseos_usuarios");
            var paseosursref = ref.child(uid).child(nuevaOrden);

            paseosursref.update({

                calificacion: 5.0,
                categoria: categoria,
                id_paseador: id_paseador,
                id_usr: uid,
                num_perros: numero_perros,
                perros: perros,
                tiempo_paseo: tiempo,
                latitud: latitud,
                longitud: longitud,
                direccion: nuevaDireccion,
                order_id: nuevaOrden,
                operation_date: nuevaFecha,
                amount: amount,                
                currencyCharge: currencyCharge,
                numero_usuario: numero_usuario,
                numero_paseador: numero_paseador,
                timestamp: datumFirebase,
                vistocalif: "",
                agendado: "true",
                fee: nuevoFee,
                'estatusPaseo/estatus': "progreso",
                descripcion: descripcion,
                monto_paseador: monto_paseador * 0.60,
                nde: nde,
                perrosEstatus: jsonPerros,
                perrosNombre: perrosNombre

            });

            var data_array = perros.split(',');
            var ref_paseador_correcto = db.ref("Paseadores");
            var paseosactivosref_correcto = ref_paseador_correcto.child(id_paseador).child("paseosActivos").child(nuevaOrden);

            paseosactivosref_correcto.set({

                categoria: categoria,
                num_perros: numero_perros,
                tiempo_paseo: tiempo,
                operation_date: nuevaFecha,
                order_id: nuevaOrden,
                uid: uid,                
                currencyCharge: currencyCharge,
                nombre: nombreuser + " " + apuser,
                estatus: "agendado",
                timestamp: datumFirebase,
                perrosNombre: perrosNombre

            });

            var ref_user_correcto = db.ref("Usuarios");
            var useractivosref_correcto = ref_user_correcto.child(uid).child("paseosActivos").child(nuevaOrden);

            useractivosref_correcto.set({

                tipo: categoria,
                num_perros: numero_perros,
                tiempo_paseo: tiempo,
                operation_date: nuevaFecha,
                order_id: nuevaOrden,                
                currencyCharge: currencyCharge,
                perros: perros,
                foto_paseador: fotopaseador,
                nombre_paseador: nombrepaseador,
                estatus: "agendado",
                timestamp: datumFirebase,
                perrosNombre: perrosNombre

            });

            paseosursref.child("numero_paseador").set(numero_paseador);


            console.log("Perros: " + jsonPerros)


            for (var perro in jsonPerros) {

                console.log(perro + " -> " + jsonPerros[perro]);
                // comrpobarSiExiste(perro,uid,nuevaOrden,datumFirebase)
            }

        }

        ref_ordenguarda.child("id_paseador").set(id_paseador);

        var key = db.ref("cambios_ordenes").push().getKey();
        console.log(key);
        var agendadosModificaciones = db.ref("cambios_ordenes");
        var currentUID = firebase.auth().currentUser.uid;

        agendadosModificaciones.child(key).update({

            id_orden: orderid,
            uid: currentUID,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            cambio: "asignacion total",
            inicial: "sin paseador",
            final: id_paseador

        })

        Swal.fire({
            title: 'Éxito',
            text: 'Se ha asignado el paseador exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            location.reload(); // Recarga la página
        });

    } else {
        for (var i = 0; i < dias; i++) {
            if (array[i]) {

                var nuevaOrden = "";
                nuevaOrden = orderid + "_" + (i + 1);
                var nde = (i + 1) + ' de ' + dias

                var fecha1 = array[i].split(" ").map(componente => componente.trim());
                var fecha = array[i].trim();
                var fechasConvertidas = convertirFechasATimestampsF(fecha);
                var datumFirebase = parseInt(fechasConvertidas) * 1000;
                var datum = datumFirebase / 1000000
                // Obtener el número de mes utilizando el mapeo
                var mes = mesesMap[fecha1[2]];
                var nuevaFecha = fecha1[3] + '-' + mes + '-' + fecha1[1] + "T" + fecha1[6] + ":00"

                console.log(fecha1);
                console.log(fechasConvertidas, typeof (fechasConvertidas));
                console.log(`Valor original como número: ${datumFirebase}, ${typeof (datumFirebase)}`);
                console.log(`Nueva variable de fecha: ${nuevaFecha}, ${typeof (nuevaFecha)}`);
                console.log(timestamp_ultimo_paseo);
                console.log(datum);

                var ref_ult = db.ref("Ultimo_Paseo").child(uid);

                if (datumFirebase > timestamp_ultimo_paseo) {

                    ref_ult.set({

                        order_id: nuevaOrden,
                        uid: uid,
                        ultimo_time: datumFirebase,
                        nombre: nombreuser + " " + apuser,
                        currencyCharge: currencyCharge

                    });

                    timestamp_ultimo_paseo = datumFirebase

                }

                var ref_pas = db.ref("Paseos_paseadores");
                var paseospasref = ref_pas.child(id_paseador).child(nuevaOrden);

                paseospasref.set({

                    categoria: categoria,
                    num_perros: numero_perros,
                    tiempo_paseo: tiempo,
                    operation_date: nuevaFecha, //Mantener valor en el formato anterior
                    amount: monto_paseador * 0.60,
                    currencyCharge: currencyCharge,
                    order_id: nuevaOrden,
                    time_op: datum,
                    descripcion: descripcion

                });

                var res = direccion.split(";");
                var nuevaDireccion = "";

                if (res[1].trim() != "") {


                    nuevaDireccion = direccion

                } else {

                    nuevaDireccion = direccion + "SN"

                }

                var ref = db.ref("Paseos_usuarios");
                var paseosursref = ref.child(uid).child(nuevaOrden);

                paseosursref.update({

                    calificacion: 5.0,
                    categoria: categoria,
                    id_paseador: id_paseador,
                    id_usr: uid,
                    num_perros: numero_perros,
                    perros: perros,
                    tiempo_paseo: tiempo,
                    latitud: latitud,
                    longitud: longitud,
                    direccion: nuevaDireccion,
                    order_id: nuevaOrden,
                    operation_date: nuevaFecha,
                    amount: amount,
                    currencyCharge: currencyCharge,
                    numero_usuario: numero_usuario,
                    numero_paseador: numero_paseador,
                    timestamp: datumFirebase,
                    vistocalif: "",
                    agendado: "true",
                    fee: nuevoFee,
                    'estatusPaseo/estatus': "progreso",
                    descripcion: descripcion,
                    monto_paseador: monto_paseador * 0.60,
                    nde: nde,
                    perrosEstatus: jsonPerros,
                    perrosNombre: perrosNombre

                });

                var data_array = perros.split(',');
                var ref_paseador_correcto = db.ref("Paseadores");
                var paseosactivosref_correcto = ref_paseador_correcto.child(id_paseador).child("paseosActivos").child(nuevaOrden);

                paseosactivosref_correcto.set({

                    categoria: categoria,
                    num_perros: numero_perros,
                    tiempo_paseo: tiempo,
                    operation_date: nuevaFecha,
                    order_id: nuevaOrden,
                    uid: uid,
                    currencyCharge: currencyCharge,
                    nombre: nombreuser + " " + apuser,
                    estatus: "agendado",
                    timestamp: datumFirebase,
                    perrosNombre: perrosNombre,

                });

                var ref_user_correcto = db.ref("Usuarios");
                var useractivosref_correcto = ref_user_correcto.child(uid).child("paseosActivos").child(nuevaOrden);

                useractivosref_correcto.set({

                    tipo: categoria,
                    num_perros: numero_perros,
                    tiempo_paseo: tiempo,
                    operation_date: nuevaFecha,
                    order_id: nuevaOrden,
                    currencyCharge: currencyCharge,
                    perros: perros,
                    foto_paseador: fotopaseador,
                    nombre_paseador: nombrepaseador,
                    estatus: "agendado",
                    timestamp: datumFirebase,
                    perrosNombre: perrosNombre

                });

                paseosursref.child("numero_paseador").set(numero_paseador);


                console.log("Perros: " + jsonPerros)


                for (var perro in jsonPerros) {

                    console.log(perro + " -> " + jsonPerros[perro]);
                    // comrpobarSiExiste(perro,uid,nuevaOrden,datumFirebase)
                }

            }
        }

        ref_ordenguarda.child("id_paseador").set(id_paseador);

        var key = db.ref("cambios_ordenes").push().getKey();
        console.log(key);
        var agendadosModificaciones = db.ref("cambios_ordenes");
        var currentUID = firebase.auth().currentUser.uid;

        agendadosModificaciones.child(key).update({

            id_orden: orderid,
            uid: currentUID,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            cambio: "asignacion total",
            inicial: "sin paseador",
            final: id_paseador

        })
        
        Swal.fire({
            title: 'Éxito',
            text: 'Se ha asignado el paseador exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            location.reload(); // Recarga la página
        });
    }

}

// Función para obtener el nombre del mes en español
function obtenerNombreMes(numeroMes) {
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return meses[numeroMes];
}

// Función para agregar ceros a los números menores que 10
function agregarCeros(numero) {
    return numero < 10 ? "0" + numero : numero;
}

// Definición de la función convertirFechasATimestamps
function convertirFechasATimestampsF(fechasString) {
    var diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    // Utilizar una expresión regular para extraer los componentes de la fecha
    var match = fechasString.match(/(\w+) (\d{2}) (\w+) (\d{4}) a las (\d{2}:\d{2})/);

    // Condición para validar que el formato sea correcto
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
        return timestamp.toString();
    } else {
        console.log("Formato de fecha no válido:", fechasString);
        return null;
    }
}



function terminacarga() {

    var myVar = setInterval(myTimer, 10000);



    function myTimer() {

        $('#carga2').hide();
        alert("Se ha asignado el paseador exitosamente")
        location.reload();

    }

}

