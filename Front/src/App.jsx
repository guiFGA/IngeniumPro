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
import Sobre from './pages/sobre';
import Equipe from './pages/equipe';
import Problemas from './pages/problemas';
import Trilha from './pages/trilha';

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

        {/*rota para página sobre nós*/}
        <Route path="/sobre" element={<Sobre />} />

        {/*rota para página equipe*/}
        <Route path="/equipe" element={<Equipe />} />

        {/*rota para página de problemas*/}
        <Route path="/problemas" element={<PrivateRoute><Problemas/></PrivateRoute>} />        
        
        {/*rota para página de trilha*/}
        <Route path="/trilha" element={<PrivateRoute><Trilha/></PrivateRoute>} />

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
