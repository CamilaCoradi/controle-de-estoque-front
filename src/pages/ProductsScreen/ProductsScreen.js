import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Main } from "./styled";
import Form from "../../components/Form/Form";

const ProductsScreen = () => {
  const navigate = useNavigate();
  const { states, requests } = useContext(GlobalStateContext);
  const { productList } = states;
  const { getProducts } = requests;

  useEffect(() => {
    getProducts();
  }, []);

  const renderProducts =
    productList &&
    productList.map((produto) => {
      return <ProductCard key={produto.id} produto={produto} />;
    });

  return (
    <div>
      <Form></Form>
      <Main>{renderProducts}</Main>

      <Button
        disableElevation={true}
        type={"submit"}
        variant={"contained"}
        color={"success"}
        onClick={() => navigate(`/pedido`)}
      >
        Visualizar pedido
      </Button>
    </div>
  );
};

export default ProductsScreen;
