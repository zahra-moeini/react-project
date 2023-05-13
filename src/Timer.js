import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { TestContext } from './testContext';
import TimeList from './TimeList';

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        hour:0,
        minute:0,
        secound:0,
        isStart:false
      }
    }

    static contextType= TestContext;

    startInterval=()=>{
      if(this.state.isStart==false){
        this.setState({
          isStart:true
        })
        interval=setInterval(()=>{
          this.setState({
            secound:this.state.secound +1
          })
          if(this.state.secound==60){
            this.setState({
              secound:0,
              minute:this.state.minute+1
            })
          }
          if(this.state.minute==60){
            this.setState({
              minute:0,
              hour:this.state.hour+1
            })
          }
        },1000)
      }
    }
 
    stopInterval=()=>{
      this.setState({
        isStart:false
      })
      clearInterval(interval)
    }

    resetInterval=()=>{
      this.stopInterval();
      this.setState({
        hour:0,
        minute:0,
        secound:0,
      })
    }
    handleSaveTime=()=>{
      let h=this.state.hour
      let m=this.state.minute
      let s=this.state.secound
      let newTime=`${`${h >9 ? h:"0"+h} : ${m > 9 ? m:"0"+m} : ${s>9 ? s:"0"+s}`}`
      this.context.setTimeArr([...this.context.timeArr, newTime])
    }
  

    render(){
      let h=this.state.hour
      let m=this.state.minute
      let s=this.state.secound
      return(
        <div>
           <h2 className='timer'onClick={this.handleSaveTime} style={{color:this.context}}> 
            {`${h >9 ? h:"0"+h} : ${m > 9 ? m:"0"+m} : ${s>9 ? s:"0"+s}`}
            </h2>
            <div className='button_box'>
              <span className='action_button start_burtton' onClick={this
              .startInterval}>start</span>
              <span className='action_button stop_burtton' onClick={this
              .stopInterval}>stop</span>
              <span className='action_button reset_burtton' onClick={this
              .resetInterval}>reset</span>
              <span className='action_button reset_burtton' onClick={this.props.handleSetIsLight}
              style={{background:this.props.isLight ? "black" : "white",
            color:this.props.isLight?"white":"black"
            }}
              >
                {this.props.isLight?"dark":"light"}
              </span>
            </div>
              <TimeList>
                {this.context.timeArr}
              </TimeList>
        </div>
      )
    }
  }
export default Timer;  