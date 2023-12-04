import { InventoryList } from "./InventoryList";
import { useNavigate } from "react-router-dom";

export const UserAll = () => {
  const navigate = useNavigate();
  return (
    <>
    <InventoryList />
    <button type="button" onClick={() => navigate(-1)}>return</button>
    </>
  )
}