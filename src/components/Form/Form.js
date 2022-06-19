import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

export default function HelperTextMisaligned(props) {
  const { setters, states } = useContext(GlobalStateContext);
  const { setName, setDeliveryDate } = setters;
  const { nameForm, deliveryDateForm } = states;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      <TextField
        id="demo-helper-text-misaligned-no-helper"
        value={nameForm}
        onChange={(evento) => setName(evento.target.value)}
        label="Insira seu nome"
      />
      <TextField
        id="demo-helper-text-misaligned-no-helper"
        value={deliveryDateForm}
        onChange={(evento) => setDeliveryDate(evento.target.value)}
        type="date"
      />
    </Box>
  );
}
