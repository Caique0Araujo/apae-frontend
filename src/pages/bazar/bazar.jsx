import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../components/button-component/button-component";
import MenuBarComponent from "../components/menu-bar-component/menu-bar-component";
import OutlinedButtonComponent from "../components/outlined-button-component/outlined-button-component";
import bazar from '../../assets/images/bazar.png';
import '../../css/DefaultStyle.min.css';
import './css/Bazar.min.css';
import './css/bazar-mobile.min.css';
import VariableWidthGrid from "react-variable-width-grid";
import { ItemGridComponent } from "./components/item-grid-component";
import FooterBaseComponent from "../components/footer-base-component/footer-base-component";
import { useEffect } from "react";
import { getAllProducts, getById } from "../../repositories/product-repository";
import { useState } from "react";
import ModalProduct from "./components/modal-product/modal-product";

function Bazar() {

    const [products, setProducts] = useState({});
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const pr = await getAllProducts();
        setProducts(pr);
    }

    const showProduct = async (id) => {
        const result = await getById(id);
        if (result.msg != null) {
            // TODO: Erro, interessante mostrar toast
            return;
        }

        const productInfo = result.data;
        setProduct(productInfo);
        setShowModal(true);
    }

    const closeModal = () => {
        setProduct(null);
        setShowModal(false);
    }

    const gridProdutcs = () => {
        if (products == null) {
            // TODO: Talvez fosse interessante algum Spinner de carregamento
            return <div></div>;
        }

        if (products.statusCode != 200) {
            return <div>{products.msg}</div>;
        }

        return (
            <VariableWidthGrid className='justify-content-md-center' columnGap={60}>
                {
                    products.data.map((val, _) => 
                        <ItemGridComponent 
                            key={val.id_product} 
                            id={val.id_product} 
                            img={val.image_path} 
                            price={val.price} 
                            title={val.name}
                            onClick={showProduct}
                        />
                    )
                }
            </VariableWidthGrid>
        );
    }

    return (
        <div className="main-box">
            <ModalProduct 
                data={product} 
                visible={showModal} 
                onHide={closeModal}
            />

            <MenuBarComponent/>

            <Container fluid className='section-page'>
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

            <Container fluid className='section-page'>
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

            <Container fluid className='section-page'>
                <Row className='grid-row'>
                    <h3 className='grid-title'>Produtos do bazar</h3>
                </Row>

                { gridProdutcs() }
            </Container>

            <FooterBaseComponent/>
        </div>
    );
}

export default Bazar;