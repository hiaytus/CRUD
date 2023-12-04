import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { UserInventory } from "../UserInventory";
import { InventoryList } from "../InventoryList";


export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser

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
    <h2>{user.uid}</h2>
    <p>{`signed in as ${authUser.email}`}</p> 
    <button onClick={userSignOut}>Log out</button>
    <UserInventory/>
    </>
    : 
    <>
    <SignIn />
    <SignUp />
    <p> Signed Out </p>
    <h3>Public Inventory</h3>
    <InventoryList />
    </>
    }
    </div>
  )
}