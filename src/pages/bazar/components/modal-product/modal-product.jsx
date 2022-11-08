import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormattedNumber, IntlProvider } from 'react-intl';
import './css/modal-product.min.css'

export default function ModalProduct(props) {
  const product = props.data;
  let price = 0;
  let name = '';
  let description = '';
  if (product != null) {
    name = product.name;
    description = product.description;
    price = product.price;
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.visible}
      onHide={props.onHide}
    >
      <Modal.Header closeButton >
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
              <h3>{name}</h3>
              <p>{description}</p>
              <IntlProvider locale='pt-BR'>
                <FormattedNumber value={price} style='currency' currency='BRL' />
              </IntlProvider>
          </div>
        </section>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}