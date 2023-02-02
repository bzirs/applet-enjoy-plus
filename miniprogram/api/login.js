import http from '../utils/http'

/**
 * @description 获取登录验证码
 * @param {*} params 
 */
export const getLoginCode = params => http.get('/code', params)