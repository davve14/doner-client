import Vue from 'vue'
import Router from 'vue-router'
import Explore from './views/Explore.vue'
import Map from './views/Map.vue'
import Restaurant from './views/Restaurant.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/explore',
      name: 'explore',
      component: Explore,
      props: (route) => ({
        areas: route.query.areas,
        search: route.query.search
      })
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
