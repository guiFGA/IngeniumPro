import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import { data, useParams } from 'react-router-dom';
import {Botao} from '../../components/botao/styles'
import { Container, Header, Fundo1, FundoExtra, Fundo2, Form, Inputs, Azul } from './novaSenha';



function mudarSenha(senha, token, setMessage){
    api.
    post('/novasenha', {senha, token})
    .then(({ data }) => {

        alert(data.message);
        window.location.href = 'http://localhost:5173'
        
      })
      .catch(data => {
        
       alert("Token invalido ou expirado")
      });
}

function NovaSenha() {
    const [senha, setSenha] = useState('');
    const [confirmeSenha, setConfirmeSenha] = useState('');
    const [message, setMessage] = useState('');


    
    const {token} = useParams();
     console.log("token recebido", token)

    const handleSubmit = async (e) => {
     
        e.preventDefault(); // Impede o comportamento padrão do formulário

        console.log("Botão clicado!"); // Verifica se a função é chamada

        // Verifica se as senhas são iguais
        if (senha !== confirmeSenha) {
            alert('As senhas não são iguais. Por favor, corrija.');
            console.log("As senhas não são iguais."); // Debug
            return;
        }

        try {
           mudarSenha(senha, token, setMessage)

        } catch (err) {
            alert('Erro ao alterar a senha. Tente novamente.');
            console.error("Erro ao enviar para a API:", err); // Debug
        }
    };

    return (
        <Container>
            <Header>
                <a href="http://localhost:5173/">
                    <img src={logo} alt="logo" />
                </a>
            </Header>

            <Fundo1>
                <FundoExtra>
                    <Fundo2>
                        <Form onSubmit={handleSubmit}>
                            <h1>Altere sua <Azul>senha</Azul></h1>
                            <p>Digite sua <Azul>nova</Azul> senha</p>

                            <Inputs
                                type="password"
                                placeholder="Digite sua senha"
                                name="senha"
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                            <Inputs
                                type="password"
                                placeholder="Confirme a senha"
                                name="confirmeSenha"
                                onChange={(e) => setConfirmeSenha(e.target.value)}
                                required
                            />

                            <p>Certifique-se que as senhas digitadas nos dois campos são <span className='azul'>iguais</span></p>
                            <Botao>Enviar</Botao>

                            {/* Exibição da mensagem de feedback */}
                            {message && <p className="feedback-message">{message}</p>}
                        </Form> 
                    </Fundo2>
                </FundoExtra>
            </Fundo1>
        </Container>
    );
}

export default NovaSenha;
