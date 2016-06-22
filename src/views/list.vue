<template lang="html">

  <c-header :page-type="searchKey.tab | getTitleStr" fix-head="true" :need-add="true" :show-menu.sync="showMenu">
  </c-header>

  <section id="page">
    <ul class="posts-list">
      <li v-for="item in topics" v-link="{name: 'topic', param: {id: item.id}}">

        <h3 v-text="item.title" :class="item.tab | getTabClassName item.good item.top" :title="item.tab | getTabStr item.good item.top"></h3>

        <div class="content">
          <img :src="item.author.avatar_url" class="avatar"/>
          <div class="info">
            <p>
              <span class="name">
                {{item.author.loginname}}
              </span>
              <span class="status" v-if="item.reply_count > 0">
                <b>{{item.reply_count}}</b>
                /{{item.visit_count}}
              </span>
            </p>
            <p>
              <time>
                {{item.create_at | getLastTitmeStr true}}
              </time>
              <time>
                {{item.last_reply_at | getLastTitmeStr true}}
              </time>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <c-top></c-top>

</template>

<script>
import $ from 'webpack-zepto'
import { CHeader, CTop } from '../components'

/*eslint-disable */
export default {
  components: {
    CHeader,
    CTop
  },
  data () {
    return {
      showMenu: false,
      scroll: true,
      searchKey: {
        page: 1,
        limit: 20,
        tab: 'all',
        mdrender: true
      },
      searchDataStr: '',
      topics: []
    }
  },
  route: {
    data (transition) {
      let query = transition.to.query
      let tab = query.tab || 'all'

      // 记录首次加载的查询条件
      if (this.searchDataStr === '') {
        this.searchDataStr = JSON.stringify(this.searchKey)
      }

      // 如果从左侧切换分类，则清除查询条件
      if (transition.from.name === 'list') {
        this.searchKey.limit = 20
        this.searchKey = JSON.parse(this.searchDataStr)
      }

      // 从内容详情页切换并且本地tab等于要切换的tabID时去本地储存寻找资料
      if (sessionStorage.searchKey && transition.from.name === 'topic' && sessionStorage.tab === tab) {
        this.topics = JSON.parse(sessionStorage.topics)
        this.searchKey = JSON.parse(sessionStorage.searchKey)
        this.$nextTick(() => $(window).scrollTop(sessionStorage.scrollTop))
      } else {
        // 保存页面第一次加载的数据
        this.searchKey.tab = query.tab
        this.getTopics()
      }

      // 关闭菜单
      this.showMenu = false

      // 滚动加载
      $(window).on('scroll', () => {
        this.getScrollData()
      })
    },
    // 切换组件本地储存状态
    deactivate (transition) {
      $(window).off('scroll')
      if (transition.to.name === 'topic') {
        sessionStorage.scrollTop = $(window).scrollTop()
        sessionStorage.topics = JSON.stringify(this.topics)
        sessionStorage.searchKey = JSON.stringify(this.searchKey)
        sessionStorage.tab = transition.from.query.tab || 'all'
      } else {
        sessionStorage.removeItem('topics')
        sessionStorage.removeItem('searchKey')
        sessionStorage.removeItem('tab')
      }
      transition.next()
    }
  },
  methods: {
    getTopics (searchKey) {
      let params = $.param(this.searchKey)
      console.log(this.scroll)
      $.get('https://cnodejs.org/api/v1/topics?' + params, (d) => {
        this.scroll = true
        if (d && d.data) {
          this.topics = d.data
        }
      })
    },
    // 滚动加载数据
    getScrollData () {
      if (this.scroll) {
        let totalheight = parseFloat($(window).height() + parseFloat($(window).scrollTop()))

        if ($(document).height() <= totalheight + 200) {
          this.scroll = false
          this.searchKey.limit += 20
          this.getTopics()
        }
      }
    }
  }
}
</script>
