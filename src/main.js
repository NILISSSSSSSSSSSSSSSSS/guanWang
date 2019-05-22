
import Vue from 'vue'

import App from './App'
var VueCookie = require('vue-cookie');

import router from './router'
import VueI18n from 'vue-i18n'


Vue.config.productionTip = false;

Vue.use(VueCookie);//cookie插件
Vue.use(VueI18n); // 语言翻译

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


const i18n = new VueI18n({
  locale: 'zh',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./lang/Zh'),   // 中文语言包
    'en': require('./lang/En')    // 英文语言包
  }
})




/* eslint-disable no-new */
window.$vm=new Vue({
  el: '#app',
  i18n,  // 不要忘记
  router,
  components: { App },
  template: '<App/>'
})



