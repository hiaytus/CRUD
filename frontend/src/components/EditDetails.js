import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";
import { AuthHeader } from "./auth/AuthHeader";
import "../CSS/List.css"

export const EditDetails = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item = 'defaultValue' } = location.state || {}

  const [editItem, setEditItem] = useState(item.item)
  const [editQuantity, setEditQuantity] = useState(item.quantity)
  const [editDescription, setEditDescription] = useState(item.description)

  const [editToggle, setEditToggle] = useState(true)

  // const [inventoryList, setInventoryList] = useState([]) 
  // const [pageReload, setPageReload] = useState(null) 

  const handleSubmit = (itemID) => {
    let changedItem = {
      "item": editItem,
      "description": editDescription,
      "quantity": editQuantity
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
      .then(() => setEditToggle(!editToggle))
      .then(() => navigate(-1))
  }

  return (
    <>
      {/* <ItemDetails/> */}
      <AuthHeader/>
      <div className="container-list">
        <h3>Edit Item</h3>
        <div className="section-list">
          <div className="editItem">
            <div className="title">Item: </div> <input type="text"  maxLength="250" value={editItem} placeholder={editItem} onChange={(e) => setEditItem(e.target.value)} disabled={editToggle}></input>
          </div>
          <div className="editItem">
            <div className="title">Description: </div> <textarea maxLength="1000" value={editDescription} placeholder={editDescription} onChange={(e) => setEditDescription(e.target.value)} disabled={editToggle}></textarea>
          </div>
          <div className="editItem">
            <div className="title">Quantity: </div><input type="number" value={editQuantity} placeholder={editQuantity} onChange={(e) => setEditQuantity(e.target.value)} disabled={editToggle}></input>
          </div>
          {/* <div className="editItem">
            <button type="button" onClick={() => setEditToggle(!editToggle)}>edit</button>
            <button type="submit" onClick={() => handleSubmit(item.item_id)}>submit</button>

          </div> */}
        </div>
        <button type="button" onClick={() => setEditToggle(!editToggle)}>edit</button>
        <button type="submit" onClick={() => handleSubmit(item.item_id)}>submit</button>
        <button type="button" onClick={() => navigate(-1)}>return</button>
      </div>
    </>

  )
}