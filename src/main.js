import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: HelloWorld }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
