import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';



function Cart(props) {

  return (
    <>

    <Card style={{ width: '60rem' }} className="m-auto align-self-center mt-5 mb-5 text-center">
      <Card.Header>Carrito de Compra</Card.Header>
      <Card.Body>
            Elementos del Carrito
      </Card.Body>
    </Card>

    </>
  );
}

export default Cart;