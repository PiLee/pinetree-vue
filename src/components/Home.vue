<template lang="jade">
.container
  ul.index-article-list
    li.article-item(v-for="article in articleList")
      h1
        a(v-link="{ name: 'a', params: { id: article._id }}") {{article.title}}
      div {{article.content}}
      .txt-right
        span.create-time {{ article.createTime }}
        a.btn-more(v-link="{ name: 'a', params: { id: article._id }}") 阅读全文
</template>
<script>
import {articleList} from '../vuex/getters'
import {getArticleList} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      articleList: articleList
    },
    actions: {
      getArticleList: getArticleList
    }
  },
  created () {
    this.getArticleList()
  }
}
</script>
