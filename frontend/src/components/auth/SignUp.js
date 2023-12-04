import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const userAuth = getAuth();
  const user = userAuth.currentUser

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=> {
    let newUser = {
        "uid" : userCredentials.user.uid,
        "firstName" : firstName,
        "lastName" : lastName
      }
      fetch("http://localhost:8080/users",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
    })
    .catch((error)=>console.log(error));
    
  }

  return (
    <div className="sign-up-container">
      <h2>Sign Up for Account</h2>
      <form onSubmit={signUp}>
        <input type="text" placeholder='Enter first name...' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
        <input type="text" placeholder='Enter last name...' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
        <input type="email" placeholder='Enter email...' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" placeholder='Enter password...' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}