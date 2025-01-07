import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import { Botao } from '../../components/botao/styles';
import { Container, Header, CaixaExterna, CaixaInterna, Form, Azul, Links, Inputs} from './login';

//essa é a rota /login

function comparar(email, senha){
    api
    .post('/login', {email, senha})
    .then(( token ) => {
        alert('Login bem sucedido');
        // Salva o token no localStorage
        sessionStorage.setItem('authToken', JSON.stringify(token));

       
        console.log("Token armazenado no localStorage:", token);
        window.location.href='http://localhost:5173/'
    })

    .catch(err => {
        // Exibindo a mensagem de erro retornada pela API, caso ocorra um erro (vem pelo campo error do json)
        if (err.response.data.error) {
            alert(err.response.data.error); // Exibe a mensagem de erro
        } else {
            alert('Erro inesperado! Tente novamente mais tarde.'); // Erro genérico
        }
    });
}  

function Login(){

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    comparar(email, senha);
};

    return(
    
        <Container>
            <Header>
                <a href="http://localhost:5173/">
                    <img src={logo} alt="logo" />
                </a>
            </Header>

            <CaixaExterna>
                <CaixaInterna>
                    <Form onSubmit={handleSubmit}>
                        <h1>Entrar</h1>
                        <p id="texto_login">Faça login no Ingenium<Azul>Pro</Azul> usando seu e-mail ou o nome de usuário com o qual você se registrou.</p>
                        <label htmlFor="email">E-mail</label>
                        <Inputs
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Digite seu e-mail"
                            value={email} 
                            name='email' 
                        />

                        <label htmlFor="password">Senha</label>
                        <Inputs
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            placeholder="Digite sua senha"
                            value={senha}
                            name='senha'
                        />
                        <Links href="http://localhost:5173/redefinirSenha">Esqueceu a senha ?</Links>
                        <p>Primeira vez usando o Ingenium<Azul>Pro</Azul>?</p>
                        <Links href="http://localhost:5173/cadastro">Cadastre-se</Links>
                        <Botao type="submit">Entrar</Botao>
                    </Form>
                </CaixaInterna>
            </CaixaExterna>
        </Container>
    )
}

export default Login