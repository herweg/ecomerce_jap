function saludo(){
    //Se crea el usuario en base al correo que ingresa
    var usuario = document.getElementById("correo").value;
    sessionStorage.setItem("usuario", usuario);
}