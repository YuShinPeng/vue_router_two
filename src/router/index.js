import { createRouter, createWebHistory } from 'vue-router';
import VBind from "../views/VBind.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/About.vue";
import Props from "../views/Props.vue";
import Emit from "../views/Emit.vue";
import VShow from "../views/VShow.vue";
import RouterView from "../views/RouterView.vue"
import Model from "../views/Model.vue"

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
    },
    {
      path:'/emit',
      name:'Emit',
      component:Emit
    },
    {
      path:'/v-show',
      name:VShow,
      component:VShow
    },
    {
      path:'/router-view',
      name:RouterView,
      component:RouterView  
    },
    {
      path:'/model',
      name:Model,
      component:Model
    }
    
  ]
})

export default router
