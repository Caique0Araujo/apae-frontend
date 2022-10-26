import {Container, Row, Col, Image} from 'react-bootstrap';
import sectionImage from '../../../public/health-section.svg';
import MenuBarComponent from '../components/menu-bar-component/menu-bar-component';

const subsection = ['psicologia', 'fisioterapia'];


const Section = (props) => {
  return (
    <>
      <MenuBarComponent/>
      <Container style={{margin: 0, padding: 0}} fluid>
        <Row style={{padding: 0, width: '100%', margin: 0}}>
          <Col style={{ width: '70%', marginLeft: '7%', padding: 20, backgroundImage: "linear-gradient(to right, #FFFFFF, #DFE9E8)", display: 'flex', alignItems: 'center'}} >
          <h1 style={{color: "rgba(102, 102, 102, 1) "}}>
            Setor de {props.name} da APAE SJE
          </h1>
          </Col>
          <Col style={{padding: 0, width: '30%'}}>
            <Image src={sectionImage} fluid style={{width: '100%'}}/>           
          </Col>
        </Row>
        {subsection.map((section) => {
          return (<Row>
            <Col style={{padding: 20}}>Setor de {section}</Col>
            <Col></Col>
          </Row>)
        })}
       
      </Container>
    </>
  );
}

export default Section;