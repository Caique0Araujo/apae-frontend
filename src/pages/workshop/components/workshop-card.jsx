import { Col, Row} from 'react-bootstrap';
import '../css/workshop-card.min.css';
import img from '../../../assets/images//health-section-psycho.png'

const WorkshopCard = (props) => {
  return (
    <div className="main">
      <Col className='text-col'>
        <Row className='titles-row'>
          <h1>Oficina de culinária</h1>
          <h4>Algo sobre este tipo de oficina para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)</h4>
        </Row>
        <Row className='description-row'>
          <p>Um parágrafo maior aqui a respeito da oficina em questão.
Não coloquei as outras oficinas porque serão iguais as seções delas.
accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut 
eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut </p>
          <a href="">Veja mais abaixo</a>
        </Row>
      </Col>
      <Col className='img-col'>
        <Col className='column-one'>
          <img src={img} className='image-one' />
          <img src={img} className='image-two' />
        </Col>
        <Col className='column-two'>
          <img src={img} className='image-three' />
        </Col>
      </Col>
    </div>
  )
}

export default WorkshopCard;