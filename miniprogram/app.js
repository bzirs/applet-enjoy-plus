// app.js

import './utils/utils'

import './utils/http'

App({
  token: null,
  globalData: {},
  onLaunch() {
    this.getToken()
  },
  // 获取本地token
  getToken() {
    wx.getStorage({
      key: 'token',
      success: e => {
        console.log(e);
      },
      fail: e => {
        console.log(e);
      }
    })
  }
})