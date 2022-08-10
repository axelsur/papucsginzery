import { popularProducts } from "../data.js";
import ItemList from "./ItemList";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';



import {TituloILC} from '../styledcomponents'

const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect(() => {
   
    const getProductos = new Promise((res,rej) => {
      setTimeout(() => {
      
          if (!idCategoria){
            res(popularProducts)
          }
          else
          {
            res(popularProducts.filter((producto)=>producto.tipo === idCategoria))
          }
        
      },2000)
    })
    getProductos.then((res)=>{
      setProductos(res)
    })
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idCategoria])

  return (
    <>
    <TituloILC>{props.titulo}</TituloILC>
    <ItemList items={productos}/>
    </>    
  )
}   

export default ItemListContainer
