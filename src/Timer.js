import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time:new Date().toLocaleTimeString()
      }
    }
    componentDidMount(){
        console.log("componentDidMount");
        interval=setInterval(()=>{
            this.setState({
              time:new Date().toLocaleTimeString()
            })
          },1000)
    }

    componentDidUpdate(){
        if(this.state.time=="12:49:00 PM"){
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