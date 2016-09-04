import {GET_ARTICLE} from '../mutation-types.js'
import moment from 'moment'
import marked from 'marked'
import hljs from 'highlight.js'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  }
})

moment.locale('zh-cn')

const state = {
  title: '',
  content: '',
  author: '',
  createTime: ''
}

const mutations = {
  [GET_ARTICLE] (state, data) {
    state.content = marked(data.content)
    state.title = data.title
    state.author = data.author
    state.createTime = moment.utc(data.createTime).format('lll')
  }
}

export default {
  state,
  mutations
}
