let carroLleno = {};
let articulo = {};
let pintarCarro = {};
// let eleccionDeMoneda = document.getElementsByName("moneda");
// console.log(eleccionDeMoneda);

function mostrarCarro(array) {
    for (let i = 0; i < array.length; i++) {
        pintarCarro += `
        <hr>
        <div class="carrito list-group-item list-group-item-action">
            <div class="cartImg">
                <img class="imagenCarrito" src="${array[i].src}" alt="">
            </div>
            <div class="cartContent">
                <div>${array[i].name}</div>
                <div>Precio por unidad: ${tipoDeCambio(array[i].currency)} <span class="precioporunidad">${precioEnPesos(array[i].unitCost, array[i].currency)}</span></div>
                <div>Unidades: <input onchange="resultados()" min="0" type="number" value="${array[i].count}"></div>
                <div>Subtotal por producto: ${tipoDeCambio(array[i].currency)} <span id="subtotal${i}">Total</span></div>
            </div>
        </div>`
    }
    document.getElementById("micarrito").innerHTML = pintarCarro;
    resultados();
};

function resultados() {
    let precios = document.getElementsByClassName("precioporunidad");
    let cantidades = document.getElementsByTagName("input");
    let subtotal = 0;

    for (let i = 0; i < precios.length; i++) {
        document.getElementById("subtotal" + i).innerHTML = parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value)
        subtotal += parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);
    }
    document.getElementById("subtotalGral").innerHTML = (subtotal).toFixed(2);   
};

function precioEnPesos(costo, moneda) {
    if (moneda == "USD") {
        costo *= 40;
    }
    return costo
};

function tipoDeCambio(moneda) {
    if (moneda == "USD") {
        moneda = "UYU";
    }
    return moneda
};

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO2_URL).then(function (resultObj) {
        carroLleno = resultObj.data.articles;
        if (resultObj.status === "ok") {
            mostrarCarro(carroLleno);
        }
    })
});