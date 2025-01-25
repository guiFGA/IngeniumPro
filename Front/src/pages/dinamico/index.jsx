import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha, Baixo, Click, Bolinha, Link, CantoDir} from './teste';

function ModuloDinamico(){
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
                <Caixa>
                    <Topo>
                        <Titulo>
                            Módulo X <br /><Azul>Introdução</Azul>
                        </Titulo>

                        <Linha></Linha>
                    </Topo>
                    <p>
                        Aprender é uma habilidade que nos acompanha por toda a vida. 
                        No entanto, muitas vezes nos dedicamos aos estudos sem conhecer 
                        as melhores estratégias para aproveitar ao máximo nosso potencial. 
                        O módulo "Aprendendo a Aprender" foi criado para ajudá-lo a explorar 
                        métodos de aprendizagem variados, desde técnicas de memorização até a 
                        gestão eficaz do tempo e a aplicação de ferramentas modernas de estudo.  
                    </p>

                    <Baixo>
                        <Link href="http://localhost:5173/material">
                            <Click>
                                <Bolinha><p>1</p></Bolinha>
                                <p>Livros</p>
                            </Click>
                        </Link>
                            
                        <Link href="http://localhost:5173/material">
                            <Click>
                                <Bolinha><p>2</p></Bolinha>
                                <p>Vídeos</p>
                            </Click>
                        </Link>

                        <Link href="http://localhost:5173/material">
                            <Click>
                                <Bolinha><p>3</p></Bolinha>
                                <p>Artigos</p>
                            </Click>
                        </Link>
                    </Baixo>
                    <CantoDir>
                        <Link href="http://localhost:5173/trilha" ><Azul>Voltar para trilha</Azul></Link>
                    </CantoDir>
                </Caixa>
            </Main>
        </div>
    )    
}

export default ModuloDinamico;