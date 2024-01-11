import React, {useState} from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import "./Auth.css";

function Auth() {
  const [active ,setActive] = useState("login");

  const handleChange = () => {
    setActive (active === "login" ? "signup" : "login" );
  };

  return (
    <div className='auth'>
        <div className="auth_left">
            <img src='https://i.imgur.com/P3Vm1Kq.png' 
            alt='login logo'/>
        </div>
        <div className="auth_right">
          {active === "login" ? <Login /> : <Signup />}
            <div className="auth_more">
                <span>
                {active === "login" ? (
                <>
                Don't have an account?{" "} 
                <button onClick={handleChange}>Sign up</button> 
                </>
                ) 
                : 
                (
                <>
                  Have an account? 
                  <button onClick={handleChange}>Log in</button>
                  </>
                  )
                }
                </span>
            </div>
        </div>
    </div>
  );
};

export default Auth;