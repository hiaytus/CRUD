import React, { useState } from 'react';
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => console.log(userCredentials))
    .catch((error) => console.log(error))
  }

  return (
    <div className="sign-in-container">
      <h2>Log in to Account</h2>
      <form onSubmit={signIn}>
        <input type="email" placeholder='Enter email...' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" placeholder="Enter password..." value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}