const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#dimension-engine'), antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// إنشاء مجسم هندسي فخم (Icosahedron)
const geometry = new THREE.IcosahedronGeometry(2.5, 2);

// المرحلة 1: النقاط (1D)
const pointsMat = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.03, transparent: true, opacity: 1 });
const points = new THREE.Points(geometry, pointsMat);
scene.add(points);

// المرحلة 2: الخطوط الهندسية (2D)
const wireMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true, transparent: true, opacity: 0 });
const wireframe = new THREE.Mesh(geometry, wireMat);
scene.add(wireframe);

// المرحلة 3: المجسم الواقعي (3D)
const solidMat = new THREE.MeshStandardMaterial({ 
    color: 0x111111, metalness: 0.9, roughness: 0.1, 
    transparent: true, opacity: 0 
});
const solid = new THREE.Mesh(geometry, solidMat);
scene.add(solid);

// إضاءة المجسم الـ 3D
const pointLight = new THREE.PointLight(0xff003c, 5, 50);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.z = 7;

// دوران مستمر للمجسم
function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.003; points.rotation.x += 0.002;
    wireframe.rotation.y += 0.003; wireframe.rotation.x += 0.002;
    solid.rotation.y += 0.003; solid.rotation.x += 0.002;
    renderer.render(scene, camera);
}
animate();

// ---- محرك التحول البعدي (The State Machine) ----
let currentPhase = 1;

function evolveDimension() {
    const statusText = document.getElementById('status-text');
    const btn = document.getElementById('evolve-btn');

    if (currentPhase === 1) {
        // الانتقال إلى 2D
        gsap.to(pointsMat, { opacity: 0.1, duration: 1.5 });
        gsap.to(wireMat, { opacity: 1, duration: 1.5 });
        
        statusText.innerText = "PHASE: 2D [ WIREFRAME BLUEPRINT ]";
        statusText.style.color = "#ffffff";
        statusText.style.borderColor = "#ffffff";
        
        btn.innerText = "INITIATE PHASE 3 (REALITY)";
        btn.style.borderColor = "#ffffff";
        btn.style.color = "#ffffff";
        
        currentPhase = 2;
    } 
    else if (currentPhase === 2) {
        // الانتقال إلى 3D
        gsap.to(wireMat, { opacity: 0.2, duration: 2 });
        gsap.to(solidMat, { opacity: 1, duration: 2 });
        
        // تقريب الكاميرا بحركة سينمائية
        gsap.to(camera.position, { z: 5, duration: 2, ease: "power2.inOut" });
        
        statusText.innerText = "PHASE: 3D [ PHYSICAL MANIFESTATION ]";
        statusText.style.color = "#ff003c";
        statusText.style.borderColor = "#ff003c";
        
        btn.innerText = "SYSTEM FULLY EVOLVED";
        btn.style.borderColor = "#ff003c";
        btn.style.color = "#ff003c";
        btn.style.pointerEvents = "none"; // إيقاف الزر
        
        currentPhase = 3;

        // --- الكود الجديد: القفزة السينمائية لـ TRACK 35 ---
        setTimeout(() => {
            // تعتيم الشاشة تدريجياً
            gsap.to("body", { backgroundColor: "#000", duration: 1.5 });
            gsap.to("#hud-interface", { opacity: 0, duration: 1.5 });
            gsap.to(scene.children, { opacity: 0, duration: 1.5 }); // إخفاء الـ 3D
            
            // الانتقال للملف الجديد بعد التعتيم
            setTimeout(() => {
                window.location.href = "track35-story.html"; 
            }, 1500);
        }, 3000); // ينتظر 3 ثوانٍ بعد اكتمال التطور قبل أن يبدأ بالانتقال
    }
}

// ضبط الحجم عند تغيير الشاشة
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});