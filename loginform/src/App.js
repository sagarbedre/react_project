import './App.css';
import {useState }from 'react';

function App() {


  const [data,setData]=  useState("");
  const [data1,setData1]=  useState("");

  let [view , Setview]= useState();
  let [view1 , Setview1]= useState();


  

  const changeHandler = e => {

    setData(e.target.value);

  }
  const changeHandler1 = e => {

    setData1(e.target.value);

  }

 
  function handleClick (e) {

    Setview(data);
    Setview1(data1);
    e.preventDefault();

    
  }


  return (
    <form >

    <div className="login">
    <div className="login_form">
      <div className="login_forms1">
        <div>
          <div className="main1">Sign Up</div>

          <div className="main2">
            <div>
              {/* <img src={ulogo} height={a} width={b}></img> */}
            </div>
            <div className="main22">
              {" "}
              <input placeholder="  Your Name"  name= "username" onChange={changeHandler}></input>
            </div>
            <div className="sidelogo">
              {/* <img src={user_}></img> */}
            </div>
          </div>

          <div className="main3">
            <div>
              {/* <img src={ulogo2} height={a} width={b}></img> */}
            </div>
            <div className="main22">
              {" "}
              <input placeholder=" Your E-mail "  name="username1" onChange={changeHandler1}></input>
            </div>
          </div>

          <div className="main4">
            <div>
              {/* <img src={ulogo3} height={a} width={b}></img> */}
            </div>
            <div className="main22">
              {" "}
              <input placeholder=" Passward"></input>
            </div>
          </div>

          <div className="main5">
            <div>
              {/* <img src={ulogo4} height={a} width={b}></img> */}
            </div>
            <div className="main22">
              {" "}
              <input placeholder=" Repeat Passward"></input>
            </div>
            <div className="sidelogo">
              {/* <img src={lock_}></img> */}
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
              <button onClick={handleClick} >Register</button>
          
            {/* <div className="Countval"> your count value is here<span className="CountADD"></span> </div> */}
          </div>
        </div>
      </div>

      <div className="log_forms2">
        {/* <img src={back}></img> */}
      </div>
    </div>

    <div> {view} </div>
    <div> {view1} </div>
  </div>
    </form>

  );
}

export default App;
