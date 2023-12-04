import './App.css';
import { InventoryList } from './InventoryList';
import { AuthDetails } from './components/AuthDetails';
import { Route, Routes } from 'react-router-dom';
import { UserInventory } from './UserInventory';
import { ItemDetails } from './ItemDetails';

function App() {
  return (
<>
{/* <AuthDetails/> */}
<Routes>
  <Route path="/" element={<AuthDetails />}/>
  <Route path="/items/user" element={<UserInventory />}/>
  <Route path="/item/details/:id" element={<ItemDetails />}/>

</Routes>

</>
  
  );
}

export default App;
