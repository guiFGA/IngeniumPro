import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha, Baixo, Click, Bolinha, Link} from './modulo0';

function Modulo0(){
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
                            Módulo 0 <br /><Azul>Introdução</Azul>
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
                        <Link href="http://localhost:5173/aprendendoaaprender">
                            <Click>
                                <Bolinha><p>1</p></Bolinha>
                                <p>Aprendendo a Aprender</p>
                            </Click>
                        </Link>
                            
                        <Link href="http://localhost:5173/entendendooproblema">
                            <Click>
                                <Bolinha><p>2</p></Bolinha>
                                <p>Entendendo o Problema</p>
                            </Click>
                        </Link>
                    </Baixo>
                </Caixa>
            </Main>
        </div>
    )    
}

export default Modulo0;