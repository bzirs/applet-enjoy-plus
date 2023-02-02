/**
 * 工具方法
 */
const utils = {
  /**
   * 封装 wx.showToast
   * @param {string} title 消息提示的内容
   */
  toast(title = '数据加载失败...') {
    wx.showToast({
      title,
      mask: true,
      icon: 'none',
    })
  },
}
/**
 * 扩展 wx 全局对象，切记不要与原用 api 重名
 */
wx.utils = utils
/**
 * 模块化导出
 */
export default utils
