//import './intro.css';
import '../css/intro.min.css'
import '../../../../css/DefaultStyle.min.css';
import ButtonComponent from "../../../components/button-component/button-component";
import { Link } from 'react-router-dom';
import Info from '../../../info/info';
export default function Intro(){
    return(
        <nav className='main-box-intro'>
            <div>
                <h1 className='title'>Conheça melhor a APAE</h1>
                <h2 className='subtitle'>A Apae - Associação de Pais e Amigos dos Excepcionais 
                    nasceu em 1954, no Rio de Janeiro. Caracteriza-se por 
                    ser uma organização social, cujo objetivo principal é 
                    promover a atenção integral à pessoa com deficiência
                </h2>
                <Link to={'saiba-mais'}><ButtonComponent text='Saiba mais'/></Link>
                
            </div>

            <div>
                <img src="src\assets\images\LOGO-APAE-BRASIL-01.png" alt="" />
            </div>
        </nav>
    )
}