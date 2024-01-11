import React, { useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import FacebookIcon from '@mui/icons-material/Facebook';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
    } catch (error) {
      console.log("Error during login", error);
    }
  };

  return (
    <div className='login'>
      <img
       src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
       alt="Instagram Logo" />
    <input 
    onChange={e => setEmail(e.target.value)} 
    type='email' 
    placeholder='Email'
    value={email}
    />
    <input 
    onChange={e => setPassword(e.target.value)} 
    type='password' 
    placeholder='Password' 
    value={password}
    />
    <button onClick={handleLogin}>Log in</button>
    
    <div className='divider'>
      <span>OR</span>
    </div>

    <button className='facebookIcon'>
            <FacebookIcon />
            <span>
              Login with facebook 
            </span>
        </button>
        <p>Forget Password?</p>
    </div>

    
  )
}

export default Login