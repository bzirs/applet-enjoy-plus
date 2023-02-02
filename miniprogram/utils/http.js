import http from 'wechat-http'

http.baseURL = 'https://live-api.itheima.net'

wx.http = http

export default http