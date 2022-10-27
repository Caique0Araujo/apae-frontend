import {Container, Row, Col, Image} from 'react-bootstrap';
import sectionImage from '../../assets/images/health-section.svg';
import MenuBarComponent from '../components/menu-bar-component/menu-bar-component';
import psychoImage from '../../assets/images/health-section-psycho.png';


const psychology = {
  title: 'Psicologia',
  subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
  text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
  image: psychoImage
}

const subsection = [psychology];


const Section = (props) => {
  return (
    <>
      <MenuBarComponent/>
      <Container style={{margin: 0, padding: 0}} fluid>
        <Row style={{margin: 0, width: "100%"}}>
          <Col style={{marginLeft: '7%', padding: 20, backgroundImage: "linear-gradient(to right, #FFFFFF, #DFE9E8)", display: 'flex', alignItems: 'center'}} >
          <h1 style={{color: "rgba(102, 102, 102, 1) ", fontSize: 65, textAlign: 'initial'}}>
            Setor de {props.name} da APAE SJE
          </h1>
          </Col>
          <Col style={{padding: 0}}>
            <Image src={sectionImage} style={{width: "100%"}} />           
          </Col>
        </Row>
        {subsection.map((section) => {
          return (
          <Row >
            <Col style={{padding: '0% 5%', color:  "rgba(102, 102, 102, 1)" }}>
              <Row style={{marginTop: '25%'}}>
                <Row style={{}}>
                  <h1 style={{ fontSize: 60, fontWeight: '500' }}>
                    {section.title}
                  </h1>
                </Row>
                <Row style={{marginTop: "20%"}}>
                  <h5 style={{ fontSize: 30, fontWeight: '400' }}>
                    {section.subtitle}
                  </h5>
                </Row>
              </Row>
              <Row md={8} style={{marginTop: "20%"}}>
                <p style={{ fontSize: 15, fontWeight: '300' }}>
                  {section.text}
                </p>
              </Row>
            </Col>
            <Col md={5}>
              <Image src={section.image} style={{}}/>
            </Col>
          </Row>)
        })}
       
      </Container>
    </>
  );
}

export default Section;