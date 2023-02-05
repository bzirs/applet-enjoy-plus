// house_pkg/pages/locate/index.ts

import qqMap from '../../../utils/qqmap'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    location: '',
    communitys: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.loadLocation()
  },
  async handleGetLocation() {
    const { address, latitude, longitude } = await wx.chooseLocation()
    this.getAroundCommunity(latitude, longitude)

    this.setData({
      location: address,
    })
  },

  getAroundCommunity(latitude, longitude) {
    qqMap.search({
      keyword: '社区', //搜索关键词
      location: [latitude, longitude].join(','), //设置周边搜索中心点
      success: ({ data }) => {
        console.log(data)
        this.setData({
          communitys: data.map(({ id, title, _distance }) => ({ id, title, _distance })),
        })
      },
    })
  },

  // 经纬度逆向
  getLocation(latitude, longitude) {
    // 定义中间this接收此时的this
    const _this = this
    qqMap.reverseGeocoder({
      location: [latitude, longitude].join(',') || '', //获取表单传入的位置坐标,不填默认当前位置,示例为string格式
      //get_poi: 1, //是否返回周边POI列表：1.返回；0不返回(默认),非必须参数
      success: function ({ result: { address } }) {
        // function函数内部this指向undefined,但是通过闭包使用外部定义的_this可以避免
        // console.log(_this)
        _this.setData({
          location: address,
        })
      },
    })
  },

  async loadLocation() {
    const { latitude, longitude } = await wx.getLocation()
    console.log(latitude, longitude)
    this.getLocation(latitude, longitude)
    this.getAroundCommunity(latitude, longitude)
  },
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
