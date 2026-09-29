<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="container footer-inner">
      <!-- ── แบรนด์ ── -->
      <div class="brand-col">
        <a href="#home" class="logo-link" aria-label="กลับหน้าแรก">
          <img :src="logo" alt="Akarawit" class="logo" />
        </a>
        <p class="tagline">ขอบคุณที่ให้<br />ความสนใจนะครับ</p>
      </div>

      <!-- ── เมนู ── -->
      <nav class="nav-col" aria-label="เมนูท้ายหน้า">
        <p class="col-title">เมนู</p>
        <ul>
          <li v-for="l in links" :key="l.href"><a :href="l.href">{{ l.label }}</a></li>
        </ul>
      </nav>

      <!-- ── ติดต่อ ── -->
      <div class="contact-col">
        <p class="col-title">ติดต่อ</p>
        <a href="mailto:juntarang.akarawit@gmail.com" class="contact-line email">juntarang.akarawit@gmail.com</a>
        <a href="tel:0928928434" class="contact-line">092 892 8434</a>

        <div class="socials">
          <a href="https://www.facebook.com/akarawitx" target="_blank" rel="noopener" class="social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Facebook
          </a>
          <a href="https://www.instagram.com/ninedyyy" target="_blank" rel="noopener" class="social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a href="https://github.com/akarawitx" target="_blank" rel="noopener" class="social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container bottom-inner">
        <p class="copy">© {{ year }} อัครวิทย์ จันทรัง · สงวนลิขสิทธิ์</p>
        <a href="#home" class="to-top">กลับขึ้นด้านบน ↑</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from '../assets/pink-Photoroom.png'

// ปี พ.ศ. (ให้ตรงกับปีที่แสดงในส่วนการศึกษา)
const year = new Date().getFullYear() + 543

const links = [
  { href: '#home', label: 'หน้าแรก' },
  { href: '#education', label: 'การศึกษา' },
  { href: '#skills', label: 'เครื่องมือ' },
  { href: '#projects', label: 'ผลงาน' },
  { href: '#contact', label: 'ติดต่อ' },
]
</script>

<style scoped>
.footer {
  --f-bg: #0b1220;
  --f-text: #e2e8f0;
  --f-muted: #94a3b8;
  --f-line: #f8fafc;

  margin-top: 40px;
  background: var(--f-bg);
  color: var(--f-text);
  border-top: 4px solid var(--accent);
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr 1.1fr;
  gap: 64px;
  padding-top: 64px;
  padding-bottom: 56px;
}

/* ───────── แบรนด์ ───────── */
.logo-link { display: inline-block; }
.logo {
  display: block;
  width: 140px;
  height: auto;
  /* แปลงลายเซ็นเป็นสีขาว ให้ชัดบนพื้นดำไม่ว่าไฟล์ต้นฉบับสีอะไร */
  filter: brightness(0) invert(1);
}

.tagline {
  margin-top: 16px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--f-muted);
}

/* ───────── หัวข้อคอลัมน์ ───────── */
.col-title {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid var(--accent);
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
}

/* ───────── เมนู ───────── */
.nav-col ul {
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
}
.nav-col a {
  display: inline-block;
  padding: 5px 0;
  font-size: 0.98rem;
  color: var(--f-text);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
  transition: text-decoration-color 0.15s, color 0.15s;
}
.nav-col a:hover {
  color: #fff;
  text-decoration-color: var(--accent);
  opacity: 1;
}

/* ───────── ติดต่อ ───────── */
.contact-line {
  display: block;
  padding: 5px 0;
  font-size: 0.98rem;
  color: var(--f-text);
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.15s, color 0.15s;
}
.contact-line.email { word-break: break-all; }
.contact-line:hover {
  color: #fff;
  text-decoration: underline;
  text-decoration-color: var(--accent);
  opacity: 1;
}

.socials {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 190px;
  margin-top: 18px;
}

.social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 2px solid var(--f-line);
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--f-text);
  transition: transform 0.15s, box-shadow 0.15s;
}
.social:hover {
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px 0 var(--accent);
  color: #fff;
  opacity: 1;
}

/* ───────── แถบล่างสุด ───────── */
.bottom { border-top: 1px solid rgba(248, 250, 252, 0.15); }
.bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
}
.copy { font-size: 0.82rem; color: var(--f-muted); }

.to-top {
  padding: 6px 14px;
  border: 2px solid var(--f-line);
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--f-text);
  transition: transform 0.15s, box-shadow 0.15s;
}
.to-top:hover {
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px 0 var(--accent);
  color: #fff;
  opacity: 1;
}

.footer a:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 3px;
}

/* ───────── Responsive ───────── */
@media (max-width: 900px) {
  .footer-inner { grid-template-columns: 1fr 1fr; gap: 44px 36px; }
  .brand-col { grid-column: 1 / -1; }
}

@media (max-width: 600px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding-top: 48px;
    padding-bottom: 40px;
  }
  .bottom-inner { flex-direction: column; gap: 6px; text-align: center; }
  .to-top { margin-top: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .footer * { transition: none !important; }
}
</style>