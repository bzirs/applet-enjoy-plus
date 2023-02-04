import { updateUserName } from '../../api/user'
const app = getApp()
// pages/profile/index.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatar: '',
  },
  onLoad() {
    console.log(app.userInfo.nickName)
    this.setData({
      nickName: app.userInfo.nickName,
      avatar: app.userInfo.avatar,
    })
  },
  handleAvatarChange(e) {
    console.log(e.detail.avatarUrl, wx.http.baseURL, app.token)
    wx.uploadFile({
      url: wx.http.baseURL + '/upload',
      filePath: e.detail.avatarUrl,
      name: 'file',
      header: {
        Authorization: `Bearer ${app.token}`,
      },
      formData: {
        type: 'avatar',
      },
      success: ({ data }) => {
        const {
          data: { url },
        } = JSON.parse(data)

        app.userInfo.avatar = url
        this.setData({
          avatar: url,
        })
      },
    })
  },

  async handleUpdateName(e) {
    // console.log(this.data.nickName)
    const nickName = this.data.nickName
    app.userInfo.nickName = this.data.nickName
    const { message } = await updateUserName({ nickName })
    wx.utils.toast(message)
  },

  handleNameChange(e) {
    // console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
})
