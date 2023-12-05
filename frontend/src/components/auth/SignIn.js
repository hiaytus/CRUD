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
    <>
      <h3>Log in to Account</h3>
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <div className='signSection'>
            <label>username:</label><input type="email" placeholder='Enter email...' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='signSection'>
            <label>password:</label><input type="password" autoComplete="off" placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <button className="signButton" type="submit">Login</button>
        </form>
      </div>

    </>
  )
}