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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed euismod, nisi at facilisis pretium, lorem eros tincidunt lacus, sit amet 
                        fermentum nunc justo vel turpis. Integer ut justo sit amet arcu vehicula dictum. 
                        Quisque consequat, urna sit amet vehicula ultricies, erat lectus sodales eros, vel 
                        facilisis mauris sapien at orci. Morbi a massa ac mi tristique ullamcorper in id lorem. 
                        Aenean in enim et justo malesuada faucibus at a elit. Donec vitae arcu id erat tempus 
                        cursus in ut elit.
                        4o  sit amet, consectetur adipiscing elit. Sed euismod, nisi at facilisis pretium, 
                        lorem eros tincidunt lacus, sit amet fermentum nunc justo 
                    </p>

                    <Baixo>
                        <Link href="">
                            <Click>
                                <Bolinha><p>1</p></Bolinha>
                                <p>Aprendendo a Aprender</p>
                            </Click>
                        </Link>
                            
                        <Link href="">
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