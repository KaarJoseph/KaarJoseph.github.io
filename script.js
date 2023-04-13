const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}

var i=0;

var elemento = document.getElementById("titulo1")
elemento,addEventListener("click", function(){
   // alert("click en titulo");
   elemento.innerHTML = i
})


 elemento,addEventListener("mouseover", function(){
     i = i +1
     console.log(i)
})
/*
var menu = document.getElementById("menu")
var listas=menu.getElementById("li")
console.log(listas)*/

/*var list = document.querySelector("ul li")
console.log(list)*/

var list2 = document.querySelectorAll("aside par_impar:nth-child(odd)")
console.log(list2)


function crearElemento() {
    // Crear un nuevo elemento <p>
    var nuevoParrafo = document.createElement("p");
  
    // Crear el contenido del nuevo elemento
    var texto = document.createTextNode("Este es un nuevo párrafo");
  
    // Añadir el contenido al nuevo elemento
    nuevoParrafo.appendChild(texto);
  
    // Añadir el nuevo elemento al div existente
    var divExistente = document.getElementById("miDiv");
    divExistente.appendChild(nuevoParrafo);
  }
  

  function addLink(){
    console.log("add link 1")
  }