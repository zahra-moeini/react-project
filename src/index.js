import React from 'react';
import ReactDOM from 'react-dom';


class Timer extends React.Component{
  render(){
    return(
      <div>
         <h2>it is {new Date().toLocaleTimeString()}</h2>
      </div>
    )
  }
}

class Hello extends React.Component{
  render(){
    return(
      <div>
        <h1>hello frendss</h1>
      </div>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <div> 
          <Hello/>
         <Timer/>
      </div>
    )
  }
}

const tick=()=>{
  ReactDOM.render(<App/>,document.getElementById('root'));
}

setInterval(()=>{
  tick();
},1000)
