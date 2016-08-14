import * as types from './mutation-types'
const API_ROOT = 'http://myvb:3088/'

export const getArticleList = function ({ dispatch }) {
  this.$http.get(API_ROOT + 'api/article-list').then(response => {
    dispatch(types.GET_ARTICLE_LIST, JSON.parse(response.body))
  })
}

export const getArticle = function ({ dispatch }, id) {
  this.$http.get(API_ROOT + 'api/article/' + id).then(response => {
    console.log(JSON.parse(response.body))
    dispatch(types.GET_ARTICLE, JSON.parse(response.body))
  })
}
