const modelViewer = document.querySelector("#room-model");

// Ejemplo: Detectar cuando el modelo ha terminado de cargar
modelViewer.addEventListener('load', () => {
    console.log("¡El cuarto de Blender está listo!");
});

// Ejemplo: Si quieres cambiar la exposición o luces por código
// modelViewer.exposure = 1.5;