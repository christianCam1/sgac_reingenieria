var uid = getAllUrlParams().uid;
var order_id = getAllUrlParams().order_id;
var primera = true
var usuariosArray = [];

let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
let options = { hour: "numeric", minute: "numeric" };

//var table = document.getElementById("tabla");

//table.innerHTML = "";


var addMessage2 = firebase.functions().httpsCallable('System_chat_infoCandidato');
addMessage2({ uid: uid, ord: order_id }).then(function (result) {


  //document.getElementById("loader").style.display = "none";
  //document.getElementById("myDiv").style.display = "block";

  console.log(result.data[0])


  document.getElementById('nom_usu').innerHTML = result.data[0].nombre + " " + result.data[0].apellidopa + " " + result.data[0].apellidoma
  document.getElementById('email_usu').innerHTML = result.data[0].email
  document.getElementById('tel_usu').innerHTML = result.data[0].celular

  if (result.data[0].direcfoto === null || result.data[0].direcfoto === undefined) {
    document.getElementById("img_usu").src = '../public/img/user-profile.svg'
  } else {
    document.getElementById("img_usu").src = result.data[0].direcfoto
  }

  $("#usrChat").text("Chat con el usuario "+ result.data[0].nombre + " " + result.data[0].apellidopa + " " + result.data[0].apellidoma);

  document.getElementById("mySection").classList.add("animate-bottom");
 // document.getElementById("myInput").classList.add("animate-bottom");
  document.getElementById("mySection").style.display = "block";
  //document.getElementById("mensaje").style.display = "block";

})




function search(ele) {
  if (ele.id === "mensaje" && event.key === 'Enter') {

    enviarMensaje()

  }
}


function enviarMensaje() {

  var mensajeTexto = document.getElementById("mensaje").value

  document.getElementById("mensaje").value = "";
  var refChat = firebase.database().ref('Chats_candidato_caminandog').child("chats").child(uid);
  var randomId = refChat.push().getKey();


  /*
  var obj = {
      uidUsuario: uid,
      mensaje: mensajeTexto,
      emisor_mensaje:  "caminandog",
      child_key: randomId,
      uidCaminandog: firebase.auth().currentUser.uid
  };
  var json = JSON.stringify(obj);
  
  
    var addMessage1 = firebase.functions().httpsCallable('notificacion_chat_caminandog');
  addMessage1({text : 'hola'}).then(function(result) {
  
  
  })  .catch((error) => {
      // Getting the Error details.
      var code = error.code;
      var message = error.message;
      var details = error.details;
  
      console.log("code "+code+" message "+message+" details"+details)
    });;
  
  */




  if (mensajeTexto.trim() == "") {

    console.log("mensaje sin texto")

  } else {
    const Http = new XMLHttpRequest();

    var msjString = String(mensajeTexto)

    var obj = {
      uidUsuario: uid,
      mensaje: msjString,
      emisor_mensaje: "caminandog",
      child_key: randomId,
      uidCaminandog: firebase.auth().currentUser.uid
    };


    var json = encodeURIComponent(JSON.stringify(obj));

    const url = 'https://us-central1-caminandog-218818.cloudfunctions.net/notificacion_chat_caminandog_candidatos?text=' + json;

    console.log("json " + json)


    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }



  }



  /*
  var obj = {
      uidUsuario: uid,
      mensaje: mensajeTexto,
      emisor_mensaje:  "caminandog",
      child_key: randomId,
      uidCaminandog: firebase.auth().currentUser.uid
  };
  
  var json = encodeURIComponent(JSON.stringify(obj));
  
  var url = "https://us-central1-caminandog-218818.cloudfunctions.net/notificacion_chat_caminandog";
  var params = "text="+json;
  var http = new XMLHttpRequest();
  
  http.open("GET", url+"?"+params, true);
  http.onreadystatechange = function()
  {
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
  }
  http.send(null);
    */





}


function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '">' + url + '</a>';
  })
  // or alternatively
  // return text.replace(urlRegex, '<a href="$1">$1</a>')
}


function configChat() {


  var db = firebase.database();
  var ref = db.ref("Chats_candidato_caminandog").child("chats").child(uid);

  ref.on("child_added", function (snapshot) {

    var d = snapshot.val();



    var date = new Date(d.timestamp)

    var htmlTexto = urlify(d.mensaje);


    if (d.uid === uid) {


      var heading = document.createElement("H5");
      heading.setAttribute("id", "txt2");
      var txt1 = document.createTextNode.innerHTML = htmlTexto;
      heading.innerHTML = txt1;
      document.getElementById("mySection").appendChild(heading);

      var para = document.createElement("a");
      var txt2 = document.createTextNode(date.toLocaleDateString(lang, options));
      para.appendChild(txt2);
      document.getElementById("mySection").appendChild(para);



    } else {




      var heading = document.createElement("H5");
      heading.setAttribute("id", "txt1");
      var txt1 = document.createTextNode.innerHTML = htmlTexto;
      heading.innerHTML = txt1;
      document.getElementById("mySection").appendChild(heading);

      var para = document.createElement("a");
      para.setAttribute("id", "txt2_sub");

      var filtered = usuariosArray.find(x => x.value === d.uid);
      var txt2 = document.createTextNode(date.toLocaleDateString(lang, options) + " " + filtered.text);
      para.appendChild(txt2);
      document.getElementById("mySection").appendChild(para);

    }




    recorrer_ultimo_mensaje()



  });




}


function recorrer_ultimo_mensaje() {



  var objDiv = document.getElementById("mySection");
  console.log("top dentrooo", objDiv.scrollHeight)
  objDiv.scrollTop = objDiv.scrollHeight;
}


function finalizarAtencion() {


  var r = confirm("¿Estas seguro de que finalizaste con la consulta de este usuario?");

  if (r == true) {

    var db = firebase.database();
    var ref = db.ref("Chats_candidato_caminandog").child("tabla_chat").child(uid).remove().then(function () {

      location.href = "chatsCaminandogCandidatosTabla.html";

    }).catch(function (error) {

      print("no se puede finalizar el chat " + error)


    });;


  } else {


  }



  var objDiv = document.getElementById("mySection");
  objDiv.scrollTop = objDiv.scrollHeight;

}


function verinformacioncandidato() {


  window.open('candidatos_detalle.php?idCandidato=' + uid, '_blank');


}


function cambiarAtencion() {


  var uidCaminandog = $("#ddlcolors option:selected").val();
  console.log("Seleccionar ", uid)




  var db = firebase.database();
  var chat_tabla_update = db.ref("Chats_candidato_caminandog").child("tabla_chat").child(uid);


  chat_tabla_update.update({

    uidAtencion: uidCaminandog,

  }).then(function () {


    alert("Cambiado exitosamente")

  }).catch(function (error) {


    alert("Ocurrio un error")
  });
}



window.onload = consulta_usuarios();



function consulta_usuarios() {


  var db = firebase.database();
  var ref = db.ref("Usuarios_Sistema");



  ref.orderByChild("nombre").once("value").then(snapshot => {

    if (snapshot.exists()) {

      var datos = snapshot.val();
      for (const property in datos) {


        var d = datos[property]


        var uid = "Sin dato"
        var nombre = "Sin dato"
        var email = "Sin dato"

        if (d["uid"] != undefined) {

          uid = d["uid"]

        }
        if (d["nombre"] != undefined) {

          nombre = d["nombre"]
        }
        if (d["usuario"] != undefined) {

          email = d["usuario"]

        }



        var informacionUsuariosSelect =

        {

          value: uid,
          text: nombre
        }



        usuariosArray.push(informacionUsuariosSelect)




      }

      configChat();

    }


    else {


    }

  });


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