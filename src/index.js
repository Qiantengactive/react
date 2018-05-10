import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Link,Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<app/>, document.getElementById('root'));
// ReactDOM.render(App, document.getElementById('root'))
registerServiceWorker();
