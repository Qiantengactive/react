import React from 'react'
// import User from 'ser'
import './index.scss'
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  componentWillMount() {
    document.title = '登录-Happy admin'
  }
  /* 当用户名发生改变 */
  onInputChange(e) {
    let inputValue = e.target.value
    let inputName = e.target.name
    console.log(inputValue)
    console.log(inputName)
    this.setState({
      [inputName]: inputValue
    })
  }
  onInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSubmit()
    }
  }
  onSubmit() {
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    }
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录 - SEALSHOP管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="admin"
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="admin"
                  onKeyUp={e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                />
              </div>
              <button className="btn btn-lg btn-primary btn-block">登录</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
