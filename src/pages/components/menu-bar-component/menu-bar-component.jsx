import './css/menu-bar.min.css'
import OutlinedButtonComponent from '../outlined-button-component/outlined-button-component';
function MenuBarComponent() {
    return (
        <div className='header'>
            <div>
                <img src="src\assets\images\LOGO-APAE-BRASIL-01.png" alt="" />
                <h4>APAE</h4>
            </div>
            <ul>
                <li><a href="">Início</a></li>
                <li><a href="">Saiba mais</a></li>
                <li><a href="">Oficinas</a></li>
                <li><a href="">Bazar</a></li>
                <li><a href="">Setores</a></li>
                <li><a href="">Quem somos</a></li>
            </ul>
            <div>
                <button>Fale conosco</button>
            </div>
        </div>
    );
}

export default MenuBarComponent;