import Modal from 'react-bootstrap/Modal';
import './css/modal-contacts.min.css'
import Button from 'react-bootstrap/Button';
export default function ModalContacts(props){
    return(
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.visible}
        onHide={props.onHide}
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
            Fale conosco
          </Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <section className='modal-main-box'>
            <div className='img-box'>
                <img src="src\assets\images\pana.png" alt="" />
            </div>
  
            <div>
              <div>
                <h3>Telefones</h3>
                <p>(33)2112-3232<br/>(11)91245-8585</p>
                <h3>Emails</h3>
                <p>12345678@abcde.com<br/>qwerty123#asdfcom</p>
                <h3>Endereço</h3>
                <p>Rua Ramon Dino, nº13<br/>Bairro Jardin Trembolona<br/>Marobalândia, AC, Brasil</p>
              </div>
              
            </div>
          </section>
        </Modal.Body>
  
        <Modal.Footer>
          <Button color='#74B05C' onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    );
}