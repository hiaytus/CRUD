import './App.css';
import { InventoryList } from './components/InventoryList';
import { AuthDetails } from './components/auth/AuthDetails';
import { Route, Routes } from 'react-router-dom';
import { UserInventory } from './components/UserInventory';
import { ItemDetails } from './components/ItemDetails';

function App() {
  return (
<>
{/* <AuthDetails/> */}
<Routes>
  <Route path="/" element={<AuthDetails />}/>
  <Route path="/items/user" element={<UserInventory />}/>
  <Route path="/item/details/:id" element={<ItemDetails />}/>
  <Route path="/public" element={<InventoryList />}/>
</Routes>

</>
  
  );
}

export default App;
