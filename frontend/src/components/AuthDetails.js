import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { SignIn } from "./auth/SignIn";
import { SignUp } from "./auth/SignUp";


export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(()=> {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });

    return () => {
      listen();
    }
  }, []);

  const userSignOut = () => {
    signOut(auth).then(()=>console.log('logged out'))
  }
  
  return (
    <div> {authUser ? 
    <>

    <p>{`signed in as ${authUser.email}`}</p> 
    <button onClick={userSignOut}>Log out</button>
    </>
    : 
    <>
    <SignIn />
    <SignUp />
    <p> signed out </p>
    </>
    }
    </div>
  )
}