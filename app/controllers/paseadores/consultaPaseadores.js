function consulta_alta() {
  var email = document.getElementById("emailalta").value
  email = email.trim()

  if(email!=""&&email.includes('@')){
    var db = firebase.database();
    var ref = db.ref("Candidatos");
    var refPaseadores = db.ref("Paseadores");

    ref.orderByChild('email').equalTo(email).once("value").then(snapshot => {
      if (snapshot.exists()){
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          alert("El correo ingresado ya se encuentra asociado al candidato "+childData.nombre+" "+childData.apellidopa+" "+childData.apellidoma)
          window.location.href = "candidatos_detalle.html?idCandidato="+childKey;
        });
      }else{
        refPaseadores.orderByChild('email').equalTo(email).once("value").then(snapshote => {
          if (snapshote.exists()){
            snapshote.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
              alert("El correo ingresado ya se encuentra asociado al paseador "+childData.nombre+" "+childData.apellidopa+" "+childData.apellidoma)
            });
            
          }else{
            window.location.href = "altaPaseadores.php?email="+email;
          }
        });

      }
    });    
  }else{
    alert("Ingresa un correo electronico valido")
  }
}

function consulta_baja() {
  var email = document.getElementById("emailbaja").value
  email = email.trim()

  if(email!=""&&email.includes('@')){
    var db = firebase.database();
    var ref = db.ref("Candidatos");
    var refPaseadores = db.ref("Paseadores");

    ref.orderByChild('email').equalTo(email).once("value").then(snapshot => {
      if (snapshot.exists()){
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          //alert("El correo ingresado ya se encuentra asociado al candidato "+childData.nombre+" "+childData.apellidopa+" "+childData.apellidoma)
          window.location.href = "bajaPaseadores.html?email="+childData.email;
        });
      }else{
        refPaseadores.orderByChild('email').equalTo(email).once("value").then(snapshote => {
          if (snapshote.exists()){
            snapshote.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              //alert("El correo ingresado ya se encuentra asociado al paseador "+childData.nombre+" "+childData.apellidopa+" "+childData.apellidoma)
              window.location.href = "bajaPaseadores.php?email="+childData.email;
            });
            
          }else{
            alert("No existe ningun candidato o paseador registrado con ese email")
            //window.location.href = "https://sgac.caminandog.com.mx/altaPaseadores.html?email="+email;
          }
        });

      }
    });    
  }else{
    alert("Ingresa un correo electronico valido")
  }
}

