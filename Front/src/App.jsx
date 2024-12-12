import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import Cadastro from './pages/cadastro'
import React from 'react'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Cadastro/>}/>
          //Coloque aqui todos das paginas que vcs criarem, da mesma formatação da linha 9.
          
        </Routes>
    </Router>
  )
}

export default App
