const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#dimension-engine'), alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// المجسم الميكانيكي (ترس الساعة)
const geometry = new THREE.TorusKnotGeometry(1.8, 0.4, 150, 20);
const rolexGold = 0xd4af37;

// (1D) المرحلة 1: ذرات الوقت (الذهب)
const pointsMat = new THREE.PointsMaterial({ color: rolexGold, size: 0.025, transparent: true, opacity: 1 });
const points = new THREE.Points(geometry, pointsMat);
scene.add(points);

// (2D) المرحلة 2: المخطط الهندسي للترس
const wireMat = new THREE.MeshBasicMaterial({ color: rolexGold, wireframe: true, transparent: true, opacity: 0 });
const wireframe = new THREE.Mesh(geometry, wireMat);
scene.add(wireframe);

// (3D) المرحلة 3: الترس المعدني المكتمل
const solidMat = new THREE.MeshStandardMaterial({ 
    color: rolexGold, 
    metalness: 1.0, 
    roughness: 0.15, 
    transparent: true, opacity: 0 
});
const solid = new THREE.Mesh(geometry, solidMat);
scene.add(solid);

// إضاءة لإبراز لمعان الذهب
const pointLight = new THREE.PointLight(0xffffff, 6, 50); 
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

camera.position.z = 6;

// دوران المجسم ببطء كالساعة
function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.003; points.rotation.x += 0.001;
    wireframe.rotation.y += 0.003; wireframe.rotation.x += 0.001;
    solid.rotation.y += 0.003; solid.rotation.x += 0.001;
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
        statusText.innerText = "PHASE: 2D [ MECHANICAL BLUEPRINT ]";
        btn.innerText = "INITIATE PHASE 3 (PRODUCTION)";
        currentPhase = 2;
    } else if (currentPhase === 2) {
        gsap.to(camera.position, { z: 5, duration: 2, ease: "power2.inOut" });
        gsap.to(wireMat, { opacity: 0.2, duration: 2 });
        gsap.to(solidMat, { opacity: 1, duration: 2 });
        statusText.innerText = "SYSTEM FULLY EVOLVED";
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
        currentPhase = 3;

        // الانتقال لملف القصة
        setTimeout(() => {
            gsap.to('body', { backgroundColor: '#000', duration: 1.5 });
            gsap.to('#hud-interface', { opacity: 0, duration: 1.5 });
            gsap.to(scene.children, { opacity: 0, duration: 1.5 });

            setTimeout(() => {
                window.location.href = "studio-story.html";
            }, 1500);
        }, 3000);
    }
}

// تعديل الأبعاد عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});