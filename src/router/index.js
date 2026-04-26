// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectPage from '../pages/ProjectPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/projects', name: 'projects', component: ProjectPage },
  { path: '/contact', name: 'contact', component: ContactPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth', top: 100 })
        }, 100)
      })
    }
    return { top: 0 }
  },
})