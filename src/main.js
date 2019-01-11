import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
window.Vue = Vue;

Vue.config.productionTip = false

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
