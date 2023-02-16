import './css/footer.min.css';
import Logo from '../../../../public/logo.png';

export default function FooterBaseComponent() {
    return (
        <footer>
            <div>
                <img src={Logo} alt="" />
                <article>
                    <h3>APAE - SJE 2022</h3>
                    <h6>Administração 20xx - 20xx</h6>
                </article>
                
            </div>
            <div>
                <h3>Este site foi desenvolvido por</h3>
                <article>
                    <h6>Caique Figueiredo de Araújo</h6>
                    <h6>Matheus Ferreira Alves</h6>
                    <h6>Paulo Fernando Rodrigues</h6>
                </article>
            </div>
        </footer>
    );
}