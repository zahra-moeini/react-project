import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time:10
      }
    }
    componentDidMount(){
        console.log("componentDidMount");
        interval=setInterval(()=>{
            this.setState({
              time:this.state.time-1
            })
          },1000)
    }

    componentDidUpdate(){
        if(this.state.time==0){
            clearInterval(interval);
        }
    }


    render(){
        console.log("render");
      return(
        <div>
           <h2 className='timer'>
            it is {this.state.time}
            </h2>
        </div>
      )
    }
  }
export default Timer;  