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

    const {
      data: {
        token
      }
    } = await getUserToken()

    this.token = token
  }
})