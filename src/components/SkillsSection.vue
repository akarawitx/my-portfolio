<!-- src/components/SkillsSection.vue -->
<template>
  <section class="skills" id="skills">
    <div class="container">
      <div class="skills-head">
        <p class="eyebrow">02 · Tools</p>
        <h2 class="skills-title"><span class="mark">เครื่องมือและเทคโนโลยีที่ใช้</span></h2>
        <p class="skills-sub">
          กำลังมองหาทีมที่ให้ความสำคัญกับการพัฒนาเว็บไซต์ที่เข้าถึงง่ายและใช้งานได้จริง
        </p>
      </div>

      <div v-for="group in groups" :key="group.title" class="group">
        <p class="group-label" :class="group.tone">{{ group.title }}</p>

        <div class="tool-grid">
          <div v-for="t in group.items" :key="t.name" class="tool-card" :class="group.tone">
            <div class="tool-icon">
              <img
                v-if="!broken.has(t.name)"
                :src="t.icon"
                :alt="t.name"
                loading="lazy"
                @error="onImgError(t.name)"
              />
              <span v-else class="tool-fallback">{{ initials(t.name) }}</span>
            </div>
            <p class="tool-name">{{ t.name }}</p>
            <p class="tool-desc">{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

// จัดหมวดตามเรซูเม่ของคุณ — แก้ชื่อ/desc ในนี้ได้เลยถ้าอยากเปลี่ยน
const groups = [
  {
    title: 'Programming Languages',
    tone: 'blue',
    items: [
      { name: 'Java', icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo', desc: 'พัฒนาโปรแกรมเชิงวัตถุ (OOP)' },
      { name: 'C', icon: 'https://img.icons8.com/color/48/c-programming', desc: 'พื้นฐานโครงสร้างข้อมูลและอัลกอริทึม' },
      { name: 'SQL', icon: 'https://img.icons8.com/color/48/sql', desc: 'เขียนคำสั่งจัดการฐานข้อมูล' },
      { name: 'Go', icon: 'https://img.icons8.com/color/48/golang', desc: 'เขียนโปรแกรมเชิงระบบประสิทธิภาพสูง' },
      // { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript', desc: 'ภาษาแกนหลักของฝั่ง Frontend' },
      { name: 'PHP', icon: 'https://img.icons8.com/color/48/php', desc: 'พัฒนาเว็บไซต์ฝั่ง Backend' },
      { name: 'Python', icon: 'https://img.icons8.com/color/48/python', desc: 'เขียนสคริปต์และประมวลผลข้อมูล' },
    ],
  },
  {
    title: 'Frontend',
    tone: 'mint',
    items: [
      { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5', desc: 'โครงสร้างเนื้อหาของหน้าเว็บ' },
      { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3', desc: 'จัดวางและออกแบบหน้าตาเว็บ' },
      { name: 'Vue.js', icon: 'https://img.icons8.com/color/48/vue-js', desc: 'เฟรมเวิร์กหลักที่ใช้พัฒนาเว็บนี้' },
      { name: 'React.js', icon: 'https://img.icons8.com/color/48/react-native', desc: 'สร้าง UI แบบแบ่ง component' },
      { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/bootstrap', desc: 'จัด layout ด้วย component สำเร็จรูป' },
      { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/tailwind-css', desc: 'ออกแบบ UI ด้วย utility class' },
    ],
  },
  {
    title: 'Backend',
    tone: 'sun',
    items: [
      { name: 'Node.js', icon: 'https://img.icons8.com/color/48/nodejs', desc: 'รัน JavaScript ฝั่ง Backend' },
      { name: 'Express.js', icon: 'https://img.icons8.com/color/48/express-js', desc: 'สร้าง REST API ด้วย Node.js' },
      { name: 'Go (Gin)', icon: 'https://img.icons8.com/color/48/golang', desc: 'พัฒนา Backend ด้วย Go framework' },
      { name: 'RESTful API', icon: '', desc: 'ออกแบบและเชื่อมต่อ API' },
    ],
  },
  {
    title: 'Database',
    tone: 'lav',
    items: [
      { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/48/postgreesql', desc: 'ฐานข้อมูลเชิงสัมพันธ์ประสิทธิภาพสูง' },
      { name: 'MySQL', icon: 'https://img.icons8.com/color/48/mysql-logo', desc: 'ออกแบบและจัดการฐานข้อมูล' },
    ],
  },
  {
    title: 'Tools & Technologies',
    tone: 'rose',
    items: [
      { name: 'Git', icon: 'https://img.icons8.com/color/48/git', desc: 'ควบคุมเวอร์ชันของโค้ด' },
      { name: 'GitHub', icon: 'https://img.icons8.com/color/48/github', desc: 'จัดเก็บและทำงานร่วมกันบนโค้ด' },
      { name: 'Docker', icon: 'https://img.icons8.com/color/48/docker', desc: 'รันแอปในสภาพแวดล้อม container' },
      { name: 'Vite', icon: 'https://img.icons8.com/color/48/vite', desc: 'เครื่องมือ build ที่รวดเร็ว' },
      { name: 'Postman', icon: 'https://img.icons8.com/color/48/postman-api', desc: 'ทดสอบและตรวจสอบ API' },
      { name: 'Figma', icon: 'https://img.icons8.com/color/48/figma', desc: 'ออกแบบ UI/UX และทำ prototype' },
    ],
  },
]

// กันไอคอนพัง: ถ้าลิงก์รูปโหลดไม่ขึ้น (เช่น "RESTful API" ที่ไม่มีโลโก้จริง)
// จะเปลี่ยนไปโชว์ตัวย่อในกรอบสีแทนอัตโนมัติ ไม่มีวันเป็นไอคอนแตก
const broken = reactive(new Set())
function onImgError(name) { broken.add(name) }
function initials(name) {
  const clean = name.replace(/[().]/g, '')
  const parts = clean.split(/[\s./]+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}
// "RESTful API" ไม่มีลิงก์ไอคอน (icon: '') ให้ถือว่า broken ตั้งแต่แรกเลย
groups.forEach((g) => g.items.forEach((t) => { if (!t.icon) broken.add(t.name) }))
</script>

<style scoped>
.skills {
  --ink: var(--text-primary);
}

/* ───────── Heading ───────── */
.skills-head { margin-bottom: 40px; }

.eyebrow {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.skills-title {
  margin-top: 8px;
  font-family: var(--font-body);
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  font-weight: 700;
  line-height: 1.5;
  color: var(--ink);
}
.mark {
  background: linear-gradient(transparent 62%, rgba(37, 99, 235, 0.24) 62%);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.skills-sub {
  max-width: 100%;
  margin-top: 8px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-muted);
}

/* ───────── Groups ───────── */
.group { margin-top: 32px; }
.group:first-of-type { margin-top: 0; }

.group-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 5px 14px;
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
}
.group-label::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}
.group-label.blue { background: #dbeafe; color: #1d4ed8; }
.group-label.mint { background: #d1fae5; color: #047857; }
.group-label.sun  { background: #fef3c7; color: #b45309; }
.group-label.lav  { background: #ede9fe; color: #6d28d9; }
.group-label.rose { background: #ffe4e6; color: #be123c; }

/* ───────── Tool cards ───────── */
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.tool-card {
  padding: 18px 16px;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 16px;
  box-shadow: 5px 5px 0 var(--ink);
  transition: transform 0.15s, box-shadow 0.15s;
}
.tool-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--ink);
}

.tool-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  margin-bottom: 12px;
  border: 2px solid var(--ink);
  border-radius: 12px;
}
.tool-icon img { width: 26px; height: 26px; object-fit: contain; }
.tool-fallback {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
}

.tool-card.blue .tool-icon { background: #dbeafe; }
.tool-card.mint .tool-icon { background: #d1fae5; }
.tool-card.sun  .tool-icon { background: #fef3c7; }
.tool-card.lav  .tool-icon { background: #ede9fe; }
.tool-card.rose .tool-icon { background: #ffe4e6; }

.tool-name {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--ink);
}

.tool-desc {
  margin-top: 4px;
  font-size: 0.78rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* ───────── Responsive ───────── */
@media (max-width: 480px) {
  .tool-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px; }
  .tool-card { padding: 14px 12px; box-shadow: 4px 4px 0 var(--ink); }
}
</style>