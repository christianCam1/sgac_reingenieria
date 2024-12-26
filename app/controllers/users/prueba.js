$(document).ready(function () {
    $('#reservationdatetime').datetimepicker({ 
        icons: { time: 'fa-regular fa-clock' },
        format: 'dddd,DD,MMMM, YYYY HH:mm',
        minDate: new Date(),    
    });
});

// var fecha1 = $("#reservationdatetime").find("input").val();

console.log(fecha1);