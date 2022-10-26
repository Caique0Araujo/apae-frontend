import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../components/button-component/button-component";
import MenuBarComponent from "../components/menu-bar-component/menu-bar-component";
import OutlinedButtonComponent from "../components/outlined-button-component/outlined-button-component";
import bazar from '../../assets/images/bazar.png';
import '../../css/DefaultStyle.min.css';

function Bazar() {
    return (
        <div>
            <MenuBarComponent/>

            <Container>
                <Row style={{marginTop: 32, marginBottom: 100}}>
                    <Col>
                        <img src={bazar} height={450}/>
                    </Col>
                    <Col style={{marginTop: 75}}>
                        <h2 className='title' style={{textAlign: 'right'}}>Conheça o bazar da APAE</h2>
                        <p className="subtitle" style={{textAlign: 'right', marginBlock: 28}}>Falar como funciona o bazar, como começou talvez. Falar como doar e como comprar. Accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In </p>
                    
                        <Row style={{justifyContent: 'space-between'}}>
                            <OutlinedButtonComponent text='Doar'/>
                            <ButtonComponent text='Comprar'/>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row style={{justifyContent: 'space-between'}}>
                    <Col xs={4}>
                        <h4 style={{fontSize: 18, color: '#666666'}}>Como doar algo para o bazar?</h4>
                        <p style={{fontSize: 14, color: '#666666'}}>Dizer aqui como deve ser feita a doação.<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>

                    <Col xs={4}>
                        <h4 style={{textAlign: 'right', fontSize: 18, color: '#666666'}}>O que posso doar?</h4>
                        <p style={{textAlign: 'right', fontSize: 14, color: '#666666'}}>Dizer aqui quais tipos de coisas podem ser doadas.<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>

                <Row style={{justifyContent: 'space-between'}}>
                    <Col xs={4}>
                        <h4 style={{fontSize: 18, color: '#666666'}}>Qual o local para fazer a doação?</h4>
                        <p style={{fontSize: 14, color: '#666666'}}>Dizer aqui o local para fazer a doação<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>

                    <Col xs={4}>
                        <h4 style={{textAlign: 'right', fontSize: 18, color: '#666666'}}>Qualquer outra informação relevante</h4>
                        <p style={{textAlign: 'right', fontSize: 14, color: '#666666'}}>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Bazar;