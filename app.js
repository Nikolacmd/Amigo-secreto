// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
/*puntos a considerar: 
- Crear una función que permita agregar un amigo a la lista de amigos.
- Crear una función que permita sortear un amigo de la lista de amigos.
- Crear una función que permita mostrar la lista de amigos.
- Crear una función que permita reiniciar la lista de amigos.
- Antes de integrar el nombre, verifica que no esté vacío y, 
posteriormente, refleja los cambios en la visualización.
*/
//variables:
let amigos = [];

//funciones:
/*function asignarTextoElemto (elemento, texto) {
    let elementoHTML = document.querySelector (elemento); 
    elementoHTML.innerHTML = texto ;
    return;
}
*/
function agregar() {
  let nombre = document.getElementById("amigo").value;

  if (nombre.trim() === "") {
    alert("Favor de ingresar un nombre");
  } else {
    amigos.push(nombre);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Añade amigos a la lista");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}

function reiniciarLista() {
  amigos = [];
  mostrarListaAmigo();
  document.querySelector("#resultado").innerHTML = "";
}