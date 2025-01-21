import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha} from './entendendo';

function Entendendo(){
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
                            Entendendo <br /><Azul> o Problema</Azul>
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
                </Caixa>
            </Main>
        </div>
    )    
}

export default Entendendo;