import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
    render(){
      return(
        <div>
          <h1 className='hello'>{this.props.title}</h1>
        </div>
      )
    }
  }

export default Hello;  