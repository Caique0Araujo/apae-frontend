import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../components/button-component/button-component";
import MenuBarComponent from "../components/menu-bar-component/menu-bar-component";
import OutlinedButtonComponent from "../components/outlined-button-component/outlined-button-component";
import bazar from '../../assets/images/bazar.png';
import '../../css/DefaultStyle.min.css';
import './css/bazar.min.css';
import './css/bazar-mobile.min.css';
import VariableWidthGrid from "react-variable-width-grid";
import { ItemGridComponent } from "./components/item-grid-component";
import FooterBaseComponent from "../components/footer-base-component/footer-base-component";
import { useEffect } from "react";
import { getAllProducts } from "../../repositories/product-repository";
import { useState } from "react";

function Bazar() {

    const [products, setProducts] = useState({});

    useEffect(() => {
        loadProducts();
    });

    const loadProducts = async () => {
        const pr = await getAllProducts();
        setProducts(pr);
    }

    return (
        <div>
            <MenuBarComponent/>

            <Container className='section-page'>
                <Row>
                    <Col className='logo-bazar'>
                        <img className='logo-bazar' src={bazar}/>
                    </Col>
                    
                    <Col className='title-col'>
                        <h2 className='title right'>Conheça o bazar da APAE</h2>
                        <p className="subtitle right">Falar como funciona o bazar, como começou talvez. Falar como doar e como comprar. Accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In </p>
                    
                        <Row className='row-card'>
                            <OutlinedButtonComponent text='Doar'/>
                            <ButtonComponent text='Comprar'/>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className='section-page'>
                <Row className="row-card">
                    <Col>
                        <h4 className="title-card">Como doar algo para o bazar?</h4>
                        <p className="description-card">Dizer aqui como deve ser feita a doação.<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>

                    <Col>
                        <h4 className="title-card right">O que posso doar?</h4>
                        <p className="description-card right">Dizer aqui quais tipos de coisas podem ser doadas.<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>

                <Row className="row-card">
                    <Col>
                        <h4 className="title-card">Qual o local para fazer a doação?</h4>
                        <p className="description-card">Dizer aqui o local para fazer a doação<br/>eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>

                    <Col>
                        <h4 className="title-card right">Qualquer outra informação relevante</h4>
                        <p className="description-card right">eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>

                <Row className="row-card">
                    <Col>
                        <h4 className="title-card">Qualquer outra informação relevante</h4>
                        <p className="description-card">eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum.</p>
                    </Col>

                    <Col>
                        <h4 className="title-card right">Qualquer outra informação relevante</h4>
                        <p className="description-card right">eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. </p>
                    </Col>
                </Row>
            </Container>

            <Container className='section-page'>
                <Row className='grid-row'>
                    <h3 className='grid-title'>Produtos do bazar</h3>
                </Row>


                { 
                    products.statusCode != 200 
                        ? <div>{products.msg}</div> 
                        : <VariableWidthGrid className='grid' columnGap={60}>
                            {
                                products.data.map((val, _) => 
                                    <ItemGridComponent key={val.id} id={val.id} img={val.img} price={val.price} title={val.title}/>
                                )
                            }
                        </VariableWidthGrid>
                }
            </Container>

            <FooterBaseComponent/>
        </div>
    );
}

export default Bazar;