import {
  getUserInfo
} from "../../api/user"

Page({
  onLoad() {
    this.loadUserInfo()
  },
  async loadUserInfo() {
    const res = await getUserInfo()
    console.log(res);
  },
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
})