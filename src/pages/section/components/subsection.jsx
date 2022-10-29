import {Container, Row, Col, Image} from 'react-bootstrap';




const SubSection = (props) => {

  const section = props.section
  const order = props.side % 2 == 0 ? 'first' : 'last'
  const textAlign = props.side % 2 == 0 ? 'initial' : 'end'

  return (
    <Row style={{padding: 0, margin: '0 0 4% 0'}} >
      <Col md={5} xs={{order}} style={{padding: 0, margin: 0}}>
        <Image src={section.image}  width={560} height={808.5} />
      </Col>
      <Col style={{padding: '0% 5%', color:  "rgba(102, 102, 102, 1)" }}>
        <Row style={{marginTop: '25%'}}>
          <Row style={{}}>
            <h1 style={{ fontSize: 48, fontWeight: '500', textAlign: textAlign  }}>
              {section.title}
            </h1>
          </Row>
          <Row style={{marginTop: "20%"}}>
            <h5 style={{ fontSize: 24, fontWeight: '400', textAlign: textAlign  }}>
              {section.subtitle}
            </h5>
          </Row>
        </Row>
        <Row md={8} style={{marginTop: "20%"}}>
          <p style={{ fontSize: 12, fontWeight: '300', textAlign: textAlign  }}>
            {section.text}
          </p>
        </Row>
      </Col>
      
    </Row>
  )
}

export default SubSection
