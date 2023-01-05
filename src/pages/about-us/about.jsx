import './css/about-us.min.css';
import AlcioneGolcalvesAlves from '../../assets/pictures/alcione_goncalves_alves.jpg';
import Alice from '../../assets/pictures/alice.jpg';
import ClaudianeCoelhoCruz from '../../assets/pictures/claudiane_coelho_cruz.jpg';
import GessicaSouzaNascimento from '../../assets/pictures/gessica_souza_nascimento.jpg';
import Gisele from '../../assets/pictures/gisele.jpg';
import IlmaSantaRitaSantosTeixeira from '../../assets/pictures/ilma_santa_rita_santos_teixeira.png';
import IzabelaBraga from '../../assets/pictures/izabela_braga.jpeg';
import JoaoAparecidoAlmeida from '../../assets/pictures/joao_aparecido_almeida.jpg';
import JulianaMarquenyBrandao from '../../assets/pictures/juliana_marqueny_brandao.jpg';
import KeliaLuanaGomes from '../../assets/pictures/kelia_luana_gomes.jpeg';
import Leonilda from '../../assets/pictures/leonilda.jpg';
import Luiza from '../../assets/pictures/luiza.jpg';
import MarianyAugustaFigueiredo from '../../assets/pictures/mariany_augusta_figueiredo.jpg';
import MarleneAparecida from '../../assets/pictures/marlene_aparecida.jpg';
import Marli from '../../assets/pictures/marli.jpg';
import MariaGeralda from '../../assets/pictures/maria_geralda.jpg';
import SaritaDuraes from '../../assets/pictures/sarita_duraes.jpeg';
import SielyOliveiraAlmeida from '../../assets/pictures/siely_oliveira_almeida.jpg';
import SolangePereiraMiranda from '../../assets/pictures/solange_pereira_miranda.jpg';
import VitaDiasAlmeidaSantos from '../../assets/pictures/vita_dias_almeida_santos.jpg';
import Default from '../../assets/pictures/default.png';
import DefaultFemale from '../../assets/pictures/default_female.png';

function Card (props){
    return(
        <div className='card-main-box'>

            <section className='left-text'>
                <p>
                </p>
            </section>

            <section className='identification'>
                {
                    props.img == null 
                    ? <img src={Default} alt="" />
                    : <img src={props.img} alt="" />
                }
                <h1>{props.name}</h1>
                <h2>{props.left}</h2>
            </section>

            <section className='right-text'>
                <p>
                </p>
            </section>
        </div>
    )
}

export default function About (props) {

    const arr = [
        {
            name: 'Alice Cristina Rocha dos Santos',
            rightText: 'Educadora Social',
            img: Alice
        },
        {
            name: 'Alcione Gonçalves Ferreira Alves',
            rightText: 'Instrutora de Artes',
            img: AlcioneGolcalvesAlves,
        },
        {
            name: 'Claudiane A. M. Coelho da Cruz',
            rightText: 'Professora',
            img: ClaudianeCoelhoCruz
        },
        {
            name: 'Géssica de Souza Nascimento',
            rightText: 'Professora',
            img: GessicaSouzaNascimento
        },
        {
            name: 'Gizele Maria Magalhães Machado',
            rightText: 'Diretora',
            img: Gisele
        },
        {
            name: 'Ilma Santa Rita dos Anjos Teixeira',
            rightText: 'Professora',
            img: IlmaSantaRitaSantosTeixeira
        },
        {
            name: 'Izabela Braga',
            rightText: 'Psicóloga',
            img: IzabelaBraga
        },
        {
            name: 'João Aparecido de Andrade',
            rightText: 'Professor',
            img: JoaoAparecidoAlmeida
        },
        {
            name: 'Juliana Marqueny Brandão',
            rightText: 'Monitora Essencial',
            img: JulianaMarquenyBrandao
        },
        {
            name: 'Kelia Luana Gomes',
            rightText: 'Fisioterapeuta',
            img: KeliaLuanaGomes
        },
        {
            name: 'Leonilda de Oliveira Almeida',
            rightText: 'ASEB',
            img: Leonilda
        },
        {
            name: 'Lucineia Aparecida da Silva',
            rightText: 'Secretária / Tesoureira',
            img: DefaultFemale
        },
        {
            name: 'Luiza Helena Silva',
            rightText: 'ASEB',
            img: Luiza
        },
        {
            name: 'Maria Geralda da Rocha Brandão',
            rightText: 'Educadora Social',
            img: MariaGeralda
        },
        {
            name: 'Mariany Augusta Figueredo',
            rightText: 'Professora',
            img: MarianyAugustaFigueiredo
        },
        {
            name: 'Marlene Aparecida Carvalho Mourão',
            rightText: 'Professora',
            img: MarleneAparecida
        },
        {
            name: 'Marli Aparecida Procópio Alves',
            rightText: 'Monitora',
            img: Marli
        },
        {
            name: 'Matuzalém Medina Cardoso',
            rightText: 'Motorista',
            img: Default
        },
        {
            name: 'Paulo Afonso Correia',
            rightText: 'Aux. Serviço Geral',
            img: Default
        },
        {
            name: 'Priscila Cristina Pinto',
            rightText: 'Assistente Social',
            img: DefaultFemale
        },
        {
            name: 'Sarita Martins M. Durães Pimenta',
            rightText: 'Fonoaudióloga',
            img: SaritaDuraes
        },
        {
            name: 'Siely Oliveira Almeida',
            rightText: 'Pedagoga',
            img: SielyOliveiraAlmeida
        },
        {
            name: 'Solange Pereira Miranda',
            rightText: 'Professora',
            img: SolangePereiraMiranda
        },
        {
            name: 'Vita Dias de Almeida Santos',
            rightText: 'Professora',
            img: VitaDiasAlmeidaSantos
        }
    ];

    return(
        <nav className='about-us-main-box'>
            <div className='intro'>
                <section>
                    <h1>Quem somos nós?</h1>
                    <p>
                    A APAE-SJE é composta por profissionais que se dedicam todos os dias para oferecer um trabalho ético e de qualidade, respeitando a diversidade humana e valorizando as pessoas.
                    </p>
                </section>

                <section>
                    <img src="src\assets\icons\hand-icon.png" alt="" />
                </section>
            </div>

            <div className='list-box'>
                <h2>Conheça nossos profissionais</h2>
                {
                    arr.map((e, idx) => 
                        <Card key={idx} name={e.name} left={e.rightText} img={e.img}/>
                    )
                }
            </div>
        </nav>
    );
}