import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/AdminView.vue'
import MenuView from '../views/MenuView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'MOON Pizza | About',
        page: 'event',
    },
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {
        title: 'MOON Pizza | Admin',
        page: 'event',
    },
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
      meta: {
        title: 'MOON Pizza | Menu',
        page: 'event',
    },
    }
  ]
});
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'MOON Pizza';
  next();
})

export default router
