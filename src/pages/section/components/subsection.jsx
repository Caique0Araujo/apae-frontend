import {Row, Col, Image} from 'react-bootstrap';
import '../../../css/DefaultStyle.min.css';
import '../css/subSection.min.css';

const SubSection = (props) => {

  const section = props.section
  const order = props.side % 2 == 0 ? 'first' : 'last'
  const textAlign = props.side % 2 == 0 ? 'end' : 'initial'

  return (
    <Row className='sub-section-container' >
      <Col className='image-column' md={5} xs={{order}}>
        <img src={section.image} className='subSection-image' />
      </Col>
      <Col className='top-column'>
        <Row className='top-row'>
          <Row className='title-row'>
            <h1 style={{ fontSize: 48, fontWeight: '500', textAlign: textAlign  }}>
              {section.title}
            </h1>
          </Row>
          <Row className='sub-title-row'>
            <h5 style={{ fontSize: 24, fontWeight: '400', textAlign: textAlign  }}>
              {section.subtitle}
            </h5>
          </Row>
        </Row>
        <Row className='text-row' md={8}>
          <p style={{ fontSize: 12, fontWeight: '300', textAlign: textAlign  }}>
            {section.text}
          </p>
        </Row>
      </Col>   
    </Row>
  )
}

export default SubSection
