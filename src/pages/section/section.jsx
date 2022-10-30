import {Container, Row, Col, Image} from 'react-bootstrap';
import MenuBarComponent from '../components/menu-bar-component/menu-bar-component';
import FooterBaseComponent from '../components/footer-base-component/footer-base-component';
import '../../css/DefaultStyle.min.css';

import SubSection from './components/subsection';

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
            <Image src={props.sectionImage}  width={680} height={1012.5}/>           
          </Col>
        </Row>
        {props.subsections.map((section) => {
          return <SubSection section={section} side={section.key}/>
        })}
      </Container>
      <FooterBaseComponent/>
    </>
  );
}

export default Section;