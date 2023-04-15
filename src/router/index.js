import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/AdminView.vue'
import MenuView from '../views/MenuView.vue'
import History from '../components/History.vue'
import Location from '../components/Location.vue'
import Delivery from '../components/Delivery.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        history: History,
        delivery: Delivery
      } 
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
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      children: [{
        path: 'history',
        name: "history",
        component: History
      },
      {
        path: 'location',
        name: "location",
        component: Location
      },
      {
        path: 'delivery',
        name: "delivery",
        component: Delivery
      }
      ],
      meta: {
        title: 'MOON Pizza | History',
        page: 'event',
    },
    },
  ]
});
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'MOON Pizza';
  next();
})

export default router
