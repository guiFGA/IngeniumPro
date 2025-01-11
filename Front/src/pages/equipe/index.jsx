import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Azul, Main, ImagensP1, ImagensP2, Imagem, LinhaCentro, L1, L2, L3} from './equipe';
import vini from '../../assets/imagens/fotoVini.jpg'
import nicole from '../../assets/imagens/fotoNicole.png'
import guilherme from '../../assets/imagens/fotoGuilherme.png'
import bruno from '../../assets/imagens/fotoBruno.png'

function Equipe(){
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
                            <li><NavLinks href="http://localhost:5173/sobre"><Azul>Sobre</Azul></NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
            <h1>Equipe de colaboradores</h1>
                <ImagensP1>
     
                    <Imagem><img src={vini} alt="Foto Vini" /></Imagem>
                    <Imagem><img src={nicole} alt="Foto Nicole" /></Imagem>
                    <Imagem><img src={guilherme} alt="Foto Guilherme" /></Imagem>

                </ImagensP1>

                <LinhaCentro>
                    <L1></L1>
                    <L2></L2>
                    <L3></L3>
                </LinhaCentro>

                <ImagensP2>
                    <Imagem><img src={bruno} alt="Foto Bruno" /></Imagem>
                    <Imagem></Imagem>
                    <Imagem></Imagem>
                </ImagensP2>
            </Main>

        </div>
    )
}

export default Equipe;