import './css/InfoDonation.min.css';

export function InfoDonationComponent(props) {
    return (
        <div className='info-donation'>
            <div>
                <img src={props.icon}/>
            </div>
            <div className='info-donation-container'>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}