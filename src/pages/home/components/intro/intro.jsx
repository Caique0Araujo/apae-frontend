//import './intro.css';
import '../css/intro.min.css'
import '../../../../css/DefaultStyle.min.css';
import ButtonComponent from "../../../components/button-component/button-component";
import { Link } from 'react-router-dom';
import Logo from '../../../../../public/logo.png';

export default function Intro(){
    return(
        <nav className='main-box-intro'>
            <div>
                <h1 className='title'>Conheça melhor a APAE</h1>
                <h2 className='subtitle'>A APAE de São João Evangelista é uma associação criada sem fins lucrativos, mantida pela comunidade e entidades através de doações, rendas de promoções, contribuições de pais e sócios e outros. É filiada à Federação Nacional das APAEs e Federação das APAEs do Estado de Minas Gerais.
                </h2>
                <Link to={'saiba-mais'}><ButtonComponent text='Saiba mais'/></Link>
                
            </div>

            <div>
                <img src={Logo} alt="" />
            </div>
        </nav>
    )
}