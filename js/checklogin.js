document.addEventListener("DOMContentLoaded", function(e){
    checkLogin();
});

//Pinta el nombre de usuario en el header
document.getElementById("saludo").innerHTML= "Bienvenido " + ": " + sessionStorage.getItem("usuario");