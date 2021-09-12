import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Index'
import UserEdit from '@/components/EditUser'
import UserCreate from '@/components/CreateUser'
import UserShow from '@/components/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      Create: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user',
      Createme: 'user',
      component: UserShow
    }
  ]
})
