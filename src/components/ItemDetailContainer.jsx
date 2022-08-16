import { popularProducts } from "../data.js";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import {
    /* BsCartPlus, */
}from "react-icons/bs";

const ItemDetailContainer = (props) => {

  const [item, setItem] = useState({})
  const {idProducto} = useParams()
  /* const idProducto = props.itemid */

  /* const [showBuy, setShowBuy] = useState(false); */

  useEffect(() => {
   
    const getItem = new Promise((res,rej) => {
      setTimeout(() => {

        res(popularProducts.find( producto => producto.id == idProducto ))

      },2000)
    })
    getItem.then((res)=>{
      setItem(res)
    })
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idProducto])

  return (
    <>
    {/* <BsCartPlus onClick={() => setShowBuy(true)} /> */}
    <ItemDetail /* show={showBuy} */ item={item} /* onHide={() => setShowBuy(false)} *//> 
    </>
  )
}   

export default ItemDetailContainer
