import Intro from './components/intro/intro';
import Posts from './components/posts/posts';
import '../../css/DefaultStyle.min.css';
import './home.css';
export default function Home(){
    const arr = [1,2,3]
    return(
        <div>
            <Intro/>
            <div className='titleBox'><h1 className='title'>Últimos destaques</h1></div>
            <Posts arr={arr}/>
        </div>
        
    )
}