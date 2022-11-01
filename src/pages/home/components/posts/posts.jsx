//import './posts.css';
import '../css/posts.min.css';
import '../../../../css/DefaultStyle.min.css';
import Post from './post/post';
export default function Posts(props){
    return(
        <div className='postsContainer'>
            {props.arr.map((element) => <Post number={element}/>)}
        </div>
    )
}