const modelViewer = document.querySelector('#room-model');
const resetBtn = document.querySelector('#btn-reset');
const musicUpload = document.querySelector('#music-upload');
const audio = document.querySelector('#bg-audio');
const trackName = document.querySelector('#track-name');

// 1. Lógica del Reset de Cámara (En el aire)
function resetCamera() {
    modelViewer.cameraOrbit = "45deg 75deg 10m";
    
    // Elevamos el target a 2 metros de altura para que no de en el piso
    modelViewer.cameraTarget = "0m 2m 0m"; 
    
    modelViewer.fieldOfView = "auto";
    modelViewer.jumpCameraToGoal();
}

resetBtn.addEventListener('click', resetCamera);

// 2. Lógica para subir y reproducir tu propia música
musicUpload.addEventListener('change', function() {
    const files = this.files;
    if (files.length > 0) {
        const file = files[0];
        const url = URL.createObjectURL(file);
        
        audio.src = url;
        audio.play();
        trackName.innerText = `Now Playing: ${file.name}`;
    }
});