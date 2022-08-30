import ItemDetail from "./ItemDetail";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import {
    /* BsCartPlus, */
}from "react-icons/bs";
import { db } from "../firebase.js";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = (props) => {

  const [item, setItem] = useState({})
  const {idProducto} = useParams()
  /* const idProducto = props.itemid */

  /* const [showBuy, setShowBuy] = useState(false); */

  useEffect(() => {

    const productosCollection = collection(db,"productos")
    const referencia = doc(productosCollection, idProducto)
    const consulta= getDoc(referencia)

    consulta
    .then((res)=>{
      const objeto = { id: res.id, ...res.data() };

      
      setItem(objeto)
    })
    .catch((err=>{
      console.log(err)  
    }))

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
