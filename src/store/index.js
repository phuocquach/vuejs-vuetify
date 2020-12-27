import Vuex from 'vuex'
import stocks from './stocks';
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        stocks: {...stocks}
    }
  })
export default store;