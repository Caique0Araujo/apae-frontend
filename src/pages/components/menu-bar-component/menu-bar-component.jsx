import './css/menu-bar.min.css'
import './css/menu-bar-mobile.min.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalContacts from '../../home/components/modal-contacts/modal-contacts';
import Logo from '../../../../public/logo.png';
import HomeIcon from '../../../assets/icons/home_icon.png'; // mexer
import InfoIcon from '../../../assets/icons/info-icon.png';
import GearIcon from '../../../assets/icons/gear-icon.png';
import BazaarIcon from '../../../assets/icons/bazaar-icon.png';
import SectionIcon from '../../../assets/icons/section-icon.png';
import PeopleIcon from '../../../assets/icons/people-icon.png';

function MenuBarComponent() {

    const [orientation, setOrientation] = useState(
        window.innerWidth >= 600? 0 : 1
    )
    const [click, setClick] = useState (false)
    
    function handleOrientationChange(
        mediaQuerie
    ) {
        if (mediaQuerie.matches) {
            setOrientation(1);
            setClick(false);
        } else {
            setOrientation(0);
        }
    }
    var mediaQuerie = window.matchMedia("(orientation: portrait)");
    mediaQuerie.addListener(handleOrientationChange);

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    if(orientation == 0){
        return (
            <div className='header'>
                 <ModalContacts
                    visible={showModal}
                    onHide={closeModal}
                 />
                <div>
                    <img src={Logo} alt="" />
                    <h4>APAE</h4>
                </div>
                <ul>
                <h1>{click}</h1>
                    <Link className='link' to={'/'}><li>Início</li></Link>
                    <Link className='link' to={'/saiba-mais'}><li>Saiba mais</li></Link>
                    <Link className='link' to={'/oficinas'} ><li>Oficinas</li></Link>
                    <Link className='link' to={'/bazar'}><li>Bazar</li></Link>
                    <Link className='link'><span className='menu-dropdown'>
                        <li>Setores</li>
                        <div className='menu-dropdow-content'>
                            <Link className='dropdown-menu-itens' to={'/administrativo'}>Administrativo</Link>
                            <Link className='dropdown-menu-itens' to={'/educacao'}>Educação</Link>
                            <Link className='dropdown-menu-itens' to={'/assistencia-social'}>Assistência social</Link>
                            <Link className='dropdown-menu-itens' to={'/centro-dia'}>Centro DIA</Link>
                            <Link className='dropdown-menu-itens' to={'/saude'}>Saúde</Link>
                        </div>
                        
                    </span></Link>
                    <Link className='link' to={'/about-us'}><li>Quem somos</li></Link>
                </ul>
                <div>
                    <button onClick={() => {
                        setShowModal(true)
                    }}>Fale conosco</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <>
                <ModalContacts
                    visible={showModal}
                    onHide={closeModal}
                 />
                {click === false
                    ? <div className='closed-drawer'>
                        <button className='drawer-button' 
                            onClick={() => {
                            setClick(true)
                        }}/>
                    </div>

                    : <div className='open-drawer'>
                        <button className='drawer-button'
                            onClick={() => {
                                setClick(false)
                            }}
                        />

                        <div className='open-drawer-main-box'>
                            <div >
                                <li>
                                    <img src={Logo} alt="" />
                                    <h4>Apae SJE</h4>
                                </li>
                                
                            </div>

                            <div>
                                <ul>
                                    <Link className='link' to={'/'}><li> <img src={HomeIcon} alt="" /> <h6 href="">Início</h6></li></Link>
                                    <Link className='link' to={'/saiba-mais'}> <li><img src={InfoIcon} alt="" /> <h6 href="">Saiba mais</h6></li></Link>
                                    <Link className='link' to={'/oficinas'}> <li><img src={GearIcon} alt="" /> <h6 href="">Oficinas</h6></li></Link>
                                    
                                    <Link className='link' to={'/bazar'}><li> <img src={BazaarIcon} alt="" /> <h6 href="">Bazar</h6></li></Link>
                                    <li className='dropdown'> 
                                        <img src={SectionIcon} alt="" /> <h6 href="">Setores</h6>
                                        <div className='dropdown-content'>
                                            <Link to={'/administrativo'} className='dropdown-itens'>Administrativo</Link>
                                            <Link to={'/educacao'} className='dropdown-itens'>Educação</Link>
                                            <Link to={'/assistencia-social'} className='dropdown-itens'>Assistência social</Link>
                                            <Link to={'/centro-dia'} className='dropdown-itens'>Centro DIA</Link>
                                            <Link to={'/saude'} className='dropdown-itens'>Saúde</Link>
                                        </div>
                                    </li>
                                    
                                    <Link className='link' to={'/about-us'}><li> <img src={PeopleIcon} alt="" /> <h6 href="">Quem somos</h6></li></Link>
                                </ul>
                            </div>

                            <div>
                                <button onClick={() => {
                                    setShowModal(true)
                                    setClick(false)
                                }}>fale conosco</button>
                            </div>
                        </div>

                    </div>
                }
            
            </>
           
        );
    }
}

<div className='drawer'>
<button 
    onClick={() => {
        setClick(true)
    }}
>teste</button>
</div>
export default MenuBarComponent;