import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ItemDetails = (props) => {
  const location = useLocation();
  const { item = 'defaultValue' } = location.state || {}

  const [inventoryList, setInventoryList] = useState([]) 
  const [pageReload, setPageReload] = useState(null) 


  return (
    <>
     <p>Item: {item.item}</p>
     <p>Description: {item.description}</p>
     <p>Quantity: {item.quantity}</p>

     <button type="button">edit</button>
    </>

  )
}