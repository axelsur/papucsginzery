import React from 'react'

import styled from "styled-components";




import { popularProducts } from "../data.js";
import Item from "./Item";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ItemListContainer = (props) => {
  return (
    <><h3 className="text-center">{props.titulo}</h3>
    <Container>
      {popularProducts.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Container></>    
  )
}

export default ItemListContainer