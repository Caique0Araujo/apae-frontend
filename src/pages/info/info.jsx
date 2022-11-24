import './css/info.min.css';
import InfoDonation from '../../assets/images/info_donation.png';
import { InfoDonationComponent } from './components/info-donation-component/info-donation-component';

export default function Info() {
    return (
        <div>
            <div className='main-header'>
                <div className='main-content'>
                    <h2>APAE São João Evangelista</h2>
                    <p>É Interessante que seja colocado aqui um parágrafo a respeito da APAE de São João Evangelista. Algo como sua história, como surgiu ou sua importância para a comunidade.</p>
                </div>
            </div>

            <div className='donation-content'>
                <div className='donation-info'>
                    <h3>Você pode ajudar a<br/>APAE, sabia?</h3>
                    <img src={InfoDonation}/>
                </div>

                <div className='donation-itens'>
                    <InfoDonationComponent title={'Doação em dinheiro'} description={'A forma ou as formas que a pessoa pode realizar esta doação. Exemplos são: Em dinheiro vivo e Pix.'}/>
                    <InfoDonationComponent title={'Alguma outra'} description={'Não me lembro de outras formas, mas provavelmente tem, então fica aqui o card de exemplo.'}/>
                    <InfoDonationComponent title={'Alguma outra'} description={'Não me lembro de outras formas, mas provavelmente tem, então fica aqui o card de exemplo.'}/>
                </div>
            </div>

            <div>
                <h3>Instruçoes para as doações</h3>

                <div>
                    <div>card</div>
                    <div>card</div>
                    <div>card</div>
                </div>
            </div>
        </div>
    );
}