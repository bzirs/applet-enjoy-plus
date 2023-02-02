import http from 'wechat-http'

http.baseURL = 'https://live-api.itheima.net'

wx.http = http


// 响应拦截
http.intercept.response = r => {
  return r.data
}

export default http