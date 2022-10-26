import './post.css'
export default function Post(props){
    return(
        <div className="post">
            <img src="src\assets\images\pexels-mentatdgt-1336873.jpg" alt="" />
            <h1>título {props.number}</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam sint quisquam omnis. Dicta facilis in et numquam 
                esse rerum, nobis quo, officiis suscipit, totam consequatur 
                quis perferendis quae accusantium odit!
            </h2>
        </div>
        
    )
}