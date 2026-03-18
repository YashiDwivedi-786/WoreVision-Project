// CAMERA TRY-ON FUNCTION

const video = document.getElementById("camera");

async function startCamera(){

if(!video) return;

try{

const stream = await navigator.mediaDevices.getUserMedia({
video: true
});

video.srcObject = stream;

}catch(error){

alert("Camera access denied or not supported.");

}

}



// STOP CAMERA

function stopCamera(){

if(!video) return;

let stream = video.srcObject;

let tracks = stream.getTracks();

tracks.forEach(track => track.stop());

video.srcObject = null;

}