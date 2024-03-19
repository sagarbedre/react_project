import "./App.css";
import React, { useState } from "react";
import ulogo from "./img1.png";
import ulogo2 from "./l1.png";
import ulogo3 from "./l2.png";
import ulogo4 from "./l3.png";
import back from "./log_form.avif";
import lock_ from "./lock_.png";
import user_ from "./user_.png";

function App() {
  let a = 25;
  let b = 25;
  // let c = 0 ;

  let [Count, setCount] = useState(0);

  function Incriment() {
    setCount(Count+1);
    // console.log(c);
  }

  return (
    <div className="login">
      <div className="login_form">
        <div className="login_forms1">
          <div>
            <div className="main1">Sign Up</div>

            <div className="main2">
              <div>
                <img src={ulogo} height={a} width={b}></img>
              </div>
              <div className="main22">
                {" "}
                <input placeholder="  Your Name"></input>
              </div>
              <div className="sidelogo">
                <img src={user_}></img>
              </div>
            </div>

            <div className="main3">
              <div>
                <img src={ulogo2} height={a} width={b}></img>
              </div>
              <div className="main22">
                {" "}
                <input placeholder=" Your E-mail "></input>
              </div>
            </div>

            <div className="main4">
              <div>
                <img src={ulogo3} height={a} width={b}></img>
              </div>
              <div className="main22">
                {" "}
                <input placeholder=" Passward"></input>
              </div>
            </div>

            <div className="main5">
              <div>
                <img src={ulogo4} height={a} width={b}></img>
              </div>
              <div className="main22">
                {" "}
                <input placeholder=" Repeat Passward"></input>
              </div>
              <div className="sidelogo">
                <img src={lock_}></img>
              </div>
            </div>

            <div className="main5">
              <div className="cheak">
                <input type="checkbox"></input>
              </div>
              <div className="hello">
                I agree all statement in <span>Terms of service</span>
              </div>
            </div>

            <div className="main6" >
                <button onClick={()=>Incriment()} >Register</button>
            
              <div className="Countval"> your count value is here<span className="CountADD"> {Count} </span> </div>
            </div>
          </div>
        </div>

        <div className="log_forms2">
          <img src={back}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
