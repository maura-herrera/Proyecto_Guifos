const imagenPrevia = document.getElementById("imagen-previa");
const giphyAPI = new GiphyAPI();
var gifUpload;

function comenzar() {
  obtenerStream();
}

function capturar() {
  comenzarGrabacion();
}

function regresar() {
  document.getElementById("container-video1").style.display = "none";
  document.getElementById("ventana-info1").style.display = "block";
}

async function detener() {
  await detenerGrabacion();
  imagenPrevia.src = urlBlobPng; // Imagen estatica, captura de pantalla
  // imagenPrevia.src=urlBlobGif; // Acá se se asigna la url del blob del gif para ver la vista previa del gif
}

function mostrarMisGifos() {
  const guifosCreados = document.getElementById("guifos-creados");
  guifosCreados.innerHTML = "";

  let misGifosLocalStorage = localStorage.getItem("mysGuifsSubidos");
  if (misGifosLocalStorage) {
    misGifosLocalStorage = misGifosLocalStorage.split(",");
    for (let i = 0; i < misGifosLocalStorage.length; i++) {
      const url = misGifosLocalStorage[i];

      const imgGif = document.createElement("img");
      imgGif.src = "https://media.giphy.com/media/" + url + "/giphy.gif";

      guifosCreados.appendChild(imgGif);
    }
  }
}

async function subirGuif() {
  //return new Promise(resolve=>{
  //    setTimeout (()=>{
  //        resolve(

  document.getElementById("imagen-previa").style.display = "none";

  let formData = new FormData();
  formData.append("api_key", "3fFbdAyTunA1vFkDs0HTeVwGidodcdaQ");
  formData.append("username", "mauramelissaherrera");
  formData.append("file", blob);

  const responseUpload = await giphyAPI.uploadGuifos(formData);

  let misGifosLocalStorage = localStorage.getItem("mysGuifsSubidos");

  gifUpload = responseUpload.data.id;

  if (misGifosLocalStorage) {
    misGifosLocalStorage = responseUpload.data.id + "," + misGifosLocalStorage;
  }


  else {
    misGifosLocalStorage = responseUpload.data.id;
  }
  localStorage.setItem("mysGuifsSubidos", misGifosLocalStorage);
  mostrarMisGifos();

  document.getElementById("container-video1").style.display = "none";

  document.getElementById("guifo-listo").style.display = "block";

  document.getElementById("imagen-previa-miniatura").src = urlBlobPng;

  // )
  //     }

  //        )
  //}

  //   );
}

var url = location.href;
localStorage.setItem("url", url);

function loadUrl() {
  // Use execCommand or leave the feature off
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.value = `https://media2.giphy.com/media/${gifUpload}/200.gif`;
  input.select();

  const result = document.execCommand("copy");
  if (result === "unsuccessful") {
    console.error(`Failed to copy text. ${result}`);
  }
}

//when button clicked
document.querySelector("#btn-copy-link").addEventListener("click", loadUrl);
document
  .querySelector("#btn-download-gif")
  .addEventListener("click", downloadGif);

function downloadGif() {
  invokeSaveAsDialog(downloadRecorder);
}

//Declaración de funciones para mostrar mis guifos

function ocultar1() {
  document.getElementById("ventana-info1").style.display = "none";
}

function mostrar1() {
  document.getElementById("container-video1").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cancelar-btn").addEventListener("click", regresar);
  document.getElementById("btn-star").addEventListener("click", comenzar);
  document.getElementById("capturar-video").addEventListener("click", capturar);
  document.getElementById("detener-video").addEventListener("click", detener);
  document.getElementById("subir-guifo").addEventListener("click", subirGuif);

  document.getElementById("btn-star").addEventListener("click", comenzar);
  document
    .getElementById("repetir-captura")
    .addEventListener("click", comenzar);

  document.getElementById("btn-star").addEventListener("click", ocultar1);
  document.getElementById("btn-star").addEventListener("click", mostrar1);
  document.getElementById("guifo-listo").style.display = "none";

 // document.querySelector('#link-mis-guifos').addEventListener('click', mostrarMisGifos);

  // document
  //   .getElementById("btn-copy-link")
  //   .addEventListener("click", copyLinkGuifo);
});
