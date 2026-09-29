<!-- src/components/ContactSection.vue -->
<template>
  <section class="contact" id="contact">
    <div class="container">
      <!-- ───────── หัวข้อ ───────── -->
      <div class="contact-head">
        <p class="eyebrow">04 · ติดต่อ</p>
        <h2 class="contact-title"><span class="mark">มาพูดคุยกันครับ</span></h2>
        <p class="contact-sub">
          ตอนนี้ผมกำลังมองหางานและโอกาสร่วมงานกับทีมใหม่ๆ
          ไม่ว่าจะมีโปรเจกต์ที่อยากคุย คำถาม หรือแค่อยากทักทาย ส่งข้อความมาได้เลยครับ
        </p>
      </div>

      <div class="contact-layout">
        <!-- ───────── ซ้าย: ช่องทางติดต่อ ───────── -->
        <div class="contact-info">
          <a href="mailto:juntarang.akarawit@gmail.com" class="info-card">
            <span class="info-icon blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span class="info-text">
              <span class="info-label">อีเมล</span>
              <span class="info-value">juntarang.akarawit@gmail.com</span>
            </span>
          </a>

          <a href="tel:0928928434" class="info-card">
            <span class="info-icon mint">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.28-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span class="info-text">
              <span class="info-label">โทรศัพท์</span>
              <span class="info-value">092 892 8434</span>
            </span>
          </a>

          <p class="social-label">ช่องทางอื่นๆ</p>
          <div class="socials">
            <a href="https://www.facebook.com/akarawitx" target="_blank" rel="noopener" class="social blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/ninedyyy" target="_blank" rel="noopener" class="social rose">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a href="https://github.com/akarawitx" target="_blank" rel="noopener" class="social lav">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- ───────── ขวา: ฟอร์ม ───────── -->
        <div class="form-card">
          <div v-if="sent" class="success-state">
            <div class="success-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>ส่งข้อความเรียบร้อยแล้ว</h3>
            <p>ขอบคุณที่ติดต่อมานะครับ ผมจะตอบกลับโดยเร็วที่สุด</p>
            <button type="button" class="btn btn--ghost" @click="resetForm">ส่งข้อความอีกครั้ง</button>
          </div>

          <form v-else class="form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="field">
                <label for="name">ชื่อ</label>
                <input id="name" v-model="form.name" type="text" placeholder="ชื่อของคุณ" required />
              </div>
              <div class="field">
                <label for="email">อีเมล</label>
                <input id="email" v-model="form.email" type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div class="field">
              <label for="subject">หัวข้อ</label>
              <input id="subject" v-model="form.subject" type="text" placeholder="อยากคุยเรื่องอะไร" required />
            </div>

            <div class="field">
              <label for="message">ข้อความ</label>
              <textarea id="message" v-model="form.message" rows="6" placeholder="เล่าให้ฟังหน่อยว่ามีโปรเจกต์หรือไอเดียอะไร"
                required></textarea>
            </div>

            <p v-if="errorMsg" class="error-msg" role="alert">{{ errorMsg }}</p>

            <button type="submit" class="btn btn--primary" :disabled="submitting">
              <span v-if="!submitting" class="btn-inner">
                ส่งข้อความ
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </span>
              <span v-else class="loading-dots">กำลังส่ง<span>.</span><span>.</span><span>.</span></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const sent = ref(false)
const submitting = ref(false)
const errorMsg = ref('')

const form = reactive({ name: '', email: '', subject: '', message: '' })

async function handleSubmit() {
  submitting.value = true
  errorMsg.value = ''
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    sent.value = true
  } catch (err) {
    errorMsg.value = 'เกิดข้อผิดพลาด กรุณาลองส่งใหม่อีกครั้งครับ'
  } finally {
    submitting.value = false
  }
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  sent.value = false
}
</script>

<style scoped>
.contact {
  --ink: var(--text-primary);
}

/* ───────── หัวข้อ ───────── */
.contact-head { margin-bottom: 40px; }

.eyebrow {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.contact-title {
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

.contact-sub {
  max-width: 560px;
  margin-top: 8px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-muted);
}

/* ───────── โครงสองคอลัมน์ ───────── */
.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: start;
}

/* ───────── ช่องทางติดต่อ ───────── */
.info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
  padding: 16px 18px;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 16px;
  box-shadow: 5px 5px 0 var(--ink);
  color: var(--ink);
  transition: transform 0.15s, box-shadow 0.15s;
}
.info-card:hover {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--ink);
  opacity: 1;
}

.info-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border: 2px solid var(--ink);
  border-radius: 12px;
  color: var(--ink);
}
.info-icon.blue { background: #dbeafe; }
.info-icon.mint { background: #d1fae5; }

.info-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.info-label {
  font-size: 0.78rem;
  line-height: 1.5;
  color: #475569;
}
.info-value {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  word-break: break-all;
}

.social-label {
  margin: 28px 0 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 2px solid var(--ink);
  border-radius: 999px;
  box-shadow: 3px 3px 0 var(--ink);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink);
  transition: transform 0.15s, box-shadow 0.15s;
}
.social:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--ink);
  opacity: 1;
}
.social.blue { background: #dbeafe; }
.social.rose { background: #ffe4e6; }
.social.lav { background: #ede9fe; }

/* ───────── ฟอร์ม ───────── */
.form-card {
  padding: 28px;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 22px;
  box-shadow: 8px 8px 0 var(--ink);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink);
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  background: #eff6ff;
  border: 2px solid var(--ink);
  border-radius: 12px;
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  outline: none;
  resize: none;
  transition: box-shadow 0.15s, background 0.15s;
}
input::placeholder,
textarea::placeholder { color: #64748b; }

input:focus,
textarea:focus {
  background: #fff;
  box-shadow: 4px 4px 0 var(--accent);
}

.error-msg {
  padding: 10px 14px;
  background: #ffe4e6;
  border: 2px solid var(--ink);
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 500;
  color: #be123c;
}

/* ───────── ปุ่ม ───────── */
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
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.btn:hover:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--ink);
}
.btn:disabled { opacity: 0.6; cursor: not-allowed; }
.btn--primary { background: var(--accent); color: #fff; }
.btn--ghost { background: #fff; color: var(--ink); }
.btn-inner { display: inline-flex; align-items: center; gap: 8px; }

.loading-dots span { animation: blink 1.2s infinite; }
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

/* ───────── ส่งสำเร็จ ───────── */
.success-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 36px 12px;
  text-align: center;
}
.success-icon {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  background: #d1fae5;
  border: 2.5px solid var(--ink);
  border-radius: 50%;
  box-shadow: 3px 3px 0 var(--ink);
  color: var(--ink);
}
.success-state h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--ink);
}
.success-state p {
  max-width: 300px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-muted);
}
.success-state .btn { margin-top: 8px; }

a:focus-visible,
.btn:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}

/* ───────── Responsive ───────── */
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 560px) {
  .form-card {
    padding: 20px;
    box-shadow: 6px 6px 0 var(--ink);
  }
  .form-row { grid-template-columns: 1fr; }
  .btn--primary { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .info-card, .social, .btn, input, textarea { transition: none; }
  .loading-dots span { animation: none; opacity: 1; }
}
</style>