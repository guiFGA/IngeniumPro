import api from '../../services/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../../assets/imagens/logo.svg';
import linha from '../../assets/imagens/DesignLinha.svg';
import { NavBar, NavLinks, Nav, TextoEsquerda, TextoDireita, Azul, Main, BemVindo} from './home';
import { Botao } from '../../components/botao/styles'

//essa é a pagina raiz do nosso site

/*
Estou usando Fragment ( "<> e no final </>" ). Isso porque, Header, Main e Footer tem o mesmo nível 
de importância no quesito semântica, por isso devemos utilizar algo para ser pai de todos essas tags, o React 
sempre espera que todos os elementos estejam dentro de um único container pai. Nesse sentido, eu poderia ter 
utilizado uma div ,entretanto optei pelo Fragment, pois esse elemento pai não terá papel estético
*/
function Home(){
  
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    // Função para redirecionar para a rota "/login"
    const handleStartClick = () => {
      navigate('/escolherEngenharia'); // Redireciona para a rota desejada
    };    
    return(
        <>
            <header>
                <Nav>
                    <div className="logo">
                        <a href="http://localhost:5173/">
                            <img src={logo} alt="logo" />
                        </a>                    
                    </div>
                    <div className="links">
                        <NavBar>
                            <li><NavLinks href="http://localhost:5173/">Home</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/sobre">Sobre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
                <TextoEsquerda>
                    <h1>É hora de <Azul>Inovar</Azul></h1>
                    <p>Esse é seu momento de mudar <br />o mundo</p>
                    <img src={linha} alt="Design" />
                </TextoEsquerda>
                <TextoDireita>
                    <p><BemVindo>Bem-vindo</BemVindo> senhor(a) sou a mais nova<br /> plataforma de 
                    inovação, estou aqui para te auxiliar nessa <br />
                    jornada inesquecível. Está preparado(a) para fazer <br /> descobertas incríveis?</p>
                </TextoDireita>
                
                <Botao onClick={handleStartClick}>Começar</Botao>
            </Main>

        </>
    )
}

export default Home;