import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import './index.scss'
import registerServiceWorker from './registerServiceWorker'

let style = {
  color: 'r' + 'ed',
  fontSize: '100px'
}
let name = 'Rosen'
let names = ['Rosen', 'Rosen2', 'Rosen3']
let flag = false
let jsx2 = (
  <div>
    {/* 变量的使用*/}
    <p>I am {name} </p>
    {/* 条件判断*/}
    {flag ? <p>I am {name}</p> : <p> I am not {name} </p>}
    {/* 数组循环 */}
    {names.map((name, index) => <p key={index}>Hello, i am {name}</p>)}
  </div>
)
// let jsx = <div className="jsx" style={style}>jsx.....</div>
// ReactDOM.render(<App />, document.getElementById('root'));
function JsxComponent() {
  return jsx2
}
/* 基础组件写法 */
function Component() {
  return <h1>I am Rosen</h1>
}
// class ES6Component extends React.Component{
//   render(){
//     return <h1>I am Rosen in es6</h1>
//   }
// }

// class ES6Component extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:'Rosen123'
//     }
//   }
//   render(){
//     setTimeout(()=>{
//         this.setState({
//           name:'Rosen123 test'
//         })
//     },2000)
//     return <h1>I am Rosen in {this.state.name}</h1>
//   }
class ES6Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Rosen123',
      age: 18
    }
    /* 事件处理方式1 */
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('onClick')
    this.setState({
      age: this.state.age + 1
    })
    // this.props.changeColor('red');
  }
  onValueChange(e) {
    this.setState({
      age: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>I am Rosen in {this.props.name}</h1>
        <p>I am {this.state.age} years old!</p>
        {/* 事件处理方式1
          <button onClick={this.handleClick}>加一岁</button>
        */}
        {/* 事件处理方式2*/}
        <button
          onClick={() => {
            this.handleClick()
          }}
        >
          加一岁
        </button>
        <input
          type="test"
          onChange={e => {
            this.onValueChange(e)
          }}
        />
      </div>
    )
  }
}
class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Rosen123',
      age: 18
    }
  }
  handleClick() {
    console.log('onClick')
    this.props.changeColor('red');
  }
  render() {
    return (
      <div>
        <p>父组件的背景颜色：I am {this.props.bgColor}</p>
        {/* 事件处理方式2*/}
        <button
          onClick={() => {
            this.handleClick()
          }}
        >
          改变父组建颜色
        </button>
      </div>
    )
  }
}
class Father extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: '#999999'
    }
  }
  onBgColorChange(color) {
    this.setState({
      bgColor: color
    })
  }
  render(props) {
    return (
      <div style={{ background: this.state.bgColor }}>
        <Child
          bgColor={this.state.bgColor}
          changeColor={(color) => {
            this.onBgColorChange(color)
          }}
        />
      </div>
    )
  }
}
let obj = (
  <div>
    <JsxComponent />
    <Component />
    <ES6Component />
  </div>
)
class Title extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.children}</h1>
      </div>
    )
  }
}
/* 组件组合方式 */
class App extends React.Component {
  render() {
    return (
      <div className=" ">
        {/* 容器组件 */}
        <Title title="App title">
          <span>App Span</span>
          <a href="">link</a>
        </Title>
        <hr />
        {/* 单纯组件 */}
        <ES6Component />
      </div>
    )
  }
}
// ReactDOM.render(jsx2, document.getElementById('root'));
// ReactDOM.render(obj, document.getElementById('root'))
ReactDOM.render(<Father />, document.getElementById('root'))
// ReactDOM.render(App, document.getElementById('root'))
registerServiceWorker()
