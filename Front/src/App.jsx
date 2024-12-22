import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Home from './pages/home';
import Redefinir from './pages/redefinirSenha';


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

        


        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
