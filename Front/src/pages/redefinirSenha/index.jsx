import '../redefinirSenha/style.css'
import api from '../../services/api'
import { useState } from 'react';
import logo from '../../assets/imagens/logo.svg'
import enviar from '../../assets/imagens/enviar.svg'

function Redefinir(){


    return(
        
        <div id="container">
            <header>
                <a href="http://localhost:5173/">
                    <img src={logo} alt="logo" />
                </a>                
            </header>

            <div id="fundo1">
            <div id="fundo_extra">
            <div id="fundo2">
                        <form id="forms_redefinir">
                        <h1>Redefinir Senha</h1>
                        <p>Digite o endereço de email associado a sua conta.</p>
                        <p>Enviaremos um <span className="azul">link</span> para <span className="azul">redefinir sua senha</span></p>
                        <input type="email" placeholder="Digite seu e-mail" name="email" required/>
                        <p>Se o e-mail estiver registrado, você receberá instruções para redefinir sua senha em alguns minutos</p>
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