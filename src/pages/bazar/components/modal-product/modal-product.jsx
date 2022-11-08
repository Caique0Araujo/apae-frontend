import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/modal-product.min.css'
export default function ModalProduct(props)
{
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Visualização do produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <section className='modal-main-box'>
            <div>
                <img src="src\assets\images\pexels-mentatdgt-1336873.jpg" alt="" />
            </div>

            <div>
                <h3>Nome do produto</h3>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Autem, vel. Recusandae 
                    aut expedita eos maxime dolor. Magni 
                    tempore enim saepe repellendus dolorem, 
                    quod fugit eum similique odit explicabo 
                    voluptas dolor.
                </p>
                <h3>R$200,00</h3>
            </div>
         </section>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}