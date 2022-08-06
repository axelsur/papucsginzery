import { popularProducts } from "../data.js";
import ItemList from "./ItemList";
import { useState, useEffect } from 'react'



import {TituloILC} from '../styledcomponents'

const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
   
    const getProductos = new Promise((res,rej) => {
      setTimeout(() => {
          res(popularProducts)
      },2000)
    })
    getProductos.then((res)=>{
      setProductos(res)
    })
 
  },)

  return (
    <>
    <TituloILC>{props.titulo}</TituloILC>
    <ItemList items={productos}/>
    </>    
  )
}   

export default ItemListContainer
