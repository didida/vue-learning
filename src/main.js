import Vue from 'vue'
import VueRouter from 'vue-router'
import ConfigRouter from './config'

import App from './App'
import $ from 'webpack-zepto'

// 点击插件
import Fastclick from 'fastclick'

// 实例化过滤器
import filters from './filters'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(VueRouter)
const router = new VueRouter()

// 当切换地址清除scroll-hide
/*eslint-disable */
router.beforeEach((transition) => {
  $('html, body, #page').removeClass('scroll-hide')
  Fastclick.attach(document.body)

  if (transition.to.auth) {
    if (localStorage.userId) {
      transition.next()
    }
    // else {
    //   let redirect = encodeURIComponent(transition.to.path)
    //   transition.redirect('/login?redirect=' + redirect)
    // }
  } else {
    transition.next()
  }
})

ConfigRouter(router)

router.start(App, '#app')
