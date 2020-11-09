import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Home from '../views/Home'
import Login from '../views/Login'
import Vip from '../views/Vip'
import My from '../views/My'
import Search from '../views/Search'
import Ranking from '../views/Ranking'
import SearchResult from '../views/SearchResult'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/vip',
    name: 'Vip',
    component: Vip
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/searchResult',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
