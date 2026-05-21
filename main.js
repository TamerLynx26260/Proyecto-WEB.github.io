const modelViewer = document.querySelector('#room-model');
const audio = document.querySelector('#bg-audio');
const playPauseBtn = document.querySelector('#play-pause-btn');
const musicIcon = document.querySelector('#music-icon');
const volumeSlider = document.querySelector('#volume-slider');
const lightSlider = document.querySelector('#light-slider');
const resetBtn = document.querySelector('#btn-reset');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');
const body = document.documentElement;

// 1. Inicialización
if (audio) audio.volume = 0.2;

// 2. Control de Música
playPauseBtn?.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(e => console.log("Clic de usuario necesario"));
        if (musicIcon) musicIcon.innerText = "⏸";
    } else {
        audio.pause();
        if (musicIcon) musicIcon.innerText = "▶";
    }
});

// 3. Slider de Volumen
volumeSlider?.addEventListener('input', (e) => {
    if (audio) audio.volume = e.target.value;
});

// 4. Lógica de Iluminación
if (lightSlider && modelViewer) {
    lightSlider.min = "0";
    lightSlider.max = "4"; 
    lightSlider.step = "0.1";

    lightSlider.addEventListener('input', (e) => {
        const exposureValue = e.target.value;
        modelViewer.exposure = exposureValue;
        
        // Ajuste dinámico del fondo del modelo según la exposición
        const brightness = (exposureValue / 4) * 255;
        const isDark = body.getAttribute('data-theme') === 'dark';
        if (!isDark) {
            modelViewer.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness + 10})`;
        }
    });
}

// 5. Reset de Cámara
resetBtn?.addEventListener('click', () => {
    if (modelViewer) {
        modelViewer.cameraOrbit = "180deg 75deg 10m";
        modelViewer.cameraTarget = "0m 1m 0m";
        modelViewer.jumpCameraToGoal();
    }
});

// 6. Acordeón de Trabajos (Corregido para permitir video grande)
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.toggle-icon');
        const parentItem = this.parentElement;
        
        // Toggle de clase activa para el diseño CSS
        parentItem.classList.toggle('active');
        
        // Ajuste de altura dinámica (300px era muy poco para el video)
        if (parentItem.classList.contains('active')) {
            content.style.maxHeight = "1000px"; // Espacio suficiente para el video grande
            if (icon) icon.innerText = "×";
        } else {
            content.style.maxHeight = "0px";
            if (icon) icon.innerText = "+";
        }
    });
});

// 7. SISTEMA DE PARTÍCULAS OPTIMIZADO (Adaptativo)
function createParticle() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    // Límite para no sobrecargar el navegador
    if (container.childElementCount > 25) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2 + 'px';
    const duration = Math.random() * 8 + 6 + 's';
    const delay = Math.random() * 4 + 's';

    Object.assign(particle.style, {
        left: Math.random() * 100 + 'vw',
        width: size,
        height: size,
        animationDuration: duration,
        animationDelay: delay
    });

    container.appendChild(particle);

    // Limpieza automática al terminar la animación
    particle.addEventListener('animationend', () => particle.remove());
}

// 8. Control de Tema (Dark/Light)
themeToggle?.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.removeAttribute('data-theme');
        themeIcon.innerText = "🌙";
        if (modelViewer) modelViewer.style.backgroundColor = "#f3e5f5";
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.innerText = "☀️";
        if (modelViewer) modelViewer.style.backgroundColor = "#121212";
    }
});

// Inicialización al cargar
window.onload = () => {
    // Iniciar generación de partículas
    setInterval(createParticle, 500);
};