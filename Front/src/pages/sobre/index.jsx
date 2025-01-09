import api from '../../services/api'
import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Azul, Main, Criacao, Criadores, Titulo, Botao, CentraBotao} from './sobre';
import { useNavigate } from 'react-router-dom';
import linha from '../../assets/imagens/DesignLinha.svg';


function Sobre(){
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    // Função para redirecionar para a rota "/login"
    const handleStartClick = () => {
      navigate('/escolherEngenharia'); // Redireciona para a rota desejada
    };

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
                <Titulo>
                    <h1><Azul>Sobre</Azul> Nós</h1>
                </Titulo>

                <Criacao>
                    <h2>Da <Azul>Criação</Azul></h2>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet. Aut commodi voluptatem ut asperiores repellendus est 
                        perspiciatis voluptatem non ipsa reprehenderit ut voluptatem alias
                        et dicta maxime eos debitis exercitationem. Qui deleniti blanditiis quo sint animi est 
                        </p>
                    </div>
                </Criacao>

                <Criadores>
                    <h2>Dos <Azul>Criadores</Azul></h2>
                    <p>
                    Lorem ipsum dolor sit amet. Aut commodi voluptatem ut asperiores repellendus est perspiciatis <br /> 
                    voluptatem non ipsa reprehenderit ut <br />
                    voluptatem alias et dicta maxime eos debitis exercitationem. Qui deleniti blanditiis quo sint animi est    
                    </p>
                </Criadores>

                <CentraBotao>
                    <Botao onClick={handleStartClick}>Equipe</Botao>
                </CentraBotao>

            </Main>
        </div>
    )
}

export default Sobre;