<<<<<<< HEAD

/* ========================================= */
/* NEXUS FIREBASE INJECTION (COMMUNITY & RATING) */
/* ========================================= */
async function submitCommunity() {
    const name = document.getElementById('commName')?.value.trim();
    const email = document.getElementById('commEmail')?.value.trim();
    if (!name || !email) return alert('Please fill all fields.');
    await db.collection('Community_Family').add({ Name: name, Email: email, Timestamp: firebase.firestore.FieldValue.serverTimestamp() });
    alert('Welcome to the Elite Family.');
    document.getElementById('communityModal').style.display = 'none';
}

async function submitRating() {
    const name = document.getElementById('rateName')?.value.trim();
    const email = document.getElementById('rateEmail')?.value.trim();
    const note = document.getElementById('rateNote')?.value.trim();
    const stars = document.getElementById('rateStars')?.value;
    if (!name || !email || !stars) return alert('Please fill required fields.');
    await db.collection('Experience_Ratings').add({ Name: name, Email: email, Rating: parseInt(stars), Note: note, Timestamp: firebase.firestore.FieldValue.serverTimestamp() });
    alert('Thank you for your feedback.');
    document.getElementById('ratingModal').style.display = 'none';
}

/* FIREBASE MODALS */
async function submitToCommunity() { const n = document.getElementById('comm-name').value; const e = document.getElementById('comm-email').value; if(n && e) { await db.collection('Community_Family').add({ Name: n, Email: e, Timestamp: firebase.firestore.FieldValue.serverTimestamp() }); alert('Welcome to the Elite.'); document.getElementById('community-modal').style.display='none'; } else alert('Please fill all fields.'); }
async function submitToRating() { const n = document.getElementById('rate-name').value; const e = document.getElementById('rate-email').value; const s = document.getElementById('rate-stars').value; if(n && e) { await db.collection('Experience_Ratings').add({ Name: n, Email: e, Rating: parseInt(s), Timestamp: firebase.firestore.FieldValue.serverTimestamp() }); alert('Thank you for rating.'); document.getElementById('rating-modal').style.display='none'; } else alert('Please fill all fields.'); }

=======
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#brain-engine'), alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// المجسم المعقد (يحاكي تعقيد الشبكة العصبية)
const geometry = new THREE.IcosahedronGeometry(2, 4);

// 1. النقاط (1D)
const pointsMat = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.03, transparent: true, opacity: 1 });
const points = new THREE.Points(geometry, pointsMat);
scene.add(points);

// 2. الخطوط (2D)
const wireMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true, transparent: true, opacity: 0 });
const wireframe = new THREE.Mesh(geometry, wireMat);
scene.add(wireframe);

// 3. الكتلة العضوية المتوهجة (3D)
const solidMat = new THREE.MeshStandardMaterial({ 
    color: 0x222222, 
    emissive: 0xff003c, // الإضاءة الحمراء النابعة من الداخل
    emissiveIntensity: 0, 
    roughness: 0.2, metalness: 0.8,
    transparent: true, opacity: 0 
});
const solid = new THREE.Mesh(geometry, solidMat);
scene.add(solid);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xff003c, 0, 50); 
scene.add(pointLight);

camera.position.z = 6;

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.005; points.rotation.x += 0.003;
    wireframe.rotation.y += 0.005; wireframe.rotation.x += 0.003;
    solid.rotation.y += 0.005; solid.rotation.x += 0.003;
    renderer.render(scene, camera);
}
animate();

// ==========================================
// التوقيت السينمائي (هنا يمكنك تعديل سرعة العرض)
// ==========================================
const btn = document.getElementById('hustle-btn');

setTimeout(() => {
    // الانتقال للـ 2D بعد ثانية واحدة
    gsap.to(pointsMat, { opacity: 0.2, duration: 1 });
    gsap.to(wireMat, { opacity: 1, duration: 1 });
    btn.innerText = "EVOLVING NEURAL PATHWAYS...";
    
    setTimeout(() => {
        // الانتقال للـ 3D والانفجار الأحمر بعد 1.2 ثانية إضافية
        gsap.to(wireMat, { opacity: 0.1, duration: 1.5 });
        gsap.to(solidMat, { opacity: 1, emissiveIntensity: 1.5, duration: 1.5 });
        gsap.to(pointLight, { intensity: 10, duration: 1.5 }); 
        gsap.to(camera.position, { z: 4.5, duration: 1.5, ease: "power2.inOut" }); 
        
        setTimeout(() => {
            // اكتمال التطور وتغيير الزر
            btn.innerText = "MINDSET IS HUSTLE";
            btn.classList.add('active');
            
            setTimeout(() => {
                // سحب واجهة التحميل للأعلى وإظهار فيديو الموقع
                gsap.to('#mindset-loader', { y: '-100%', duration: 1.5, ease: "power3.inOut" });
                
                const mainSite = document.getElementById('main-site');
                mainSite.style.visibility = 'visible';
                gsap.to(mainSite, { opacity: 1, duration: 1, delay: 0.5 });

                setTimeout(startStoryTelling, 1500);

            }, 1200);

        }, 1500);

    }, 1200);

}, 1000);

// دالة كتابة النصوص على واجهة الموقع
function startStoryTelling() {
    gsap.to('.line-1', { width: '100%', duration: 2, ease: "steps(40)" });
    gsap.to('.line-2', { width: '100%', duration: 2, delay: 2, ease: "steps(40)" });
    gsap.to('.line-3', { 
        width: '100%', duration: 2, delay: 4, ease: "steps(40)",
        color: '#ff003c', textShadow: '0 0 15px rgba(255, 0, 60, 0.8)',
        onComplete: () => {
            gsap.to('.scroll-indicator', { opacity: 1, duration: 2 });
        }
    });
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// الانتقال السينمائي من واجهة العقلية إلى واجهة البطاقات القديمة
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    gsap.to('body', { opacity: 0, duration: 1, onComplete: () => {
        // هذا هو المكان الصحيح للانتقال إلى بوابة الباسوردات!
        window.location.href = "/NEXUS_FINAL/gate.html"; 
    }});
});
>>>>>>> dd887a052cef4d92b6b8bf302537c018d6cbc641
