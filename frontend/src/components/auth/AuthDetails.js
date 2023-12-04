import React, { useState, useEffect } from "react";
// import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { UserInventory } from "../UserInventory";
import { InventoryList } from "../InventoryList";
import '../../CSS/AuthDetails.css';


export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const auth = getAuth();
  // const user = auth.currentUser

  useEffect(() => {
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
    signOut(auth).then(() => console.log('logged out'))
  }

  return (
    <div> {authUser ?
      <>
        {/* <h2>{user.uid}</h2> */}
        <h3>{`Signed in as:  ${authUser.email}`} <button onClick={userSignOut}>Log out</button></h3>

        <UserInventory />
      </>
      :
      <div class="container">
        <h3> Signed Out </h3>
        <div class="section">
          <SignIn />
        </div>
        <div class="section">
          <SignUp />
        </div>
        <div class="section">
          <h3>Public Inventory</h3>
          <InventoryList />
        </div>
      </div>
    }
    </div>
  )
}