import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

  const handleSubmit = (itemID) => {
    fetch(`http://localhost:8080/items/${itemID}`, {
      method: 'PATCH',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "item": editItem,
        "description": editDescription,
        "quantity": editQuantity
      }),
    })
      .then(() => navigate(-1))
  }

  return (
    <>
      <AuthHeader />
      <div className="container-list">
        <h3>Item Details <button type="button" onClick={() => navigate(-1)}>return</button></h3>
        <div className="itemList"><span className="itemBold">Item:</span><input type="text" maxLength="250" value={editItem} placeholder={editItem} onChange={(e) => setEditItem(e.target.value)} disabled={editToggle}></input></div>
        <div className="itemList"><span className="itemBold">Description:</span><textarea maxLength="1000" value={editDescription} placeholder={editDescription} onChange={(e) => setEditDescription(e.target.value)} disabled={editToggle}></textarea></div>
        <div className="itemList"><span className="itemBold">Quantity:</span><input type="number" min="0" value={editQuantity} placeholder={editQuantity} onChange={(e) => setEditQuantity(e.target.value)} disabled={editToggle}></input></div>
        <div className="buttonPadding">
          <button type="button" onClick={() => setEditToggle(!editToggle)}>edit</button>
          <button type="submit" onClick={() => handleSubmit(item.item_id)}>submit</button>
        </div>
      </div>
    </>

  )
}