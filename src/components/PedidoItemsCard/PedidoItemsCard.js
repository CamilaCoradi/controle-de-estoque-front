import React from "react";
import { CardPedidoItems, ProdutoNome } from "./styled";

const PedidoItemsCard = (props) => {

    return(
        <CardPedidoItems>
            <ProdutoNome>{props.item.name}</ProdutoNome>
            <p>R$ {props.item.price}</p>
            <p>qtd {props.item.qtd}</p>
            <p>R$ {props.item.total}</p>
        </CardPedidoItems>
    )
}
export default PedidoItemsCard