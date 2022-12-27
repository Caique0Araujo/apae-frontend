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
import { Toast } from "bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

function Bazar() {

    const [products, setProducts] = useState({});
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const color = '#74B05C'

    useEffect(() => {
        loadProducts();
    }, []);

    function Toast() {
        return (
          <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Não foi possível carregar :(</Toast.Body>
          </Toast>
        );
      }

    const loadProducts = async () => {
        const pr = await getAllProducts();
        setProducts(pr);
    }

    const showProduct = async (id) => {
        const result = await getById(id);
        if (result.msg != null) {
            Toast();
            return;
        }

        const productInfo = result.data;
        console.log(productInfo);
        setProduct(productInfo);
        setShowModal(true);
    }

    const closeModal = () => {
        setProduct(null);
        setShowModal(false);
    }

    const gridProdutcs = () => {
        if (products == null) {
            return(
                <div className='loading-box'>
                    <ClipLoader
                        color={color}
                        loading={loading}
                        size={80}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div> 
            );
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
                            buffer={val.image_path}
                            onClick={showProduct}
                        />
                    )
                }
            </VariableWidthGrid>
        );
    }

    return (
        <>
        
        <div className="main-box">
            <ModalProduct 
                data={product} 
                visible={showModal} 
                onHide={closeModal}
            />

            <div className="intro-box">
                <div className="logo-box">
                    <img src={bazar} alt="" />
                </div>
                <div className="text-box">
                    <div>
                        <h2>Conheça o bazar da APAE</h2>
                        <p>O BAZAR DA APAE surgiu com a finalidade de comercializar a parte excedente de doações recebidas, visando complementar a receita líquida necessária para a manutenção da Instituição. </p>
                    </div>
                    <div>
                        <a href="#doar"><OutlinedButtonComponent text='Doar'/></a>
                        <a href="#comprar"><ButtonComponent text='Comprar'/></a>
                    </div>
                </div>
            </div>

            <Container fluid className='section-page' id="doar">
                <Row className="row-card">
                    <Col>
                        <h4 className="title-card">Como funciona</h4>
                        <p className="description-card">No Bazar funciona também a fábrica de vassouras de garrafas pet.</p>
                    </Col>

                    <Col>
                        <h4 className="title-card right">Tipos de produtos doados ?</h4>
                        <p className="description-card right">O BAZAR DA APAE recebe todos os tipos de doações. Como peças básicas do vestuário, bolsas, sapatos, roupas de cama, mesa e banho, utensílios domésticos, ferramentas, materiais escolares, brinquedos, móveis, etc. <br/>Recebemos também a doação de garrafas Pet, que são utilizadas para a confecção de vassouras.</p>
                    </Col>
                </Row>

                <Row className="row-card">
                    <Col>
                        <h4 className="title-card">Localização</h4>
                        <p className="description-card">Localização: Rua Benedito Valadares nº 240, em frente a Padaria Pão Gostoso.</p>
                    </Col>

                    <Col>
                        <h4 className="title-card right">Horário de funcionamento</h4>
                        <p className="description-card right">Horário de funcionamento: 10h às 17h, segunda a sexta-feira.</p>
                    </Col>
                </Row>

                <Row className="row-card">
                    <Col>
                        <h4 className="title-card">Como comprar</h4>
                        <p className="description-card">Vendas somente em dinheiro na loja física.</p>
                    </Col>

                    <Col>
                        <h4 className="title-card right">Como doar</h4>
                        <p className="description-card right">Levando diretamente ao Bazar, na sede da APAE, ou ligando para a APAE no número 33 3412 1195 que buscamos sua doação.</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='section-page' id="comprar">
                <Row className='grid-row'>
                    <h3 className='grid-title'>Produtos do bazar</h3>
                </Row>

                { gridProdutcs() }
            </Container>

        </div>
        </>
    );
}

export default Bazar;