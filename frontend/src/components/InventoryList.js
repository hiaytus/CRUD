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
        return (
          <li key={index}>{item.item}</li>
      )
      })}
    </ul>
    </>
  )
}