import '../novaSenha/style.css'
import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import enviar from '../../assets/imagens/enviar.svg'
import { useParams } from 'react-router-dom';



function mudarSenha(senha, token){
    api.
    post('/novasenha', {senha, token})
    .then(({ data }) => {

        alert(data);
        
      })
      .catch(err => {
        console.log(err);
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
            setMessage('As senhas não são iguais. Por favor, corrija.');
            console.log("As senhas não são iguais."); // Debug
            return;
        }

        try {
           mudarSenha(senha, token)

        } catch (err) {
            setMessage('Erro ao alterar a senha. Tente novamente.');
            console.error("Erro ao enviar para a API:", err); // Debug
        }
    };


    

    return (
        <div id="container">
            <header>
                <a href="http://localhost:5173/">
                    <img src={logo} alt="logo" />
                </a>
            </header>

            <div id="fundo1">
                <div id="fundo_extra">
                    <div id="fundo2">
                        <form id="forms_redefinir" onSubmit={handleSubmit}>
                            <h1>Altere sua <span className='azul'>senha</span></h1>
                            <p>Digite sua nova senha</p>

                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                name="senha"
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirme a senha"
                                name="confirmeSenha"
                                onChange={(e) => setConfirmeSenha(e.target.value)}
                                required
                            />

                            <p>Certifique-se que as senhas digitadas nos dois campos são <span className='azul'>iguais</span></p>
                            <button type="submit">
                                <img src={enviar} alt="enviar formulário" />
                            </button>

                            {/* Exibição da mensagem de feedback */}
                            {message && <p className="feedback-message">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovaSenha;
