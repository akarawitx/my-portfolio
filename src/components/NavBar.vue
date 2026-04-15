<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#" class="nav-logo">
        <img src="/src/assets/pink-Photoroom.png" alt="Logo" class="logo-img" />
      </a>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li><a href="#home" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#projects" @click="closeMenu">Project</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>

      <!-- Hamburger button (mobile) -->
      <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div class="mobile-menu" :class="{ active: menuOpen }">
      <ul>
        <li><a href="#home" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#projects" @click="closeMenu">Project</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: background 0.3s, backdrop-filter 0.3s;
}

.navbar.scrolled {
  background: rgba(9, 8, 15, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  transition: filter 0.2s;
}

.nav-logo:hover {
  filter: drop-shadow(0 0 8px var(--accent));
}

.nav-links {
  display: flex;
  gap: 48px;
  list-style: none;
}

.nav-links a {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  position: relative;
  transition: color 0.2s;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s;
}

.nav-links a:hover {
  color: var(--text-primary);
  opacity: 1;
}

.nav-links a:hover::after {
  width: 100%;
}

.logo-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

/* ─── Hamburger ─── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-muted);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s, background 0.2s;
  transform-origin: center;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background: var(--accent);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background: var(--accent);
}

/* ─── Mobile drawer ─── */
.mobile-menu {
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
  background: rgba(9, 8, 15, 0.97);
  border-bottom: 1px solid var(--border);
}

.mobile-menu.active {
  max-height: 260px;
}

.mobile-menu ul {
  list-style: none;
  padding: 16px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-menu a {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid rgba(168, 85, 247, 0.08);
  transition: color 0.2s;
}

.mobile-menu a:hover {
  color: var(--accent);
  opacity: 1;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .nav-inner {
    padding: 0 32px;
  }
  .nav-links {
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .nav-inner {
    padding: 0 20px;
  }
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .mobile-menu {
    display: block;
  }
  .logo-img {
    width: 72px;
    height: 72px;
  }
}

@media (max-width: 480px) {
  .nav-inner {
    padding: 0 16px;
  }
  .navbar {
    padding: 14px 0;
  }
}
</style>