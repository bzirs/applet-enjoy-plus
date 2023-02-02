// app.js

import './utils/utils'

import './utils/http'
import {
  getUserToken
} from './utils/storage'

App({
  token: null,
  refreshToken: null,
  globalData: {},
  onLaunch() {
    this.getToken()
  },
  // 获取本地token
  async getToken() {
    try {
      const {
        data: token
      } = await getUserToken('enjoy_plus_token')

      const {
        data: refreshToken
      } = await getUserToken('enjoy_plus_refreshToken')

      this.token = token
      this.refreshToken = refreshToken
    } catch (e) {
      console.log(e);
    }
  }
})