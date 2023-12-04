import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>console.log(userCredentials))
    .catch((error)=>console.log(error));
  }

  return (
    <div className="sign-up-container">
      <h2>Sign Up for Account</h2>
      <form onSubmit={signUp}>
        <input type="email" placeholder='Enter email...' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" placeholder='Enter password...' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}