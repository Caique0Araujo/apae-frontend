import 'bootstrap/dist/css/bootstrap.min.css';
import Bazar from './pages/bazar/bazar';
import Home from './pages/home/home';
import './app.css';
import Section from './pages/section/section';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './pages/news/news';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/noticia/:id' element={<News/>}/>
        <Route path='/bazar' element={<Bazar/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
