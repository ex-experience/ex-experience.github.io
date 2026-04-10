// استيراد مكتبة Three.js من الإنترنت مباشرة
import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

// --- 1. إعداد المشهد (Scene) ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020202); // أسود سينمائي عميق
scene.fog = new THREE.FogExp2(0x020202, 0.05); // تأثير ضباب خفيف للعمق

// --- 2. إعداد الكاميرا (Camera) ---
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.z = 12;

// --- 3. إعداد المُصيّر (Renderer) ---
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// تفعيل الإضاءة الفيزيائية الدقيقة
renderer.useLegacyLights = false;
document.body.appendChild(renderer.domElement);

// --- 4. الإضاءة (Lighting) ---
// ضوء محيطي خافت جداً
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// ضوء موجه رئيسي (لخلق اللمعان)
const mainLight = new THREE.DirectionalLight(0xffffff, 3);
mainLight.position.set(5, 10, 7);
scene.add(mainLight);

// ضوء خلفي بارد (لإبراز الحواف)
const backLight = new THREE.DirectionalLight(0x88bbff, 2);
backLight.position.set(-5, -5, -5);
scene.add(backLight);

// --- 5. إنشاء المجسم (مؤقتاً شكل هندسي معقد) ---
// سيتم استبدال هذا لاحقاً بملف التنين الخاص بك (.glb)
const geometry = new THREE.TorusKnotGeometry(2.5, 0.6, 200, 32);

// خامة الكروم الفضي اللامع
const chromeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 1.0, // معدن بالكامل
  roughness: 0.15, // أملس ليعكس الضوء
});

const logoMesh = new THREE.Mesh(geometry, chromeMaterial);
scene.add(logoMesh);

// --- 6. التفاعل مع الماوس ---
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
});

// تحديث الأبعاد عند تغيير حجم النافذة
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- 7. حلقة التحريك (Animation Loop) ---
function animate() {
  requestAnimationFrame(animate);

  // دوران بطيء ومستمر للمجسم
  logoMesh.rotation.y += 0.003;
  logoMesh.rotation.x += 0.002;

  // استجابة ناعمة لحركة الماوس
  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;

  logoMesh.rotation.y += 0.05 * (targetX - logoMesh.rotation.y);
  logoMesh.rotation.x += 0.05 * (targetY - logoMesh.rotation.x);

  renderer.render(scene, camera);
}

// بدء التحريك
animate();
