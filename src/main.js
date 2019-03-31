import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

window.Vue = Vue;

Vue.config.productionTip = false

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...'
})

Vue.filter('no-diacs', function(value){
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
