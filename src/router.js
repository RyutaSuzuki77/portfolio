import Vue from 'vue'
import Router from 'vue-router'
import Top from './pages/Top.vue'
import About from './pages/About.vue'
import Career from './pages/Career.vue'
import Contact from './pages/Contact.vue'
import Portfolio from './pages/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/career',
      name: 'career',
      component: Career
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
