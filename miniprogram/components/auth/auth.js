// components/auth/auth.js'
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isLogin: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached() {
      console.log('钩子调用', app.token);
      const pages = getCurrentPages()
      const page = pages[pages.length - 1].route

      const isLogin = !!app.token
      this.setData({
        isLogin
      })

      // console.log(isLogin);
      if (!isLogin) {
        console.log('没登录捏');
        wx.redirectTo({
          url: '/pages/login/index?redirect=/' + page,
        })
      }
    }
  }
})