import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import {
    BsCartPlus,
}from "react-icons/bs";

import {AddContainer,
        AmountContainer,
        Amount,
        StyledButton
} from '../styledcomponents'



const ItemCount = ({stock, initial, onAdd}) => {

  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    if(contador < stock){
        setContador(contador + 1)
        
    }
  }

  const disminuirContador = () => {
    if(contador > 0){
        setContador(contador - 1)  
    }    
  }

  const addCart = () => {
    if ((stock > 0) && (contador !== 0)){
      onAdd(contador)
    }else{
      console.log("La cantidad tiene que se mayor que 0.")
    }   
  }

    return (
        <AddContainer>
            <AmountContainer>
                <Button variant="secondary" onClick={disminuirContador}> - </Button>{' '}
                <Amount>{contador}</Amount>
                <Button variant="secondary" onClick={aumentarContador}> + </Button>{' '}
            </AmountContainer>
            <StyledButton> <BsCartPlus onClick={addCart} /></StyledButton>{' '}
        </AddContainer>
    )
  }
  
  export default ItemCount