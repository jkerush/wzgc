import React, { Component, Fragment } from "react";
import axios from 'axios'
// import list from "./list.json";
import Pages from "./pages";
import TempUl from "./TempUl";

class MainCont extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            lens: 0,
            currentArr:[],
            currentPage:1,
            maxNum:0,
            pageCount:10
        };
        this.prevPage = this.prevPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.firstPage = this.firstPage.bind(this)
        this.lastPage = this.lastPage.bind(this)   
    }
    componentWillMount (){
      axios.get(process.env.PUBLIC_URL+'/list.json').then(res=>{
        let list = res.data.bili
        console.log(res.data.bili)
        this.setState({
          list:list,
          lens:list.length
        })
        let tempArr = this.state.list.slice(0,this.state.pageCount)
        // console.log('tempArr: ',tempArr)
        // console.log('lens: ',this.state.lens)
        let maxNum = Math.ceil(this.state.lens / this.state.pageCount)
        // console.log('maxNum: ',maxNum)
        this.setState({
          currentArr:tempArr,
          maxNum:maxNum
        })

    })

    }

    prevPage(){
      let currentNum = this.state.currentPage
      if(currentNum === 1 ) return;
      --currentNum;
      // console.log("currentNum: ",currentNum)
      this.setState({
        currentPage:currentNum
      },this.reRenderUl)   
      

    }
    nextPage(){
      let currentNum = this.state.currentPage
      if(currentNum === this.state.maxNum) return;
      ++currentNum;
      // console.log("currentNum: ",currentNum)
      this.setState({
        currentPage:currentNum
      },this.reRenderUl)   
      

    }
    firstPage(){
      this.setState({
        currentPage:1
      },this.reRenderUl)
      

      // console.log("currentPage: ",this.state.currentPage)

    }
    lastPage(){
      this.setState({
        currentPage:this.state.maxNum
      },this.reRenderUl) 
      // console.log("currentPage: ",this.state.currentPage)
      
    }
    reRenderUl(){
      let startPoint = (this.state.currentPage-1)
      let endPoint = this.state.currentPage
      let tempArr = this.state.list.slice(startPoint*this.state.pageCount,endPoint*this.state.pageCount)
      // console.log("currentNum: ",this.state.currentPage)
      // console.log(startPoint,this.state.pageCount,endPoint,this.state.pageCount)
      // console.log("tempArr: ",tempArr)
      this.setState({
        currentArr:tempArr
      })
    }
    render() {
        return (
            <Fragment>
                <TempUl list={this.state.currentArr} />
                <Pages lens={this.state.lens} currentPage={this.state.currentPage} prevPage={this.prevPage} nextPage={this.nextPage} firstPage={this.firstPage} lastPage={this.lastPage}/>
            </Fragment>
        );
    }
}

export default MainCont;
