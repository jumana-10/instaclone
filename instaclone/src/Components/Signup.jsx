import React, { useState } from 'react'
import "./Signup.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../Firebase/Firebase";
import Facebook from '@mui/icons-material/Facebook';

function Signup() {
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
    } catch (error) {
      console.log("Error during signup", error);
      alert(error);
    }
  };

  return (
    <div className='signup'>
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
        onChange={e => setUsername(e.target.value)} 
        type='text' 
        placeholder='username' 
        value={username}
        />
        <input 
        onChange={e => setPassword(e.target.value)} 
        type='password' 
        placeholder='Password' 
        value={password}
        />
        <button onClick={handleSignup}>Sign up</button>

        <div className='divider'></div>

        <button className='facebookIcon'>
            <Facebook />
            <span>
              Login with facebook 
            </span>
        </button>

    </div>
  )
}

export default Signup;