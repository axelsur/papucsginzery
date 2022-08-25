import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom'
import "../style.css"



const CartWidget = (props) => {
  return (
    <>
    <Link to='/cart' id='cart'>
      <BsCart3 
                size={30} 
                color="white"
      />
    </Link>
    <span className='numCart'> {props.cantidadCarrito} </span>
    </>
  )
}

export default CartWidget