import {
  getNotices
} from "../../api/notices"

Page({
  data: {
    notices: []
  },
  async onLoad() {
    wx.utils.toast()

    this.loadNotice()
  },

  async loadNotice() {
    const {
      data,
      code
    } = await getNotices()
    console.log(code);

    if (code !== 10000) return wx.utils.toast()

    this.setData({
      notices: data
    })

    console.log(this.data.notices);

  },
})