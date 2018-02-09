import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vimeo from '@/components/Vimeo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vimeo',
      name: 'Vimeo',
      component: Vimeo
    }
  ]
})
