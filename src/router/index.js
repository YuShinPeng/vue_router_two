import { createRouter, createWebHistory } from 'vue-router';
import VBind from "../views/VBind.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/About.vue";
import Props from "../views/Props.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/v-bind',
      name:'VBind',
      component:VBind 
      // path: '/',
      // name: 'home',
      // component: HomeView
    },
    {
      path:'/',
      name:'Home',
      component:HomeView
    },
    {
      path:'/about',
      name:'About',
      component:AboutView
    },
    {
      path:'/props',
      name:'Props',
      component:Props
    }
    
  ]
})

export default router
