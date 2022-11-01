import Intro from './components/intro/intro';
import Posts from './components/posts/posts';
import FullPage from './components/full-page/full-page';
import '../../css/DefaultStyle.min.css';
import "../css/home.min.css"
export default function Home(){
    const arr = [1,2,3]
    return(
        <div>
            <Intro/>
            <div className='titleBox'><h1 className='title'>Últimos destaques</h1></div>
            <Posts arr={arr}/>
            <FullPage/>
        </div>
        
    )
}