import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Home from './pages/home';
import Redefinir from './pages/redefinirSenha';
import NovaSenha from './pages/novaSenha';
import PrivateRoute from './PrivateRoutes';
import Escolher from './pages/escolherEngenharia';
import Perfil from './pages/perfil';
import OutroPerfil from './pages/outroPerfil';
import Conteudo from './pages/conteudo';
import Modulos from './pages/modulos';
import Sobre from './pages/sobre';
import Equipe from './pages/equipe';
import Problemas from './pages/problemas';
import Trilha from './pages/trilha';
import Modulo0 from './pages/modulo0';
import Aprendendo from './pages/aprendendo';
import Entendendo from './pages/entendendo';

function App() {
  return (
    <Router>
      <Routes>

        {/*rota raiz*/}
        <Route path="/" element={<Home />} />

        {/*rota para o cadastro*/}
        <Route path="/cadastro" element={<Cadastro />} />

        {/*rota para o login*/}
        <Route path="/login" element={<Login />} />

        {/*rota para solicitar redefinição de senha*/}
        <Route path="/redefinirSenha" element={<Redefinir />} />

        {/*rota para redefinir senha*/}
        <Route path="/novasenha/:token" element={<NovaSenha />} />

        <Route path="/escolherEngenharia" element={<PrivateRoute><Escolher/></PrivateRoute>} />

        {/*rota para página de perfil*/}
        <Route path="/perfil" element={<PrivateRoute><Perfil/></PrivateRoute>} />

        {/*rota para exibir perfil*/}
        <Route path="/outroPerfil/:usuario" element={<OutroPerfil />} />

        {/*rota para a arvore de conteudos*/}
        <Route path="/conteudo" element={<PrivateRoute><Conteudo/></PrivateRoute>} />

        {/*rota para os modulos*/}
        <Route path="/conteudo/:id" element={<PrivateRoute><Modulos/></PrivateRoute>} />

        {/*rota para página sobre nós*/}
         <Route path="/sobre" element={<Sobre />} />

        {/*rota para página equipe*/}
        <Route path="/equipe" element={<Equipe />} />

        {/*rota para página de problemas*/}
        <Route path="/problemas" element={<PrivateRoute><Problemas/></PrivateRoute>} />        

        {/*rota para página de trilha*/}
        <Route path="/trilha" element={<PrivateRoute><Trilha/></PrivateRoute>} />

        {/*rota para página de modulo0*/}
        <Route path="/modulo0" element={<PrivateRoute><Modulo0/></PrivateRoute>} />

        {/*rota para página de Aprendendo a Aprender*/}
        <Route path="/aprendendoaaprender" element={<PrivateRoute><Aprendendo/></PrivateRoute>} />

        {/*rota para página de Aprendendo a Aprender*/}
        <Route path="/entendendooproblema" element={<PrivateRoute><Entendendo/></PrivateRoute>} />




     

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
