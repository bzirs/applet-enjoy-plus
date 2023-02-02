/**
 * @description 获取公告列表
 * @returns Promise
 */
export const getNotices = () => wx.http.get('/announcement')

/**
 * @description 获取公告详情
 * @param {*} id 
 * @returns Promise
 */
export const getNoticeDetial = (id) => wx.http.get('/announcement/' + id)