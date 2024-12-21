import '../redefinirSenha/style.css'
import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import enviar from '../../assets/imagens/Entrar.svg'

function Redefinir(){


    return(
        
        <div id="container">
            <header>
                <a href="http://localhost:5173/">
                    <img src={logo} alt="logo" />
                </a>                
            </header>

            <div id="fundo1">
                <div id="fundo2">
                    <div id="fundo3">
                        <h1>Redefinir Senha</h1>
                        <p>Digite o endereço de email associado a sua conta.</p>
                        <p>Enviaremos um <span className="azul">link</span> para <span className="azul">redefinir sua senha</span></p>

                        <form id="forms_redefinir">
                            <input type="email" placeholder="Digite seu e-mail" name="email" required/>
                            <button type="submit">
                                <img src={enviar} alt="enviar formulário" />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Redefinir;