import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../../CSS/AuthDetails.css';

export const AuthHeader = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

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
  }, [auth]);  // prev empty bracket, now auth

  const userSignOut = () => {
    signOut(auth).then(() => { navigate(`/`) })
  }

  return (
    <>
      {authUser ?
        <>
          <div className="userinfo">
            <h3>{`Signed in as:  ${authUser.email}`} <button onClick={userSignOut}>Log out</button></h3>
          </div>
        </>
        :
        <div className="userinfo">
          <h3> Signed Out </h3>
        </div>
      }
    </>
  )
}