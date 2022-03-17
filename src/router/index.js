import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: ()=>import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: ()=>import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior(){
  return {x:0,y:0}
  }
})
