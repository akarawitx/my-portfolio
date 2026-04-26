<!-- src/pages/ProjectPage.vue -->
<template>
  <div class="project-page">
    <Header />
    <div class="page-hero">
      <div class="container">
        <p class="page-label">Portfolio</p>
        <h1 class="page-title">All Projects</h1>
        <p class="page-sub">A collection of things I've built — from web apps to UI experiments.</p>
      </div>
    </div>
    <ProjectsSection :preview="false" />
    <Footer />
  </div>
</template>

<script setup>
import ProjectsSection from '../components/ProjectsSection.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>

<style scoped>
.project-page {
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.project-page :deep(.projects) {
  flex: 1;
}
.page-hero {
  padding: 72px 0;
  /* border-bottom: 1px solid var(--border); */
}
.page-label {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 16px;
}
.page-sub {
  color: var(--text-muted);
  font-size: 1rem;
  max-width: 480px;
  line-height: 1.7;
  padding-bottom: 48px;
}
</style>