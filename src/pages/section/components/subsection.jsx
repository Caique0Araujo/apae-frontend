import {Row, Col} from 'react-bootstrap';
import '../../../css/DefaultStyle.min.css';
import '../css/subSection.min.css';

const SubSection = (props) => {

  const section = props.section
  const width = window.innerWidth
  var order = "first"
  var textAlign = "initial"
  var imageAlign = 'center'
  

  if(width >= 768){
    order = props.side % 2 == 0 ? 'first' : 'last'
    textAlign = props.side % 2 == 0 ? 'end' : 'initial'
    imageAlign = props.side % 2 == 0 ? 'flex-start' : 'flex-end'
  }
 
  
  return (
    <div className='main-subsection-box'>
      <Row className='sub-section-container' >
        <Col style={{
          padding: '0%',
          margin: '0%',
          justifyContent: imageAlign,
        }} xs={{order}}>
          <img src={section.image} className='subSection-image' />
        </Col>
        <Col className='top-column'>
          <Row className='top-row'>
            <Row className='title-row'>
              <h1 style={{ fontSize: '3.5em', fontWeight: '500', textAlign: 'center'   }}>
                {section.title}
              </h1>
            </Row>
            <Row className='sub-title-row'>
              <h5 style={{ fontSize: '1.2em', fontWeight: '400', textAlign: 'justify'  }}>
                {section.subtitle}
              </h5>
            </Row>
          </Row>
        </Col>   
      </Row>
    </div>
  )
}

export default SubSection
