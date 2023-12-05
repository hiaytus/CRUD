import './App.css';
import { AuthDetails } from './components/auth/AuthDetails';
import { Route, Routes } from 'react-router-dom';
import { UserInventory } from './components/UserInventory';
import { ItemDetails } from './components/ItemDetails';
import { EditDetails } from './components/EditDetails';
import { InventoryList } from './components/InventoryList';

function App() {
  return (
<>
<Routes>
  <Route path="/" element={<AuthDetails />}/>
  <Route path="/public" element={<InventoryList />}/>
  <Route path="/items/user" element={<UserInventory />}/>
  <Route path="/item/details/:id" element={<ItemDetails />}/>
  <Route path="/item/details/edit/:id" element={<EditDetails />}/>
</Routes>
</>
  
  );
}

export default App;
