import './css/about-us.min.css';

function Card (props){
    return(
        <div className='card-main-box'>

            <section className='left-text'>
                <p>
                </p>
            </section>

            <section className='identification'>
                <img src="src\assets\images\woman-professional.jpg" alt="" />
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
            rightText: 'Educadora Social'
        },
        {
            name: 'Alcione Gonçalves Ferreira Alves',
            rightText: 'Instrutora de Artes'
        },
        {
            name: 'Claudiane A. M. Coelho da Cruz',
            rightText: 'Professora'
        },
        {
            name: 'Géssica de Souza Nascimento',
            rightText: 'Professora'
        },
        {
            name: 'Gizele Maria Magalhães Machado',
            rightText: 'Diretora'
        },
        {
            name: 'Ilma Santa Rita dos Anjos Teixeira',
            rightText: 'Professora'
        },
        {
            name: 'Izabela Braga',
            rightText: 'Psicóloga'
        },
        {
            name: 'João Aparecido de Andrade',
            rightText: 'Professor'
        },
        {
            name: 'Juliana Marqueny Brandão',
            rightText: 'Monitora Essencial'
        },
        {
            name: 'Kelia Luana Gomes',
            rightText: 'Fisioterapeuta'
        },
        {
            name: 'Leonilda de Oliveira Almeida',
            rightText: 'ASEB'
        },
        {
            name: 'Lucineia Aparecida da Silva',
            rightText: 'Secretária / Tesoureira'
        },
        {
            name: 'Luiza Helena Silva',
            rightText: 'ASEB'
        },
        {
            name: 'Maria Geralda da Rocha Brandão',
            rightText: 'Educadora Social'
        },
        {
            name: 'Mariany Augusta Figueredo',
            rightText: 'Professora'
        },
        {
            name: 'Marlene Aparecida Carvalho Mourão',
            rightText: 'Professora'
        },
        {
            name: 'Marli Aparecida Procópio Alves',
            rightText: 'Monitora'
        },
        {
            name: 'Matuzalém Medina Cardoso',
            rightText: 'Motorista'
        },
        {
            name: 'Paulo Afonso Correia',
            rightText: 'Aux. Serviço Geral'
        },
        {
            name: 'Priscila Cristina Pinto',
            rightText: 'Assistente Social'
        },
        {
            name: 'Sarita Martins M. Durães Pimenta',
            rightText: 'Fonoaudióloga'
        },
        {
            name: 'Siely Oliveira Almeida',
            rightText: 'Pedagoga'
        },
        {
            name: 'Solange Pereira Miranda',
            rightText: 'Professora'
        },
        {
            name: 'Vita Dias de Almeida Santos',
            rightText: 'Professora'
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
                        <Card key={idx} name={e.name} left={e.rightText}/>
                    )
                }
            </div>
        </nav>
    );
}