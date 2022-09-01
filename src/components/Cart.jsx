import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { useContext,  useState, useEffect } from 'react';
import { myContext } from './CartContext'
import {
   BsTrashFill,
}from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom'



function Cart(props) {

  const {cart,removeItem,setHayProductos,hayProductos, precioTotal, setprecioTotal } = useContext(myContext) 

  


  useEffect(() => {
    //Calcula el precio total de los productos en el cart y lo setea en el estado
    let precioAux = 0
    cart.forEach(producto => {
      precioAux += producto.precio * producto.cantidad
    });
    precioAux += precioTotal 
    setprecioTotal(precioAux)
  }, [])
  
  
  const eliminar = (producto)=>{     
    setprecioTotal(precioTotal - (producto.cantidad * producto.precio))
    removeItem(producto)

    if (cart.length==0)
      setHayProductos(false)
    else 
      setHayProductos(true)
  }




  return (
    <>

    <Card style={{ width: '60rem' }} className="m-auto align-self-center mt-5 mb-5 text-center">
      <Card.Header>Carrito de Compra</Card.Header>
      <Card.Body>

      {hayProductos ?
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Precio Unidad</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>

          {      
          cart.map((productos)=>(
      
                <tr key={productos.id}>
                  <td><Image src={productos.imagen} rounded="true" width="30"></Image></td>
                  <td>{productos.nombre}</td>
                  <td>{productos.tipo}</td>
                  <td>$ {productos.precio}</td>
                  <td>{productos.cantidad}</td>
                  <td>$ {productos.precio * productos.cantidad}</td>
                  <td><button onClick={() => eliminar(productos)}> <BsTrashFill/></button></td>
                </tr>

          ))}

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total: </td>
                  <td> ${precioTotal}</td>
                </tr>

          </tbody>

          </Table>

          
        :
        <section className= 'container-fluid' id="productos">
              <h1 className='text-start fs-2 fw-bold text-decoration-underline row justify-content-center mb-5 mt-5'>NO HAY ITEMS EN EL CARRITO</h1>
              <Link className='btn btn-primary' to='/' id='btn-detalle'>Volver al inicio</Link>
        </section>
        }    

      {hayProductos ?
              <Link className='btn btn-secondary' to='/EndBuy' id='btn-detalle'>Finalizar compra</Link>
              :
              <div></div>
      }
      </Card.Body>
    </Card>

    </>
  );
}

export default Cart;