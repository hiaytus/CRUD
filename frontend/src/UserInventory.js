import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const UserInventory = () => {
  const [userInventory, setUserInventory] = useState([]) 
  const [pageReload, setPageReload] = useState(null) 
  const [userID, setUserID] = useState(1) // SET USER ID BASED ON LOG IN

  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(0) 
  const [description, setDescription] = useState('') 
  useEffect(() => {
    fetch(`http://localhost:8080/items/user/${userID}`)
    .then(res => res.json())
    .then(data => setUserInventory(data))
    }, [pageReload])

    const handleSubmit = () => {
      let newItem = {
        "item" : item,
        "description" : description,
        "quantity" : quantity,
        "user_id" : userID
      }
    
      fetch("http://localhost:8080/items",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then(setUserInventory((prev) => [...prev, newItem]))
    }

    
    // const addItem = () => {
    //   fetch('http://localhost:8081/items'),{
    //     method: 'POST',
    //     body: JSON.stringify({
    //       item: newItem
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //     }

  return (
    <>
  
      <input type="text" placeholder="new item..." value={item} onChange={(e)=>{setItem(e.target.value)}}></input>
      <input type="text" placeholder="description..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <input type="number" placeholder="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
      <button type="submit" onClick={handleSubmit}>add item</button>

    <ul>
      {userInventory.map((item, index) => {
        return (
          
          <li key={index}><Link to="/item/detail/" state={{item}}>{item.item}</Link></li>
      
      )
      })}
    </ul>
    </>
  )
}