// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// funcion que permite agregar amigos
function agregarAmigos() {
  const nombreAmigo = document.getElementById("amigo").value;
  console.log("nombres=" + nombreAmigo);
  console.log("---------arreglo------ "+amigos); 
  
  limpiarResultado();
  limpiarEntrada();
  
  if (nombreAmigo !== "") {
    amigos.push(nombreAmigo);
    
    actualizaListaAmigos();
  } else {
    alert("Por favor, inserte el nombre");
    document.getElementById("amigo").value = "";
  }

  //limpiarEntrada();
document.getElementById("amigo").focus();
  return;
}

//funcion que actualiza la lista de amigos 	
function actualizaListaAmigos() {	
    let listaUl = "<ul>"; 	
	
    amigos.forEach((nombre) => {	
        listaUl += `<li>${nombre}</li>`; 	
    });	
	
    listaUl += "</ul>"; 	
	
    agregarElementAmigos("#listaAmigos", listaUl);	
}	

//funcion que permite sortearo seleccionar un amigo 
function sortearAmigo() {
    limpiarEntrada();
    document.getElementById("amigo").focus();
    
    if ((amigos.length >=1) && (amigos.length< 3)){
        alert ("Debe ingresar al menos tres Nombres");
        return;
    }
    if (amigos.length === 0)
    {alert ("No has ingresado un nombre")
    return;
    }
    
    let nombreAlAzar = Math.floor(Math.random()*amigos.length);
    let nombreSeleccionado = amigos[nombreAlAzar];

    //agregarElemento ("#resultado", `¡tu amigo secreto es ${nombreSeleccionado}!`);
    agregarElemento2("#resultado",nombreSeleccionado);
    
    console.log ("nombre de amigo seleccionado =" +nombreSeleccionado );
    
   // amigos = [];
    actualizaListaAmigos ();
}

// funcione de texto
/*function agregarElemento (elementoResultado, texto){
    let elementoHTML = document.querySelector (elementoResultado);
    elementoHTML.innerHTML = texto
}
*/
function agregarElementAmigos(elementoListaAmigos, nombre) {
  let elementoHTML = document.querySelector(elementoListaAmigos);
  //elementoHTML.innerHTML = "¡tu amigo secreto es! " +nombre;
  elementoHTML.innerHTML =  nombre;
}

function agregarElemento2(elementoResultado, nombreSorteado) {
  let elementoHTML = document.querySelector(elementoResultado);
  //elementoHTML.innerHTML = "¡tu amigo secreto es! " +nombre;
  elementoHTML.innerHTML = "¡Tu amigo secreto es! " +nombreSorteado;
  amigos=[];
}


//**** */
// funcion de limpiado de caja 
function limpiarEntrada () {
    let entrada =document.querySelector("#amigo");
    entrada.value= "";
}

function limpiarResultado() {
  let resultado = document.querySelector("#resultado");
  //resultado.value = "";
resultado.innerHTML="";
}


