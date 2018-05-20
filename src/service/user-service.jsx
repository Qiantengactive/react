import MUtil from 'util/mm.jsx'
import $ from 'jquery'
import MUtil from 'util/mm.jsx'
const __mm = new MUtil()

class user {
  /* 登录操作 */
  login(loginInfo) {
    return __mm.request({
      type: post,
      url: '/manage/user/login.do',
      data: loginInfo
    })
  }
  /* 检测登录状态 */
  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username)
    let password = $.trim(loginInfo.password)
    if (typeof username !== 'string' || username.length === 0) {
      return {
        status: false,
        msg: '用户名不能为空'
      }
    }
    if (typeof password !== 'string' || password.length === 0) {
      return {
        status: false,
        msg: '密码不能为空'
      }
    }
    return {
      status: true,
      msg: '验证通过！'
    }
  }
  /* 退出登录 */
  logout() {
    return __mm.request({
      type: 'psot',
      url: '/user/logout.do'
    })
  }
  getUserList(pageNum) {
    return __mm.request({
      type: 'post',
      url: '/manage/user/list.do',
      data: {
        pageNum
      }
    })
  }
}
export default USer
