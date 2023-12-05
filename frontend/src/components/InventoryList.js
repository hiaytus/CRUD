import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/List.css"
import { useNavigate } from "react-router-dom";
import { AuthHeader } from "./auth/AuthHeader";


export const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([])
  // const [pageReload, setPageReload] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(data => setInventoryList(data))
  }, [])

  return (
    <>
    <AuthHeader/>
      <div className="container-list">
        <h3>Public Inventory <span><button type="button" onClick={() => navigate(-1)}>return</button></span></h3>
        <div className="section-list">
          <ul>
            {inventoryList.map((item, index) => {
              let str = item.description;
              if (str.length > 100) str = str.substring(0, 100) + `...`;
              return (

                <li key={index}>
                  <Link to={`/item/details/${item.item_id}`} state={{ item }}>
                    <span className="title">Item: </span>{item.item} <br></br>
                    <span className="title">Description: </span> {str} <br></br>
                    <span className="title">Quantity: </span> {item.quantity}
                  </Link>

                </li>

              )
            })}
          </ul>
          </div>
          </div>
    </>
  )
}