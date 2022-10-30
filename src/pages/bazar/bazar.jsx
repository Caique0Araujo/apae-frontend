import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../components/button-component/button-component";
import MenuBarComponent from "../components/menu-bar-component/menu-bar-component";
import OutlinedButtonComponent from "../components/outlined-button-component/outlined-button-component";
import bazar from '../../assets/images/bazar.png';
import '../../css/DefaultStyle.min.css';
import './css/Bazar.min.css';
import VariableWidthGrid from "react-variable-width-grid";
import { ItemGridComponent } from "./components/item-grid-component";
import FooterBaseComponent from "../components/footer-base-component/footer-base-component";

const products = [
    { img: "", id: 1, title: "Produto 0", price: 0.50 },
    { img: "", id: 2, title: "Produto 1", price: 1.50 },
    { img: "", id: 3, title: "Produto 2", price: 2.50 },
    { img: "", id: 4, title: "Produto 3", price: 3.50 },
    { img: "", id: 5, title: "Produto 4", price: 4.50 },
    { img: "", id: 6, title: "Produto 5", price: 5.50 },
    { img: "", id: 7, title: "Produto 6", price: 6.50 }
];

function Bazar() {
    return (
        <div>
            <MenuBarComponent/>

            <Container className='section-page'>
                <Row>
                    <Col>
                        <img src={bazar}/>
                    </Col>
                    <Col className='title-col'>
                        <h2 className='title right'>Conheça o bazar<br/>da APAE</h2>
                        <p className="subtitle right">Falar como funciona o bazar, como começou talvez. Falar como doar e como comprar. Accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In </p>
                    
                        <Row className='row-buttons'>
                            <OutlinedButtonComponent text='Doar'/>
                            <ButtonComponent text='Comprar'/>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className='section-page'>
                <Row className="row-card">
                    <Col xs={4}>
                        <h4 className="title-card">Como doar algo para o bazar?</h4>
                        <p className="description-card">Dizer aqui como deve ser feita a doação.<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>

                    <Col xs={4}>
                        <h4 className="title-card right">O que posso doar?</h4>
                        <p className="description-card right">Dizer aqui quais tipos de coisas podem ser doadas.<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>

                <Row className="row-card">
                    <Col xs={4}>
                        <h4 className="title-card">Qual o local para fazer a doação?</h4>
                        <p className="description-card">Dizer aqui o local para fazer a doação<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>

                    <Col xs={4}>
                        <h4 className="title-card right">Qualquer outra informação relevante</h4>
                        <p className="description-card right">eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>

                <Row className="row-card">
                    <Col xs={4}>
                        <h4 className="title-card">Qualquer outra informação relevante</h4>
                        <p className="description-card">eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum.</p>
                    </Col>

                    <Col xs={4}>
                        <h4 className="title-card right">Qualquer outra informação relevante</h4>
                        <p className="description-card right">eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>
            </Container>

            <Container className='section-page'>
                <Row className='grid-row'>
                    <h3 className='grid-title'>Produtos do bazar</h3>
                </Row>

                <VariableWidthGrid className='grid' columnGap={60}>
                    {
                        products.map((val, _) => 
                            <ItemGridComponent id={val.id} img={val.img} price={val.price} title={val.title}/>
                        )
                    }
                </VariableWidthGrid>
            </Container>

            <FooterBaseComponent/>
        </div>
    );
}

export default Bazar;