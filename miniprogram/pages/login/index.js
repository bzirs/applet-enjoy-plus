Page({
  data: {
    countDownVisible: true,
  },

  onLoad(options) {
    console.log(options.redirect);
  },

  countDownChange(ev) {
    this.setData({
      timeData: ev.detail,
      countDownVisible: ev.detail.minutes === 1 || ev.detail.seconds > 0,
    })
  },
})