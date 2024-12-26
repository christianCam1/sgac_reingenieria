$('#generarCodigo').hide();
$('#generarVarios').hide();

var ultimoQR_str = "";
var ultimo_codigo = "";
var letraQR = "";

var db = firebase.database();
var config_ref = db.ref("Configuracion");
config_ref.once("value", function (snapsho) {
    $('#generarCodigo').show();
    $('#generarVarios').show();
    ultimoQR = snapsho.val().ultimoQR2;

    console.log("ultimo " + ultimoQR);

    num_paseos = snapsho.val().diasRecuperandog;
    document.getElementById("item_txt_consulta").value = ultimoQR;
    document.getElementById("item_txt_consulta").disabled = true;
});

var zip = new JSZip();
var img = zip.folder("images");

$(document).ready(function () {
    var miCodigoQR = new QRCode(document.getElementById("codigoQR"), {
        width : 128,
        height : 128
    });

    $("#generarCodigo").on("click", function () {
        var cadena = $("#item_txt").val();
        if (cadena == "") {
            alert("Ingresa un texto");
            $("#item_txt").focus();
        } else {
            cad = cadena;
            $("#descargarCodigo").css("display", "inline-block");
            miCodigoQR.makeCode(cadena);
        }
    });

    $("#descargarCodigo").on("click", function () {
        var base64 = $("#codigoQR img").attr('src');
        $("#descargarCodigo").attr('href', base64);
        $("#descargarCodigo").attr('download', cad);
        $("#descargarCodigo").trigger("click");
    });

    $("#generarVarios").on("click", function () {
        var cadena_varios = $("#item_txt_varios").val();
        if (cadena_varios == "") {
            alert("Ingresa un numero");
            $("#item_txt_varios").focus();
        } else {
            ultimpQR = document.getElementById("item_txt_consulta").value;
            ultimoQR = ultimoQR + 1;

            for (var i = 1; i <= cadena_varios; i++) {
                var codigo_generado = generateUUID2();
                var urlconcodigo = "https://api.caminandog.com.mx/qr?id=" + codigo_generado;
                var id_intrno = ultimoQR++;

                var codigos = db.ref("CodigosQR").child(id_intrno);
                codigos.set({ id_codigo: codigo_generado, timestamp: firebase.database.ServerValue.TIMESTAMP, vigencia: "", id_perro: "", fecha_vinculacion: "", numero_codigo: id_intrno });

                $("#descargarVarios").css("display", "inline-block");
                miCodigoQR.makeCode(urlconcodigo);

                var canvas = $('#codigoQR canvas');
                var imagen = canvas.get(0).toDataURL();
                imagen = imagen.replace(/^data:image\/(png|jpg);base64,/, "");

                img.file(id_intrno + ".png", imagen, { base64: true });

                miCodigoQR.clear();
            }

            ultimoQR = ultimoQR - 1;
            config_ref.child("ultimoQR2").set(ultimoQR);
            document.getElementById("item_txt_consulta").value = ultimoQR;
        }
    });

    function generateUUID2() {
        var d = new Date().getTime();
        var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxyx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    $("#descargarVarios").on("click", function () {
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var f = new Date();
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                saveAs(content, "codigos_QR " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + ".zip");
            });
    });
});
