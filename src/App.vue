<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-deep:      #09080f;
  --bg-card:      #110f1e;
  --bg-card2:     #16132a;
  --accent:       #a855f7;
  --accent-soft:  #7c3aed;
  --accent-glow:  rgba(168, 85, 247, 0.35);
  --text-primary: #f0eaff;
  --text-muted:   #8b7da8;
  --border:       rgba(168, 85, 247, 0.18);
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-deep);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.8;
}

::selection {
  background: var(--accent-soft);
  color: #fff;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-deep); }
::-webkit-scrollbar-thumb { background: var(--accent-soft); border-radius: 3px; }

section {
  padding: 96px 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* ─── Global Responsive ─── */
@media (max-width: 1024px) {
  .container {
    padding: 0 32px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 72px 0;
  }
  .container {
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  section {
    padding: 56px 0;
  }
  .container {
    padding: 0 16px;
  }
}
</style>