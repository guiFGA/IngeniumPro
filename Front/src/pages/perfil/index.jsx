import logo from '../../assets/imagens/logo.svg'
import { NavBar, NavLinks, Nav, CaixaEsquerda, CaixaDirCima, CaixaDirBaixo, 
        Main, Caixas, Topo, Img, Nomes, Meio, Final, Engenharia, Azul} from './perfil';
import energia from '../../assets/imagens/Energia.svg'
import manutencao from '../../assets/imagens/Manutencao.svg'
import breve from '../../assets/imagens/Breve.svg'

function Perfil(){
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
                            <li><NavLinks href="http://localhost:5173/">Sobre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>                
            </header>

            <Main>
                <CaixaEsquerda>
                    <Topo>
                        <Img>

                        </Img>
                        <Nomes>
                            <p>Nome de perfil</p>
                        </Nomes>
                    </Topo>
                    
                    <Meio>
                        <p><Azul>E</Azul>mail: </p>
                        <p><Azul>G</Azul>ênero: </p>
                        <p><Azul>V</Azul>ersão: Beta <Azul>1.0v</Azul></p>
                    </Meio>

                    <Final>
                        <p>Área em aprendizado:</p>
                        <Engenharia>
                            <img src={energia} alt="Foto engenharia de energia" />
                        </Engenharia>
                    </Final>

                </CaixaEsquerda>

                <Caixas>
                    <CaixaDirCima>
                        <h2>Progresso</h2>
                    </CaixaDirCima>

                    <CaixaDirBaixo>
                        <img src={breve} alt="Imagem de manutenção" />
                    </CaixaDirBaixo>
                </Caixas>

            </Main>
        </div>
    )
}

export default Perfil;