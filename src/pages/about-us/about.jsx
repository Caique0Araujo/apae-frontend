import './css/about-us.min.css'
export default function About (props) {

    const arr = ['teste1', 'teste2', 'teste3', 'teste4']

    function Card (props){
        return(
            <div className='card-main-box'>

                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quos libero cum aliquid perferendis beatae incidunt unde
                         , optio, voluptatum vero mollitia magni cumque hic ut.
                          Veniam vitae fugiat temporibus impedit iusto.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quos libero cum aliquid perferendis beatae incidunt unde
                         , optio, voluptatum vero mollitia magni cumque hic ut.
                          Veniam vitae fugiat temporibus impedit iusto.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quos libero cum aliquid perferendis beatae incidunt unde
                         , optio, voluptatum vero mollitia magni cumque hic ut.
                          Veniam vitae fugiat temporibus impedit iusto.
                    </p>
                </section>

                <section>
                    <img src="src\assets\images\woman-professional.jpg" alt="" />
                    <h1>Ana Maria Silva Souza</h1>
                </section>

                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quos libero cum aliquid perferendis beatae incidunt unde
                         , optio, voluptatum vero mollitia magni cumque hic ut.
                          Veniam vitae fugiat temporibus impedit iusto.
                    </p>
                </section>
            </div>
        )
    }

    return(
        <nav className='about-us-main-box'>
            <div className='intro'>
                <section>
                    <h1>Quem somos nós?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus ab facere, molestias, pariatur optio repellat 
                        odio sed error, placeat deleniti dolor consequatur! Culpa 
                        accusantium officia rerum blanditiis quam atque ad.
                    </p>
                </section>

                <section>
                    <img src="src\assets\icons\hand-icon.png" alt="" />
                </section>
            </div>

            <div className='list-box'>
                <h2>Conheça nossos profissionais</h2>
                {
                    arr.map((e) => 
                        <Card key={e} teste={e}/>
                    )
                }
            </div>
        </nav>
    );
}