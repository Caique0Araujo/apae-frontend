import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../components/button-component/button-component";
import MenuBarComponent from "../components/menu-bar-component/menu-bar-component";
import OutlinedButtonComponent from "../components/outlined-button-component/outlined-button-component";

function Bazar() {
    return (
        <div>
            <MenuBarComponent/>

            <Container style={{marginTop: 32, marginBottom: 100}}>
                <Row>
                    <Col>
                        ola
                    </Col>
                    <Col>
                        <h2 style={{fontSize: 75, textAlign: 'right', color: '#666666'}}>Conheça o bazar da APAE</h2>
                        <p style={{fontSize: 16, textAlign: 'right', color: '#666666', marginBlock: 28}}>Falar como funciona o bazar, como começou talvez. Falar como doar e como comprar. Accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In </p>
                    
                        <Row style={{justifyContent: 'space-between'}}>
                            <OutlinedButtonComponent text='Doar'/>
                            <ButtonComponent text='Comprar'/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Bazar;