import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Products from '../components/Products.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        title:'Login'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'Home'
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta:{
        title:'SignUp'
      }
    },
    {
      path: '/products/:category',
      name: 'Products',
      component: Products,
      meta:{
        title:'Products'
      }
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
