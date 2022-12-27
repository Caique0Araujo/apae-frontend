import './css/info.min.css';
import InfoDonation from '../../assets/images/info_donation.png';
import { InfoDonationComponent } from './components/info-donation-component/info-donation-component';
import { InstructionDonationComponent } from './components/instruction-donation-component/instruction-donation-component';
import IconClothes from '../../assets/icons/icon_clothe.png';
import IconMoney from '../../assets/icons/icon_money.png';
import IconPlasticBottle from '../../assets/icons/icon_plastic_bottle.png';

export default function Info() {
    return (
        <div>
            <div className='main-header'>
                <div className='main-content'>
                    <h2>APAE São João Evangelista</h2>
                    <p>Ela oferta atendimento múltiplo – Escola e entidade assistencial, onde os alunos aprendem não só a educação formal, mas também a socialização e a independência.<br/>
                    A APAE oferta atendimentos complementares como fisioterapia, psicologia, terapia ocupacional, fonoaudiologia e artes. 
                    </p>
                </div>
            </div>

            <div className='donation-content'>
                <div className='donation-info'>
                    <h3>Você pode ajudar a<br/>APAE, sabia?</h3>
                    <img src={InfoDonation}/>
                </div>

                <div className='donation-itens'>
                    <InfoDonationComponent icon={IconMoney} title={'Doação em dinheiro'} description={'Por meio de dinheiro vivo, diretamente na APAE/SJE; por carnê de doação; por meio de depósito; PIX; doação nos comércios, por meio do troco solidário. '}/>
                    <InfoDonationComponent icon={IconClothes} title={'Doação de roupas e utensílios'} description={'Doação de peças básicas do vestuário; bolsas; sapatos; roupas de cama, mesa e banho; utensílios domésticos; ferramentas; materiais escolares; brinquedos e móveis. A APAE realiza a venda dos bens doados no BAZAR e a renda é revertida para a manutenção da instituição.'}/>
                    <InfoDonationComponent icon={IconPlasticBottle} title={'Doação de garrafas PET'} description={'Que são utilizadas para a confecção de vassouras.'}/>
                </div>
            </div>

            <div className='instruction-content'>
                <h3>Instruçoes para as doações</h3>

                <div className='instruction-itens'>
                    <InstructionDonationComponent icon={IconMoney} title={'Doações em dinheiro'} description={'Chaves PIX<br/>E-mail: apae.sjevangelista@yahoo.com.br ou<br/>CNPJ: 00.132.346/0001-43<br/><br/>Depósitos: <br/>Ag 5166 - Conta 00584-2  (Banco Itaú)<br/>Ag. 5662-6 - Conta 10.837-5 (Banco do Brasil)'}/>
                    <InstructionDonationComponent icon={IconClothes} title={'Doações de roupas e utensílios  '} description={'Você pode levar até o Bazar da APAE, até a sede da APAE ou então a APAE vai até você para buscar.'}/>
                    <InstructionDonationComponent icon={IconPlasticBottle} title={'Doações de garrafa PET'} description={'Você pode levar até o Bazar da APAE, até a sede da APAE ou então a APAE vai até você para buscar.'}/>
                </div>
            </div>
        </div>
    );
}