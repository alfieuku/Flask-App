import * as THREE from '../libs/three.js/three.module.min.js';
import { OBJLoader } from '../libs/three.js/OBJLoader.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Load a 3D model using OBJLoader
const loader = new OBJLoader();
loader.load('/static/models/bb8.obj', function (object) {
    object.scale.set(0.1, 0.1, 0.1); // Scale down the model
    scene.add(object);
}, undefined, function (error) {
    console.error('Error loading model:', error);
});

// Position the camera and animate the scene
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
