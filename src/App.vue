<template lang="jade">
div
  vheader
  .main-content
    router-view(transition="fade", transition-mode="out-in")
  vfooter
</template>

<script>
import Vheader from './components/Vheader'
import Vfooter from './components/Vfooter'
import store from './vuex/store'
export default {
  components: {
    Vheader,
    Vfooter
  },
  store
}
</script>

<style lang='scss'>
  @import 'scss/style';
</style>
