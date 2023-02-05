// app.js

import './utils/utils'

import './utils/http'
import { getUserToken } from './utils/storage'

App({
  userInfo: {},
  token: null,
  refreshToken: null,
  globalData: {},
  onLaunch() {
    this.getToken()
  },
  // 获取本地token
  async getToken() {
    console.log('调用了app')
    const { data: token } = await getUserToken('enjoy_plus_token')
    const { data: refreshToken } = await getUserToken('enjoy_plus_refreshToken')

    this.token = token
    this.refreshToken = refreshToken
    console.log('app.js')
  },
})
