<!-- src/components/Header.vue -->
<template>
  <!-- ═════ แถบเมนูด้านข้าง (จอกว้าง) ═════ -->
  <nav class="rail" aria-label="เมนูหลัก">
    <a href="#home" class="rail-brand" aria-label="กลับหน้าแรก">
      <img :src="photo" alt="" />
    </a>

    <a v-for="link in links" :key="link.id" :href="hrefOf(link.id)" class="rail-link"
      :class="{ active: isActive(link.id) }" :aria-current="currentOf(link.id)">
      <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
        <path v-for="d in link.paths" :key="d" :d="d"></path>
      </svg>
      <span>{{ link.label }}</span>
    </a>

    <span class="rail-sep"></span>

    <a :href="resumeUrl" download class="rail-cv">
      <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
        <path v-for="d in cvPaths" :key="d" :d="d"></path>
      </svg>
      <span>CV</span>
    </a>
  </nav>

  <!-- ═════ แถบด้านบน + แฮมเบอร์เกอร์ (จอแคบ) ═════ -->
  <header class="topbar" :class="{ scrolled: isScrolled || menuOpen }">
    <div class="topbar-inner">
      <a href="#home" class="brand" @click="closeMenu">
        <img :src="logo" alt="Akarawit" class="logo-img" />
      </a>

      <button
        class="burger"
        :class="{ open: menuOpen }"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="เปิด/ปิดเมนู"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <nav id="mobile-menu" class="dropdown" :class="{ active: menuOpen }" aria-label="เมนูหลัก">
      <a v-for="(link, i) in links" :key="link.id" :href="hrefOf(link.id)" class="dd-link"
        :class="{ active: isActive(link.id) }" :aria-current="currentOf(link.id)" @click="closeMenu">
        <span class="dd-num">{{ numberOf(i) }}</span>
        <span>{{ link.label }}</span>
      </a>

      <a :href="resumeUrl" download class="dd-cv" @click="closeMenu">
        <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
          <path v-for="d in cvPaths" :key="d" :d="d" />
        </svg>
        ดาวน์โหลดเรซูเม่
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/white-Photoroom.png'
import photo from '../assets/akarawit-applyjob.png'

const resumeUrl = '/Akarawit_Resume.pdf'

const links = [
  { id: 'home', label: 'หน้าแรก', paths: ['M3 11.5 12 4l9 7.5', 'M5.5 10v9.5h13V10', 'M10 19.5v-5h4v5'] },
  { id: 'education', label: 'การศึกษา', paths: ['M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5'] },
  { id: 'skills', label: 'เครื่องมือ', paths: ['m16 18 6-6-6-6', 'm8 6-6 6 6 6'] },
  { id: 'projects', label: 'ผลงาน', paths: ['M4 4h6.5v6.5H4z', 'M13.5 4H20v6.5h-6.5z', 'M4 13.5h6.5V20H4z', 'M13.5 13.5H20V20h-6.5z'] },
  { id: 'contact', label: 'ติดต่อ', paths: ['M3 6h18v12H3z', 'M3.5 6.5 12 13l8.5-6.5'] },
]
const cvPaths = ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 13h6', 'M9 17h6']

// section ที่ใช้ตรวจว่ากำลังดูส่วนไหนอยู่ → จับคู่กับปุ่มเมนู
// (id 'hero' คือส่วนแรกของหน้า → ไฮไลต์ปุ่ม "หน้าแรก")
const sectionIds = ['hero', 'education', 'skills', 'projects', 'contact']
const menuOf = { hero: 'home' }

const menuOpen = ref(false)
const isScrolled = ref(false)
const active = ref('home')
let observer = null

function hrefOf(id) { return '#' + id }
function isActive(id) { return active.value === id }
function currentOf(id) { return active.value === id ? 'true' : undefined }
function numberOf(i) { return '0' + (i + 1) }
function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }
function onKeydown(e) { if (e.key === 'Escape') closeMenu() }

// กันพลาดที่ขอบบน/ล่างของหน้า ที่ section อาจไม่ตัดกลางจอ
function onScroll() {
  isScrolled.value = window.scrollY > 24
  if (window.scrollY < 40) active.value = 'home'
  else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active.value = 'contact'
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // section ไหนตัดกับเส้นกลางจอ = section ที่กำลังดูอยู่
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          active.value = menuOf[entry.target.id] || entry.target.id
        }
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<style scoped>
.icon {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}

/* ═════════ Side rail (จอกว้าง) ═════════ */
.rail {
  display: none;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: max-content;      /* ขยายตามข้อความที่ยาวที่สุดอัตโนมัติ */
  min-width: 74px;
  padding: 12px 8px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 2.5px solid var(--text-primary);
  border-radius: 22px;
  box-shadow: 5px 5px 0 var(--text-primary);
}

.rail-brand {
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 6px;
  border: 2.5px solid var(--text-primary);
  border-radius: 50%;
  overflow: hidden;
  background: #dbeafe;
  transition: box-shadow 0.2s;
}
.rail-brand:hover { box-shadow: 0 0 0 3px var(--accent); opacity: 1; }
.rail-brand img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 15%;   /* ← เลื่อนกรอบขึ้น/ลง ให้เห็นใบหน้า */
  transform: scale(1.35);     /* ← ซูมเข้า (1 = ไม่ซูม) */
  transform-origin: 50% 28%;
}

.rail-link,
.rail-cv {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 10px 2px 8px;
  text-align: center;      /* ให้ข้อความอยู่กึ่งกลางเสมอ */
  white-space: nowrap;     /* ห้ามตัดบรรทัด */
  border: 2px solid transparent;
  border-radius: 14px;
  font-size: 0.64rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--text-muted);
  transition: background 0.2s, color 0.2s, box-shadow 0.15s, transform 0.15s;
}

.rail-link:hover { background: #eff6ff; color: var(--text-primary); opacity: 1; }
.rail-link.active {
  background: var(--accent);
  border-color: var(--text-primary);
  color: #fff;
  font-weight: 600;
  box-shadow: 3px 3px 0 var(--text-primary);
}

.rail-sep {
  width: 60%;
  height: 2px;
  margin: 4px 0;
  background: rgba(15, 23, 42, 0.12);
}

.rail-cv {
  border-color: var(--text-primary);
  background: #fff;
  color: var(--text-primary);
  font-weight: 600;
  box-shadow: 3px 3px 0 var(--text-primary);
}
.rail-cv:hover { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--text-primary); opacity: 1; }

/* ═════════ Top bar (จอแคบ) ═════════ */
.topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  border-bottom: 2px solid var(--text-primary);
  transition: box-shadow 0.25s;
}
/* พอเลื่อนลงมาหรือเปิดเมนู เพิ่มเงาบางๆ ให้แถบลอยขึ้น */
.topbar.scrolled {
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.1);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;               /* ← ความสูงแถบด้านบน */
  padding: 0 24px;
}

.brand { display: flex; align-items: center; }
.logo-img {
  --logo-w: 110px;            /* ← ขนาดโลโก้: ปรับเลขนี้ตัวเดียว */
  width: var(--logo-w);
  height: calc(var(--logo-w) / 2.4);
  object-fit: cover;
  object-position: 50% 49.5%;
}

.burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: #fff;
  border: 2px solid var(--text-primary);
  border-radius: 12px;
  box-shadow: 3px 3px 0 var(--text-primary);
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.burger:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--text-primary); }
.burger span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.2s;
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 16px;
  width: min(340px, calc(100vw - 32px));
  padding: 8px;
  background: #fff;
  border: 2.5px solid var(--text-primary);
  border-radius: 18px;
  box-shadow: 5px 5px 0 var(--text-primary);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
}
.dropdown.active { opacity: 1; visibility: visible; transform: translateY(0); }

.dd-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}
.dd-link:hover { background: #f1f5f9; opacity: 1; }
.dd-link.active { background: #eff6ff; color: var(--accent); }
.dd-num {
  width: 22px;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-muted);
}
.dd-link.active .dd-num { color: var(--accent); }

.dd-cv {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  padding: 12px;
  background: var(--accent);
  color: #fff;
  border: 2px solid var(--text-primary);
  border-radius: 12px;
  box-shadow: 3px 3px 0 var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
}
.dd-cv:hover { opacity: 1; }
.dd-cv .icon { width: 18px; height: 18px; }

@media (max-width: 480px) {
  .topbar-inner { padding: 0 16px; height: 56px; }
  .logo-img { --logo-w: 108px; }
}

/* ═════════ สลับเป็น Side rail เมื่อจอกว้างพอ ═════════ */
@media (min-width: 1200px) and (min-height: 600px) {
  .rail { display: flex; }
  .topbar { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .dropdown, .burger span, .rail-link, .rail-cv { transition: none; }
}
</style>