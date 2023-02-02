import http from '../utils/http'

/**
 * @description 获取公告列表
 * @returns Promise
 */
export const getNotices = () => http.get('/announcement')

/**
 * @description 获取公告详情
 * @param {*} id 
 * @returns Promise
 */
export const getNoticeDetial = (id) => http.get('/announcement/' + id)
