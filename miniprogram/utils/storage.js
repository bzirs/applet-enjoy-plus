
/**
 * @description 存储token
 * @param {*} data 
 */
export const setUserToken = (data,key) => wx.setStorage({
  key,
  data
})

/**
 * @description 获取token
 * @param {*} _ 
 */
export const getUserToken = (key) => wx.getStorage({key})