import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ItemCount from "./ItemCount";

import {Wrapper,
        ImgContainer,
        Image,
        InfoContainer,
        Desc,
        Price,
        StockContainer,
        Stock,
        StockTitle,
        StockDetails,
        FilterSize,
        FilterSizeOption
} from '../styledcomponents'




const BuyModal = (props) => {

  const [cant, setCant] = useState(0)

  const addCart = (cantidad) =>{
    setCant(cantidad)
    console.log ("Cantidad a agregar al carrito: ", cantidad);
  }
  
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.item.nombre}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Wrapper> 
            <ImgContainer>
            <Image src={props.item.imgs} />
            </ImgContainer>
            <InfoContainer>
            <Desc>
                {props.item.descripcion}
            </Desc>
            <Price>$ {props.item.precio}</Price>
            <StockContainer>
                <Stock>
                <StockTitle>Stock: </StockTitle>
                <StockDetails> {props.item.stock} </StockDetails>
                </Stock>
                <Stock>
                <StockTitle>Tamaño: </StockTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                </Stock>
            </StockContainer>
            
              <ItemCount stock={props.item.stock} initial={0} onAdd={addCart}  />
            
            </InfoContainer>
        </Wrapper>

        
        
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>{' '}
        </Modal.Footer>
        </Modal>
    </>
  );
};

export default BuyModal;