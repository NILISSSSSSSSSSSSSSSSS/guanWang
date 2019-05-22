import Vue from 'vue'
import Router from 'vue-router'
import index from '@/Page/index'
import homeView from '@/Page/home'
import destruction from '@/Page/destruction'
import companyJianJie from '@/Page/companyJianJie'


// import notFind from '@/Page/404'
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
