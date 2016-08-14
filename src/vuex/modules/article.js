import {GET_ARTICLE} from '../mutation-types.js'
import moment from 'moment'
moment.locale('zh-cn')

const state = {
  title: '',
  content: '',
  author: '',
  createTime: ''
}

const mutations = {
  [GET_ARTICLE] (state, data) {
    state.content = data.content
    state.title = data.title
    state.author = data.author
    state.createTime = moment(data.createTime).format('LL')
  }
}

export default {
  state,
  mutations
}
