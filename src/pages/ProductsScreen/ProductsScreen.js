import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Main } from "./styled";

const ProductsScreen = () => {
  const navigate = useNavigate();
  const {states, setters, requests} = useContext(GlobalStateContext);
  const {cart, productList} = states;
  const {setCart, setProductList} = setters
  const {getProducts}= requests;
 

  useEffect(()=>{
    getProducts()
  },[])

  const addItem =(newItem) =>{
    const index = cart.findIndex((i)=>i.id === newItem.id)
    const newCart = [...cart]
    if (index === -1){
      const cartItem = {...newItem, amount:1}
      newCart.push(cartItem)
    }else{
      newCart[index].amount = newCart[index].amount + 1
    }
    setCart(newCart)
  }

  const renderProducts =
    productList &&
    productList.map((produto) => {
      return (
        <ProductCard
          key={produto.id}
          produto={produto}
           addItem={addItem}
        />
      )
    })
  return (
    <div>
        <form>
          <input placeholder="nome"></input>
          <input type='date'placeholder="data de entrega"></input>

        </form>
        <Main>{renderProducts}</Main>
        <Button  type={"submit"}

                    variant={"contained"}
                    color={"secondary"} onClick={() => navigate(`/carrinho`)}>
          Visualizar pedido
        </Button>
    </div>
  );
};

export default ProductsScreen;
