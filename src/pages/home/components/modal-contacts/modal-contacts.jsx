import Modal from 'react-bootstrap/Modal';
import './css/modal-contacts.min.css'
import Button from 'react-bootstrap/Button';
import Pana from '../../../../assets/images/pana.png';

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
                <img src={Pana} alt="" />
            </div>
  
            <div>
              <div>
                <h3>Telefone</h3>
                <p>(33) 3412-1195</p>
                <h3>Email</h3>
                <p>apae.sjevangelista@yahoo.com.br</p>
                <h3>Endereço</h3>
                <p>Rua Duval Pimenta, nº 100, Centro <br/> São João Evangelista <br/> MG CEP 39.705-000</p>
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