import './css/news.min.css';
import { useState } from 'react';
import ModalProduct from '../bazar/components/modal-product/modal-product';

export default function News(props) {
    const [a, seta] = useState(false);
    //let { id } = useParams();
    //console.log(id);
    
    return(
        <nav className='news-main-box'>
            <div className='title-box'>
                <h1>Exemplo de título da noticia na página propria </h1>
            </div>
            <img src="src\assets\images\pexels-mentatdgt-1336873.jpg" alt="" />
            <div>
                <h3>Exemplo de subtitulo para materia de pagina inteira</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Culpa, suscipit ipsum? 
                    Quisquam tempore, minima voluptatibus 
                    repellat dicta optio dignissimos vero 
                    sapiente sit, incidunt deleniti dolor 
                    possimus quia sint itaque ipsa!
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Culpa, suscipit ipsum? 
                    Quisquam tempore, minima voluptatibus 
                    repellat dicta optio dignissimos vero 
                    sapiente sit, incidunt deleniti dolor 
                    possimus quia sint itaque ipsa!
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Culpa, suscipit ipsum? 
                    Quisquam tempore, minima voluptatibus 
                    repellat dicta optio dignissimos vero 
                    sapiente sit, incidunt deleniti dolor 
                    possimus quia sint itaque ipsa!
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Culpa, suscipit ipsum? 
                    Quisquam tempore, minima voluptatibus 
                    repellat dicta optio dignissimos vero 
                    sapiente sit, incidunt deleniti dolor 
                    possimus quia sint itaque ipsa!
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Culpa, suscipit ipsum? 
                    Quisquam tempore, minima voluptatibus 
                    repellat dicta optio dignissimos vero 
                    sapiente sit, incidunt deleniti dolor 
                    possimus quia sint itaque ipsa!
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Culpa, suscipit ipsum? 
                    Quisquam tempore, minima voluptatibus 
                    repellat dicta optio dignissimos vero 
                    sapiente sit, incidunt deleniti dolor 
                    possimus quia sint itaque ipsa!
                </p>
            </div>
            <button onClick={()=>{
                seta(true)
            }}>
                teste
            </button>

            <ModalProduct show={a} onHide={() => seta(false)}/>
             </nav>
    )
}