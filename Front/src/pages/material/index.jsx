import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Main, Titulo, Container, Card, Cima, Baixo, Azul} from './material';
import Halliday from '../../assets/imagens/Halliday.png';

function Material(){
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
                <Titulo>Material X</Titulo>
                <Container>
                    <Card target="black" href="https://edisciplinas.usp.br/pluginfile.php/8438608/mod_resource/content/1/Fundamentos%20de%20F%C3%ADsica%20-%20Halliday%20-%209%C2%AA%20Edi%C3%A7%C3%A3o%20Vol.1%20Ed.%209.pdf">
                        <Cima>
                            <img src={Halliday} alt="Imagem do livro Halliday" />
                        </Cima>
                        <Baixo>
                            <p>Material: <Azul>Halliday</Azul></p>
                        </Baixo>
                    </Card>

                    <Card target="black" href="https://edisciplinas.usp.br/pluginfile.php/8438608/mod_resource/content/1/Fundamentos%20de%20F%C3%ADsica%20-%20Halliday%20-%209%C2%AA%20Edi%C3%A7%C3%A3o%20Vol.1%20Ed.%209.pdf">
                        <Cima>
                            <img src={Halliday} alt="Imagem do livro Halliday" />
                        </Cima>
                        <Baixo>
                            <p>Material: <Azul>Halliday</Azul></p>
                        </Baixo>
                    </Card>

                    <Card target="black" href="https://edisciplinas.usp.br/pluginfile.php/8438608/mod_resource/content/1/Fundamentos%20de%20F%C3%ADsica%20-%20Halliday%20-%209%C2%AA%20Edi%C3%A7%C3%A3o%20Vol.1%20Ed.%209.pdf">
                        <Cima>
                            <img src={Halliday} alt="Imagem do livro Halliday" />
                        </Cima>
                        <Baixo>
                            <p>Material: <Azul>Halliday</Azul></p>
                        </Baixo>
                    </Card>
                </Container>

            </Main>
        </div>
    )    
}

export default Material;