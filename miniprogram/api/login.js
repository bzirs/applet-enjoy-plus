/**
 * @description 获取登录验证码
 * @param {*} params 
 */
export const getLoginCode = params => wx.http.get('/code', params)


/**
 * @description 登录
 * @param {*} obj 
 * @returns Promise
 */
export const login = obj => wx.http.post('/login', obj)