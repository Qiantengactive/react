/* 工具类基本结构 */
class MUtil {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        success: res => {
          if (res.status === 0) {
            typeof resolve === 'function' && resolve(res.data, res.msg)
          } else if (res.status === 10) {
          } else {
            typeof reject === 'function' && reject(res.msg || res.data)
          }
        },
        error: err => {
          typeof reject === 'function' && reject(err.statusText)
        }
      })
    })
  }
}
export default MUtil
