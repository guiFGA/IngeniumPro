import './style.css'
import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'

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
            <img src={logo} alt="logo" />
        </header>

        <div>
            <form onSubmit={handleSubmit}>
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

                <button id='botao-login'>enviar</button>
                
            </form>
        </div>
    </div>
    )
}

export default Login