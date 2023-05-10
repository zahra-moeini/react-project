import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Hello from './Hello';
import Timer from './Timer';
import { useState } from 'react';
import TimeList from './TimeList'


const App=()=>{
  const [title,setTitle]=useState("hello firends");
  const [isLight,setIsLight]=useState(false);
  const [timeArr,setTimeArr]=useState(["00:05:12" ,"00:06:32"]);
  useEffect(()=>{
    console.log("useEffect");
    return()=>{

    }
  },[isLight])

  const handleSetIsLight=()=>{
    setIsLight(!isLight)
  }
  return(
    <div className='main' style={{background:isLight ? "white" : "black"}}>
      <Hello title={title}/>
      <Timer 
      timeArr={timeArr}
      setTimeArr={setTimeArr}
      isLight={isLight} handleSetIsLight={handleSetIsLight}/>
      
    </div>
  )
}


export  default App;