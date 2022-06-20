import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import PedidoCard from "../../components/PedidoCard/PedidoCard";
import PedidoItemsCard from "../../components/PedidoItemsCard/PedidoItemsCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { MainPedido } from "./styled";
 
const PedidoScreen = () => {
  const navigate = useNavigate();
  const { states, setters } = useContext(GlobalStateContext);
  const { pedido } = states;
  const { setPedido } = setters;
  const [botaoVoltar, setBotaoVoltar] = useState({value: false});
 
  function SendPedido(){
      axios
        .post(`${BASE_URL}/pedidos`, pedido)
        .then((res) => {
          alert("Pedido realizado com sucesso!")
          setPedido({ })
          botaoVoltar.value = true;
          setBotaoVoltar({value: botaoVoltar.value})
          
        })
        .catch((err) => alert(err.response));
     
  
  }

  const renderItemPedido =
    pedido.items &&
    pedido.items.map((item) => {
      return <PedidoItemsCard key={item.id} item={item} />;
    });

  return (
    <MainPedido>
      <PedidoCard key={1} pedidoHeader={pedido} />
      <div>{renderItemPedido}</div>
      <Button   variant={"contained"} onClick={() => navigate(`/`)}>
      {botaoVoltar.value ? "Iniciar uma nova compra": "Continuar comprando" }
      </Button>
      <Button onClick={() => SendPedido() } variant={"contained"} color={"success"}>
        Confirmar pedido
      </Button>
    </MainPedido>
  );
};

export default PedidoScreen;
