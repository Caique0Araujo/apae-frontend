import {Container, Row, Col, Image} from 'react-bootstrap';
import sectionImage from '../../assets/images/health-section.png';
import MenuBarComponent from '../components/menu-bar-component/menu-bar-component';
import psychoImage from '../../assets/images/health-section-psycho.png';
import physioImage from '../../assets/images/health-section-physio.png';
import { render } from 'react-dom';
import SubSection from './components/subsection';


const psychology = {
  key: 0,
  title: 'Psicologia',
  subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
  text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
  image: psychoImage
}

const physiotherapy = {
  key: 1,
  title: 'Fisioterapia',
  subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
  text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
  image: physioImage
}

const subsection = [psychology, physiotherapy];


const Section = (props) => {
  return (
    <>
      <MenuBarComponent/>
      <Container style={{margin: 0, padding: 0}} fluid>
        <Row style={{margin: 0, width: "100%"}}>
          <Col style={{marginLeft: '7%', padding: 10, backgroundImage: "linear-gradient(to right, #FFFFFF, #DFE9E8)", display: 'flex', alignItems: 'center'}} >
          <h1 style={{color: "rgba(102, 102, 102, 1) ", fontSize: 64, textAlign: 'initial'}}>
            Setor de {props.name} da APAE SJE
          </h1>
          </Col>
          <Col style={{padding: 0}}>
            <Image src={sectionImage}  width={680} height={1012.5}/>           
          </Col>
        </Row>
        {subsection.map((section) => {
          return <SubSection section={section} side={section.key}/>

          

        })}
       
      </Container>
    </>
  );
}

export default Section;