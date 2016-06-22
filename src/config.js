export default (router) => {
  router.map({
    '/': {
      name: 'home',
      component: (resolve) => {
        require(['./views/home'], resolve)
      }
    },
    '/list': {
      name: 'list',
      component: (resolve) => {
        require(['./views/list'], resolve)
      }
    },
    '/add': {
      name: 'add',
      component: (resolve) => {
        require(['./views/new'], resolve)
      },
      auth: true
    },
    '/message': {
      name: 'message',
      component: (resolve) => {
        require(['./views/message'], resolve)
      },
      auth: true
    },
    '/about': {
      name: 'about',
      component: (resolve) => {
        require(['./views/about'], resolve)
      }
    },
    '/topic': {
      name: 'topic',
      component: (resolve) => {
        require(['./views/topic'], resolve)
      }
    },

    // 默认路由地址
    '*': {
      component: (resolve) => {
        require(['./views/home'], resolve)
      }
    }
  })
}
