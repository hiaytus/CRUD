import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const UserInventory = () => {
  const [userInventory, setUserInventory] = useState([]) 
  const [pageReload, setPageReload] = useState(null) 
  const [userID, setUserID] = useState(1) // SET USER ID BASED ON LOG IN

  useEffect(() => {
    fetch(`http://localhost:8080/items/user/${userID}`)
    .then(res => res.json())
    .then(data => setUserInventory(data))
    }, [pageReload])

  return (
    <>
    <ul>
      {userInventory.map((item, index) => {
        return (
          <>
          <Link key={index} to="/item/detail/" state={{item}}>{item.item}</Link>
          <br></br>
          </>
      )
      })}
    </ul>
    </>
  )
}