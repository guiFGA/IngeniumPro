import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import { Botao } from '../../components/botao/styles';
import { Container, Header, Fundo1, Fundo2, FundoExtra, Form, Inputs, Azul } from './redefinirSenha';

function Redefinir(){

      const [email, setEmail] = useState('');
      const [, setMessage] = useState('');

    


        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const res = await api.post('/redefinir', { email });
                alert("E-mail enviado com sucesso");
            // eslint-disable-next-line no-unused-vars
            } catch (err) {
                alert('Erro ao enviar email.');
            }
        };
    

    return(
        
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
                            <h1>Redefinir Senha</h1>
                            <p>Digite o endereço de email associado a sua conta.</p>
                            <p>Enviaremos um <Azul>link</Azul> para <Azul>redefinir sua senha</Azul></p>

                            <Inputs
                                type="email" 
                                placeholder="Digite seu e-mail" 
                                name="email" 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <p>Se o e-mail estiver registrado, você receberá instruções para redefinir sua senha em alguns minutos</p>
                            <Botao>Enviar</Botao>
                        </Form>
                    </Fundo2>
                </FundoExtra>
            </Fundo1>

        </Container>
    )
}
export default Redefinir;