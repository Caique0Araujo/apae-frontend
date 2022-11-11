import 'bootstrap/dist/css/bootstrap.min.css';
import Bazar from './pages/bazar/bazar';
import Home from './pages/home/home';
import './app.css';
import Section from './pages/section/section';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './pages/news/news';
import healthImage from './assets//images/health-section.png';
import subsectionRepository from './pages/section/components/subsectionRepository';
import MenuBarComponent from './pages/components/menu-bar-component/menu-bar-component';
import FooterBaseComponent from './pages/components/footer-base-component/footer-base-component';

function App() {
  return (
    <>
    <BrowserRouter>
    <MenuBarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/noticia/:id' element={<News/>}/>
        <Route path='/bazar' element={<Bazar/>}/>
        <Route path='/saude' element={<Section name="Saúde" sectionClass="health" sectionImage={healthImage} subsections={subsectionRepository}/>}/>
      </Routes>
      <FooterBaseComponent/>
    </BrowserRouter>
    
    </>
    
  )
}

export default App
