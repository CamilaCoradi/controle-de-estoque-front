import React from "react";
import { useNavigate } from "react-router-dom";


const CartScreen = () => {
const navigate = useNavigate();



  return (
    <div>
      <h1>Resumo do pedido</h1>
      <button onClick={()=> navigate(`/`)}>Voltar</button>
    </div>
  );
};

export default CartScreen;
