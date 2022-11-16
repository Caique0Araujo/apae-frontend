import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../css/DefaultStyle.min.css';
import './css/section.min.css'

import SubSection from './components/subSection';

const Section = (props) => {
  const data = props.data;
  return (
    <>
      <Container className='main-container' fluid>
        <Row className={`section-info-container`} >
          <Col className='left-column' md={6}>
          <h1 className='info-text'>{data.title}</h1>
          </Col>
          <Col className='info-image'>
            <Image src={data.image} className='section-image' />           
          </Col>
        </Row>
        {data.sub.map((section, idx) => {
          let index = data.invertSub == true ? idx + 1 : idx;
          return <SubSection section={section} side={index}/>
        })}
      </Container>
    </>
  );
}

export default Section;