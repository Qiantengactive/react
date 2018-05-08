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
    /* 触发changeColor changeColor存在于<child changeColor=XXX}></child>  */
    this.props.changeColor('red')
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
/* 子传父 */
// class Father extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       bgColor: '#999999'
//     }
//   }
//   onBgColorChange(color) {
//     this.setState({
//       bgColor: color
//     })
//   }
//   render(props) {
//     return (
//       <div style={{ background: this.state.bgColor }}>
//         <Child
//           bgColor={this.state.bgColor}
//           changeColor={color => {
//             this.onBgColorChange(color)
//           }}
//         />
//       </div>
//     )
//   }
// }
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
/* 子组件数据传递 */
class Child1 extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  handleClick() {
    console.log('onClick')
    this.props.changeChild2Color('red')
  }
  render() {
    return (
      <div>
        <h1>Child1:{this.props.bgColor}</h1>
        {/* 事件处理方式2*/}
        <button
          onClick={e => {
            this.handleClick(e)
          }}
        >
          改变Child2颜色
        </button>
      </div>
    )
  }
}
class Child2 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div style={{ background: this.props.bgColor }}>
        <h1>Child2背景颜色：{this.props.bgColor}</h1>
      </div>
    )
  }
}
/* 子组件数据传递 */
class Father extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      child2BgColor: '#999'
    }
  }
  onChild2BgColorChange(color) {
    console.log(111111111111111111)
    console.log(color)
    console.log(111111111111111111)
    this.setState({
      child2BgColor: color
    })
  }
  render() {
    return (
      <div>
        {/* child1 组件中调用changeChild2Color 调用Father组件
            中的onChild2BgColorChange同时设置child2BgColor
            触发设置child2BgColor==》设置bgColor */}
        <Child1
          changeChild2Color={color => {
            this.onChild2BgColorChange(color)
          }}
        />
        <Child2 bgColor={this.state.child2BgColor} />
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
/* 生命周期 */
class LiveCycle extends React.Component {
  /* 构造函数 */
  constructor(props) {
    super(props)
    this.state = {
      data: 'old State'
    }
    console.log('初始化数据constructor')
  }
  /* 组件将要加载 */
  componentWillMount() {
    /* 挂载前 */
    console.log('挂载前componentWillMount')
  }
  /* 组件加载完成 */
  componentDidMount() {
    console.log('挂载后componentDidMount')
  }
  /* 处理点击事件 */
  setDateClick() {
    this.setState({
      data: 'new State'
    })
  }
  /*将要接受父组件传来的props  */
  componentWillReceiveProps(){

  }
  /* 子组件是不是应该更新 */
  shouldComponentUpdate(){
    /* go on */
      return true;
  }
  /* 组件将要更新 */
  componentWillUpdate(){

  }
  /* 渲染 */
  render() {
    console.log('render')
    return (
      <div>
        <div>liveCycle</div>
        <button onClick={()=>{this.setDateClick()}}>更新组件</button>
      </div>
    )
  }
}
class LiveCycleFather extends React.Component {
  /* 构造函数 */
  constructor(props) {
    super(props)
    this.state = {
      data: 'old State'
    }
    console.log('初始化数据constructor')
  }
  onPropsChange(){
    
  }
}
// ReactDOM.render(jsx2, document.getElementById('root'));
// ReactDOM.render(obj, document.getElementById('root'))
ReactDOM.render(<LiveCycle />, document.getElementById('root'))
// ReactDOM.render(App, document.getElementById('root'))
registerServiceWorker()
