import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../components/button-component/button-component";
import MenuBarComponent from "../components/menu-bar-component/menu-bar-component";
import OutlinedButtonComponent from "../components/outlined-button-component/outlined-button-component";
import bazar from '../../assets/images/bazar.png';

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
                        <h2 style={{fontSize: 65, textAlign: 'right', color: '#666666', fontWeight: 500}}>Conheça o bazar da APAE</h2>
                        <p style={{fontSize: 16, textAlign: 'right', color: '#666666', marginBlock: 28, fontWeight: 300}}>Falar como funciona o bazar, como começou talvez. Falar como doar e como comprar. Accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In </p>
                    
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