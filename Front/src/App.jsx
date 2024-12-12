import {Routes,Route} from 'react-router-dom'
import Cadastro from './pages/cadastro'
import React from 'react'

function App() {
  

  return (
     <Routes>
      <Route path='/' element={<Cadastro/>}/>
     </Routes>
   
  )
}

export default App
