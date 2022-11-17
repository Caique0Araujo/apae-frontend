import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../css/DefaultStyle.min.css';
import './css/section.min.css'

import SubSection from './components/subSection';

const Section = (props) => {
  const data = props.data;
  console.log(`${data.sectionClass}-section-info-container`)
  return (
    <>
      <Container className='main-container' fluid>
        <Row className={`${data.sectionClass}-section-info-container`} >
          <Col className='left-column' md={6}>
          <h1 className='info-text'>{data.title}</h1>
          </Col>
          <Col className='info-image'>
            <Image src={data.image} className='section-image' />           
          </Col>
        </Row>
        {data.sub.map((section) => {
          return <SubSection section={section} side={section.key}/>
        })}
      </Container>
    </>
  );
}

export default Section;