//import './post.css'
import '../css/post.min.css'
export default function Post(props){
    return(
        <div className="post">
            <div>
                <h1>título {props.number}</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam sint quisquam omnis. Dicta facilis in et numquam 
                    esse rerum, nobis quo, officiis suscipit, totam consequatur 
                    quis perferendis quae accusantium odit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam sint quisquam omnis. Dicta facilis in et numquam 
                    esse rerum, nobis quo, officiis suscipit, totam consequatur 
                    quis perferendis quae accusantium odit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </h2>
            </div>
            <div>
                <img src="src\assets\images\pexels-mentatdgt-1336873.jpg" alt="" />
            </div>
        </div>
        
    )
}
//