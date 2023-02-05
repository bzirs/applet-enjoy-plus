import { getLoginCode, login } from '../../api/login'
import { setUserToken } from '../../utils/storage'
const app = getApp()
// const secret_code = ''
Page({
  data: {
    countDownVisible: false,
    mobile: '17660720660',
    code: '',

    redirectPath: '',
  },

  onLoad(options) {
    console.log(options.redirect)
    this.setData({
      redirectPath: options.redirect,
    })
  },
  async handleGetCode() {
    // 表单验证 发送获取验证码请求
    if (!this.verifyMobile()) return

    const {
      code: stateCode,
      data: { code },
    } = await getLoginCode({
      mobile: this.data.mobile,
    })

    if (stateCode !== 10000) return wx.utils.toast('发送失败, 请稍后重试!')

    wx.utils.toast('验证码发送成功,请注意查收!')

    this.setData({
      countDownVisible: true,
    })

    // secret_code = code

    wx.setClipboardData({
      data: code,
      success: (e) => {
        console.log(e)
      },
    })
  },
  async handleLogin(e) {
    try {
      // 逐个验证表单数据
      if (!this.verifyMobile()) return
      if (!this.verifyCode()) return

      const obj = {
        mobile: this.data.mobile,
        code: this.data.code,
      }
      const loginResult = await login(obj)

      if (loginResult.code !== 10000) return wx.utils.toast(loginResult.message)

      const {
        data: { token, refreshToken },
      } = loginResult

      setUserToken(token, 'enjoy_plus_token')
      setUserToken(refreshToken, 'enjoy_plus_refreshToken')

      app.token = token

      // console.log(this.data.redirectPath);

      wx.redirectTo({
        url: this.data.redirectPath || '/pages/index/index',
      })
    } catch (error) {
      console.dir(error)
    }
  },
  // 验证验证码
  verifyCode() {
    // 验证码为6位数字
    const reg = /^\d{6}$/
    // 验证验证码
    const valid = reg.test(this.data.code.trim())
    // 验证结果提示
    if (!valid) wx.utils.toast('请检查验证码是否正确!')
    // 返回验证结果
    return valid
  },
  // 验证手机号格式
  verifyMobile() {
    // 宽松的验证规则
    const reg = /^[1][3-8][0-9]{9}$/
    // 正则验证（去除两端空格）
    const valid = reg.test(this.data.mobile.trim())
    // 验证结果提示
    if (!valid) wx.utils.toast('请填写正确的手机号码!')
    // 返回验证结果
    return valid
  },

  countDownChange(ev) {
    this.setData({
      timeData: ev.detail,
      countDownVisible: ev.detail.minutes === 1 || ev.detail.seconds > 0,
    })
  },
})
