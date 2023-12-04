import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ItemDetails = (props) => {
  const location = useLocation();
  const { item = 'defaultValue' } = location.state || {}

  const [inventoryList, setInventoryList] = useState([]) 
  const [pageReload, setPageReload] = useState(null) 

  // useEffect(() => {
  //   fetch(`http://localhost:8080/${itemID}`)
  //   .then(res => res.json())
  //   .then(data => setInventoryList(data))
  //   }, [pageReload])

  return (
    <>
     <p>Item: {item.item}</p>
     <p>Description: {item.description}</p>
     <p>Quantity: {item.quantity}</p>
    <ul>
      {/* {inventoryList.map((item, index) => {
        return (
          <li key={index}>Item: {item.item} </li>
      )
      })} */}
    </ul>
    </>
  )
}