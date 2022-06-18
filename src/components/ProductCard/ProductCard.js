import React from "react";
import { Button } from "@mui/material";
import { Card } from "../styled";

const ProductCard = (props) =>{
    console.log(props)
    return(
        <Card>
            <p>{props.produto.name}</p><br/>
            <p>R$ {props.produto.price}</p><br/>
            <p>quant {props.produto.qty_stock}</p><br/>
            
            <Button
            type={"submit"}
            size="small"
            variant={"contained"}
            color={"primary"}
            >add</Button>
        </Card>
    )
}

export default ProductCard