import React from 'react'
import styled from "styled-components";
import { popularProducts } from "../data.js";
import Item from "./Item";

const Container = styled.div`
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Titulo = styled.div`
    padding: 20px;
    font-family: Futura;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
`;

const ItemListContainer = (props) => {
  return (
    <><Titulo>{props.titulo}</Titulo>
    <Container>
      {popularProducts.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Container></>    
  )
}

export default ItemListContainer