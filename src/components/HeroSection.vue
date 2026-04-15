<!-- src/components/HeroSection.vue -->
<template>
  <section class="hero" id="home">
    <div class="hero-glow"></div>

    <div class="container hero-inner">
      <div class="avatar-side">
        <div class="bubble-wrap">
          <div class="greeting-bubble">
            Hello! I Am <span class="name-highlight">Akarawit Juntarang</span>
          </div>
          <svg class="arrow-svg" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 70 8 C 50 6, 20 10, 8 40" stroke="#7c6a9a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
            <path d="M 4 34 L 8 42 L 15 37" stroke="#7c6a9a" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="avatar-img-wrap">
          <img
            src="/src/assets/avatar.png"
            alt="Akarawit Juntarang"
            class="avatar-img"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="avatar-fallback">
            <svg width="280" height="320" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="248" width="240" height="12" rx="6" fill="#b0b0b0"/>
              <rect x="28" y="168" width="224" height="84" rx="8" fill="#d8d8d8"/>
              <rect x="33" y="173" width="214" height="74" rx="5" fill="#111827"/>
              <circle cx="140" cy="210" r="7" fill="#bbb"/>
              <rect x="35" y="240" width="80" height="22" rx="11" fill="#d4a97a"/>
              <rect x="165" y="240" width="80" height="22" rx="11" fill="#d4a97a"/>
              <rect x="60" y="196" width="160" height="56" rx="16" fill="#1e1640"/>
              <rect x="114" y="174" width="52" height="30" fill="#d4a97a"/>
              <ellipse cx="140" cy="138" rx="68" ry="72" fill="#d4a97a"/>
              <ellipse cx="72" cy="142" rx="10" ry="14" fill="#c9996a"/>
              <ellipse cx="208" cy="142" rx="10" ry="14" fill="#c9996a"/>
              <ellipse cx="140" cy="80" rx="68" ry="40" fill="#111"/>
              <rect x="72" y="78" width="24" height="66" rx="12" fill="#111"/>
              <rect x="184" y="78" width="24" height="56" rx="12" fill="#111"/>
              <path d="M72 108 Q60 88 66 70 Q74 54 96 50" stroke="#0a0a0a" stroke-width="4" fill="none" stroke-linecap="round"/>
              <path d="M140 52 Q160 48 176 58 Q192 68 194 82" stroke="#0a0a0a" stroke-width="4" fill="none" stroke-linecap="round"/>
              <path d="M90 76 Q140 66 190 76" stroke="#0d0d0d" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M100 120 Q114 114 128 120" stroke="#1a1a1a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <path d="M152 120 Q166 114 180 120" stroke="#1a1a1a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
              <ellipse cx="114" cy="136" rx="13" ry="14" fill="white"/>
              <ellipse cx="166" cy="136" rx="13" ry="14" fill="white"/>
              <circle cx="115" cy="137" r="9" fill="#5a3a1a"/>
              <circle cx="167" cy="137" r="9" fill="#5a3a1a"/>
              <circle cx="115" cy="137" r="5" fill="#111"/>
              <circle cx="167" cy="137" r="5" fill="#111"/>
              <circle cx="118" cy="133" r="3" fill="white"/>
              <circle cx="170" cy="133" r="3" fill="white"/>
              <path d="M136 156 Q140 166 144 156" stroke="#b8835a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <ellipse cx="130" cy="163" rx="5" ry="3" fill="#c9906a" opacity="0.5"/>
              <ellipse cx="150" cy="163" rx="5" ry="3" fill="#c9906a" opacity="0.5"/>
              <path d="M120 178 Q140 190 160 178" stroke="#a0663a" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M122 178 Q131 174 140 178 Q149 174 158 178" stroke="#c07850" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="hero-tagline">
        <p class="designer-label">A Designer who</p>
        <h1 class="hero-headline">
          Judges a book<br />
          by its <span class="cover-text">cover</span>...
        </h1>
        <p class="hero-sub">Because if the cover does not impress you what else can?</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 50% 65% at 28% 52%,
    rgba(72, 16, 150, 0.6) 0%,
    rgba(50, 10, 110, 0.2) 50%,
    transparent 72%);
  pointer-events: none;
}

.hero-inner {
  display: flex;
  align-items: center;
  gap: 0px;
}

.avatar-side {
  position: relative;
  flex-shrink: 0;
  animation: fadeUp 0.85s ease both;
}

.bubble-wrap {
  position: absolute;
  top: -20px;
  left: 290px;
  z-index: 4;
}

.greeting-bubble {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 8px 20px;
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
  backdrop-filter: blur(10px);
  line-height: 1.4;
}

.name-highlight {
  color: var(--accent);
  font-weight: 600;
}

.arrow-svg {
  position: absolute;
  top: calc(100% - 20px);
  left: -100px;
  width: 100px;
  height: 60px;
  overflow: visible;
  pointer-events: none;
}

.avatar-img-wrap {
  width: 300px;
  margin-top: -30px;
}

.avatar-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 28px 48px rgba(80, 10, 170, 0.5));
}

.avatar-fallback {
  width: 300px;
  display: none;
  align-items: flex-end;
  justify-content: center;
  filter: drop-shadow(0 20px 40px rgba(80, 10, 170, 0.55));
}

.hero-tagline {
  animation: fadeUp 0.85s 0.18s ease both;
}

.designer-label {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 750;
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
  color: var(--text-primary);
}

.cover-text {
  color: var(--accent);
}

.hero-sub {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  line-height: 1.5;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(26px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Tablet (1024px) ─── */
@media (max-width: 1024px) {
  .bubble-wrap {
    left: 220px;
  }
  .avatar-img-wrap,
  .avatar-fallback {
    width: 240px;
  }
}

/* ─── Tablet portrait / large mobile (860px) ─── */
@media (max-width: 860px) {
  .hero-inner {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
    padding-top: 20px;
  }

  .avatar-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .bubble-wrap {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }

  .arrow-svg {
    display: none;
  }

  .avatar-img-wrap,
  .avatar-fallback {
    width: 200px;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-tagline {
    padding: 0 8px;
    width: 100%;
  }
}

/* ─── Mobile (480px) ─── */
@media (max-width: 480px) {
  .hero {
    padding-top: 70px;
    min-height: 100svh;
  }

  .greeting-bubble {
    font-size: 0.72rem;
    padding: 7px 14px;
    white-space: normal;
    text-align: center;
    max-width: 260px;
  }

  .avatar-img-wrap,
  .avatar-fallback {
    width: 160px;
  }

  .hero-sub {
    font-size: 0.78rem;
    padding: 0 4px;
  }
}
</style>