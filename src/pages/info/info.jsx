import './css/info.min.css';
import InfoDonation from '../../assets/images/info_donation.png';

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
                    <div>Doação</div>
                    <div>Doação</div>
                    <div>Doação</div>
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