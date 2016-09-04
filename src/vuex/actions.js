import * as types from './mutation-types'
import { API_ROOT } from '../config'

export const getArticleList = function ({ dispatch }) {
  this.$http.get(API_ROOT + 'api/article-list').then(response => {
    dispatch(types.GET_ARTICLE_LIST, JSON.parse(response.body))
  }, function (error) {
    console.log(error)
  })
}

export const getArticle = function ({ dispatch }, id) {
  this.$http.get(API_ROOT + 'api/article/' + id).then(response => {
    dispatch(types.GET_ARTICLE, JSON.parse(response.body))
  })
}
