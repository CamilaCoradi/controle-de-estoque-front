import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../constants/urls";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) =>{
    const [cart, setCart]=useState([])
    const [productList, setProductList]=useState([])
    
    const getProducts = () =>{
        axios
        .get(`${BASE_URL}/produtos`)
        .then((res)=> setProductList(res.data))
        .catch((err)=>alert(err.response))
    }

    const states = {cart, productList}  
    const setters = {setCart, setProductList}
    const requests = {getProducts}
    return(
        <GlobalStateContext.Provider value ={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState