import { InventoryList } from "./InventoryList";
import { useNavigate } from "react-router-dom";
import "../CSS/List.css"

export const UserAll = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-list">
        <h3>Public Inventory <span><button type="button" onClick={() => navigate(-1)}>return</button></span></h3>
        <div className="section-list">
          <InventoryList />
        </div>
      </div>
    </>
  )
}