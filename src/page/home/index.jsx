import React from 'react';
import PageTitle from '../../component/page-title/index';
import './index.css';
class Home extends React.Component{
  render(){
    return (
      <div id="page-wrapper">
        <PageTitle title="首页">
          {/* <button className="btn btn-warning">test</button> */}
        </PageTitle>
        <div className="row">
          <button className="col-md-12">body</button>
        </div> 
      </div>
    )
  }
}
export default Home;