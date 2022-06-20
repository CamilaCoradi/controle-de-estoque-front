import React, { useState } from "react";
import { Card } from "./styled";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { useContext } from "react";

const ProductCard = (props) => {
  const { states, setters } = useContext(GlobalStateContext);
  const { pedido, nameForm, deliveryDateForm } = states;
  const { setPedido } = setters;

  function AddItemPedido(produto, qtdProduto) {
    let pedidoToPost = {
      name: nameForm,
      deliveryDate: deliveryDateForm,
      total: 0,
      items: [],
    };

    if (pedido.items === undefined) {
      let newPedido = CreateNewItemPedidos(produto, qtdProduto);
      pedidoToPost.items.push(newPedido);
      pedidoToPost.total = CalcTotal(pedidoToPost);
      setPedido(pedidoToPost);
      return;
    }

    pedidoToPost.items = pedido.items;

    if (pedido.items.find((prd) => prd.id === produto._id) != undefined) {
      pedido.items.forEach((element) => {
        if (element.id === produto._id) {
          element.qtd = qtdProduto;
          element.total = qtdProduto * produto.price;
        }
      });
    } else {
      let newPedido = CreateNewItemPedidos(produto, qtdProduto);
      pedidoToPost.items.push(newPedido);
    }

    pedidoToPost.total = CalcTotal(pedidoToPost);

    setPedido(pedidoToPost);
  }

  function CreateNewItemPedidos(produto, qtdProduto) {
    let newPedido = {
      id: produto._id,
      name: produto.name,
      price: produto.price,
      qtd: qtdProduto,
      total: qtdProduto * produto.price,
    };

    return newPedido;
  }

  function CalcTotal(pedidoToPost) {
    let totalPedido = 0;

    pedidoToPost.items.forEach((prd) => {
      totalPedido += prd.total;
    });

    return totalPedido;
  }

  return (
    <Card>
      <p>{props.produto.name}</p>
      <p>R$ {props.produto.price}</p>
      <p>quant {props.produto.qty_stock}</p>
      <br />
      <label>
        <input
          type="number"
          onChange={(evento) =>
            AddItemPedido(props.produto, evento.target.value)
          }
          min={0}
          max={props.produto.qty_stock}
        ></input>
      </label>
    </Card>
  );
};

export default ProductCard;
