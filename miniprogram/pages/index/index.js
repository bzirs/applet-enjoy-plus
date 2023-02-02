Page({
  async onLoad() {
    console.log('加载onload')
    wx.utils.toast()

    const {
      data: { data },
    } = await wx.http({
      url: '/announcement',
    })

    console.log(data)
  },
})
