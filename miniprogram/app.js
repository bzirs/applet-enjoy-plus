// app.js

import './utils/utils'

import './utils/http'
import {
  getUserToken
} from './utils/storage'

App({
  token: null,
  globalData: {},
  onLaunch() {
    this.getToken()
  },
  // 获取本地token
  async getToken() {
    try {
      const {
        data: {
          token
        }
      } = await getUserToken('enjoy_plus_token')

      this.token = token
    } catch (e) {
      console.log(e);
    }
  }
})