import { useEffect } from "react"
import React from "react"
import './style.css'
import api from '../../services/api'
import logo from '../../assets/logo.svg'
import enviar from '../../assets/enviar.svg'

/*function login() {

    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    api.post('http://localhost:3000/enviar', Email=email, Nome=nome, Senha=senha )
      .then(({ data }) => {
        console.log(data);
    
         
      })
      .catch(err => {
    
        console.log(err);
      });

}
*/

function cadastro() {
    

    // Ala para criar funções de integração com o backend, além dos hooks do front.
    let users = []

    async function getUsers() {
        const usersFromApi = await api.get('/cadastro')
        users = usersFromApi.data
        console.log(users)

    }

    useEffect(() => {
        getUsers()
    }, [])
    

    
    return (
        <div className="container">
            
            <header>
                <img src={logo} alt="logo" />

            </header>

            <div className="corpo">
                <div className="esquerda">
                    <div className="seja">
                        <h1>Seja bem vindo ao IngeniumPro</h1>
                    </div>

                    <div className="texto">
                        <p>Cadastre-se para obter acesso a todas</p>
                        <p>as funcionalidades e fazer parte da </p>
                        <p>nossa comunidade</p>
                    </div>

                    <div className="login">
                        <p>Ja possui uma conta? </p>
                        <a href="https://www.google.com.br/?hl=pt-BR">login</a>
                    </div>

                </div>

                <div className="direita">

                    <form  action="http://localhost:3000/enviar" method="post" > 
                        <h1>Crie sua conta</h1>
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" placeholder="digite seu email..."/>
                        <label htmlFor="usuario">Nome de Usuário</label>
                        <input id="nome" name="usuario" type="text" placeholder="digite um nome de usuario..."/>
                        <label htmlFor="senha">Senha</label>
                        <input id="senha" name="senha" type="password" placeholder="crie sua senha..." />
                        <button><img src={enviar} alt="enviar" /></button>
                        
                    </form>

                </div>
            </div>



        </div>

    )
}

export default cadastro;