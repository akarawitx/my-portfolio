<!-- src/components/AboutSection.vue -->
<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about-content">
        <h2 class="about-headline">Hi, I'm Akarawit.</h2>
        <p class="about-bio">
          I'm a recent graduate in Information Technology from Silpakorn University,
          passionate about Web Development and UX/UI design.
        </p>
        <p class="about-bio">
          I enjoy building websites that are both functional and user-friendly, and I'm
          currently seeking opportunities to grow as a Web Developer while continuously
          improving my skills.
        </p>
        <a href="/src//assets//Akarawit-Resume.pdf" download class="resume-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 88px 0 48px;
  scroll-margin-top: 120px;
}

.about-content {
  max-width: 680px;
  animation: fadeUp 0.8s ease both;
}

.about-headline {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 28px;
}

.about-bio {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 16px;
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 10px 22px;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  background: transparent;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.resume-btn:hover {
  background: var(--accent);
  color: var(--bg-deep);
  box-shadow: 0 0 16px var(--accent-glow);
  opacity: 1;
}

.resume-btn svg {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.resume-btn:hover svg {
  transform: translateY(2px);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .about {
    padding: 64px 0 40px;
  }
  .about-content {
    max-width: 100%;
  }
  .about-bio {
    max-width: 100%;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 48px 0 32px;
  }
  .about-headline {
    margin-bottom: 20px;
  }
  .resume-btn {
    width: 100%;
    justify-content: center;
    padding: 12px 22px;
  }
}
</style>