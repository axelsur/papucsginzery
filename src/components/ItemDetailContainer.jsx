import ItemDetail from "./ItemDetail";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db } from "../firebase.js";
import { collection, getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2'


const ItemDetailContainer = (props) => {

  const [item, setItem] = useState({})
  const {idProducto} = useParams()

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo cargar el detalle del Producto.',
      })  
    }))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idProducto])

  return (
    <>
      <ItemDetail item={item}/> 
    </>
  )
}   

export default ItemDetailContainer
