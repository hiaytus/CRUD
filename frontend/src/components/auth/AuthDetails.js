import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { UserInventory } from "../UserInventory";
import { InventoryList } from "../InventoryList";
import { AuthHeader } from "./AuthHeader";
import '../../CSS/AuthDetails.css';


export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const auth = getAuth();

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

  return (
    <>
      {authUser ?
        <>
          <AuthHeader/>
          <UserInventory />
        </>
        :
        <>
          <div className="userinfo">
            <h3> Signed Out </h3>
          </div>
          <div class="container">
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
        </>
      }
    </>
  )
}