<!-- src/components/ProjectsSection.vue -->
<template>
  <section class="projects" id="projects">
    <div class="container">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="project-row"
        :class="{ reverse: i % 2 !== 0 }"
      >
        <div class="project-text">
          <span class="featured-label">Featured Project</span>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.desc }}</p>
          <div class="project-links">
            <a href="#" class="proj-link" title="GitHub">⭐</a>
            <a href="#" class="proj-link" title="Live">🔗</a>
          </div>
        </div>

        <div class="project-preview">
          <div class="preview-card">
            <div class="preview-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="preview-lines">
              <div class="p-line wide"></div>
              <div class="p-line medium"></div>
              <div class="p-line wide"></div>
              <div class="p-line short"></div>
            </div>
            <div class="preview-subcard">
              <p>{{ project.cardText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Example Project',
    desc: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    cardText: 'This headline reflects my personality (16px)  |  WHO AM I',
  },
  {
    title: 'Example Project',
    desc: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    cardText: 'OPPORTUNITY (41px)',
  },
]
</script>

<style scoped>
.projects {
  padding: 80px 0;
}

.project-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.project-row.reverse {
  direction: rtl;
}

.project-row.reverse > * {
  direction: ltr;
}

.featured-label {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

.project-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 24px;
  background: rgba(168, 85, 247, 0.06);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
}

.project-links {
  display: flex;
  gap: 12px;
}

.proj-link {
  font-size: 1.2rem;
  transition: transform 0.2s;
  display: block;
}

.proj-link:hover {
  transform: scale(1.2);
  opacity: 1;
}

.project-preview {
  position: relative;
}

.preview-card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  transform: perspective(800px) rotateY(-5deg);
  transition: transform 0.4s;
  /* leave room for the absolutely positioned subcard */
  margin-bottom: 40px;
}

.project-row.reverse .preview-card {
  transform: perspective(800px) rotateY(5deg);
}

.preview-card:hover {
  transform: perspective(800px) rotateY(0deg) !important;
}

.preview-dots {
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
}

.preview-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
}

.preview-dots span:first-child  { background: #f87171; }
.preview-dots span:nth-child(2) { background: #fbbf24; }
.preview-dots span:last-child   { background: #4ade80; }

.preview-lines {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.p-line {
  height: 10px;
  background: #e5e7eb;
  border-radius: 5px;
}

.p-line.wide   { width: 90%; }
.p-line.medium { width: 65%; }
.p-line.short  { width: 40%; }

.preview-subcard {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  font-size: 0.75rem;
  color: #555;
  line-height: 1.5;
  position: absolute;
  bottom: -24px;
  right: -24px;
  width: 220px;
  border: 1px solid #eee;
}

/* ─── Tablet (1024px) ─── */
@media (max-width: 1024px) {
  .project-row {
    gap: 40px;
  }
  .preview-subcard {
    width: 180px;
    right: -12px;
  }
}

/* ─── Mobile (768px) ─── */
@media (max-width: 768px) {
  .projects {
    padding: 60px 0;
  }

  .project-row,
  .project-row.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 32px;
    margin-bottom: 72px;
  }

  /* Show preview after text on mobile */
  .project-preview {
    order: 2;
  }
  .project-text {
    order: 1;
  }

  .preview-card {
    transform: none !important;
    margin-bottom: 36px;
  }

  .preview-subcard {
    right: 0;
    width: 180px;
    font-size: 0.7rem;
  }
}

/* ─── Small mobile (480px) ─── */
@media (max-width: 480px) {
  .project-row {
    margin-bottom: 56px;
  }

  .preview-subcard {
    position: static;
    width: 100%;
    margin-top: 12px;
    box-sizing: border-box;
  }

  .preview-card {
    margin-bottom: 0;
  }

  .project-desc {
    font-size: 0.85rem;
    padding: 14px;
  }
}
</style>