import Intro from './components/intro/intro';
import Posts from './components/posts/posts';
import '../../css/DefaultStyle.min.css';
import '../css/home.min.css'
export default function Home(){
    const arr = [1,2,3]
    return(
        <div className='main-box-home'>
            <Intro/>
            <Posts arr={arr}/>
        </div>
        
    )
}