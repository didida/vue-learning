<template lang="html">

  <div class="page-cover"
  v-if="showMenu && fixHead" @click="showMenus">
  </div>

  <header
  :class="{'show': showMenu && fixHead, 'fix-header': fixHead, 'no-fix': !fixHead}" id="hd">
    <div class="nv-toolbar">

      <div class="toolbar-nav"
      @click="openMenu" v-if="fixHead">
      </div>

      <span v-text="pageType"></span>

      <i class="num" v-if="messageCount > 0">{{messageCount}}</i>

      <i class="iconfont add-icon" v-show="!messageCount || messageCount <= 0" v-link="{name: 'add'}" v-if="needAdd">&#xe60f;</i>

    </div>
  </header>

  <c-menu :show-menu="showMenu" :page-type="pageType" :nick-name="nickname" :profile-url="profileimgurl" v-if="fixHead"></c-menu>

</template>

<script>
import $ from 'webpack-zepto'
import CMenu from '../menu'

export default {
  props: [
    'fixHead',
    'showMenu',
    'pageType',
    'messageCount',
    'needAdd'
  ],
  components: {
    CMenu
  },
  data () {
    return {
      nickname: '',
      profileimgurl: ''
    }
  },
  methods: {
    showMenus () {
      this.showMenu = !this.showMenu
      $('html, body, #page').removeClass('scroll-hide')
    },
    openMenu () {
      $('html, body, #page').addClass('scroll-hide')
      this.showMenu = !this.showMenu
    }
  }
}
</script>
