import React from "react"
function cadastro() {
   

    // Ala para criar funções de integração com o backend, além dos hooks do front.

    return (
        <div className="container">
            
            <header>
              
                <h1 className="ingenium">Ingenium</h1>
                <h1 className="pro">Pro</h1>

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
                        <p className="azul">login</p>
                    </div>

                </div>

                <div className="direita">

                    <form>
                        <h1>Crie sua conta</h1>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" placeholder="digite seu email..."/>
                        <label htmlFor="usuario">Nome de Usuário</label>
                        <input name="usuario" type="text" placeholder="digite um nome de usuario..."/>
                        <label htmlFor="senha">Senha</label>
                        <input name="senha" type="password" placeholder="crie sua senha..." />
                        <button type="button">Cadastro</button>
                    </form>

                </div>
            </div>



        </div>

    )
}

export default cadastro;