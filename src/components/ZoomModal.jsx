import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import "../style.css";


const ZoomModal = (props) => {
    
    return (
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
  
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.item.nombre}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="image-slider"
                src={props.item.img}
                alt="First slide"      
                />
                <Carousel.Caption>
                <h3>Vista Lateral</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image-slider"
                src={props.item.imgb}
                alt="Second slide"

                />

                <Carousel.Caption>
                <h3>Vista Trasera</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image-slider"
                src={props.item.imgs}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Vista Superior</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image-slider"
                src={props.item.imgu}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Vista Inferior</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
           </Carousel>
              
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>{' '}
          </Modal.Footer>
          </Modal>
      </>
    );
  };
  
  export default ZoomModal;