import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Items from '@/components/Items'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Items
    }
  ]
})
