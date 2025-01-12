import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Main, Azul} from './escolha';
import aero from '../../assets/imagens/Aeroespacial.svg'

function Escolher (){

    return(
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
                <a href=""><img src={aero} alt="Imagem aeroespacial" /></a>
            </Main>
        </div>    
    )
}

export default Escolher;