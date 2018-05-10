import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Link,Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

class A extends React.Component {
  render() {
    return (
      <div>
        Components A 参数是{this.props.match.params.id}
        <Switch>
          <Route
            exact
            path={`${this.props.match.path}`}
            render={route => {
              // return <div>参数是:{this.props.match.params.id}</div>
              return <div>当前组件是不带参数的A</div>;
            }}
          />
          <Route
            path={`${this.props.match.path}/sub`}
            render={route => {
              alert(1);
              // return <div>参数是:{this.props.match.params.id}</div>
              return <div>当前组件是sub</div>;
            }}
          />
          <Route
            path={`${this.props.match.path}/:id`}
            render={route => {
              // return <div>参数是:{this.props.match.params.id}</div>
              return (
                <div>当前组件是带参数的A,参数是:{route.match.params.id}</div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
class B extends React.Component {
  render() {
    return <div>Components B</div>;
  }
}
class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Link to="/a">组件A</Link>
        <br />
        <Link to="/a/123">带参数的组件A</Link>
        <br />
        <Link to="/b">组件B</Link>
        <br />
        <Link to="/a/sub">/a/sub</Link>
        <br />
        {this.props.children}
      </div>
    );
  }
}
// let obj = (
//   <Router>
//     <Wrapper>
//       <A />
//       <B />
//     </Wrapper>
//   </Router>
// );
let obj = (
  <Router>
    <Wrapper>
      <Route path="/a" component={A} />
      {/* <Route path='/a/:id'  component={A} ></Route> */}
      <Route path="/b" component={B} />
    </Wrapper>
  </Router>
);
ReactDOM.render(obj, document.getElementById('root'));
// ReactDOM.render(App, document.getElementById('root'))
registerServiceWorker();
