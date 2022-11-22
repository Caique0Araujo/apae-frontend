import { Container, Row, Col } from "react-bootstrap";
import './css/workshop.min.css';
import ButtonComponent from "../components/button-component/button-component";
import image from '../../assets/images/workshop-img-girl.png';
import imageSettings from '../../assets/images/settings-img.png';
import WorkshopCard from "./components/workshop-card";


const workshop1 = {
  title: 'Oficina de culinária',
  subtitle: 'Algo sobre este tipo de oficina para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
  text: 'Um parágrafo maior aqui a respeito da oficina em questão. Não coloquei as outras oficinas porque serão iguais as seções delas accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut  eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut '
}

const workshop2 = {
  title: 'Oficina de artesanato',
  subtitle: 'Algo sobre este tipo de oficina para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
  text: 'Um parágrafo maior aqui a respeito da oficina em questão. Não coloquei as outras oficinas porque serão iguais as seções delas accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut  eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut '
}

const workshop3 = {
  title: 'Oficina terapeutica',
  subtitle: 'Algo sobre este tipo de oficina para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
  text: 'Um parágrafo maior aqui a respeito da oficina em questão. Não coloquei as outras oficinas porque serão iguais as seções delas accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut  eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut '
}


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
      <WorkshopCard workshop = {workshop1} />
      <WorkshopCard workshop = {workshop2}/>
      <WorkshopCard workshop = {workshop3}/>
    </Container>
    </div>
  );
}

export default Workshop;