//principal
//instanciar

var valor=document.getElementById("barra-busqueda-id").value;
let busquedaUsuario;

document.addEventListener("DOMContentLoaded", () => {
  
  let search = document.querySelector("#boton-buscar");
    search.addEventListener("click", buscaGuifs);
  
  let inputsearch=document.querySelector("#barra-busqueda-id");
    inputsearch.addEventListener("input", mostrarPalabrasSugeridas);

  const characterList = document.querySelector('.seleccionaresteul');
    characterList.addEventListener('click', toggleDone);

  const hashtags = document.querySelector('.seleccionaresteul');
    hashtags.addEventListener('click', mostrarPalabrasSugeridasHashTags);

  const characterList2 = document.querySelector('.ulversion2');
    characterList2.addEventListener('click', toggleDone);

 
  let btnMisGuifos = document.querySelector('#link-mis-guifos');
    btnMisGuifos.addEventListener('click', function(){
      document.getElementById('seccion-a-ocultar').style.display="none";
      document.getElementById('mis-guifos').style.display="block";
    }, false);

  // let botonchanging= document.getElementById("boton-crear-guifosindex");
  //   botonchanging.addEventListener("click", changeTopicNight);

 // const tendenciasclasevar = document.querySelector('.guifos-tendencias');
 // tendenciasclasevar.addEventListener('mouseover', function(e) {
 // e.preventDefault();
 // let variable=e.target.firstChild.classList[0];

  //tagName.style.display="inline-flex";
  //if (variable.value==="cabecera-trends") {
  //  ".cabecera-trends".style.display="block";
  //}
  //variable.style.display="inline-flex";
 // console.log(variable);
  //let clasecabecera=e.target.children[1];
  //clasecabecera.style.display="inline-flex";
//}, false);


});

let gifos = new GiphyAPI();

let ui = new UI();

async function GetGifs() {
  let serverResponse = await gifos.GetGiphy();
  ui.displayTrends(serverResponse.gif.data);
}

let ten = new TEN();

async function GetGifsTend() {
  let serverResponse = await gifos.GetGiphy();
  ten.displayTrends(serverResponse.gif.data);
}

function buscaGuifs() {
  busquedaUsuario = document.querySelector("#barra-busqueda-id");
  //console.log(busquedaUsuario.value);
  let respuesta = gifos.searchGuifos(busquedaUsuario.value);
  respuesta.then(function (guifosrespuesta) {
    //	for (i=1; i<20 ; i++) {
    //	console.log(guifosrespuesta.gif.data[i].images.original.url);
    //}
    ui.mostrarGuifosBuscados(guifosrespuesta.gif.data);
  });
}

 function mostrarPalabrasSugeridas() {
    busquedaUsuario = document.querySelector("#barra-busqueda-id");
    console.log(busquedaUsuario.value);

    var mostrarbarra = document.getElementById("container-palabras-busqueda");
    mostrarbarra.style.display="block";
    document.getElementById("section-movil").style.margin = '160px 0 0 0'
    let change1= document.getElementById("boton-buscar");
      change1.style.backgroundColor = "#F7C9F3";
      change1.style.color="#110038";
      //change1.classList.add("btn-buscar-night");

   document.getElementById("lupa-inactive").style.display="none";
   document.getElementById("lupa-active").style.display="inline-flex";

    if (busquedaUsuario.value.length ==0) {
          mostrarbarra.style.display="none";
          document.getElementById("section-movil").style.margin = '0px 0 0 0'
          change1.style.backgroundColor = "#E6E6E6";
          change1.style.color="#B4B4B4";
          document.getElementById("lupa-inactive").style.display="inline-flex";
          document.getElementById("lupa-active").style.display="none";
        }

  let respuesta = gifos.searchGuifos(busquedaUsuario.value);
  respuesta.then(function (guifosrespuesta) {
    
   ui.mostrarSugerenciasBuscadas(guifosrespuesta.gif.data);
  });
  
}

function mostrarPalabrasSugeridasHashTags() {
    busquedaUsuario = document.querySelector("#barra-busqueda-id");
    console.log(busquedaUsuario.value);

    var mostrarbarra2 = document.getElementById("div-hashTag");
    mostrarbarra2.style.display="block";
    document.getElementById("section-movil").style.margin = '130px 0 0 0'


    if (busquedaUsuario.value.length ==0) {
          mostrarbarra2.style.display="none";
          document.getElementById("section-movil").style.margin = '0px 0 0 0'

        }

  let respuesta = gifos.searchGuifos(busquedaUsuario.value);
  respuesta.then(function (guifosrespuesta) {
  
   ui.mostrarSugerenciasBuscadasHashTags(guifosrespuesta.gif.data);
  });
  
}




//-------------FAVOR NO MIX--------------------------------------------
//function ultimisihope () {

//    'use strict';
//  var clasesugeridos=document.querySelector('#seleccionaresteul');
//  document.addEventListener("DOMContentLoaded", () => {
//    clasesugeridos.addEventListener('click', function(e){
//      if (e.target){
//        console.log(e.target.innerText)
//      }

//    }, false);
//  });
// }

//-----------------------LIMIT---------------------------------------------------

function toggleDone (event) {
    console.log(event.target);

    let varultima=event.target.innerText;
    document.getElementById("barra-busqueda-id").value = event.target.innerText;

    let respuesta = gifos.searchGuifos(event.target.innerText);
    let valor=document.getElementById("barra-busqueda-id").value;
  //  document.getElementById("barra-busqueda-id").setAttribute('value','varultima');
  
    console.log(varultima);
    console.log(event.target.innerText.trim());
    var ocultarbarra = document.getElementById("container-palabras-busqueda");
    ocultarbarra.style.display="none";

   // console.log(respuesta);
  respuesta.then(function (guifosrespuesta) {
    //  for (i=1; i<20 ; i++) {
    //  console.log(guifosrespuesta.gif.data[i].images.original.url);
    //}

    ui.mostrarGuifosBuscados(guifosrespuesta.gif.data);
  });
  } 


function cambioTopic() {
  document.getElementById("topicid").setAttribute("href", "styles/styles_night.css");
}


// async function changeTopicNight() {
//   let botonclasenew= document.querySelector(".boton-crear-noche");
//   await botonclasenew;
//   return
//     cambioTema3();

// }
    

document.addEventListener("DOMContentLoaded", async () => {
  await GetGifs();
  await GetGifsTend();
  document.getElementById("dia").addEventListener("click", cambioTema2);
  document.getElementById("noche").addEventListener("click", cambioTema);
  document.getElementById("dropdown").addEventListener("click", cambioMenu);
  document.getElementById("noche").addEventListener("click", setearbotonclass);
  document.getElementById("noche").addEventListener("click", cambioTopic);

});