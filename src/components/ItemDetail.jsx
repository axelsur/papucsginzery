import React, {useContext} from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


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

import { myContext } from './CartContext'


function ItemDetail(props) {

  const {addItem, cant, setCant, hideButton, setHideButton,setHayProductos } = useContext(myContext) 

  const onAdd = (cantidad) =>{
    setCant(cantidad);
    /* console.log("Cantidad a agregar al carrito: ",cantidad); */
    setHideButton(true);
  }

  const finCompra= ()=>
  {
    setHideButton(false);
    setHayProductos(true)
    addItem(props.item,cant)
  }


  return (
    <>

    <Card style={{ width: '60rem' }} className="m-auto align-self-center mt-5 mb-5 text-center">
      <Card.Header>{props.item.nombre}</Card.Header>
      <Card.Body>

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
                    <FilterSizeOption>38</FilterSizeOption>
                    <FilterSizeOption>40</FilterSizeOption>
                    <FilterSizeOption>42</FilterSizeOption>
                    <FilterSizeOption>44</FilterSizeOption>
                    <FilterSizeOption>46</FilterSizeOption>
                   </FilterSize> 
                </Stock>
              </StockContainer>

              {hideButton ?  <Link className='btn btn-primary' to='/cart' onClick={finCompra}>Terminar compra</Link>
                          :  <ItemCount stock={props.item.stock} initial={0} onAdd={onAdd} />} 

            </InfoContainer>
          </Wrapper>
        </Modal.Body>


      </Card.Body>
    </Card>



    {/* 
     <Modal
        show="true"
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
                    <FilterSizeOption>38</FilterSizeOption>
                    <FilterSizeOption>40</FilterSizeOption>
                    <FilterSizeOption>42</FilterSizeOption>
                    <FilterSizeOption>44</FilterSizeOption>
                    <FilterSizeOption>46</FilterSizeOption>
                  </FilterSize>
                </Stock>
              </StockContainer>

              <ItemCount stock={props.item.stock} initial={0} onAdd={addCart} />

            </InfoContainer>
          </Wrapper>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>{' '}
        </Modal.Footer>
      </Modal> */}


      
    </>
  );
}

export default ItemDetail;