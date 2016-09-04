<template lang="jade">
.container
  article.article-wrapper.markdown-body
    header
      h1 {{ article.title }}
      p {{ article.createTime }}
    div(v-html="article.content")
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

<style lang="scss">
@import '../scss/vendors/_markdown.scss'
</style>
