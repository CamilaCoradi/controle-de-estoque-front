import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../constants/urls";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [pedido, setPedido] = useState([
    { name: null, deliveryDate: null, items: [] },
  ]);
  const [nameForm, setName] = useState([]);
  const [deliveryDateForm, setDeliveryDate] = useState([]);




  const getProducts = () => {
    axios
      .get(`${BASE_URL}/produtos`)
      .then((res) => setProductList(res.data))
      .catch((err) => alert(err.response));
  };

  const states = { cart, productList, pedido, nameForm, deliveryDateForm };
  const setters = {
    setCart,
    setProductList,
    setPedido,
    setName,
    setDeliveryDate,
  };
  const requests = { getProducts };
  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
