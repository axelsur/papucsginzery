import React from 'react'
import { popularProducts } from "../data.js";
import Item from "./Item";

import {TituloILC,
        ContainerILC       
} from '../styledcomponents'

const ItemListContainer = (props) => {
  return (
    <><TituloILC>{props.titulo}</TituloILC>
    <ContainerILC>
      {popularProducts.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ContainerILC></>    
  )
}

export default ItemListContainer