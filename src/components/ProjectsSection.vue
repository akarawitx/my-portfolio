<!-- src/components/ProjectsSection.vue -->
<template>
  <section class="projects" id="projects">
    <div class="container">
      <div v-for="(project, i) in projects" :key="i" class="project-row" :class="{ reverse: i % 2 !== 0 }">
        <div class="project-text">
          <span class="featured-label">Project</span>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.desc }}</p>
          <div class="project-links">
            <a v-if="project.github && project.github !== '#'" :href="project.github" target="_blank" class="proj-link"
              title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a v-if="project.live && project.live !== '#'" :href="project.live" target="_blank" class="proj-link"
              title="Live">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            <a v-if="project.figma && project.figma !== '#'" :href="project.figma" target="_blank" class="proj-link"
              title="Figma">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.5 24a3.5 3.5 0 0 1 0-7H12v3.5A3.5 3.5 0 0 1 8.5 24zM5 13.5A3.5 3.5 0 0 1 8.5 10H12v7H8.5A3.5 3.5 0 0 1 5 13.5zM5 6.5A3.5 3.5 0 0 1 8.5 3H12v7H8.5A3.5 3.5 0 0 1 5 6.5zM12 3h3.5a3.5 3.5 0 1 1 0 7H12V3zM19 13.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
              </svg>
            </a>
            <a v-if="project.drive && project.drive !== '#'" :href="project.drive" target="_blank" class="proj-link"
              title="Google Drive">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.71 3.5L1.15 15l3.5 6h6.56l-6.56-12h.06L7.71 3.5zm5.87 0l6.56 11.5H13.5L7.28 3.5h6.3zM17.79 21l3.5-6-3.35-5.85-6.87 11.85h6.72z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="project-preview">
          <div class="preview-card">
            <div class="preview-dots">
              <span></span><span></span><span></span>
            </div>
            <img v-if="project.image" :src="project.image" :alt="project.title" class="preview-img"
              @click="openModal(project.images, 0)" />
            <div v-else class="preview-lines">
              <div class="p-line wide"></div>
              <div class="p-line medium"></div>
              <div class="p-line wide"></div>
              <div class="p-line short"></div>
            </div>
            <div class="preview-subcard">
              <p>{{ project.cardText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Image Modal -->
  <Teleport to="body">
    <div v-if="modalOpen" class="img-modal-overlay" @click.self="closeModal">
      <div class="img-modal-box">

        <button class="img-modal-close" @click="closeModal">✕</button>

        <div v-if="modalImages.length > 1" class="img-modal-counter">
          {{ modalIndex + 1 }} / {{ modalImages.length }}
        </div>

        <button v-if="modalImages.length > 1" class="img-modal-nav img-modal-nav--prev" @click="prevImage">‹</button>

        <div class="img-modal-viewport" @wheel.prevent="onWheel" @mousedown="onMouseDown" @mousemove="onMouseMove"
          @mouseup="onMouseUp" @mouseleave="onMouseUp" @touchstart.prevent="onTouchStart"
          @touchmove.prevent="onTouchMove" @touchend="onTouchEnd">
          <img :src="modalSrc" :alt="modalAlt" class="img-modal-img" :style="{
            transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }" draggable="false" />
        </div>

        <button v-if="modalImages.length > 1" class="img-modal-nav img-modal-nav--next" @click="nextImage">›</button>

        <div v-if="modalImages.length > 1" class="img-modal-thumbs">
          <img v-for="(img, i) in modalImages" :key="i" :src="img.src" :alt="img.alt" class="img-modal-thumb"
            :class="{ active: i === modalIndex }" @click="() => { modalIndex = i; resetZoom() }" />
        </div>

        <div class="img-modal-controls">
          <button @click="zoomOut">－</button>
          <span>{{ Math.round(zoom * 100) }}%</span>
          <button @click="zoomIn">＋</button>
          <button @click="resetZoom">Reset</button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  preview: { type: Boolean, default: false }
})

// ── Modal state ──────────────────────────────────────────
const modalOpen = ref(false)
const modalImages = ref([])
const modalIndex = ref(0)
const modalSrc = computed(() => modalImages.value[modalIndex.value]?.src ?? '')
const modalAlt = computed(() => modalImages.value[modalIndex.value]?.alt ?? '')
const zoom = ref(1)
const panX = ref(0)
const panY = ref(0)

// drag
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })

// pinch
const lastDist = ref(null)

function openModal(images, startIndex = 0) {
  modalImages.value = images
  modalIndex.value = startIndex
  modalOpen.value = true
  resetZoom()
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modalOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  modalIndex.value = (modalIndex.value - 1 + modalImages.value.length) % modalImages.value.length
  resetZoom()
}

function nextImage() {
  modalIndex.value = (modalIndex.value + 1) % modalImages.value.length
  resetZoom()
}

function resetZoom() {
  zoom.value = 1
  panX.value = 0
  panY.value = 0
}

function clampZoom(val) {
  return Math.min(Math.max(val, 0.5), 5)
}

function zoomIn() { zoom.value = clampZoom(zoom.value + 0.25) }
function zoomOut() { zoom.value = clampZoom(zoom.value - 0.25) }

// ── Mouse wheel zoom ─────────────────────────────────────
function onWheel(e) {
  const delta = e.deltaY > 0 ? -0.15 : 0.15
  zoom.value = clampZoom(zoom.value + delta)
}

// ── Mouse drag pan ───────────────────────────────────────
function onMouseDown(e) {
  isDragging.value = true
  dragStart.value = { x: e.clientX - panX.value, y: e.clientY - panY.value }
}

function onMouseMove(e) {
  if (!isDragging.value) return
  panX.value = e.clientX - dragStart.value.x
  panY.value = e.clientY - dragStart.value.y
}

function onMouseUp() { isDragging.value = false }

// ── Touch pinch-zoom + drag ───────────────────────────────
function getTouchDist(touches) {
  const dx = touches[0].clientX - touches[1].clientX
  const dy = touches[0].clientY - touches[1].clientY
  return Math.hypot(dx, dy)
}

function onTouchStart(e) {
  if (e.touches.length === 2) {
    lastDist.value = getTouchDist(e.touches)
  } else if (e.touches.length === 1) {
    isDragging.value = true
    dragStart.value = {
      x: e.touches[0].clientX - panX.value,
      y: e.touches[0].clientY - panY.value
    }
  }
}

function onTouchMove(e) {
  if (e.touches.length === 2 && lastDist.value !== null) {
    const dist = getTouchDist(e.touches)
    const delta = (dist - lastDist.value) * 0.01
    zoom.value = clampZoom(zoom.value + delta)
    lastDist.value = dist
  } else if (e.touches.length === 1 && isDragging.value) {
    panX.value = e.touches[0].clientX - dragStart.value.x
    panY.value = e.touches[0].clientY - dragStart.value.y
  }
}

function onTouchEnd() {
  isDragging.value = false
  lastDist.value = null
}

// ── Projects data ────────────────────────────────────────
const allProjects = [
  // CoOpSystem
  {
    title: 'CoOpSystem',
    desc: 'CoOpSystem คือเว็บแอปพลิเคชันสำหรับบริหารจัดการงานสหกิจศึกษา (Co-op) พัฒนาขึ้นเป็นโครงงานวิจัยของภาควิชาคอมพิวเตอร์ มหาวิทยาลัยศิลปากร ทำหน้าที่เชื่อมโยงนักศึกษา อาจารย์ สถานประกอบการ และผู้ดูแลระบบ ในกระบวนการฝึกงาน ตั้งแต่การประกาศและสมัครงาน การส่งตรวจแบบฟอร์ม ไปจนถึงการจัดการเอกสาร โดยควบคุมสิทธิ์การใช้งานผ่านระบบ RBAC ที่รองรับผู้ใช้ 6 บทบาท ด้านเทคโนโลยีที่ใช้พัฒนา ฝั่ง Frontend ใช้ Vue 3 ร่วมกับ Vite และ Axios ฝั่ง Backend พัฒนาด้วยภาษา Go และ Gin framework พร้อม JWT สำหรับยืนยันตัวตน จัดเก็บข้อมูลด้วย PostgreSQL และ Deploy ผ่าน Docker บน Vercel (Frontend) และ Google Cloud (Backend)',
    cardText: 'Vue 3 · Go (Gin) · PostgreSQL · Docker · Vercel · Google Cloud',
    github: 'https://github.com/aceticacid09/CoOpSystem',
    live: 'https://co-op-system.vercel.app/',
    image: new URL('../assets/project/seniorProject/homepage.png', import.meta.url).href,
    images: [
      { src: new URL('../assets/project/seniorProject/homepage.png', import.meta.url).href, alt: 'หน้าหลัก' },
      { src: new URL('../assets/project/seniorProject/news.png', import.meta.url).href, alt: 'หน้าข่าวสารเเละกิจกรรม' },
      { src: new URL('../assets/project/seniorProject/document.png', import.meta.url).href, alt: 'หน้าเอกสาร' },
      { src: new URL('../assets/project/seniorProject/jobs.png', import.meta.url).href, alt: 'หน้าค้นหางาน' },
      { src: new URL('../assets/project/seniorProject/student1.png', import.meta.url).href, alt: 'ส่วนของนักศึกษา' },
      { src: new URL('../assets/project/seniorProject/student2.png', import.meta.url).href, alt: 'ส่วนของนักศึกษา' },
      { src: new URL('../assets/project/seniorProject/student3.png', import.meta.url).href, alt: 'ส่วนของนักศึกษา' },
      { src: new URL('../assets/project/seniorProject/student4.png', import.meta.url).href, alt: 'ส่วนของนักศึกษา' },
      { src: new URL('../assets/project/seniorProject/company1.png', import.meta.url).href, alt: 'ส่วนของสถานประกอบการ' },
      { src: new URL('../assets/project/seniorProject/company2.png', import.meta.url).href, alt: 'ส่วนของสถานประกอบการ' },
      { src: new URL('../assets/project/seniorProject/company3.png', import.meta.url).href, alt: 'ส่วนของสถานประกอบการ' },
      { src: new URL('../assets/project/seniorProject/company4.png', import.meta.url).href, alt: 'ส่วนของสถานประกอบการ' },
      { src: new URL('../assets/project/seniorProject/teacher1.png', import.meta.url).href, alt: 'ส่วนของอาจารย์' },
      { src: new URL('../assets/project/seniorProject/teacher2.png', import.meta.url).href, alt: 'ส่วนของอาจารย์' },
      { src: new URL('../assets/project/seniorProject/teacher3.png', import.meta.url).href, alt: 'ส่วนของอาจารย์' },
      { src: new URL('../assets/project/seniorProject/teacher4.png', import.meta.url).href, alt: 'ส่วนของอาจารย์' },
      { src: new URL('../assets/project/seniorProject/teacher5.png', import.meta.url).href, alt: 'ส่วนของอาจารย์' },
      { src: new URL('../assets/project/seniorProject/teacher6.png', import.meta.url).href, alt: 'ส่วนของอาจารย์' },
    ],
  },

  // FD-net Callcenter 4141
  {
    title: 'FD-net Callcenter 4141',
    desc: 'เว็บพอร์ทัลบริการสารสนเทศสำหรับบุคลากรวัดพระธรรมกาย รองรับบริการหลักครบวงจร ทั้งการขอ/ต่ออายุ Account, คู่มือ Join Domain, FAQ แก้ปัญหา และระบบจัดหาอุปกรณ์ IT ออกแบบให้ใช้งานง่าย พร้อม Real-time Search และ Responsive Layout รองรับทุกอุปกรณ์',
    cardText: 'PHP 8 (Vanilla) · HTML5 · CSS3 · Vanilla JS · Apache/Nginx',
    github: 'https://github.com/akarawitx/fdnet-callcenter',
    live: 'https://fdnet.dhammakaya.network/services-new/',
    image: new URL('../assets/project/fdnetService/homepage.png', import.meta.url).href,
    images: [
      { src: new URL('../assets/project/fdnetService/homepage.png', import.meta.url).href, alt: 'หน้าหลัก' },
      { src: new URL('../assets/project/fdnetService/service1.png', import.meta.url).href, alt: 'หน้าบริการ1' },
      { src: new URL('../assets/project/fdnetService/service2.png', import.meta.url).href, alt: 'หน้าบริการ2' },
      { src: new URL('../assets/project/fdnetService/service3.png', import.meta.url).href, alt: 'หน้าบริการ3' },
      { src: new URL('../assets/project/fdnetService/service4.png', import.meta.url).href, alt: 'หน้าบริการ4' },
      { src: new URL('../assets/project/fdnetService/procurement1.png', import.meta.url).href, alt: 'หน้าจัดหาอุปกรณ์1' },
      { src: new URL('../assets/project/fdnetService/procurement2.png', import.meta.url).href, alt: 'หน้าจัดหาอุปกรณ์2' },
      { src: new URL('../assets/project/fdnetService/procurement3.png', import.meta.url).href, alt: 'หน้าจัดหาอุปกรณ์3' },
      { src: new URL('../assets/project/fdnetService/procurement4.png', import.meta.url).href, alt: 'หน้าจัดหาอุปกรณ์4' },
      { src: new URL('../assets/project/fdnetService/network1.png', import.meta.url).href, alt: 'หน้าเครือข่าย' },
    ],
  },

  // FunFoods
  {
    title: 'FunFoods',
    desc: 'FunFoods (Recipe Sharing Web Platform) เป็นโปรเจกต์ที่พัฒนาขึ้นในรายวิชาเตรียมโครงงานวิจัย คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร โดยมีเป้าหมายออกแบบแพลตฟอร์มออนไลน์สำหรับแบ่งปันและค้นหาสูตรอาหาร ให้ผู้ใช้สามารถอัปโหลดสูตรอาหารพร้อมรายละเอียดวัตถุดิบและขั้นตอนการทำ ค้นหาสูตรตามหมวดหมู่ วัตถุดิบ และระดับความยาก พร้อมระบบให้คะแนนและรีวิวเพื่อช่วยตัดสินใจเลือกสูตรได้ง่ายขึ้น นอกจากนี้ยังมีระบบจัดการบัญชีผู้ใช้สำหรับบันทึกสูตรโปรดและจัดการโปรไฟล์ส่วนตัว ออกแบบ UI/UX ทั้งหมดผ่าน Figma ผลงานนี้ได้รับรางวัลรองชนะเลิศอันดับ 1 จากการนำเสนอโครงงานต่อคณะกรรมการและอาจารย์ประจำภาควิชาคอมพิวเตอร์',
    cardText: 'Figma · UI/UX Design · Prototyping',
    figma: 'https://www.figma.com/design/jgGJnX3DaRVLSufUoPMFNL/FunFoods?node-id=1-325&t=byte1ObwaFxYAnTd-1',
    drive: 'https://drive.google.com/drive/folders/1XH4nwMkEY740G8jXjLrCddjpTTLKtmOZ?usp=sharing',
    image: new URL('../assets/project/FunFoods/HomePage-BeforeLogin.png', import.meta.url).href,
    images: [
      { src: new URL('../assets/project/FunFoods/HomePage-BeforeLogin.png', import.meta.url).href, alt: 'หน้าหลัก' },
      { src: new URL('../assets/project/FunFoods/HomePage-AfterLogin.png', import.meta.url).href, alt: 'หน้าหลัก-หลังจากเข้าสู่ระบบ' },
      { src: new URL('../assets/project/FunFoods/Search.png', import.meta.url).href, alt: 'หน้าค้นหาสูตรอาหาร' },
      { src: new URL('../assets/project/FunFoods/Bookmark.png', import.meta.url).href, alt: 'หน้ารายการสูตรอาหารที่บันทึก' },
      { src: new URL('../assets/project/FunFoods/Signup.png', import.meta.url).href, alt: 'หน้าสมัครสมาชิก' },
      { src: new URL('../assets/project/FunFoods/Login.png', import.meta.url).href, alt: 'หน้าเข้าสู่ระบบ' },
      { src: new URL('../assets/project/FunFoods/Share.png', import.meta.url).href, alt: 'หน้าแชร์สูตรอาหาร' },
      { src: new URL('../assets/project/FunFoods/AfterShare.png', import.meta.url).href, alt: 'หน้าหลังจากแชร์สูตรอาหาร' },
      { src: new URL('../assets/project/FunFoods/FoodDetails.png', import.meta.url).href, alt: 'หน้ารายละเอียดสูตรอาหาร' },
      { src: new URL('../assets/project/FunFoods/MyProfile.png', import.meta.url).href, alt: 'หน้าโปรไฟล์ผู้ใช้' },
      { src: new URL('../assets/project/FunFoods/MyProfile-post.png', import.meta.url).href, alt: 'หน้าโปรไฟล์เเชร์สูตรอาหาร' },
      { src: new URL('../assets/project/FunFoods/Other-Profile.png', import.meta.url).href, alt: 'หน้าโปรไฟล์ผู้ใช้อื่น' },
      { src: new URL('../assets/project/FunFoods/Other-Profile-post.png', import.meta.url).href, alt: 'หน้าโปรไฟล์ผู้ใช้อื่น' },
    ],
  },

  // MafiaSU Arttoy
  {
    title: 'MafiaSU Arttoy',
    desc: 'เว็บแอปพลิเคชัน E-Commerce สำหรับซื้อ-ขายของสะสม Art Toy พัฒนาด้วย React และ Go (Gin) พร้อมระบบ Authentication ด้วย Google OAuth + JWT และจัดการฐานข้อมูลผ่าน PostgreSQL บน Docker',
    cardText: 'React · Go (Gin) · PostgreSQL · Docker · Google OAuth · JWT',
    github: 'https://github.com/thanachotelu/MafiaSU_arttoy',
    image: new URL('../assets/project/mafiaToys/homepage.png', import.meta.url).href,
    images: [
      { src: new URL('../assets/project/mafiaToys/homepage.png', import.meta.url).href, alt: 'หน้าหลัก' },
    ],
  },

  // SA/BIS — HR Appraisal System
  {
    title: 'SA/BIS — HR Appraisal System',
    desc: 'โปรเจกต์กลุ่มพัฒนาระบบ HR Appraisal สำหรับองค์กร รองรับ 3 บทบาท ได้แก่ Chief, Manager และ Officer โดย Requirement ได้จากการสัมภาษณ์บริษัทจริง พัฒนาด้วย PHP + PostgreSQL พร้อมแสดงผลด้วย ApexCharts และ Deploy ด้วย Docker',
    cardText: 'PHP · Bootstrap · PostgreSQL · Docker · ApexCharts',
    github: 'https://github.com/thanachotelu/mafiaSU',
    image: new URL('../assets/project/mafiaSU/manager-dashboard.png', import.meta.url).href,
    images: [
      { src: new URL('../assets/project/mafiaSU/manager-dashboard.png', import.meta.url).href, alt: 'หน้าหลัก' },
    ],
  },
]

const projects = computed(() => props.preview ? allProjects.slice(0, 2) : allProjects)
</script>

<style scoped>
.projects {
  padding: 10px 0;
}

.project-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.project-row.reverse {
  direction: rtl;
}

.project-row.reverse>* {
  direction: ltr;
}

.featured-label {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

.project-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 24px;
  background: rgba(168, 85, 247, 0.06);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
}

.project-links {
  display: flex;
  gap: 12px;
}

.proj-link {
  font-size: 1.2rem;
  transition: transform 0.2s;
  display: block;
}

.proj-link:hover {
  transform: scale(1.2);
  opacity: 1;
}

.project-preview {
  position: relative;
}

.preview-card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 8px 8px 0 8px;
  position: relative;
  box-shadow: none;
  transform: perspective(800px) rotateY(-5deg);
  transition: transform 0.4s;
  /* leave room for the absolutely positioned subcard */
  margin-bottom: 40px;
}

.project-row.reverse .preview-card {
  transform: perspective(800px) rotateY(5deg);
}

.preview-card:hover {
  transform: perspective(800px) rotateY(0deg) !important;
}

.preview-dots {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.preview-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
}

.preview-dots span:first-child {
  background: #f87171;
}

.preview-dots span:nth-child(2) {
  background: #fbbf24;
}

.preview-dots span:last-child {
  background: #4ade80;
}

.preview-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: top;
  border-radius: 6px;
  margin-bottom: 0;
  display: block;
}

.preview-lines {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.p-line {
  height: 10px;
  background: #e5e7eb;
  border-radius: 5px;
}

.p-line.wide {
  width: 90%;
}

.p-line.medium {
  width: 65%;
}

.p-line.short {
  width: 40%;
}

.preview-subcard {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  font-size: 0.75rem;
  color: #555;
  line-height: 1.5;
  position: absolute;
  bottom: -24px;
  right: -24px;
  width: 220px;
  border: 1px solid #eee;
}

/* ─── Tablet (1024px) ─── */
@media (max-width: 1024px) {
  .project-row {
    gap: 40px;
  }

  .preview-subcard {
    width: 180px;
    right: -12px;
  }
}

/* ─── Mobile (768px) ─── */
@media (max-width: 768px) {
  .projects {
    padding: 60px 0;
  }

  .project-row,
  .project-row.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 32px;
    margin-bottom: 72px;
  }

  /* Show preview after text on mobile */
  .project-preview {
    order: 2;
  }

  .project-text {
    order: 1;
  }

  .preview-card {
    transform: none !important;
    margin-bottom: 36px;
  }

  .preview-subcard {
    right: 0;
    width: 180px;
    font-size: 0.7rem;
  }
}

/* ─── Small mobile (480px) ─── */
@media (max-width: 480px) {
  .project-row {
    margin-bottom: 56px;
  }

  .preview-subcard {
    position: static;
    width: 100%;
    margin-top: 12px;
    box-sizing: border-box;
  }

  .preview-card {
    margin-bottom: 0;
  }

  .project-desc {
    font-size: 0.85rem;
    padding: 14px;
  }
}

/* ── Image Modal ─────────────────────────────────────── */
.img-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.img-modal-box {
  position: relative;
  width: min(90vw, 1100px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.img-modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
}

.img-modal-viewport {
  overflow: hidden;
  border-radius: 12px;
  background: #111;
  width: 100%;
  height: min(75vh, 700px);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.img-modal-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.1s ease;
  transform-origin: center center;
}

.img-modal-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #fff;
  font-size: 0.9rem;
}

.img-modal-controls button {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  border-radius: 6px;
  padding: 4px 14px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.img-modal-controls button:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* คลิกรูปได้ */
.preview-img {
  cursor: zoom-in;
}

/* Navigation arrows */
.img-modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 2.5rem;
  line-height: 1;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;
  user-select: none;
}

.img-modal-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.img-modal-nav--prev {
  left: -56px;
}

.img-modal-nav--next {
  right: -56px;
}

/* Counter */
.img-modal-counter {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

/* Thumbnail strip */
.img-modal-thumbs {
  display: flex;
  gap: 8px;
  justify-content: center;
  overflow-x: auto;
  padding: 4px 0;
}

.img-modal-thumb {
  width: 64px;
  height: 44px;
  object-fit: cover;
  object-position: top;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.55;
  transition: opacity 0.2s, border-color 0.2s;
  flex-shrink: 0;
}

.img-modal-thumb.active {
  border-color: var(--accent);
  opacity: 1;
}

.img-modal-thumb:hover {
  opacity: 0.85;
}

/* Mobile */
@media (max-width: 768px) {
  .img-modal-nav--prev {
    left: 4px;
  }

  .img-modal-nav--next {
    right: 4px;
  }

  .img-modal-nav {
    font-size: 2rem;
    padding: 6px 12px;
  }
}
</style>