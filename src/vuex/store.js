import Vue from 'vue'
import Vuex from 'vuex'
import articleList from './modules/articleList'
import article from './modules/article'

Vue.use(Vuex)
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    articleList,
    article
  }
})
