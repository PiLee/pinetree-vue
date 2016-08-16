<template lang="jade">
.container
  article.article-wrapper
    header
      h1 {{ article.title }}
      p {{ article.createTime }}
    div {{ article.content }}
</template>
<script>
import {article} from '../vuex/getters'
import {getArticle} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      article: article
    },
    actions: {
      getArticle: getArticle
    }
  },
  created () {
    this.getArticle(this.$route.params.id)
  }
}
</script>
