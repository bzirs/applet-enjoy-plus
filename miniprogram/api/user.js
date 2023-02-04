/**
 * @description 获取用户信息
 * @param {*} _
 */
export const getUserInfo = () => wx.http.get('/userInfo')

/**
 * @description 更新用户名
 * @param {*} params
 */
export const updateUserName = (params) => wx.http.put('/userInfo', params)
