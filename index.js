import raf from 'raf';

// -- Scene
const scene = new THREE.Scene();

// -- Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.lookAt(scene.position);

// -- Renderer
const renderer = new THREE.WebGLRenderer({ antialias : true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000, 1 );
renderer.shadowMap.enabled = true;
document.getElementById('root').appendChild(renderer.domElement);

// -- Lights
const light = new THREE.DirectionalLight( 0xffffff, 1.8 );
light.position.set( 80, 100, 90 );
scene.add(light);

// -- Grid Helper
const gridHelper = new THREE.GridHelper(20, 4);
scene.add(gridHelper);

// -- Buildings
const geometry = new THREE.BoxGeometry( 50, 50, 50 );
const material = new THREE.MeshLambertMaterial({color : 0xe0ded7});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);



const update = () => {
	
	renderer.render(scene, camera);

	raf(update);
};

update();

