import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Timer from './Timer';
import './style.css'


class App extends React.Component{
    render(){
      return(
        <div className='main'> 
            <Hello/>
           <Timer/>
        </div>
      )
    }
  }

export  default App;