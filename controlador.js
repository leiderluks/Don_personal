// controlando etiquetas con el done 
// 1. almacenar en memoria(CREAR UNA VARIABLE)
// LA ETIQUATA QUE QUIERO CONTROLAR 

let etiquetaImagen = document.getElementById("fotografia")

// 2. controlando nuestras etiquetas
// 2.1 controlar es cambiar la fuente (src) de una etiqueta
etiquetaImagen.src="./img/death4.jpg"

// 2.2 controlar es cambiar el contenido de texto de una etiqueta 
let etiquetaTitulo = document.getElementById("titulo")
etiquetaTitulo.textContent = "Historia"

// 2.3 controlar es agregar estilos 
etiquetaTitulo.classList.add('fuente', 'alineado')

// 2.4 controlar es remover estilos
let etiquetaParrafo = document.getElementById("parrafo")
etiquetaParrafo.classList.remove("text-danger")

// 2.5 controlar es detectar eventos
let etiquetaBotton = document.getElementById("boton")
etiquetaBotton.addEventListener("click", function(evento){
    alert("estamos haciendo clic")
})
