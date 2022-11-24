import QrCode from '../../../../assets/images/qrcode.png';
import './css/InstructionDonation.min.css';

export function InstructionDonationComponent(props) {
    return (
        <div className='intruction-donation-component'>
            <div className='image-container'>
                <img src={QrCode}/>
            </div>
            <div>
                <p className='card-title'>{props.title}</p>
                <p className='card-description' dangerouslySetInnerHTML={{__html: props.description}}></p>
            </div>
        </div>
    );
}