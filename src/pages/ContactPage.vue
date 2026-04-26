<!-- src/pages/ContactPage.vue -->
<template>
  <div class="contact-page">
    <Header />
    <div class="container">
      <div class="contact-layout">

        <!-- Left: Info -->
        <div class="contact-info">
          <p class="page-label">Get In Touch</p>
          <h1 class="page-title">Let's work<br /><span class="accent-text">together.</span></h1>
          <p class="contact-bio">
            I'm currently open to new opportunities and collaborations.
            Whether you have a project in mind, a question, or just want to say hi —
            my inbox is always open.
          </p>

          <div class="contact-details">
            <a href="mailto:juntarang.akarawit@gmail.com" class="detail-row">
              <div class="detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p class="detail-label">Email</p>
                <p class="detail-value">juntarang.akarawit@gmail.com</p>
              </div>
            </a>

            <div class="detail-row no-link">
              <div class="detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.28-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p class="detail-label">Phone</p>
                <p class="detail-value">092 892 8434</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="https://www.facebook.com/akarawitx" target="_blank" rel="noopener" class="social-btn"
              aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ninedyyy" target="_blank" rel="noopener" class="social-btn"
              aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://github.com/akarawitx" target="_blank" rel="noopener" class="social-btn"
              aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact-form-wrap">
          <div v-if="sent" class="success-state">
            <div class="success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button class="reset-btn" @click="resetForm">Send another message</button>
          </div>

          <form v-else class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name</label>
                <input id="name" v-model="form.name" type="text" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input id="subject" v-model="form.subject" type="text" placeholder="What's this about?" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="6" placeholder="Tell me about your project or idea..."
                required></textarea>
            </div>
            <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
            <button type="submit" class="submit-btn" :disabled="submitting"> <span v-if="!submitting">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </span>
              <span v-else class="loading-dots">Sending<span>.</span><span>.</span><span>.</span></span>
            </button>
          </form>
        </div>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const sent = ref(false)
const submitting = ref(false)
const errorMsg = ref('')

const form = reactive({ name: '', email: '', subject: '', message: '' })

async function handleSubmit() {
  submitting.value = true
  errorMsg.value = ''
  console.log('SERVICE:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
  console.log('TEMPLATE:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
  console.log('KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
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
    errorMsg.value = 'Something went wrong. Please try again.'
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
.contact-page {
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contact-page>.container {
  flex: 1;
  padding-top: 80px;
  padding-bottom: 80px;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* ── Info side ── */
.page-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.08;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.accent-text {
  color: var(--accent);
}

.contact-bio {
  color: var(--text-muted);
  font-size: 0.93rem;
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 380px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.2s, transform 0.2s;
  text-decoration: none;
  color: inherit;
}

.detail-row:not(.no-link):hover {
  border-color: var(--accent);
  transform: translateX(4px);
  opacity: 1;
}

.detail-icon {
  width: 40px;
  height: 40px;
  background: rgba(168, 85, 247, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.detail-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 2px;
}

.detail-value {
  font-size: 0.88rem;
  color: var(--text-primary);
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-btn {
  width: 42px;
  height: 42px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.social-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-3px);
  opacity: 1;
}

/* ── Form side ── */
.contact-form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 40px;
  position: sticky;
  top: 100px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

input,
textarea {
  background: var(--bg-deep);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px 16px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: rgba(139, 125, 168, 0.5);
}

input:focus,
textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.12);
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  margin-top: 4px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--accent-soft);
  box-shadow: 0 0 24px var(--accent-glow);
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn svg {
  transition: transform 0.2s;
}

.submit-btn:hover:not(:disabled) svg {
  transform: translateX(3px);
}

/* Loading dots */
.loading-dots span {
  animation: blink 1.2s infinite;
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {

  0%,
  80%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
}

/* Success state */
.success-state {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.success-icon {
  width: 64px;
  height: 64px;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.success-state h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
}

.success-state p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 280px;
}

.reset-btn {
  margin-top: 8px;
  padding: 10px 22px;
  border: 1.5px solid var(--accent);
  background: transparent;
  color: var(--accent);
  border-radius: 8px;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.reset-btn:hover {
  background: var(--accent);
  color: var(--bg-deep);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .contact-form-wrap {
    position: static;
  }

  .contact-bio {
    max-width: 100%;
  }
}

@media (max-width: 560px) {
  .contact-form-wrap {
    padding: 24px 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-page>.container {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}

.error-msg {
  font-size: 0.85rem;
  color: #f87171;
  text-align: center;
}
</style>