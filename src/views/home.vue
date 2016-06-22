<template lang="html">
  <div>
    <img src="../assets/images/index.png" alt="" />
  </div>
</template>

<script>
import '../assets/scss/iconfont/iconfont.css'
import '../assets/scss/CV.scss'
import '../assets/scss/github-markdown.css'

export default {
  ready () {
    setTimeout(() => {
      this.$route.router.go({ name: 'list' })
    }, 2000)
  }
}
</script>
