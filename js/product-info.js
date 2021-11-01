var comentarios = "";
var estrellita = "";
var estrellitaNueva = "";
var product = {};
var productoVerdadero = {};
var today = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

function showImagesGallery(array) {

    let mostrarImagenes = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        if (i < 1) {
            mostrarImagenes += `   
            <div class="carousel-item active">
                <img src="` + imageSrc + `" alt="1" class="d-block w-100">
            </div>
            `
        } else {
            mostrarImagenes += `
            <div class="carousel-item">
                <img src="` + imageSrc + `" alt="2" class="d-block w-100">
            </div>
        `
        }

        document.getElementById("productImagesGallery").innerHTML = mostrarImagenes;
    }
};

function showEstrellitas(puntuacion) {

    if (puntuacion == 1) {
        estrellitaNueva = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>`
    }
    else if (puntuacion == 2) {
        estrellitaNueva = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>`
    }
    else if (puntuacion == 3) {
        estrellitaNueva = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>`
    }
    else if (puntuacion == 4) {
        estrellitaNueva = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>`
    }
    else if (puntuacion == 5) {
        estrellitaNueva = `
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>`
    }

};

function showCommentary(array) {

    for (let i = 0; i < array.length; i++) {
        let comentario = array[i];

        if (comentario.score == 1) {
            estrellita = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>`
        }
        else if (comentario.score == 2) {
            estrellita = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>`
        }
        else if (comentario.score == 3) {
            estrellita = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>`
        }
        else if (comentario.score == 4) {
            estrellita = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>`
        }
        else if (comentario.score == 5) {
            estrellita = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>`
        }

        comentarios +=
            `
        <div class="list-group-item">
        ${estrellita}
        <div>${comentario.description}</div>
        <div>${comentario.user}</div>
        <div>${comentario.dateTime}</div>
        </div>`
    };
    document.getElementById("productComent").innerHTML = comentarios;

};

function nuevoComentario() {

    let comentarioNuevo = document.getElementById("comentario").value;
    let estrellasNuevas = document.getElementById("estrellas").value;
    showEstrellitas(estrellasNuevas);

    let nuevoComment =
        `
        <div class="list-group-item">
        ${estrellitaNueva}
        <div>${comentarioNuevo}</div>
        <div>${sessionStorage.getItem("usuario")}</div>
        <div>${today}</div>
        </div>
    `

    document.getElementById("productComent").innerHTML += nuevoComment;
    document.getElementById("comentario").value = "";
};

function verificarComentario() {
    const commentNuevo = document.getElementById("comentario");
    const sendNuevo = document.getElementById("botonComment");

    commentNuevo.addEventListener("keyup", (e) => {
        const i = e.currentTarget.value
        if (i === "") {
            sendNuevo.disabled = true;
        } else {
            sendNuevo.disabled = false;
        }
    })
};

// verificarComentario();

function showRelated(array) {
    let listaRelacionados = "";
    for (let i = 0; i < array.length; i++) {
        let otraVariable = array[i];

        listaRelacionados =`
            <img src="${otraVariable.imgSrc}" alt="">
        `;
        document.getElementById("productRelated").innerHTML += listaRelacionados;
        console.log(listaRelacionados);
    }

};

function mostrarRelacionados(array) {

    let relacionadosAMostrar = "";

    for (let i of array) {

        let productindex = productoVerdadero[i];

        relacionadosAMostrar += `
        <div class="d-block mb-4 col-6 card mr-3" style="width: 18rem;">
            <img src="${productindex.imgSrc}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productindex.name}</h5>
                <p class="card-text">${productindex.description}</p>
            </div>
            <div class="card-body">
                <a href="Enlace_individual_por_producto" class="card-link">Ver producto</a>
            </div>
        </div>`;
    };
    document.getElementById("productRelated").innerHTML = relacionadosAMostrar;

};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    //relatedProducts
    getJSONData(PRODUCT_INFO_URL).then(function (datosProdInfo) {
        if (datosProdInfo.status === "ok") {

            product = datosProdInfo.data;

            let productName = document.getElementById("productName");
            let productDescription = document.getElementById("productDescription");
            let productCost = document.getElementById("productCost");
            let productCount = document.getElementById("productCount");
            let productCategory = document.getElementById("productCategory");

            productName.innerHTML = product.name;
            productDescription.innerHTML = product.description;
            productCost.innerHTML = product.currency + " " + product.cost;
            productCount.innerHTML = product.soldCount;
            productCategory.innerHTML = product.category;

            showImagesGallery(product.images);
        }
    });

    //todos los productos
    getJSONData(PRODUCTS_URL).then(function (datosProductos) {
        if (datosProductos.status === "ok") {
            productoVerdadero = datosProductos.data;
        }
        mostrarRelacionados(product.relatedProducts);
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (datosProdInfoComment) {
        if (datosProdInfoComment.status === "ok")
            productComment = datosProdInfoComment.data;

        showCommentary(productComment);
    });
});