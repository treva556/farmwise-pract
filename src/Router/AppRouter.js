import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Homepage';
import Searchpage from '../pages/Searchpage';
// import Sellerform from '../pages/Sellerform';
import LoginPage from '../pages/Loginpage';
import Sellerform from '../pages/Sellerform';
import Animalproduce from '../components/Categories/Animalproduce';
import EquipandServices from '../components/Categories/Faequi&services';
import Adminprofile from '../Admin/Adminprofile';


function AppRouter() {
  return (
   
<BrowserRouter>
<div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/form" element={<Sellerform/>} />
    <Route path="/search" element={<Searchpage/>} />
    <Route path="/animalproduce" element={<Animalproduce />} /> {/* Add this line */}
    <Route path="/equip&sevices" element={<EquipandServices/>} /> {/* Add this line */}
    <Route path="/admin" element={<Adminprofile />} />
    <Route path="/sellerprofile" element={<Sellerform/>} />



 
    {/* admin routes  
    <Route path="admin/products" element={<AdminProducts />} />
    <Route path="admin/services" element={<AdminServices />} />
    <Route path="admin/orders" element={<AdminOrders />} />
  <Route path="admin/home" element={<AdminHome />} />  */}
  </Routes>
</div>
</BrowserRouter>


   
  
  );
}

export default AppRouter;