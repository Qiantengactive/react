import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

let style ={
  color:'red',
  fontSize:'100px'
}
let jsx = <div className="jsx" style={style}>jsx.....</div>
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
