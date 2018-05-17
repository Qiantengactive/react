/* 工具类基本结构 */
import  $ from  'jquery'
class MUtil {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        data: param.date || null,
        success: res => {
          console.log(res)
          if (res.status === 0) {
            /* 数据请求成功 */
            typeof resolve === 'function' && resolve(res.data, res.msg)
            
          } else if (res.status === 10) {
            /* 10未登录 没有登录状态 强制登录 */
            this.doLogin();
          } else {
            typeof reject === 'function' && reject(res.msg || res.data)
          }
        },
        error: err => {
          console.log(err)
          /* http请求err对象的东西 */
          typeof reject === 'function' && reject(err.statusText)
        }
      })
    })
  }
  /* 跳转登录 */
  doLogin(){
    window.location.href='/login?redirect='+ encodeURIComponent(window.location.pathname);
  }
}
export default MUtil
