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
            
            {props.arr.map((val) => <Post key={val.id_news} title={val.title} description={val.description} date={val.created_at_utc}/>)}
        </div>
    )
}