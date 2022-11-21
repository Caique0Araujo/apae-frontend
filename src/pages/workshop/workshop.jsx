import { Container, Row, Col } from "react-bootstrap";
import './css/workshop.min.css';
import ButtonComponent from "../components/button-component/button-component";
import image from '../../assets/images/workshop-img-girl.png';
import imageSettings from '../../assets/images/settings-img.png';
import WorkshopCard from "./components/workshop-card";


const Workshop = (props) => {
  return (
    <div className="main-container">
    <Container fluid className="intro-container">
      <Row className="workshop-title">
        <Row className="title-row">
        <h1 className="title">
          Oficinas realizadas na APAE SJE
        </h1>
        </Row>
        <Row className="button-row">
          <ButtonComponent text='Descubra'/>
        </Row>
      </Row>
      <Row className="workshop-intro">
        <Col className="icon-col">
          <img src={image} className='image'/>
        </Col>
        <Col className="info-col">
          <div className="card">
            <div className="card-interior">
              <p className="card-text">Aqui vai um pequeno parágrafo sobre as oficinas no geral, como seu propósito ou coisa do tipo por exemplo.</p>
              <img src={imageSettings} className='image-settings' />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid className="workshops-container">
      <WorkshopCard/>
      <WorkshopCard/>
    </Container>
    </div>
  );
}

export default Workshop;