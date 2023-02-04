import { getUserInfo } from '../../api/user'
const app = getApp()
Page({
  data: {
    userInfo: {},
  },
  onLoad() {
    this.loadUserInfo()
  },
  onShow() {
    console.log(app.userInfo)
    this.setData({
      userInfo: app.userInfo,
    })
  },
  async loadUserInfo() {
    const { data } = await getUserInfo()

    app.userInfo = data
    console.log(app.userInfo)

    this.setData({
      userInfo: data,
    })
  },
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
})
