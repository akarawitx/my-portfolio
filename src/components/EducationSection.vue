<!-- src/components/EducationSection.vue -->
<template>
  <section class="edu" id="education">
    <div class="edu-head">
      <p class="eyebrow">01 · การศึกษา</p>
      <h2 class="edu-title"><span class="mark">ประวัติการศึกษา</span></h2>
      <p class="edu-sub">
        พื้นฐานด้านเทคโนโลยีสารสนเทศ ที่ต่อยอดมาสู่การพัฒนาเว็บไซต์และการออกแบบ UX/UI
      </p>
    </div>

    <article v-for="item in education" :key="item.school" class="edu-card">
      <div class="edu-top">
        <span class="tag">EDUCATION</span>
        <span class="status"><i class="status-dot"></i>{{ item.status }}</span>
      </div>

      <div class="edu-school">
        <div class="school-mark">
          <img :src="item.logo" :alt="'ตราสัญลักษณ์' + item.school" />
        </div>
        <div>
          <h3 class="school-name">{{ item.school }}</h3>
          <p class="school-en">{{ item.schoolEn }}</p>
        </div>
      </div>

      <p class="edu-major">{{ item.major }}</p>

      <div class="stats">
        <div v-for="s in item.stats" :key="s.label" class="stat" :class="s.tone">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>

      <div class="focus">
        <p class="focus-label">สิ่งที่ได้เรียนรู้</p>
        <ul class="chips">
          <li v-for="c in item.focus" :key="c">{{ c }}</li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script setup>
import suLogo from '../assets/silpakorn-logo.png'

const education = [
  {
    logo: suLogo,
    school: 'มหาวิทยาลัยศิลปากร',
    schoolEn: 'Silpakorn University',
    major: 'วิทยาศาสตรบัณฑิต (วท.บ.) เทคโนโลยีสารสนเทศ',
    status: 'สำเร็จการศึกษา',
    stats: [
      { value: 'อันดับ 2', label: 'เกียรตินิยม', tone: 'gold' },
      { value: '3.24', label: 'เกรดเฉลี่ยสะสม (GPAX)', tone: 'blue' },
      { value: '2569', label: 'ปีที่สำเร็จการศึกษา', tone: 'mint' },
      { value: 'ปริญญาตรี', label: 'ระดับการศึกษา', tone: 'sun' },
    ],
    focus: ['UX/UI Design', 'Database', 'Frontend', 'Backend', 'Computer Programming'],
  },
]
</script>

<style scoped>
.edu {
  --ink: var(--text-primary);
  padding: 72px 0 0;
  /* พื้นหลังเต็มความกว้างจอ */
  background: #d2ddec;
  box-shadow: 0 80px 0 0 #d2ddec, 0 0 0 100vmax #d2ddec;
  clip-path: inset(0 -100vmax -80px -100vmax);
}

/* ───────── Heading ───────── */
.edu-head {
  margin-bottom: 28px;
}

.eyebrow {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.edu-title {
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

.edu-sub {
  max-width: 460px;
  margin-top: 8px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #475569;
}

/* ───────── Card ───────── */
.edu-card {
  margin-bottom: 0;
  padding: 28px;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 22px;
  box-shadow: 8px 8px 0 var(--ink);
}

.edu-card+.edu-card {
  margin-top: 32px;
}

.edu-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tag {
  padding: 4px 12px;
  background: var(--accent);
  color: #fff;
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background: #dcfce7;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
}

.edu-school {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 22px;
}

.school-mark {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 58px;
  height: 58px;
  padding: 5px;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 14px;
  box-shadow: 3px 3px 0 var(--ink);
}

.school-mark img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.school-name {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--ink);
}

.school-en {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.edu-major {
  margin-top: 16px;
  padding: 12px 16px;
  background: #eff6ff;
  border: 2px solid var(--ink);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.6;
  color: var(--ink);
}

/* ───────── Gold tile (เกียรตินิยม) ───────── */
.stat.gold {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg,
      #fde68a 0%,
      #fbbf24 35%,
      #f59e0b 55%,
      #fcd34d 80%,
      #fef3c7 100%);
}

/* แสงวาบที่พาดผ่านกล่อง */
.stat.gold::after {
  content: '';
  position: absolute;
  top: -20%;
  left: 0;
  width: 45%;
  height: 140%;
  background: linear-gradient(105deg,
      transparent 20%,
      rgba(255, 255, 255, 0.85) 50%,
      transparent 80%);
  transform: translateX(-160%) skewX(-18deg);
  animation: gold-shine 3.2s ease-in-out infinite;
  pointer-events: none;
}

.stat.gold .stat-value::before {
  content: '🏅 ';
}

.stat.gold .stat-label {
  color: #78350f;
  font-weight: 600;
}

@keyframes gold-shine {

  0%,
  45% {
    transform: translateX(-160%) skewX(-18deg);
  }

  100% {
    transform: translateX(380%) skewX(-18deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stat.gold::after {
    animation: none;
    opacity: 0;
  }
}

/* ───────── Stat tiles ───────── */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 14px;
  margin-top: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 16px;
  border: 2px solid var(--ink);
  border-radius: 14px;
  box-shadow: 3px 3px 0 var(--ink);
  transition: transform 0.15s, box-shadow 0.15s;
}

.stat:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--ink);
}

.stat.blue {
  background: #dbeafe;
}

.stat.mint {
  background: #d1fae5;
}

.stat.sun {
  background: #fef3c7;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  white-space: nowrap;
  color: var(--ink);
}

.stat-label {
  font-size: 0.78rem;
  line-height: 1.5;
  color: #475569;
}

/* ───────── Focus chips ───────── */
.focus {
  margin-top: 22px;
}

.focus-label {
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
}

.chips li {
  padding: 6px 14px;
  background: #fff;
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink);
}

@media (max-width: 480px) {
  .edu-card {
    padding: 20px;
    box-shadow: 6px 6px 0 var(--ink);
  }

  .school-name {
    font-size: 1.12rem;
  }
}
</style>