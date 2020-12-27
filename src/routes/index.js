import Home from '../components/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';
import VueRouter from 'vue-router';
import App from '../App.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/home', 
    component: Home,
  },
  { 
    path: '/about', 
    component: HelloWorld
  },
  {
    path:'/',
    component: App
  }
];

const router = new VueRouter({
  routes
})

export default router;