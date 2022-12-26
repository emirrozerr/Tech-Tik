import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Products from '../components/Products.vue'
import ProductPage from '../components/ProductPage.vue'
import HomeAbout from '../components/HomeAbout.vue'
import Basket from '../components/Basket.vue'

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
      path: '/Tek-Tik/',
      name: 'Login',
      component: Login,
      meta:{
        title:'Login'
      }
    },
    {
      path: '/Tek-Tik/home',
      name: 'home',
      component: Home,
      meta:{
        title:'Home'
      }
    },
    {
      path: '/Tek-Tik/signup',
      name: 'SignUp',
      component: SignUp,
      meta:{
        title:'SignUp'
      }
    },
    {
      path: '/Tek-Tik/products/:category',
      name: 'Products',
      component: Products,
      meta:{
        title:'Products'
      }
    },
    {
      path: '/Tek-Tik/productPage/:id',
      name: 'ProductPage',
      component: ProductPage,
      meta:{
        title:'Products'
      }
    },
    {
      path: '/Tek-Tik/about',
      name: 'About',
      component: HomeAbout,
      meta:{
        title:'About'
      }
    },
    {
      path: '/Tek-Tik/basket',
      name: 'Basket',
      component: Basket,
      meta:{
        title:'Basket'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
