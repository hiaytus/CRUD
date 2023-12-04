import React, { useState, useEffect } from "react";

export const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]) 
  const [pageReload, setPageReload] = useState(null) 

  useEffect(() => {
    fetch('http://localhost:8080/')
    .then(res => res.json())
    .then(data => setInventoryList(data))
    }, [pageReload])

  return (
    <>
    <ul>
    {inventoryList.map((item, index) => {
        let str = item.description;
        if(str.length > 100) str = str.substring(0,100) + `...`;
        return (
        
          <li key={index}>
              Item: {item.item} <br></br>
              Description: {str} <br></br>
              Quantity: {item.quantity} 
          </li>
      
      )
      })}
    </ul>
    </>
  )
}