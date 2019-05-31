import React, { Component } from 'react';
import './pages.css'
class pages extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }


  render() { 
    return ( 
      <div className='pages'>
          <button className="start" onClick={this.firstPage.bind(this)}>首页</button>
          <button className="lt" onClick={this.prevPage.bind(this)}>&lt;</button>
          <span>第<strong>{this.props.currentPage}</strong>页</span>
          <button className="gt" onClick={this.nextPage.bind(this)}>&gt;</button>
          <button  className="end" onClick={this.lastPage.bind(this)}>末页</button>
      </div>
     );
  }

  firstPage(){
    this.props.firstPage()
  }
  lastPage(){
    this.props.lastPage()
  }
  prevPage(){
    this.props.prevPage()
  }
  nextPage(){
    this.props.nextPage()
  }
  
}
 
export default pages;