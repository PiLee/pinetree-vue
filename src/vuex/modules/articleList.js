import {GET_ARTICLE_LIST} from '../mutation-types.js'
import moment from 'moment'
moment.locale('zh-cn')

const state = {
  articleList: []
}

const mutations = {
  [GET_ARTICLE_LIST] (state, items) {
    for (let i in items) {
      items[i].createTime = moment.utc(items[i].createTime).format('l')
    }
    state.articleList = items
  }
}

export default {
  state,
  mutations
}
