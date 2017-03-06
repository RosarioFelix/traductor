
function traducir(){
  // llamando con ID
  var tittle = document.getElementById('form-signin-heading');
  var email = document.getElementById('inputEmail');
  var contraseña = document.getElementById('inputPassword');
   // Llamando con Clase -  remember y boton
  var recordar = document.getElementsByTagName('span')[0];
  var boton = document.getElementsByClassName('btn')[0];

  tittle.innerHTML = " Porfavor Iniciar Sesión";
  email.placeholder= "Ingrese su Email";
  contraseña.placeholder= "Contraseña";
  recordar.innerHTML= "Recuerdame";
  boton.innerHTML = "Enviar";
}
traducir();

  var record = document.getElementById("record");
  var addStudent = document.getElementsByClassName('btn')[0];
  addStudent.onclick = function() {
     var email1= document.getElementById('inputEmail').value;
     var contraseña2= document.getElementById('inputPassword').value;

    record.innerHTML = "El E-mail ingresado es <br>"+ email1 + "<p>La Contraseña ingresada es <br>" + contraseña2;
}
