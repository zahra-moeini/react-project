import React from 'react';
import ReactDOM from 'react-dom';
 import './style.css'

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
    // componentDidMount(){
    //     console.log("componentDidMount");
    //     interval=setInterval(()=>{
    //         this.setState({
    //           time:this.state.time-1
    //         })
    //       },1000)
    // }
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
    // componentDidUpdate(){
    //     if(this.state.time==0){
    //         clearInterval(interval);
    //     }
    // }

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
    
  

    render(){
      let h=this.state.hour
      let m=this.state.minute
      let s=this.state.secound
      return(
        <div>
           <h2 className='timer'>
            {/* {this.state.hour +":"+this.state.minute+":"+this.state.secound} */}
            {`${h >9 ? h:"0"+h} : ${m > 9 ? m:"0"+m} : ${s>9 ? s:"0"+s}`}
            </h2>
            {/* <button onClick={this.props.handleSetTitle}>change</button> */}
            <div className='button_box'>
              <span className='action_button start_burtton' onClick={this
              .startInterval}>start</span>
              <span className='action_button stop_burtton' onClick={this
              .stopInterval}>stop</span>
              <span className='action_button reset_burtton' onClick={this
              .resetInterval}>reset</span>
            </div>
        </div>
      )
    }
  }
export default Timer;  