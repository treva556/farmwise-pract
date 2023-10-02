

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Homepage';
import Searchpage from '../pages/Searchpage';
import LoginPage from '../pages/Loginpage';
import Sellerform from '../Seller/Sellerform';
import Adminprofile from '../Admin/Adminprofile';
// import Animalproduce from '../components/Categories/Animalproduce';
// import EquipandServices from '../components/Categories/Faequi&services';
import Layout from '../Admin/Layout';
import Sellershop from '../Seller/Shop';
import SubcategoryPage from '../pages/SubcategoryPage';
import CategoryPage from '../pages/CategoryPage';
import ProductPage from '../pages/ProductPage';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/seller" element={<Sellerform />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/admin" element={<Adminprofile />} />
        <Route path="/sellershop" element={<Sellershop/>} />
        <Route path="/sellerform" element={<Sellerform/>} />

        {/* Subcategory and Product routes */}
         <Route path="/categories/:categoryId/subcategories/:subcategoryId/products/:productId" element={<ProductPage/>} />
        <Route path="/categories/:categoryId/subcategories/:subcategoryId" element={<SubcategoryPage/>} /> 
        <Route path="/categories/:categoryId" element={<CategoryPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;