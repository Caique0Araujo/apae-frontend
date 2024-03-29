import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormattedNumber, IntlProvider } from 'react-intl';
import './css/modal-product.min.css'

export default function ModalProduct(props) {
  const product = props.data;
  let price = 0;
  let name = '';
  let description = '';
  let buffer = undefined;
  if (product != null) {
    name = product.name;
    description = product.description;
    price = product.price;
    buffer = product.image_path;
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
              { buffer !== undefined && <img src={`data:image/png;base64,${product.image_path}`} alt="" /> }
          </div>

          <div>
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
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