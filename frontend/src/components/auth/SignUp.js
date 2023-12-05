import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        let newUser = {
          "uid": userCredentials.user.uid,
          "firstName": firstName,
          "lastName": lastName,
          "username": email
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
      .catch((error) => console.log(error));
  }

  return (
    <>
      <h3>Sign Up for Account</h3>
      <div className="sign-up-container">
        <form onSubmit={signUp}>
          <div className="signSection">
            <label>First Name:</label><input type="text" placeholder='Enter first name...' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
          </div>
          <div className="signSection">
            <label>Last Name:</label><input type="text" placeholder='Enter last name...' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
          </div>
          <div className="signSection">
            <label>Email:</label><input type="email" placeholder='Enter email...' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="signSection">
            <label>Password:</label><input type="password" autoComplete="off" minLength={8} placeholder='Enter password...' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <button className="signButton" type="submit">Create Account</button>
        </form>
      </div>
    </>
  )
}