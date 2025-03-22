import * as THREE from '/static/libs/three.module.min.js';
import { OBJLoader } from '/static/libs/OBJLoader.js';

console.log("Script is running...");

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for smoother edges
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040, 1); // Adjust intensity
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Resize handler for responsiveness
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Load a 3D model using OBJLoader
const loader = new OBJLoader();
console.log("Attempting to load model...");
loader.load(
    '/static/models/bb8.obj',
    function (object) {
        console.log('Model loaded successfully:', object);
        object.scale.set(0.1, 0.1, 0.1); // Scale down the model
        object.position.set(0, 0, 0);    // Center the model in the scene
        scene.add(object);              // Add to the scene
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Log loading progress
    },
    function (error) {
        console.error('Error loading model:', error); // Log any errors
    }
);

// Position the camera and animate the scene
camera.position.set(0, 0, 5); // Adjust the camera position for better viewing

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

