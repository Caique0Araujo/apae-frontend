import './css/info.min.css';
import InfoDonation from '../../assets/images/info_donation.png';
import { InfoDonationComponent } from './components/info-donation-component/info-donation-component';
import { InstructionDonationComponent } from './components/instruction-donation-component/instruction-donation-component';

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

            <div className='instruction-content'>
                <h3>Instruçoes para as doações</h3>

                <div className='instruction-itens'>
                    <InstructionDonationComponent title={'Doações em dinheiro'} description={'Para realizar uma doação via Pix escaneie o código QR acima ou use a chave: 00000000000.<br/><br/>Para realizar uma doação em dinheiro vivo leve ate tal lugar e entregue tal pessoa.'}/>
                    <InstructionDonationComponent title={'Doações em dinheiro'} description={'Para realizar uma doação via Pix escaneie o código QR acima ou use a chave: 00000000000.<br/><br/>Para realizar uma doação em dinheiro vivo leve ate tal lugar e entregue tal pessoa.'}/>
                    <InstructionDonationComponent title={'Doações em dinheiro'} description={'Para realizar uma doação via Pix escaneie o código QR acima ou use a chave: 00000000000.<br/><br/>Para realizar uma doação em dinheiro vivo leve ate tal lugar e entregue tal pessoa.'}/>
                </div>
            </div>
        </div>
    );
}