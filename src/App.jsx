import 'bootstrap/dist/css/bootstrap.min.css';
import Bazar from './pages/bazar/bazar';
import Home from './pages/home/home';
import './app.css';
import Section from './pages/section/section';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './pages/news/news';
import healthImage from './assets//images/health-section.png';
import MenuBarComponent from './pages/components/menu-bar-component/menu-bar-component';
import FooterBaseComponent from './pages/components/footer-base-component/footer-base-component';
import psychoImage from './assets/images/health-section-psycho.png';
import physioImage from './assets/images/health-section-physio.png';

const educacaoData = {
  title: 'Setor de Educação da APAE SJE',
  image: healthImage,
  invertSub: false,
  sub: [
    {
      title: 'Ensino Médio',
      subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
      text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
      image: psychoImage
    },
    {
      title: 'Ensino Fundamental',
      subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
      text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
      image: physioImage
    }
  ],
};

const assistenciaSocialData = {
  title: 'Setor de Assistencia Social da APAE SJE',
  image: healthImage,
  invertSub: true,
  sub: [
    {
      title: 'Sei la, assistência?',
      subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
      text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
      image: psychoImage
    }
  ],
};

const centroDiaData = {
  title: 'Setor de Centro DIA da APAE SJE',
  image: healthImage,
  invertSub: false,
  sub: [
    {
      title: 'Como funciona',
      subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
      text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
      image: psychoImage
    }
  ],
};

const saudeData = {
  title: 'Setor de Saúde da APAE SJE',
  image: healthImage,
  invertSub: true,
  sub: [
    {
      title: 'Psicologia',
      subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
      text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
      image: psychoImage
    },
    {
      title: 'Fisioterapia',
      subtitle: 'Algo sobre isto para servir como subtítulo. (essas imagens são apenas ilustrativas, podendo ser trocadas)',
      text: 'Um parágrafo maior aqui a respeito do serviço em questão. eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut eu, porttitor cursus ligula. Fusce at lacus sit amet nisi aliquam finibus. Nunc luctus dignissim bibendum. Sed in est lacus. Integer ex erat, accumsan eu ipsum nec, maximus rhoncus magna. Fusce cursus neque ullamcorper elit volutpat, id malesuada nulla dignissim. In ut ',
      image: physioImage
    }
  ],
};

function App() {
  return (
    <>
    <BrowserRouter>
    <MenuBarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/noticia/:id' element={<News/>}/>
        <Route path='/bazar' element={<Bazar/>}/>
        <Route path='/educacao' element={<Section data={educacaoData}/>}/>
        <Route path='/assistencia-social' element={<Section data={assistenciaSocialData}/>}/>
        <Route path='/centro-dia' element={<Section data={centroDiaData}/>}/>
        <Route path='/saude' element={<Section data={saudeData}/>}/>
      </Routes>
      <FooterBaseComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
