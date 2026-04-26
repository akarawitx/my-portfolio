<!-- src/pages/HomePage.vue -->
<template>
  <div class="home-page">
    <Header />
    <HeroSection />
    <AboutSection />
    <SkillsSection />

    <!-- Projects Preview Section -->
    <section class="projects-preview" id="projects-preview">
      <div class="container">
        <ProjectsSection :preview="true" />
        <div class="view-all-wrap">
          <RouterLink to="/projects" class="view-all-btn">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.projects-preview {
  padding: 80px 0 0;
}
.view-all-wrap {
  display: flex;
  justify-content: center;
  margin-top: -80px;
  padding-bottom: 80px;
}
.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  border-radius: 6px;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}
.view-all-btn:hover {
  background: var(--accent);
  color: var(--bg-deep);
  box-shadow: 0 0 20px var(--accent-glow);
  opacity: 1;
}
.view-all-btn svg { transition: transform 0.2s; }
.view-all-btn:hover svg { transform: translateX(4px); }

@media (max-width: 600px) {
  .view-all-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>