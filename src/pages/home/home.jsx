import Intro from './components/intro/intro';
import Posts from './components/posts/posts';
import '../../css/DefaultStyle.min.css';
import '../css/home.min.css';
import MenuBarComponent from '../components/menu-bar-component/menu-bar-component';
import FooterBaseComponent from '../components/footer-base-component/footer-base-component';

const news = 
[
    {
        "id_news": 1,
        "title": "O título da matéria 1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit!",
        "created_at_utc": "2022-12-15T15:30:20",
        "image_path": "O caminho para a imagem",
    },
    {
        "id_news": 1,
        "title": "O título da matéria 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint quisquam omnis. Dicta facilis in et numquam esse rerum, nobis quo, officiis suscipit, totam consequatur quis perferendis quae accusantium odit!",
        "created_at_utc": "2022-11-14T15:30:20",
        "image_path": "O caminho para a imagem",
    },
];

export default function Home(){
    return(
        <div className='main-box-home'>
            <MenuBarComponent/>
            <Intro/>
            <Posts arr={news}/>
            <FooterBaseComponent/>
        </div>
    )
}