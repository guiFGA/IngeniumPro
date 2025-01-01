import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Home from './pages/home';
import Redefinir from './pages/redefinirSenha';
import NovaSenha from './pages/novaSenha';
import PrivateRoute from './PrivateRoutes';
import Escolher from './pages/escolherEngenharia';
import Perfil from './pages/perfil';

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

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
