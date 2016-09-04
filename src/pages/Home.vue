<template lang="jade">
.container
  ul.index-article-list
    li.article-item(v-for="article in articleList")
      h1.title
        a(v-link="{ name: 'a', params: { id: article._id }}", v-html="article.title")
      div.summary {{article.summary}}
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
