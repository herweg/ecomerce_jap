var comentarios = "";
var estrellita = "";
var estrellitaNueva = "";
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

        mostrarImagenes += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

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

verificarComentario()

function showRelated(array) {

    // for(i=0; i < productosrelacionados.lengh ; i++){arrayproductos[i]{ pintar...} }

    for (let i = 0; i < array.length; i++) {
        let unaVariable = array[i];
        let relacionados = "";

        relacionados +=
            `
        `+ producto[i].imgSrc + `

        <p>TEST        `+ unaVariable.relatedProducts + `
         </p>
        `

        document.getElementById("productRelated").innerHTML = relacionados;
    }
};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (datosProductos) {
        if (datosProductos.status === "ok")
            producto = datosProductos.data;

    });

    getJSONData(PRODUCT_INFO_URL).then(function (datosProdInfo) {
        if (datosProdInfo.status === "ok") {
            product = datosProdInfo.data;

            document.getElementById("productName").innerHTML = product.name;
            document.getElementById("productDescription").innerHTML = product.description;
            document.getElementById("productCost").innerHTML = product.currency + " " + product.cost;
            document.getElementById("productCount").innerHTML = product.soldCount;
            document.getElementById("productCategory").innerHTML = product.category;
            productRelated.innerHTML = product.relatedProducts;

            showImagesGallery(product.images);

            showRelated(datosProdInfo);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (datosProdInfoComment) {
        if (datosProdInfoComment.status === "ok")
            productComment = datosProdInfoComment.data;

        showCommentary(productComment);
    });

});