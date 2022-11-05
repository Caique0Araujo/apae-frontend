//import './posts.css';
import '../css/posts.min.css';
import '../../../../css/DefaultStyle.min.css';
import Post from './post/post';
export default function Posts(props){
    return(
        <div className='postsContainer'>
            <div className='title-box'>
                <h1>Últimos destaques</h1>
            </div>
            
            {props.arr.map((element) => <Post number={element}/>)}
        </div>
    )
}