<!-- src/components/SkillsSection.vue -->
<template>
  <section class="skills" id="skills">
    <div class="container skills-inner">
      <p class="skills-cta">
        I'm currently looking to join a
        <span class="highlight-underline">cross-functional</span> team
      </p>
      <p class="skills-sub">that values improving people's lives through accessible design</p>

      <div class="icons-row">
        <div class="skill-icon" v-for="skill in skills" :key="skill.name" :title="skill.name">
          <img :src="skill.icon" :alt="skill.name" />
        </div>
      </div>
      <div class="icons-row">
        <div class="skill-icon" v-for="skill in skills2" :key="skill.name" :title="skill.name">
          <img :src="skill.icon" :alt="skill.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'C', icon: 'https://img.icons8.com/color/48/c-programming' },
  { name: 'Go', icon: 'https://img.icons8.com/color/48/golang' },
  { name: 'Java', icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript' },
  { name: 'Python', icon: 'https://img.icons8.com/color/48/python' },
  { name: 'HTML5', icon: 'https://img.icons8.com/color/48/html-5' },
  { name: 'CSS3', icon: 'https://img.icons8.com/color/48/css3' },
]

const skills2 = [
  { name: 'Php', icon: 'https://img.icons8.com/color/48/php' },
  { name: 'React', icon: 'https://img.icons8.com/color/48/react-native' },
  { name: 'Vue', icon: 'https://img.icons8.com/color/48/vue-js' },
  { name: 'Vite', icon: 'https://img.icons8.com/color/48/vite' },
  { name: 'MySQL', icon: 'https://img.icons8.com/color/48/mysql-logo' },
  { name: 'Figma', icon: 'https://img.icons8.com/color/48/figma' },
]
</script>

<style scoped>
.skills {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.skills-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.skills-cta {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.highlight-underline {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: rgba(168, 85, 247, 0.5);
  text-underline-offset: 4px;
}

.skills-sub {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 24px;
}

.icons-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  cursor: default;
}

.skill-icon img {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.skill-icon:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(168, 85, 247, 0.25);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .skills {
    padding: 60px 0;
  }
  .skills-sub {
    font-size: 0.85rem;
    padding: 0 8px;
  }
}

@media (max-width: 480px) {
  .skill-icon {
    width: 44px;
    height: 44px;
  }
  .skill-icon img {
    width: 24px;
    height: 24px;
  }
  .icons-row {
    gap: 10px;
  }
}
</style>