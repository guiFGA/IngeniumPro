import logo from '../../assets/imagens/logo.svg'
import {
    NavBar, NavLinks, Nav, CaixaEsquerda, CaixaDirCima, CaixaDirBaixo,
    Main, Caixas, Topo, Img, Nomes, Meio, Final, Engenharia, Azul
} from './perfil';
import energia from '../../assets/imagens/Energia.svg'
import manutencao from '../../assets/imagens/Manutencao.svg'
import breve from '../../assets/imagens/Breve.svg'
import { useEffect, useState } from 'react';
import api from '../../services/api';






function Perfil() {

    const [nomeUsuario, setNomeUsuario] = useState(''); // Estado para armazenar o nome do usuário
    const [emailUsuario, setEmailUsuario] = useState(''); // Estado para armazenar o nome do usuário
    


    function enviar() {

        const token = sessionStorage.getItem("authToken")
        const decodede = JSON.parse(token);


        api
            .get('/usuario', {
                headers: {
                    'Authorization': decodede.data
                }
            }
            )
            //capiturando os dados do usuario que vem do backend
            .then((user) => {
                const usuario = user
                console.log(usuario.data.usuario)
                setNomeUsuario(usuario.data.usuario)
                setEmailUsuario(usuario.data.email)

            })

    }
    useEffect(() => {
        enviar(); // Chamada quando o componente é montado

    }, []); // O array vazio [] garante que só será chamado uma vez


      

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
                            <p>{nomeUsuario || 'Carregando...'}</p>
                        </Nomes>
                    </Topo>

                    <Meio>
                        <p><Azul>E</Azul>mail: {emailUsuario || 'Carregando...'}</p>
                        <p><Azul>D</Azul>esde: </p>
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