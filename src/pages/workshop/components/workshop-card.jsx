import { Col, Row} from 'react-bootstrap';
import '../css/workshop-card.min.css';
import img1 from '../../../assets/images/workshop-img1.png'
import img2 from '../../../assets/images/workshop-img2.png'
import img3 from '../../../assets/images/workshop-img3.png'


const WorkshopCard = (props) => {

  const workshop = props.workshop;

  return (
    <div className="main">
      <Col className='text-col'>
        <Row className='titles-row'>
          <h1>{workshop.title}</h1>
          <h4>{workshop.subtitle}</h4>
        </Row>
        <Row className='description-row'>
          <p>{workshop.text}</p>
        </Row>
      </Col>
      <Col className='img-col'>
        <Col className='column-one'>
          <img src={img2} className='image-one' />
          <img src={img3} className='image-two' />
        </Col>
        <Col className='column-two'>
          <img src={img1} className='image-three' />
        </Col>
      </Col>
    </div>
  )
}

export default WorkshopCard;