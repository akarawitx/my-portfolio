<!-- src/components/AppFooter.vue -->
<template>
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="container footer-inner">

      <div class="footer-brand">
        <RouterLink to="/" class="footer-logo">
          <img src="/src/assets/pink-Photoroom.png" alt="Logo" />
        </RouterLink>
        <p class="footer-tagline">Designing with purpose.<br />Building with passion.</p>
      </div>

      <div class="footer-nav">
        <p class="footer-nav-title">Navigation</p>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/#about">About</RouterLink></li>
          <li><RouterLink to="/projects">Projects</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>

      <div class="footer-contact">
        <p class="footer-nav-title">Contact</p>
        <a href="mailto:juntarang.akarawit@gmail.com" class="footer-email">
          juntarang.akarawit@gmail.com
        </a>
        <p class="footer-phone">092 892 8434</p>
        <div class="footer-socials">
          <a href="https://www.facebook.com/akarawitx" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/ninedyyy" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://github.com/akarawitx" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">© {{ new Date().getFullYear() }} Akarawit Juntarang. All rights reserved.</p>
        <p class="built-with">Built with Vue 3 & ♥</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  border-top: 1px solid var(--border);
  margin-top: 80px;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse at center bottom, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.4fr;
  gap: 48px;
  padding-top: 56px;
  padding-bottom: 48px;
}

.footer-logo img {
  width: 72px;
  height: 72px;
  object-fit: contain;
  transition: filter 0.2s;
}
.footer-logo:hover img {
  filter: drop-shadow(0 0 8px var(--accent));
}

.footer-tagline {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.7;
  margin-top: 14px;
}

.footer-nav-title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.footer-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-nav a {
  font-size: 0.88rem;
  color: var(--text-muted);
  transition: color 0.2s, padding-left 0.2s;
  display: block;
}
.footer-nav a:hover {
  color: var(--text-primary);
  padding-left: 4px;
  opacity: 1;
}

.footer-email {
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: monospace;
  margin-bottom: 6px;
  transition: color 0.2s;
  word-break: break-all;
}
.footer-email:hover { color: var(--accent); opacity: 1; }

.footer-phone {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.footer-socials a {
  width: 34px; height: 34px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}
.footer-socials a:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
  opacity: 1;
}

.footer-bottom {
  border-top: 1px solid rgba(168, 85, 247, 0.08);
  padding: 18px 0;
}

.footer-bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.copyright, .built-with {
  font-size: 0.78rem;
  color: var(--text-muted);
  opacity: 0.7;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
  .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 480px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 28px;
    padding-top: 40px;
    padding-bottom: 32px;
  }
  .footer-bottom .container {
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
}
</style>