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
                    <p>A unidade foi fundada em 25 de maio de 1994, por iniciativa de um grupo de pessoas da comunidade. As atividades de atendimento das pessoas com deficiência intelectual e múltipla foram iniciadas no dia 13 de setembro de 1994 em uma casa alugada pelos pais dos alunos, localizada na Rua Marechal Floriano n º 146.
                    </p>
                </div>
            </div>
            <h1 className='title' id='title-info'>
                Mais sobre a APAE
            </h1>
            <div className='info-content'>
               
                    <article className='card-box'>
                        <h1>Trajetória</h1>
                        <section><p>Foram atendidos inicialmente dezesseis alunos, distribuídos em três classes e, em fevereiro de 1996, passou a funcionar à Praça Coronel Antônio Pedro, n.º 172, em prédio cedido pela Prefeitura Municipal, distribuídos em dois turnos matutino e vespertino.</p></section>
                        <section><p>Atualmente, funciona em sede própria na Rua Duval Pimenta n.º 100. Ela oferta atendimento múltiplo – Escola e entidade assistencial, onde os alunos aprendem não só a educação formal, mas também a socialização e a independência. </p></section>
                    </article>
                    <article className='card-box'>
                        <h1>Missão e visão</h1>
                        <section><p>Missão: Promover e articular ações de defesa de direito, prevenção, orientação, prestação de serviços, apoio à família, direcionadas à melhoria da qualidade de vida da pessoa com deficiência e a construção de uma sociedade justa e solidaria </p></section>
                        <section><p>Nossa visão é: “Ser um movimento de pais, amigos e pessoas com deficiência, de excelência e referência no país na defesa de direitos e prestação de serviços.” Prestar serviços assistenciais às pessoas com deficiência promovendo a defesa de seus direitos, o apoio aos familiares e oferecer atendimento especializado nas áreas de educação, saúde, assistência social, trabalho, artes, esporte e lazer.</p></section>
                    </article>
                    <article className='card-box'>
                        <h1>Valores</h1>
                        <section><p>• Ética e transparência nas relações. <br/> • Respeito à diversidade humana. <br/> • Qualidade e inovação. <br/> • Comprometimento com a causa. <br/> • Atitude colaborativa. <br/> • Valorização das pessoas.</p> </section>
                    </article>
               
            </div>

            <div className='donation-content'>
                <div className='donation-info'>
                    <h3>Você pode ajudar a<br/>APAE, sabia?</h3>
                    <img src={InfoDonation}/>
                </div>

                <div className='donation-itens'>
                    <InfoDonationComponent icon={IconMoney} title={'Doação em dinheiro'} description={'Por meio de dinheiro vivo, diretamente na APAE/SJE; Carnê de doação; Depósito; PIX; Doação nos comércios, através do troco solidário. '}/>
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