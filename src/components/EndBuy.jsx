import React, { useState } from 'react';
import { addDoc, collection} from 'firebase/firestore';
import { useContext } from 'react';
import { myContext } from './CartContext'
import Swal from 'sweetalert2'
import { db } from "../firebase.js";
import Card from 'react-bootstrap/Card';


export default function EndBuy() {
    
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    
    const [idOrder, setIdOrder] = useState('')
    
    const {cart, precioTotal, clearCart} = useContext(myContext) 
   
    function finCompra() {
      
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fechaCompra = `${day}-${month}-${year}`;
    
        const order = {
          buyer: { name, tel, email },
          items: {cart},
          date: {fechaCompra},
          total: {precioTotal}
        };
  
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order)
        .then((res) => {
    
            setIdOrder(res.id);
            Swal.fire({
              text: `Gracias por tu compra! Su numero de compra es: ${res.id}`,
              confirmButtonText: `<a href="/" style="color:#000000; text-decoration: none;">Volver al Inicio</a>`
            })
            clearCart()
        })
    }
  
    return (
      
      <>

      <Card style={{ width: '60rem' }} className="m-auto align-self-center mt-5 mb-5 text-center">
            <Card.Header>Ingresa sus datos para finalizar la compra</Card.Header>
            <Card.Body>

      <div className='container-fluid mt-5'> 
                      <div className="form-group row mb-2 justify-content-center">
                        <div className='col-sm-10'>
                          <input className='form-control' type={'text'} placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                      </div>  
                      <div className="form-group row mb-2 justify-content-center">
                        <div className='col-sm-10'>
                        <input  className='form-control' type={'tel'} placeholder="celular" value={tel} onChange={(e) => setTel(e.target.value)} />
                  
                      </div>
                    </div>  
                    <div className="form-group row mb-2 justify-content-center">
                    <div className='col-sm-10'>
                      <input className='form-control' type={'email'} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  
                    </div>
                    <div className="form-group row mb-2 justify-content-center">
                    <div className='col-sm-10'>
                      <button className='btn btn-secondary mt-4' id='btn-detalle' onClick={finCompra}>Terminar Compra</button>

                    </div>
                  </div>                      
                    </div>
                    </div>
           
         </Card.Body>
    </Card>
    
    </>
  );

}