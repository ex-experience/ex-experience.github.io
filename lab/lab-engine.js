const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#dimension-engine'), alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.OctahedronGeometry(2, 0);

const pointsMat = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.05, transparent: true, opacity: 1 });
const points = new THREE.Points(geometry, pointsMat);
scene.add(points);

const wireMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true, transparent: true, opacity: 0 });
const wireframe = new THREE.Mesh(geometry, wireMat);
scene.add(wireframe);

const solidMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.1, transparent: true, opacity: 0 });
const solid = new THREE.Mesh(geometry, solidMat);
scene.add(solid);

const pointLight = new THREE.PointLight(0xff003c, 5, 50); 
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.z = 7;

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.002; points.rotation.x += 0.002;
    wireframe.rotation.y += 0.002; wireframe.rotation.x += 0.002;
    solid.rotation.y += 0.002; solid.rotation.x += 0.002;
    renderer.render(scene, camera);
}
animate();

let currentPhase = 1;

function evolveDimension() {
    const statusText = document.getElementById('status-text');
    const btn = document.getElementById('evolve-btn');

    if (currentPhase === 1) {
        gsap.to(pointsMat, { opacity: 0.1, duration: 1.5 });
        gsap.to(wireMat, { opacity: 1, duration: 1.5 });
        statusText.innerText = "PHASE: 2D [ STRUCTURAL BLUEPRINT ]";
        btn.innerText = "INITIATE PHASE 3 (SYNTHESIS)";
        currentPhase = 2;
    } else if (currentPhase === 2) {
        gsap.to(camera.position, { z: 5, duration: 2, ease: "power2.inOut" });
        gsap.to(wireMat, { opacity: 0.2, duration: 2 });
        gsap.to(solidMat, { opacity: 1, duration: 2 });
        statusText.innerText = "SYSTEM FULLY EVOLVED";
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
        currentPhase = 3;

        setTimeout(() => {
            gsap.to('body', { backgroundColor: '#000', duration: 1.5 });
            gsap.to('#hud-interface', { opacity: 0, duration: 1.5 });
            gsap.to(scene.children, { opacity: 0, duration: 1.5 });

            setTimeout(() => {
                window.location.href = "lab-story.html";
            }, 1500);
        }, 3000);
    }
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});