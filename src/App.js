import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import profile from "./img/a.png";
import pass from "./img/c.png";
import email from "./img/b.png";


function App(){
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>

            <div className='container-imgs'>
              <img src={profile} alt="Profile" className='Profile'></img>
            </div> 
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
                <img src={email} alt="email" className="email"></img>
                <input type="text" placeholder="User ID" classname="name"></input>
            </div>
            <div className='second-input'>
                <img src={pass} alt="pass" className="email"></img>
                <input type="text" placeholder="Password" classname="name"></input>
            </div>
          </div>
          <button className='button'>Login</button>
        </div>
        
        <p className='link'> 
          <a href="#">Forgot Password ?</a>
        </p>
        <p className='linki'>
        <a href='#'>Sign Up</a> 
        </p>
      
    </div>
    
    </div>
  );
}

export default App;
