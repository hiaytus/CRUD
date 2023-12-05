import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthHeader } from "./auth/AuthHeader";

export const ItemDetails = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item = 'defaultValue' } = location.state || {}

  return (
    <>
      <AuthHeader />
      <div className="container-list">
        <h3>Item Details</h3>
        <div className="itemList"><span className="itemBold">Item: </span>{item.item} </div>
        <div className="itemList"><span className="itemBold">Description: </span>{item.description}</div>
        <div className="itemList"><span className="itemBold">Quantity:</span> {item.quantity}</div>
        <button className="view" type="button" onClick={() => navigate(-1)}>return</button>
      </div>
    </>

  )
}