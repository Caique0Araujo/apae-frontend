import { Container, Row, Col } from "react-bootstrap";
import './css/workshop.min.css';
import ButtonComponent from "../components/button-component/button-component";
import image from '../../assets/images/workshop-img-girl.png';
import imageSettings from '../../assets/images/settings-img.png';
import WorkshopCard from "./components/workshop-card";

import Musica1 from '../../assets/images/oficinas/musica1.jpg';
import Musica2 from '../../assets/images/oficinas/musica2.jpg';
import Musica3 from '../../assets/images/oficinas/musica3.jpg';

import Artesanato1 from '../../assets/images/oficinas/artesanato1.jpg';
import Artesanato2 from '../../assets/images/oficinas/artesanato2.jpg';
import Artesanato3 from '../../assets/images/oficinas/artesanato3.jpg';



const workshop1 = {
  title: 'Oficina de musicalização e comunicação',
  subtitle: '',
  text: 'Realizada na sala de música, esta oficina utiliza a expressão e os sons musicais na aprendizagem, além de explorar as possibilidades de desenvolvimento da linguagem, da expressão, da comunicação e do potencial criativo',
  imgs: [Musica1, Musica2, Musica3]
}

const workshop2 = {
  title: 'Oficina de artesanato',
  subtitle: '',
  text: 'As oficinas de artesanato estimulam a criativadade através da confecção de objetos utilizando materias diferentes. Os produtos gerados por essas oficinas vão desde itens decorativos até roupas e vassouras',
  imgs: [Artesanato1, Artesanato2, Artesanato3]
}




const Workshop = (props) => {
  return (
    <div className="main-container-workshop">
    <Container fluid className="intro-container">
      <Row className="workshop-title">
        <Row className="title-row">
        <h1 className="title">
          Oficinas realizadas na APAE SJE
        </h1>
        </Row>
        <Row className="button-row">
          <a href="#pra-la"><ButtonComponent text='Descubra'/></a>
          
        </Row>
      </Row>
      <Row className="workshop-intro">
        <Col className="icon-col">
          <img src={image} className='image'/>
        </Col>
        <Col className="info-col">
          <div className="card">
            <div className="card-interior">
              <p className="card-text">A APAE SJE realiza oficinas, que são eventos onde é estimulada a prática de atividades juntamente com a comunidade. Abaixo alguns exemplos de oficinas que realizamos na institução.</p>
              <img src={imageSettings} className='image-settings' />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container id="pra-la" fluid className="workshops-container">
      <WorkshopCard workshop = {workshop1} />
      <WorkshopCard workshop = {workshop2}/>
    </Container>
    </div>
  );
}

export default Workshop;