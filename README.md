# Interactive 3D Portfolio 🚀

Welcome to my interactive web portfolio! This project is a responsive Single Page Application (SPA) designed to showcase technical skills, interactive projects, and a custom 3D environment in a fluid and visually engaging layout.

The site features native support for **Light and Dark Modes**, mobile responsiveness optimization, and smooth real-time rendering.

---

## 📸 Project Preview

* **Interactive 3D Environment**: Real-time rendering of a digital technical room layout with full orbital camera controls.
* **"My Work" Section**: A project showcase utilizing a clean accordion interface with smooth, high-definition video previews (16:9 Aspect Ratio).
* **Multimedia & Lighting Controls**: Background audio stream controller coupled with dynamic exposure sliders to manipulate the 3D model's illumination in real time.

---

## 🛠️ Technologies Used

* **HTML5 & CSS3**: Semantic structure and modern layouts powered by CSS Variables (`:root`), Flexbox, and Media Queries for complete mobile responsiveness.
* **JavaScript (ES6+)**: Custom DOM manipulation logic, an optimized theme-adaptive particle engine, and multimedia event handlers.
* **[<model-viewer>](https://modelviewer.dev/)**: Google's web component utilized to natively and efficiently render the 3D asset (`.glb`) within the browser.
* **Rive Animation**: High-performance vector animations driven by State Machines to achieve fluid user interface interactions.

---

## ⚙️ Key Features Implemented

### 1. Theme-Adaptive Particle Engine (Optimized)
The visual engine safely spawns a hardware-friendly maximum of 25 floating particles in real time. These particles automatically swap their tone, contrast, and glow effects via CSS variables (`--particle-color`) when toggling between light and dark themes. It utilizes the `will-change: transform` property to prevent main-thread thread bottlenecks.

### 2. Camera Coordinates & Target Synchronization
Precise tracking script to handle the viewport orientation of `<model-viewer>`. The *Reset Camera* function synchronizes the exact mathematical parameters (`camera-orbit` and `camera-target`) via JavaScript, seamlessly returning the user to the default frontal position regardless of previous tracking rotations.

### 3. Refined Media Player Card
A fully custom media layout embedded directly into the sidebar flow. It features clean text labels, custom track ranges styled with `accent-color` for volume and exposure adjustments, and standard symbol assets that maintain consistent contrast against active background values.

## 📂 Project Structure

```text
├── assets/
│   └── 3d/
│       └── Practica2.glb               # Environment 3D model asset (Optimized)
├── Avatar.jpeg                         # Author's profile photo
├── Cicada.mp3                          # Background audio loop file
├── index.html                          # Main document structure
├── main.js                             # Interaction layer, particle engine, and theme toggles
├── Practica_Carlos_Morales.blend       # Blender 5.1 original source file
├── README.md                           # Project documentation
├── Rive.mp4                            # Bear animation preview video
└── style.css                           # Global stylesheets and theme variables

👨‍💻 Author
Carlos Morales - Computer Systems Engineering Student - TecNM
GitHub: @TamerLynx26260
