<!-- src/components/ContactSection.vue -->
<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <p class="contact-bio">
        I'm currently looking to join a cross-functional team that values improving people's lives
        through accessible design, or have a project in mind? Let's connect.
      </p>
      <a href="mailto:juntarang.akarawit@gmail.com" class="contact-email">
        juntarang.akarawit@gmail.com
      </a>
      <div class="social-links">
        <a href="https://www.facebook.com/akarawitx" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/ninedyyy" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a href="https://github.com/akarawitx" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-top: 1px solid var(--border);
  padding-bottom: 60px;
}

.contact-bio {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.75;
  max-width: 520px;
  margin-bottom: 24px;
}

.contact-email {
  display: inline-block;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 24px;
  transition: color 0.2s;
  font-family: monospace;
}

.contact-email:hover {
  color: var(--accent);
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-btn {
  width: 40px;
  height: 40px;
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

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .contact-bio {
    max-width: 100%;
    font-size: 0.9rem;
  }
  .contact-email {
    font-size: 0.82rem;
    word-break: break-all;
  }
}

@media (max-width: 480px) {
  .contact {
    padding-bottom: 48px;
  }
  /* Bigger touch targets on mobile */
  .social-btn {
    width: 44px;
    height: 44px;
  }
}
</style>