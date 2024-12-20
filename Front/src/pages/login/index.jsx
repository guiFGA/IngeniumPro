import '../login/style.css'
import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import Entrar from '../../assets/imagens/Entrar.svg'

//essa é a rota /login


function comparar(email, senha){
    api
    .post('/login', {email, senha})
    .then(({ data }) => {
        alert({data});
    })

    .catch(err => {
        console.log(err);
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
    
        <div className='container' id='container-login'>
            <header>
                <a href="http://localhost:5173/">
                    <img src={logo} alt="logo" />
                </a>
            </header>

        <div id="teste">
                <div id="caixa_externa">
                    <form id="forms_login" onSubmit={handleSubmit}>
                        <h1>Entrar</h1>
                        <p id="texto_login">Faça login no Ingenium<span className="pro">Pro</span> usando seu e-mail ou o nome de usuário com o qual você se registrou.</p>
                        <label htmlFor="email">email</label>
                        <input 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            value={email} 
                            name='email' 
                        />

                        <label htmlFor="password">senha</label>
                        <input 
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            value={senha}
                            name='senha'
                        />
                        <a href="">Esqueceu a senha ?</a>
                        <p>Primeira vez usando o Ingenium<span className='pro'>Pro</span>?</p>
                        <a href="http://localhost:5173/cadastro">Cadastre-se</a>
                        <button type="submit">
                            <img src={Entrar} alt="enviar formulário" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login