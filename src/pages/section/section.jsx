import {Container, Row, Col} from 'react-bootstrap';
import sectionImage from '../../../public/health-section.svg';

const subsection = ['psicologia', 'fisioterapia'];


const Section = (props) => {
  return (
    <>
      
      <Container style={{margin: 0, }}>
        <Row style={{padding: 0}}>
          <Col xs={14} md={9} style={{marginLeft: '7%', padding: 20, backgroundImage: "linear-gradient(to right, #FFFFFF, #DFE9E8)", display: 'flex', alignItems: 'center'}} >
          <h1 style={{color: "rgba(102, 102, 102, 1) "}}>
            Setor de {props.name} da APAE SJE
          </h1>
          </Col>
          <Col xs={2} md={1} style={{padding: 0}}>
            <img src={sectionImage} style={{left: 0 }}/>
            
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