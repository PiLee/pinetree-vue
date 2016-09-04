import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  history: true,
  hashbang: false
})

router.map({
  '/': {
    component: function (resolve) {
      require(['./pages/Home'], resolve)
    }
  },
  '/a/:id': {
    name: 'a',
    component: function (resolve) {
      require(['./pages/Article'], resolve)
    }
  },
  '/about': {
    component: function (resolve) {
      require(['./pages/About'], resolve)
    }
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
