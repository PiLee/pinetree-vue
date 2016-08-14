import {GET_ARTICLE_LIST} from '../mutation-types.js'
import moment from 'moment'
moment.locale('zh-cn')

const state = {
  articleList: []
}

const mutations = {
  [GET_ARTICLE_LIST] (state, items) {
    for (let i in items) {
      items[i].createTime = moment(items[i].createTime).startOf('day').fromNow()
    }
    state.articleList = items
  }
}

export default {
  state,
  mutations
}
