import styled, { keyframes } from "styled-components";
import { Nav, NavBar, NavLinks, Main, Azul } from './escolha';
import logo from '../../assets/imagens/logo.svg';
import aero from '../../assets/imagens/Aeroespacial.svg';

// Animação de Zoom
const zoomIn = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
`;

// Styled-component para imagem com animação
export const AnimatedImage = styled.img`
  width: 200px; /* Ajuste conforme necessário */
  height: auto;
  animation: ${zoomIn} 3s ease-in-out infinite;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
    filter: brightness(1.2); /* Aumenta o brilho */
  }
`;

function Escolher() {
  return (
    <div>
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
        <h1>Escolha sua <br /><Azul>Engenharia</Azul></h1>
        <a href="http://localhost:5173/problemas">
          <AnimatedImage src={aero} alt="Imagem aeroespacial" />
        </a>
      </Main>
    </div>
  )
}

export default Escolher;
