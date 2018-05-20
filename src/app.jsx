import React from 'react'
import ReactDOM from 'react-dom' //渲染到dom
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
/* 页面 */
import Home from './page/home/index.jsx'
// import Home from 'page/home/index.jsx';
import Layout from './component/layout/index.jsx'
import Login from './page/login/index.jsx'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={props => (
              <Layout>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route exact path="/product" component={Home} />
                  <Route exact path="/product-category" component={Home} />
                </Switch>
              </Layout>
            )}
          />
          {/* <Switch> */}
            {/* <Route path="/login" component={Login} /> */}
            {/*没有switch 路劲是一个个匹配  Switch只匹配他第一个匹配的东西*/}
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/product" component={Home} /> */}
            {/* <Route exact path="/product.category" component={Home} /> */}
            {/* <Route exact path="/product-category" component={Home} /> */}
            {/* <Redirect from="*" to="/" /> */}
          {/* </Switch> */}
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);