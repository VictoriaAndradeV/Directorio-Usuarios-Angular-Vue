import { createRouter, createWebHistory } from 'vue-router';
import UsersView from '../views/UsersView.vue';

//config de la navegacion de Vue
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: UsersView
    },
    {
      path: '/favorites',
      component: UsersView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
});

export default router;
