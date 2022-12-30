import { Col, Row} from 'react-bootstrap';
import '../css/workshop-card.min.css';
import img1 from '../../../assets/images/workshop-img1.png'
import img2 from '../../../assets/images/workshop-img2.png'
import img3 from '../../../assets/images/workshop-img3.png'


const WorkshopCard = (props) => {

  const workshop = props.workshop;
  const imgs = workshop.imgs;

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
          <img src={imgs[1]} className='image-one rounded-pill' />
          <img src={imgs[2]} className='image-two rounded-pill' />
        </Col>
        <Col className='column-two'>
          <img src={imgs[0]} className='image-three rounded-pill' />
        </Col>
      </Col>
    </div>
  )
}

export default WorkshopCard;