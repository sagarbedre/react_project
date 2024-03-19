import React, { useState } from "react";
import Buttons from './Buttons.js';
import './App.css';
import'./index.css';

function Counter ( props){

    // let [count , setCount]= useState(0);

    // function handleClick(){

    //     setCount(count+1);
    // }

    return(

        <div>

         {/* <button onClick={handleClick} className="click"> Click Me </button>
          <Buttons value={count}/> */}

          <h1> {props.value} </h1>

        </div>
    )
}

export default Counter;