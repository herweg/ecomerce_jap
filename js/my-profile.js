document.addEventListener("DOMContentLoaded", function (e) {
    mostrarDatos();
});

function guardarDatos() {

    let nombre = document.getElementById("registro-nombre").value;
    let apellido = document.getElementById("registro-apellido").value;
    let edad = document.getElementById("registro-edad").value;
    let email = document.getElementById("registro-email").value;
    let tel = document.getElementById("registro-tel").value;

    let usuarioData = { nombre, apellido, edad, email, tel };

    localStorage.setItem("userdata", JSON.stringify(usuarioData));
};

function mostrarDatos() {

    let userData = JSON.parse(localStorage.getItem("userdata"));

    document.getElementById("mostrar-nombre").innerHTML = userData.nombre + " " + userData.apellido;
    document.getElementById("mostrar-edad").innerHTML = userData.edad;
    document.getElementById("mostrar-email").innerHTML = userData.email;
    document.getElementById("mostrar-tel").innerHTML = userData.tel;
};