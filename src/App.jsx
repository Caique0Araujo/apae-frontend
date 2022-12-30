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
import Info from './pages/info/info';
import About from './pages/about-us/about';
import Workshop from './pages/workshop/workshop';

import FinanceiroFundo from './assets/images/administrative/financeiro-fundo.png';
import FinanceiroSecao from './assets/images/administrative/financeiro-secao.jpg';
import FinanceiroSecao1 from './assets/images/administrative/financeiro-secao1.jpg';
import FinanceiroSecao2 from './assets/images/administrative/financeiro-secao2.jpg';

import CentroFundo from './assets/images/dia-center/centro-fundo.png';
import CentroSecao from './assets/images/dia-center/centro-secao.jpg';
import CentroSecao1 from './assets/images/dia-center/centro-secao1.jpg';
import CentroSecao2 from './assets/images/dia-center/centro-secao2.jpg';
import CentroSecao3 from './assets/images/dia-center/centro-secao3.jpg';

import EducacaoFundo from './assets/images/education/educacao-fundo.png';
import EducacaoSecao from './assets/images/education/educacao-secao.jpg';
import EducacaoSecao1 from './assets/images/education/educacao-secao1.jpg';

import SocialFundo from './assets/images/social/assistencia-fundo.png';
import SocialSecao from './assets/images/social/assistenacia-secao.jpg';

import SaudeAbout from './assets/images/health/heath-section-about.jpg';
import SaudePhono from './assets/images/health/heath-section-phono.jpg';
import SaudeFisio from './assets/images/health/heath-section-physio.png';
import SaudePsico from './assets/images/health/heath-section-psico.jpg';

const administrativoData = {
  title: 'Setor Administrativo da APAE SJE',
  image: FinanceiroFundo,
  sectionClass: 'health',
  invertSub: true,
  sub: [
    {
      key: 0,
      title: 'Como funciona',
      subtitle: 'O setor administrativo da APAE engloba a tesouraria e a secretaria escolar. A tesouraria cuida dos aspectos financeiros e contábeis da APAE. A Secretaria, por sua vez, cuida da administração da APAE como um todo, incluindo os setores de ensino, saúde e assistência social, e é responsável pela organização e ao bom funcionamento do fluxo de trabalho dos setores. De modo geral, a secretaria é responsável por todos os eventos burocráticos e legais de funcionamento da instituição.',
      image: FinanceiroSecao
    },
    {
      key: 1,
      title: 'Secretaria',
      subtitle: 'A secretaria é responsável pela agenda de atendimento das clínicas, matrículas e tranferência dos alunos da APAE, o agendamento de avaliações, expedição de documentos, atendimento à comunidade, organização dos arquivos, protocolos e registros dos alunos, prestação de contas e recebimento das doações de bens diversos.',
      image: FinanceiroSecao1
    },
    {
      key: 2,
      title: 'Tesouraria',
      subtitle: 'O setor de tesouraria é responsável pela administração dos bens financeiros da APAE, do pagamento de contas e do recebimento das doações em dinheiro. Também é responsável por fazer o controle contábil de um modo geral.',
      image: FinanceiroSecao2
    }
  ],
};

const educacaoData = {
  title: 'Setor de Educação da APAE SJE',
  image: EducacaoFundo,
  sectionClass: 'health',
  invertSub: false,
  sub: [
    {
      key: 0,
      title: 'FASE I - ENSINO FUNDAMENTAL',
      subtitle: 'Atende educandos com deficiência intelectual e múltipla que necessitam de apoio pervasivo, oferece programas educacionais especializado com currículo adaptado, educação física adaptada, visando o desenvolvimento global dos alunos e suas potencialidades nos aspectos: intelectual, sócio-afetivo, físico, motor, promovendo ações da família e da comunidade e inclusão social. O sistema de trabalho envolve Currículo Funcional e Natural, integração sensorial, comunicação alternativa, projetos, atividades para o desenvolvimento de habilidades sociais, adaptativas e atividades de vida diária e prática com apoio terapêutico de equipe multidisciplinar, atuando como agente facilitador no processo ensino-aprendizagem.',
      image: EducacaoSecao
    },
    {
      key: 1,
      title: 'FASE II - SÓCIO-EDUCACIONAL',
      subtitle: 'O atendimento socioeducacionais é ofertado aos alunos que apresentam necessidades especificas dado ao grau de comprometimento físico e intelectual, onde as atividades realizadas proporciona o desenvolvimento das habilidades de vida prática e diária, utilizando o Currículo Funcional Natural realizando adaptações curriculares adequadas promovendo sua independência e autonomia. A Apae oferta educação infantil, Ensino Fundamental, Anos Iniciais de 1º ao 5º ano, Educação de Jovens Adultos - Anos Iniciais e Finais. Nossa equipe da educação é composta por profissionais capacitados e especializados em educação inclusiva e especial com experiência na área. O trabalho educacional desenvolvido pela Apae é dinâmico, criativo, com apostilas pedagógicas individualizadas, visando um ensino de qualidade aos nossos alunos com deficiência intelectual e múltiplas.',
      image: EducacaoSecao1
    }
  ],
};

const assistenciaSocialData = {
  title: 'Setor de Assistencia Social da APAE SJE',
  image: SocialFundo,
  sectionClass: 'health',
  invertSub: true,
  sub: [
    {
      key: 0,
      title: 'Sobre',
      subtitle: 'A atuação do Assistente Social na APAE de São João Evangelista/MG está voltada ao atendimento às pessoas com deficiência e/ou transtorno do espectro autista e suas famílias, com abordagem nas áreas da Assistência Social, Educação e Saúde; a fim de contribuir para o acesso aos programas, projetos e demais políticas públicas existentes na Rede Socioassistencial. A identificação das famílias com o setor do Serviço Social faz com que as mais diferentes demandas nos sejam trazidas, desta forma é de suma importância o acolhimento e a escuta qualificada. A partir disto são realizados os encaminhamentos necessários, tanto externos quanto para os demais profissionais da equipe multidisciplinar. O Assistente Social tem como objetivo no trabalho na APAE/SJE estreitar as relações família-instituição cada vez mais, entendendo que o usuário não é um ser dissociado da família ou comunidade. A ação do Serviço Social possibilita auxílio na promoção das famílias e usuários através de atendimentos socioeducativos e autodefensoria. É papel fundamental de o Assistente Social conscientizar as famílias e a sociedade que a pessoa com deficiência intelectual tem direitos e deveres como todo cidadão brasileiro.',
      image: SocialSecao
    }
  ],
};

const centroDiaData = {
  title: 'Setor de Centro DIA da APAE SJE',
  image: CentroFundo,
  sectionClass: 'health',
  invertSub: false,
  sub: [
    {
      key: 0,
      title: 'O que é?',
      subtitle: 'É um espaço de convivência que tem atividades desenvolvidas em diversas ambiências e é direcionado a jovens e adultos com deficiência intelectual e múltipla que necessitam de apoios extensivos e generalizados. Sua finalidade é promover a autonomia, a inclusão social e a melhoria da qualidade de vida dos usuários, visando o reconhecimento do seu potencial, e aaceitação e valorização da diversidade. As ações do Centro Dia são diversificadas e abrangem atividades culturais e de lazer favorecendo a troca de experiências. Todas as intervenções realizadas pela APAE-SJE têm o propósito de manter e/ou desenvolver as habilidades dos usuários, fortalecendo seu protagonismo e reduzindo a exclusão social, o isolamento, a discriminação e o preconceito. A organização das atividades em ambiências, visam proporcionar vivências sociais, culturais e de lazer, além de desenvolver, através da arte e de situações reais, competências, habilidades e atitudes que promovam a autonomia e independência do usuário.',
      image: CentroSecao
    },
    {
      key: 1,
      title: 'AMBIÊNCIA BEM VIVER',
      subtitle: 'A ambiência “Bem Viver” desenvolve atividades cognitivas e de iniciação em artes manuais, com o objetivo de estimular os participantes a interagir, observar, experimentar e explorar diversos materiais e técnicas, buscando sempre identificar e valorizar o conhecimento prévio, o desejo, a tolerância e o potencial criativo de cada pessoa.',
      image: CentroSecao1
    },
    {
      key: 2,
      title: 'AMBIÊNCIA CORPO E MOVIMENTO',
      subtitle: 'A ambiência “Corpo e Movimento” visa proporcionar uma aprendizagem por meio de atividades corporais e físicas de baixo impacto, circuitos, jogos rítmicos e teatrais que exploram os movimentos corporais, o equilíbrio e o desenvolvimento do potencial cinestésico, criativo e artístico dos usuários.',
      image: CentroSecao2
    },
    {
      key: 3,
      title: 'AMBIÊNCIA “VIVÊNCIAS”',
      subtitle: 'A ambiência “Vivências” compreende atividades da vida diária, da vida prática e de interação familiar e comunitária, enfatizando experiências e vivências relacionadas às questões do dia-a-dia, sociais favorecendo uma aprendizagem significativa de formação do cidadão. Familiares dos usuários e pessoas da comunidade podem participar desta Oficina, desde que seja agendado previamente.',
      image: CentroSecao3
    }
  ],
};

const saudeData = {
  title: 'Setor de Saúde da APAE SJE',
  image: healthImage,
  sectionClass: 'health',
  invertSub: true,
  sub: [
    {
      key: 0,
      title: 'Sobre',
      subtitle: 'A área da saúde da APAE São João Evangelista integra a rede de atenção especializada da pessoa com deficiência e atua na habilitação e reabilitação intelectual e física. O objetivo é melhorar a qualidade de vida e promover a independência dos pacientes atendidos. Na Apae de São João, uma equipe multiprofissional executa os atendimentos de reabilitação utilizando de várias disciplinas, sempre considerando a individualidade e o reflexo da deficiência no indivíduo. Neste processo, está prevista a participação da família, tendo em vista a importância dela a no cuidado da pessoa com deficiência. Os serviços prestados na área de Saúde são:',
      image: SaudeAbout
    },
    {
      key: 1,
      title: 'Fisioterapia',
      subtitle: 'O atendimento fisioterapêutico na APAE tem por objetivo a prevenção, reabilitação motora a integridade de órgãos, sistema ou função, através de recursos específicos estimula as potencialidades possibilitando uma melhor qualidade de vida das pessoas com deficiência que tem indicação deste atendimento. Orienta as famílias conforme necessidade na continuidade dos exercícios, posicionamentos adequados e alongamento, A fisioterapeuta também indica cadeiras adaptadas, órteses e outros. Visando complementar os atendimentos de fisioterapia.',
      image: SaudeFisio
    },
    {
      key: 2,
      title: 'Fonoaudiologia',
      subtitle: 'O trabalho de fonoaudiologia atua na assistência a pacientes com comprometimentos neurológicos, e cognitivos, desenvolve a prevenção, diagnóstico e terapia fonoaudiológica, estimulação da aquisição do desenvolvimento da fala e linguagem (oral/escrita), adequação de tônus, mobilidade e motricidade dos órgãos fonoarticulatórios, comunicação alternativa. Oferece orientação familiar proporcionando uma melhor qualidade de vida e bem estar físico e emocional.',
      image: SaudePhono
    },
    {
      key: 3,
      title: 'Psicologia',
      subtitle: 'Tem como objetivo auxiliar na formação da personalidade, construção do conhecimento, na elaboração do pensamento proporcionando o desenvolvimento global da pessoa com deficiência intelectual e múltipla.  Também, trabalha no apoio e orientação das famílias para estabelecimento de metas de aquisição e melhora das habilidades sociais, afetivas e comportamentais mais adequados à realidade de cada contexto sócio familiar, com o objetivo de desenvolver a pessoa com deficiência e proporcionar a inclusão social.',
      image: SaudePsico
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
        <Route path='/saiba-mais' element={<Info/>}/>
        <Route path='/bazar' element={<Bazar/>}/>
        <Route path='/administrativo' element={<Section data={administrativoData}/>}/>
        <Route path='/educacao' element={<Section data={educacaoData}/>}/>
        <Route path='/assistencia-social' element={<Section data={assistenciaSocialData}/>}/>
        <Route path='/centro-dia' element={<Section data={centroDiaData}/>}/>
        <Route path='/saude' element={<Section data={saudeData}/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/oficinas' element={<Workshop/>} />
      </Routes>
      <FooterBaseComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
