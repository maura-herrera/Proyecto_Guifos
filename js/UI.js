//interfaz de usuario
class UI {
  displayTrends(gif) {
    var gifsResultados = document.querySelector(".resultados-sugeridos"); //crear el div en html
    //	for ( var i=0; i<4; ++){
    //		//console.log (gif[i].url);
    //	gifsResultados.innerHTML +=`<div><img src="${gif[i].images.original.url}" alt="${}" ></div>`;
    //}
    for (var i = 0; i < 4; i++) {
      //console.log(gif[i].images.original.url);
      gifsResultados.innerHTML += `<div><div class="cabecera">#${gif[i].title
        .substring(0, gif[i].title.indexOf("GIF"))
        .replace(/ /g, "")}<img src="styles/assets/button_close.svg" alt="icono close"></div><img src="${
        gif[i].images.original.url
      }" alt="${gif[i].title}" class="gifsugeridos"><a id="ver-mas">Ver más...</a></div>`;
    }
    //console.log(gif);
  }
   mostrarGuifosBuscados(gif) {
    var gifsTendencias = document.querySelector(".guifos-tendencias"); //crear el div en html
    gifsTendencias.innerHTML = "";
    //	for ( var i=0; i<4; ++){
    //		//console.log (gif[i].url);
    //	gifsResultados.innerHTML +=`<div><img src="${gif[i].images.original.url}" alt="${}" ></div>`;
    //}
    for (var i = 4; i < 24; i++) {
      //console.log(gif[i].images.original.url);
      gifsTendencias.innerHTML += `<div class="tendencias-clase"><div class="cabecera-trends" id="cabecera-id">#${gif[
        i
      ].title
        .substring(4, gif[i].title.indexOf("GIF"))
        .replace(/ /g, "")}</div><img src="${
        gif[i].images.original.url
      }" alt="${gif[i].title}" class="gifs-tendencias-indiv" id="gifs-images-indiv"></div>`;
    }
    console.log(gif);
  }

  //ESTE ES UN INTENTO PARA LA BUSQUEDA SUGERIDA
  mostrarSugerenciasBuscadas(gif) {
    var SugergifsBuscados = document.querySelector(".seleccionaresteul"); //selecciona el div de html
    SugergifsBuscados.innerHTML = "";
   
   for (var i = 0; i < 3; i++) {
           // console.log(gif[i].images.original.url);
           SugergifsBuscados.innerHTML += `<li><a class="titulo-busqueda">
           ${gif[i].title.substring(0, gif[i].title.indexOf("GIF"))}</a></li>`;

           console.log(`${gif[i].title}`)
        }
        console.log(gif);

      
     
    }

  mostrarSugerenciasBuscadasHashTags(gif) {
    var SugergifsBuscados = document.querySelector(".ulversion2"); //selecciona el div de html
    SugergifsBuscados.innerHTML = "";
   
   for (var i = 0; i < 3; i++) {
           // console.log(gif[i].images.original.url);
           SugergifsBuscados.innerHTML += `<li><a class="titulo-busqueda2">
           ${gif[i].title.substring(0, gif[i].title.indexOf("GIF"))}</a></li>`;

           console.log(`${gif[i].title}`)
        }
        console.log(gif);

      
     
    }


}

/////----------------------//////////////////////////
class TEN {
  displayTrends(gif) {
    var gifsTendencias = document.querySelector(".guifos-tendencias"); //crear el div en html
    //	for ( var i=0; i<4; ++){
    //		//console.log (gif[i].url);
    //	gifsResultados.innerHTML +=`<div><img src="${gif[i].images.original.url}" alt="${}" ></div>`;
    //}
    for (var i = 4; i < 24; i++) {
      //console.log(gif[i].images.original.url);
      gifsTendencias.innerHTML += `<div class="tendencias-clase"><div class="cabecera-trends" id="c2">#${gif[
        i
      ].title
        .substring(4, gif[i].title.indexOf("GIF"))
        .replace(/ /g, "")}</div><img src="${
        gif[i].images.original.url
      }" alt="${gif[i].title}" class="gifs-tendencias-indiv" id="id-images-gifs"></div>`;
    }
    //console.log(gif);
  }
}

function cambioMenu() {
  var x = document.getElementById("submenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function cambioTema() {
  document
    .getElementById("theme")
    .setAttribute("href", "styles/styles_night.css");
}

function cambioTema2() {
  document.getElementById("theme").setAttribute("href", "styles/styles.css");
}


function setearbotonclass() {
  document.getElementById("boton-crear-guifosindex").className = "boton-crear-noche";

}




// function getThemeIndex() {
//     return new Promise(function(resolve, reject) {
//     var req = new document.querySelector(".boton-crear-noche");
//         req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

//         req.onload = function() {
//           if (req.status == 200) {
//             resolve(JSON.parse(req.response));
//           }
//           else {
//             reject();
//           }
//         };

//         req.send();
//     })
// }

// let postId = 1;
// getPosts().then(r => {
//     return r;
// }).then(r => {
//   console.log(r.find(x => x.id === 1));
// })



//function outside(event){
//	var submenu=
//	document.getElementById('submenu');
//	if(event.target !=submenu &&
///	event.target.parentNode !=submenu){
//		submenu.style.display='none';
//	}}
