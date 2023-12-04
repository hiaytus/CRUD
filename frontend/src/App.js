import './App.css';
import { UserAll } from './components/UserAll';
import { AuthDetails } from './components/auth/AuthDetails';
import { Route, Routes } from 'react-router-dom';
import { UserInventory } from './components/UserInventory';
import { ItemDetails } from './components/ItemDetails';
import { EditDetails } from './components/EditDetails';

function App() {
  return (
<>
{/* <AuthDetails/> */}
<Routes>
  <Route path="/" element={<AuthDetails />}/>
  <Route path="/items/user" element={<UserInventory />}/>
  <Route path="/item/details/:id" element={<ItemDetails />}/>
  <Route path="/item/details/edit/:id" element={<EditDetails />}/>
  <Route path="/all" element={<UserAll />}/>
</Routes>

</>
  
  );
}

export default App;
