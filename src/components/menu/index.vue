<template lang="html">
  <section id="sideBar" class="nav-list" :class="{'show': showMenu}">
    <ul class="list-ui">

      <li class="iconfont icon-quanbu" v-link="{name: 'list', query:{tab: 'all'}}">
        全部
      </li>

      <li class="iconfont icon-hao" v-link="{name: 'list', query:{tab: 'good'}}">
        精华
      </li>

      <li class="iconfont icon-fenxiang" v-link="{name: 'list', query:{tab: 'share'}}">
        分享
      </li>

      <li class="iconfont icon-wenda" v-link="{name: 'list', query:{tab: 'ask'}}">
        问答
      </li>

      <li class="iconfont icon-zhaopin" v-link="{name: 'list', query:{tab: 'job'}}">
        招聘
      </li>

      <li class="iconfont icon-xiaoxi line" v-link="{name:'message'}">消息</li>

      <li class="iconfont icon-about" v-link="{name: 'about'}">关于我们</li>

    </ul>
  </section>
</template>

<script>
export default {
  props: [
    'showMenu',
    'pageType',
    'nickName',
    'profileUrl'
  ]
}
</script>

<style lang="css">

  .nav-list {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -200px;
    width: 200px;
    background-color: #fff;
    color: #333;
    transition: all .3s ease;
    z-index: 99;
    &.show{
      transform: translateX(200px);
    }
  }

  .list-ui {
    margin: 0 24px;
    border-top: 1px solid #d4d4d4;
    overflow: hidden;
    padding-top: 9%;

    li{
      font-size: 14px;
      font-weight: 200;
      padding: 9% 0;
      text-align: left;
      text-indent: 1px;
      line-height: 15px;
      color: #7f8c8d;
      &:last-child {
        margin-bottom: 50px;
      }
      &:before {
        color: #2c3e50;
      }
    }

    .line {
      border-top: 1px solid #d4d4d4;
    }

    a {
        display: block;
        color: #313131;
    }

  }

</style>
