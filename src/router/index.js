import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import homeView from '@/page/home'
import destruction from '@/page/destruction'
import companyJianJie from '@/page/companyJianJie'


// import notFind from '@/page/404'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      meta: {title: ''},
      redirect:"home",
      children: [
        
        {
        path: '/home',
        component: homeView,
      }
        ,{
          path: '/destruction',
          component: destruction,
        }
        ,{
          path: '/companyJianJie',
          component: companyJianJie,
        }
       
      ]
    }

  ]
})
