<!-- src/components/HeroSection.vue -->
<!-- หมายเหตุ: ไฟล์นี้รวม "Hero + ประวัติการศึกษา" ไว้ในกริดเดียวกัน
     เพื่อให้บัตรค้าง (sticky) อยู่ด้านซ้ายตลอดที่เลื่อนดูสองส่วนนี้ -->
<template>
  <section class="hero" id="home">
    <div class="container hero-inner">
      <!-- ── ซ้าย: บัตรห้อยสายคล้อง (ค้างอยู่กับที่ขณะเลื่อน) ── -->
      <div class="badge-col">
        <span class="sparkle s1">✦</span>
        <span class="sparkle s2">✦</span>
        <span class="sparkle s3">✦</span>

        <div class="lanyard">
          <span class="strap"></span>

          <div class="badge-swing">
            <span class="clip"></span>

            <div class="badge">
              <div class="badge-tab">
                <span>WEB DEVELOPER</span>
                <span class="slot"></span>
              </div>

              <div class="badge-body">
                <div class="photo">
                  <img :src="photo" alt="รูปโปรไฟล์ Akarawit Juntarang" />
                </div>

                <p class="badge-name">Akarawit Juntarang</p>
                <p class="badge-meta">เทคโนโลยีสารสนเทศ · มหาวิทยาลัยศิลปากร</p>

                <div class="badge-foot">
                  <div>
                    <span class="foot-label">สถานะ</span>
                    <span class="foot-value">เปิดรับงาน</span>
                  </div>
                  <span class="barcode" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── ขวา: เนื้อหาที่เลื่อนผ่านไป ── -->
      <div class="intro-flow">
        <div class="hero-copy" id="hero">
          <div class="status-pill">
            <span class="dot"></span>
            กำลังมองหางาน · ตำแหน่ง Web Developer
          </div>

          <h1 class="hero-title">
            พร้อมสร้างเว็บไซต์ที่ใช้งานง่าย<br />
            <span class="mark">และสร้างคุณค่าให้ทีมของคุณ</span>
          </h1>

          <p class="hero-desc">
            สวัสดีครับ ผม Akarawit จบการศึกษาด้านเทคโนโลยีสารสนเทศ มหาวิทยาลัยศิลปากร
            สนใจการพัฒนาเว็บไซต์และการออกแบบ UX/UI
            ผมชอบเปลี่ยนไอเดียให้กลายเป็นหน้าเว็บที่ใช้งานได้จริงและใช้งานง่าย
          </p>

          <div class="hero-actions">
            <a href="#projects" class="btn btn--primary">
              ดูผลงาน
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/Akarawit_Resume.pdf" download class="btn btn--ghost">ดาวน์โหลดเรซูเม่</a>
          </div>

          <a href="#education" class="scroll-hint">
            เลื่อนลงเพื่อดูต่อ <span class="scroll-arrow">↓</span>
          </a>
        </div>

        <EducationSection />
      </div>
    </div>
  </section>
</template>

<script setup>
// รูปโปรไฟล์บนบัตร — ถ้าไฟล์รูปของคุณชื่ออื่น ให้แก้ path ตรงนี้
import photo from '../assets/akarawit-applyjob.png'
import EducationSection from './EducationSection.vue'
</script>

<style scoped>
.hero {
  --ink: var(--text-primary);
  position: relative;
  padding: 0;
  overflow: hidden;
  /* ต้องใช้ clip (ไม่ใช่ hidden) ไม่งั้นบัตรจะไม่ค้าง (sticky) */
  overflow: clip;
}

.hero-inner {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 72px;
  align-items: start;
  padding-bottom: 64px; /* เว้นที่ให้เงาการ์ด */
}

/* ───────── Badge column (sticky) ───────── */
.badge-col {
  position: sticky;
  z-index: 2; /* ให้บัตรลอยอยู่เหนือพื้นหลังสีของส่วนการศึกษา */
  /* จัดบัตรให้อยู่กลางจอแนวตั้ง (ประมาณ) แต่ไม่ชิดขอบบนเกินไป */
  top: clamp(72px, calc(50vh - 270px), 240px);
  align-self: start;
  display: flex;
  justify-content: center;
  animation: fadeUp 0.8s ease both;
}

/* แสงฟ้าจางๆ หลังบัตร — ติดไปกับบัตรตอนเลื่อน */
.badge-col::before {
  content: '';
  position: absolute;
  inset: -12% -55%;
  z-index: -1;
  background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.16) 0%, transparent 68%);
  pointer-events: none;
}

.lanyard {
  position: relative;
  width: min(300px, 78vw);
}

.strap {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 18px);
  width: 30px;
  height: 1400px;
  transform: translateX(-50%);
  background:
    repeating-linear-gradient(180deg, transparent 0 14px, rgba(255, 255, 255, 0.22) 14px 16px),
    var(--accent);
  border-left: 2.5px solid var(--ink);
  border-right: 2.5px solid var(--ink);
}

.badge-swing {
  position: relative;
  transform-origin: 50% 0;
  animation: swing 6s ease-in-out infinite;
}
.lanyard:hover .badge-swing { animation-play-state: paused; }

.clip {
  position: absolute;
  top: -34px;
  left: 50%;
  width: 46px;
  height: 34px;
  transform: translateX(-50%);
  background: #cbd5e1;
  border: 2.5px solid var(--ink);
  border-radius: 8px 8px 4px 4px;
  z-index: 2;
}

.badge {
  position: relative;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 22px;
  box-shadow: 8px 8px 0 var(--ink);
  overflow: hidden;
}

.badge-tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  border-bottom: 2.5px solid var(--ink);
}

.slot {
  width: 44px;
  height: 10px;
  background: #fff;
  border: 2px solid var(--ink);
  border-radius: 6px;
}

.badge-body { padding: 18px 18px 16px; }

.photo {
  aspect-ratio: 4 / 5;
  background: linear-gradient(160deg, #dbeafe, #eff6ff);
  border: 2.5px solid var(--ink);
  border-radius: 14px;
  overflow: hidden;
}
.photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 15%;
}

.badge-name {
  margin-top: 16px;
  text-align: center;
  font-family: var(--font-body);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--ink);
}

.badge-meta {
  margin-top: 2px;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.badge-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 2px dashed rgba(15, 23, 42, 0.25);
}
.foot-label {
  display: block;
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--text-muted);
}
.foot-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink);
}

.barcode {
  width: 76px;
  height: 30px;
  background: repeating-linear-gradient(
    90deg,
    var(--ink) 0 2px, transparent 2px 4px,
    var(--ink) 4px 5px, transparent 5px 8px,
    var(--ink) 8px 11px, transparent 11px 13px
  );
}

.sparkle {
  position: absolute;
  color: var(--accent);
  animation: twinkle 3s ease-in-out infinite;
  pointer-events: none;
}
.s1 { top: 18%; right: 6%; font-size: 1.6rem; }
.s2 { bottom: 14%; right: 12%; font-size: 1rem; animation-delay: 1s; }
.s3 { top: 46%; left: 2%; font-size: 1.2rem; animation-delay: 2s; }

/* ───────── Copy column ───────── */
.hero-copy {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 96px 0;
  animation: fadeUp 0.8s 0.1s ease both;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: #fff;
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink);
}
.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
}

.hero-title {
  margin-top: 22px;
  font-family: var(--font-body);
  font-size: clamp(1.7rem, 3.1vw, 2.4rem);
  font-weight: 700;
  line-height: 1.45;
  color: var(--ink);
}
.mark {
  background: linear-gradient(transparent 62%, rgba(37, 99, 235, 0.24) 62%);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.hero-desc {
  max-width: 520px;
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.9;
  color: var(--text-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border: 2px solid var(--ink);
  border-radius: 10px;
  box-shadow: 4px 4px 0 var(--ink);
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 600;
  transition: transform 0.15s, box-shadow 0.15s;
}
.btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--ink);
  opacity: 1;
}
.btn--primary { background: var(--accent); color: #fff; }
.btn--ghost { background: #fff; color: var(--ink); }

.scroll-hint {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 36px;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.scroll-arrow { display: inline-block; animation: bounce 1.6s ease-in-out infinite; }

/* ───────── Animations ───────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(26px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes swing {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(2.5deg); }
}
@keyframes twinkle {
  0%, 100% { opacity: 0.35; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1.15); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

@media (prefers-reduced-motion: reduce) {
  .badge-swing, .sparkle, .scroll-arrow { animation: none; }
}

/* ───────── Responsive ───────── */
@media (max-width: 1024px) {
  .hero-inner { gap: 48px; }
}

/* Header อยู่ด้านบน (กว้าง < 1200px หรือสูง < 600px)
   → ใช้เลย์เอาต์แบบมือถือ: บัตรอยู่บน ข้อความอยู่ล่าง ไม่ค้างบัตร
   เงื่อนไขต้องตรงกับ Header.vue เสมอ */
@media (max-width: 1199px), (max-height: 599px) {
  .hero-inner { grid-template-columns: 1fr; gap: 0; }
  .badge-col { position: static; padding-top: 150px; }
  .lanyard { width: min(260px, 70vw); }
  .hero-copy { min-height: auto; padding: 56px 0 8px; }
  .hero-desc { max-width: 100%; }
}

@media (max-width: 480px) {
  .hero-actions .btn { width: 100%; }
}
</style>