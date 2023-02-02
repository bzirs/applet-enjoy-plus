const TOKEN = 'enjoy_plus_tokens'

/**
 * @description 存储token
 * @param {*} data 
 */
export const setUserToken = data => wx.setStorage({
  key: TOKEN,
  data
})

/**
 * @description 获取token
 * @param {*} _ 
 */
export const getUserToken = _ => wx.getStorage({
  key: TOKEN,

})