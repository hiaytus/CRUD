import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ItemDetails = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item = 'defaultValue' } = location.state || {}

  const [editItem, setEditItem] = useState(item.item)
  const [editQuantity, setEditQuantity] = useState(item.quantity) 
  const [editDescription, setEditDescription] = useState(item.description) 

  const [editToggle, setEditToggle] = useState(true) 

  const [inventoryList, setInventoryList] = useState([]) 
  const [pageReload, setPageReload] = useState(null) 

  const handleSubmit = (itemID) => {
    let changedItem = {
      "item" : editItem,
      "description": editDescription,
      "quantity" : editQuantity
    }
    console.log(editQuantity)
    console.log(item.item_id)
    fetch(`http://localhost:8080/items/${itemID}`, {
      method: 'PATCH',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changedItem),
    })
    .then(()=>setEditToggle(!editToggle))
  }

  return (
    <>
    {/* <h3>{editItem}</h3>
    <h3>{editDescription}</h3>
    <h3>{editQuantity}</h3> */}

    <label>Item: </label><input type="text" value={editItem} placeholder={editItem} onChange={(e)=>setEditItem(e.target.value)} disabled={editToggle}></input>
    <label>Description: </label><textarea value={editDescription} placeholder={editDescription} onChange={(e)=>setEditDescription(e.target.value)}  disabled={editToggle}></textarea>
    <label>Quantity: </label><input type="number" value={editQuantity} placeholder={editQuantity} onChange={(e)=>setEditQuantity(e.target.value)}  disabled={editToggle}></input>

    <button type="button" onClick={()=>setEditToggle(!editToggle)}>edit</button>
    <button type="submit" onClick={()=>handleSubmit(item.item_id)}>submit</button>
    <button type="button" onClick={() => navigate(-1)}>return</button>
    </>

  )
}