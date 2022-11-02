import {Container, Row, Col, Image} from 'react-bootstrap';
import MenuBarComponent from '../components/menu-bar-component/menu-bar-component';
import FooterBaseComponent from '../components/footer-base-component/footer-base-component';
import '../../css/DefaultStyle.min.css';
import './css/section.min.css'

import SubSection from './components/subSection';

const Section = (props) => {
  return (
    <>
      <MenuBarComponent/>
      <Container className='main-container' fluid>
        <Row className='info-container' >
          <Col className='left-column' md={6}>
          <h1 className='info-text'>
            Setor de {props.name} da APAE SJE
          </h1>
          </Col>
          <Col className='info-image'>
            <Image src={props.sectionImage}  className='section-image' />           
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