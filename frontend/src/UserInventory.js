import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
export const UserInventory = () => {
  const [userInventory, setUserInventory] = useState([]) 
  const [pageReload, setPageReload] = useState(null) 

  const auth = getAuth();
  const user = auth.currentUser
  // const [userID, setUserID] = useState(user.uid)  // SET USER ID BASED ON LOG IN

  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(0) 
  const [description, setDescription] = useState('') 

  useEffect(() => {
    fetch(`http://localhost:8080/items/user/${user.uid}`)
    .then(res => res.json())
    .then(data => setUserInventory(data))
    }, [pageReload])

    const handleSubmit = () => {
      let newItem = {
        "item" : item,
        "description" : description,
        "quantity" : quantity,
        "uid": user.uid
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
        .then(()=> setUserInventory((prev) => [...prev, newItem]))
        .then(()=> setPageReload(newItem))
    }

    const deleteItem = (itemID) => {
      fetch(`http://localhost:8080/items/${itemID}`, {
        method: 'DELETE'
      })   
      .then(() => {
        setPageReload(itemID)
      })
  }

  return (
    <>
  
      <input type="text" placeholder="new item..." value={item} onChange={(e)=>{setItem(e.target.value)}}></input>
      <input type="text" placeholder="description..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <input type="number" placeholder="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
      <button type="submit" onClick={handleSubmit}>add item</button>

    <ul>
      {userInventory.map((item, index) => {
        return (
          
          <li key={index}>
            <Link to={`/item/details/${item.item_id}`} state={{item}}>
              Item: {item.item} <br></br>
              Description: {item.description} <br></br>
              Quantity: {item.quantity} 
            </Link>
            <button type="button" onClick={()=>deleteItem(item.item_id)}>delete</button>
          </li>
      
      )
      })}
    </ul>
    </>
  )
}