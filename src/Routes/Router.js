import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PedidoScreen from "../pages/PedidoScreen/PedidoScreen";
import ProductsScreen from "../pages/ProductsScreen/ProductsScreen";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductsScreen/>} />
          <Route path='/pedido' element={<PedidoScreen/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;