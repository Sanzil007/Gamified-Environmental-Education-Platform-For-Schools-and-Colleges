// Get container
const container = document.getElementById("globe-container");

// STEP 1: Setup scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// STEP 2: Load Earth texture
const loader = new THREE.TextureLoader();
const earthTexture = loader.load(
  "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
);

// STEP 3: Create globe with natural colors only
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshPhongMaterial({
  map: earthTexture,
  shininess: 10, // keep a little shininess for realism
  transparent: true,
  opacity: 1,    // fully visible
  color: 0xffffff, // no extra tint
});
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// STEP 4: Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // soft white light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.2, 100); // natural white light
pointLight.position.set(0, 0, 10);
scene.add(pointLight);

// STEP 5: Camera position
camera.position.set(0, 0, 7);
camera.lookAt(0, 0, 0);

// STEP 6: Resize handling
window.addEventListener("resize", () => {
  renderer.setSize(container.clientWidth, container.clientHeight);
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
});

// STEP 7: Animate globe
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.0025;
  renderer.render(scene, camera);
}
animate();