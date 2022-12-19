import Intro from './components/intro/intro';
import '../../css/DefaultStyle.min.css';
import '../css/home.min.css';
import MenuBarComponent from '../components/menu-bar-component/menu-bar-component';
import FooterBaseComponent from '../components/footer-base-component/footer-base-component';
import Posts from './components/posts/posts';

import { useState } from 'react';

export default function Home(){
    
    return (
        <div className='main-box-home'>
           
            <Intro/>
            <Posts/>
        </div>
    );
}