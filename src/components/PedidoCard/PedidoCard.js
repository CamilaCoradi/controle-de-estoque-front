import React from "react";
import { CardPedidoInfo } from "./styled";

const PedidoCard = (props) => {

  return (
    <CardPedidoInfo>
      <p>Nome: {props.pedidoHeader.name}</p>
      <p>Data da entrega: {props.pedidoHeader.deliveryDate}</p>
      <p>
        Valor total da compra:
        <br /> R$ {props.pedidoHeader.total}
      </p>
    </CardPedidoInfo>
  );
};

export default PedidoCard;
