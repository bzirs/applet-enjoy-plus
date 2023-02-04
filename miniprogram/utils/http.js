import http from 'wechat-http'
import { setUserToken } from './storage'

http.baseURL = 'https://live-api.itheima.net'

wx.http = http

// 请求拦截
http.intercept.request = (r) => {
  const { token } = getApp()
  // console.log(token)

  let defaultHeaders = {}
  if (token) defaultHeaders.Authorization = `Bearer ${token}`

  // 浅拷贝header
  defaultHeaders = Object.assign(defaultHeaders, r.header)

  r.header = defaultHeaders

  return r
}

// 响应拦截
http.intercept.response = async (r) => {
  // console.log(r)
  const {
    data: { code, url },
  } = r
  const app = getApp()
  // console.log(app.refreshToken)
  if (app.refreshToken && code === 401) {
    const previousRequset = r.config
    // console.log(previousRequset.url.includes('/refreshToken'))
    const flag = previousRequset.url.includes('/refreshToken')
    // 先判断上一次refreshToken是否失效 401
    if (flag) {
      const pages = getCurrentPages()
      const page = pages[pages.length - 1].route

      // 不return跳出就会一直循环
      return wx.redirectTo({
        url: '/pages/login/index?redirect=/' + page,
      })
    }

    const res = await wx.http({
      url: '/refreshToken',
      method: 'post',
      header: {
        Authorization: `Bearer ${app.refreshToken}`,
      },
    })

    // console.log(res.data)

    if (res.data) {
      const {
        data: { token },
      } = res
      // const token = res?.data?.token || null
      app.token = token
      setUserToken(token, 'enjoy_plus_token')

      // console.log(previousRequset)
      previousRequset.header.Authorization = `Bearer ${token}`

      return http(previousRequset)
    }
  }

  return r.data
}

export default http
