// Agrega un escuchador de cambios de autenticación
firebase.auth().onAuthStateChanged(function (user) {
  if (!user) {
    // Si el usuario ya no está autenticado, redirige a la página deseada
    location.href = "http://localhost/sgac_reingenieria/login/index.html";
    // location.href =  "https://sgac2.caminandog.com.mx/login/index.html";
    Swal.fire('¡Cerrado!', 'Tu sesión ha sido cerrada con éxito.', 'success');
  }
});

function cerrarSesion() {

  // var r = confirm("¿Estas seguro que quieres cerrar sesión?");

  // if (r == true) {
  //   firebase.auth().signOut().then(function () {
  //     // Sign-out successful.
  //   }).catch(function (error) {
  //     // An error happened.
  //   });
  // } else {


  // }

  Swal.fire({
    title: '¿Estás seguro que quieres cerrar sesión?',
    showCancelButton: true,
    confirmButtonText: 'Sí, cerrar sesión',
    cancelButtonText: 'Cancelar',
    icon: 'warning'
  }).then((result) => {
    if (result.isConfirmed) {
      firebase.auth().signOut().then(function () {
        Swal.fire('¡Cerrado!', 'Tu sesión ha sido cerrada con éxito.', 'success');
      }).catch(function (error) {
        Swal.fire('Error', 'Ha ocurrido un error al cerrar la sesión.', 'error');
      });
    }
  });
}