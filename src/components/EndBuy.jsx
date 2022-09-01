import React, { useState } from 'react';
import { addDoc, collection} from 'firebase/firestore';
import { useContext } from 'react';
import { myContext } from './CartContext'
import Swal from 'sweetalert2'
import { db } from "../firebase.js";
import Card from 'react-bootstrap/Card';


/* import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; */



export default function EndBuy() {
    
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    
    const [idOrder, setIdOrder] = useState('')
    
    const {cart, precioTotal, clearCart} = useContext(myContext) 
   
   function finCompra() {
      
      debugger
      console.log("Nombre: ", name)
      console.log("Tel: ", tel)
      console.log("Email: ", email)

    
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

        console.log("ORDERRRRRRRRRRR: ", order)
  
        const ordersCollection = collection(db, "orders");

        console.log("ORDER COLLECTION: ", ordersCollection)

        addDoc(ordersCollection, order)
        .then((res) => {
          
          console.log("entre al adddoc")
            setIdOrder(res.id);
            Swal.fire({
              text: `Gracias por tu compra! Su numero de compra es: ${res.id}`,
              confirmButtonText: `<a href="/" style="color:#000000; text-decoration: none;">Volver al Inicio</a>`
            })
            clearCart()
            //setCompro(true)
            
        
        })
  
        console.log("pase el adddoc y no hice una mierda")
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

{/* 
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                
                <div className="col-auto bg-light p-5">
                <h2>Datos de Envio</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type={'text'}
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            required
                            type={'text'}
                            placeholder="Telefono"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                        </Form.Group>
                      
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type={'text'} placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Ingrese un Email Valido.
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Button type="submit" onClick={finCompra}> Finalizar Compra </Button>
                </Form>
                    
                </div>
            </div>
        </div>
 */
 }
        
        </>
        
      );
    }