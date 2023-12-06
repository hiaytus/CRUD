import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { ThemeToggle } from "../ThemeToggle";
import '../../CSS/AuthDetails.css';

export const AuthHeader = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null)
      }
    });

    return () => {
      listen();
    }
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => { navigate(`/`) })
  }

  return (

    <div className="userinfo">
      {authUser ?
        <>
          <h3>{`Signed in as:  ${authUser.email}`} <button onClick={userSignOut}>Log out</button></h3>
          <div className="toggle">
            <ThemeToggle />
          </div>
        </>
        : <h3> Signed Out </h3>}
    </div>

  )
}