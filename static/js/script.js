import * as THREE from '/static/libs/three.js/three.module.min.js';
import { OBJLoader } from '/static/libs/three.js/OBJLoader.js';

const loader = new OBJLoader();
loader.load(
    '/static/models/bb8.obj',
    function (object) {
        console.log('Model loaded successfully:', object);
        object.scale.set(0.1, 0.1, 0.1); // Adjust the scale if the model is too big
        object.position.set(0, 0, 0);    // Center the model in the scene
        scene.add(object);              // Add the model to the scene
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Logs loading progress
    },
    function (error) {
        console.error('Error loading the model:', error); // Logs any errors
    }
);
