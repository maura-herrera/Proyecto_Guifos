var streamRecorder;
var recorder;
var blob;
var urlBlobGif;
var urlBlobPng;
var downloadRecorder;

const video = document.getElementById("camara-guifos");
function obtenerStream() {
  const videoConstraints = {
    audio: false,
    video: {
      width: { min: 1 },
      height: { min: 1 },
    // width: { exact: 832 },
    // height: { exact: 440 },
    },
  };
  navigator.mediaDevices
    .getUserMedia(videoConstraints)
    .then((stream) => {
      streamRecorder = stream;
      // Older browsers may not have srcObject
      if ("srcObject" in video) {
        video.srcObject = streamRecorder;
      } else {
        // Avoid using this in new browsers, as it is going away.
        video.src = window.URL.createObjectURL(streamRecorder);
      }
      video.onloadedmetadata = (e) => video.play();
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
}

function comenzarGrabacion() {
  recorder = RecordRTC(streamRecorder, {
    type: "gif",
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,

    onGifRecordingStarted: () => {
      tomarCapturaVideo(); // Acá va la función de tomar la captura de pantalla.
    },
  });
  // This method resets the recorder. So that you can reuse single recorder instance many times.
  recorder.reset();
  recorder.startRecording();
}

async function detenerGrabacion() {
  await recorder.stopRecording();
  video.srcObject = null;
  blob = await recorder.getBlob(); // Este es el objeto blob que se va a enviar a la api de giphy
  downloadRecorder = blob;
  urlBlobGif = await URL.createObjectURL(blob);
  streamRecorder.getTracks().forEach((track) => track.stop()); //se apaga la cámara
  recorder.reset();
  recorder.destroy();
  recorder = null;
}

function tomarCapturaVideo() {
  let canvas = document.createElement("canvas"); // Dynamically Create a Canvas Element
  canvas.id = "extractFileCanvas"; // Give the canvas an id
  canvas.width = video.videoWidth; // Set the width of the Canvas
  canvas.height = video.videoHeight; // Set the height of the Canvas
  let ctx = canvas.getContext("2d"); // Get the "CTX" of the canvas
  ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // Draw your image to the canvas
  urlBlobPng = canvas.toDataURL("image/png"); // This will save your image as a //png file in the base64 format.
}
