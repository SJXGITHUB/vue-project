import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue';
import Tea from '@/pages/tea/Tea.vue';
import Classify from '@/pages/classify/Classify.vue';
import Memo from '@/pages/memo/Memo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tea',
      name: 'Tea',
      component: Tea
    }
    ,
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    }
    ,
    {
      path: '/memo',
      name: 'Memo',
      component: Memo
    }
  ]
})

export default router
