import './css/menu-bar.min.css'
import './css/menu-bar-mobile.min.css'
import OutlinedButtonComponent from '../outlined-button-component/outlined-button-component';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            setClick(false)
        } else {
            setOrientation(0);
        }
    }
    var mediaQuerie = window.matchMedia("(orientation: portrait)");
    mediaQuerie.addListener(handleOrientationChange);

    if(orientation == 0){
        return (
            <div className='header'>
                <div>
                    <img src="src\assets\images\LOGO-APAE-BRASIL-01.png" alt="" />
                    <h4>APAE</h4>
                </div>
                <ul>
                <h1>{click}</h1>
                    <Link className='link' to={'/'}><li><a href="">Início</a></li></Link>
                    <li><a href="">Saiba mais</a></li>
                    <li><a href="">Oficinas</a></li>
                    <Link className='link' to={'/bazar'}><li><a href="">Bazar</a></li></Link>
                    <li><a href="">Setores</a></li>
                    <li><a href="">Quem somos</a></li>
                </ul>
                <div>
                    <button>Fale conosco</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <>
                {click
                    ? <div className='closed-drawer'>
                        <button className='drawer-button' 
                            onClick={() => {
                            setClick(false)
                        }}/>
                    </div>

                    : <div className='open-drawer'>
                        <button className='drawer-button'
                            onClick={() => {
                                setClick(true)
                            }}
                        />

                        <div className='open-drawer-main-box'>
                            <div >
                                <li>
                                    <img src="src\assets\images\LOGO-APAE-BRASIL-01.png" alt="" />
                                    <h4>Apae SJE</h4>
                                </li>
                                
                            </div>

                            <div>
                                <ul>
                                    <Link className='link' to={'/'}><li> <img src="src\assets\icons\home icon.png" alt="" /> <h6 href="">Início</h6></li></Link>
                                    <li> <img src="src\assets\icons\info-icon.png" alt="" /> <h6 href="">Saiba mais</h6></li>
                                    <li> <img src="src\assets\icons\gear-icon.png" alt="" /> <h6 href="">Oficinas</h6></li>
                                    <Link className='link' to={'/bazar'}><li> <img src="src\assets\icons\bazaar-icon.png" alt="" /> <h6 href="">Bazar</h6></li></Link>
                                    <li> <img src="src\assets\icons\section-icon.png" alt="" /> <h6 href="">Setores</h6></li>
                                    <li> <img src="src\assets\icons\people-icon.png" alt="" /> <h6 href="">Quem somos</h6></li>
                                </ul>
                            </div>

                            <div>
                                <button>fale conosco</button>
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