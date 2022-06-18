import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "../pages/CartScreen/Products";
import ProductsScreen from "../pages/ProductsScreen/ProductsScreen";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductsScreen/>} />
          <Route path='/carrinho' element={<CartScreen/>} />
          <Route path={""} element={""} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;