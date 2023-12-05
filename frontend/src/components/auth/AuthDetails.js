import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { UserInventory } from "../UserInventory";
import { AuthHeader } from "./AuthHeader";
import { Link } from "react-router-dom";
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
  }, []); // prev empty array

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
            <h3>Signed Out</h3>
          </div>
          <div className="container">
            <div className="section">
              <SignIn />
            </div>
            <div className="section">
              <SignUp />
            </div>
            <Link to="/public"><button className="view">Guest View</button></Link>
          </div>
        </>
      }
    </>
  )
}