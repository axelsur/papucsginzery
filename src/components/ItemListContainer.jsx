import ItemList from "./ItemList";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {TituloILC} from '../styledcomponents'
import Spinner from 'react-bootstrap/Spinner';
import { db } from "../firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import Swal from 'sweetalert2';


const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])

  const[isLoadingList,setisLoadingList] = useState(false)

  const {idCategoria} = useParams()

  useEffect(() => {
   
    setisLoadingList(true)

    let refCollectionProductos;
    
    if (!idCategoria){
      refCollectionProductos = collection(db, "productos")  
    }
    else
    {
      refCollectionProductos = query(collection(db, "productos"), where('tipo','==',idCategoria))
    }
    
    const consulta = getDocs(refCollectionProductos)
    
    consulta
    .then(snapshot=>{
       const productos = snapshot.docs.map(doc=>{
        setisLoadingList(false)

        return{
          ...doc.data(),
          id: doc.id
        }

       })
       setProductos(productos)

    })
    .catch( err=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudieron cargar los Productos',
      })
    }, [idCategoria])
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idCategoria])

  return (
    <>
    <TituloILC>{props.titulo}</TituloILC>

    {isLoadingList ?  <button className="btn btn-secondary text-center" style={{ display: "flex", margin: "auto" }} type="button" disabled>   
                        <Spinner animation="border" style={{ width: "6rem", height: "6rem"}}/>
                        <span style={{margin:"10px", marginTop:"35px"}}> Cargando ... </span>
                      </button>
                    :<ItemList items={productos}/>
    }    
    </>    
  )
}   

export default ItemListContainer
