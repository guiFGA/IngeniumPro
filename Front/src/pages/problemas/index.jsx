import { Nav, NavBar, NavLinks, Main, Prob, Azul, H1, ProbDetrito} from './problemas';
import logo from '../../assets/imagens/logo.svg';
import breve from '../../assets/imagens/Breve.svg'
import lixeira from '../../assets/imagens/Lixeira.svg'



function Problemas() {
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
            <H1>E aí, qual <Azul>problema</Azul> <br /> vai <Azul>resolver</Azul>?</H1>
            <ProbDetrito>
                <h2>Detritos <br /><Azul>aeroespaciais</Azul></h2>
                <img src={lixeira} alt="Imagem lixeira" />  
            </ProbDetrito>
            <Prob><img src={breve} alt="Imagem de em breve" /></Prob>
            <Prob><img src={breve} alt="Imagem de em breve" /></Prob>
        </Main>
    </div>
  )
}

export default Problemas;
