import React from "react"

function cadastro() {

    // Ala para criar funções de integração com o backend, além dos hooks do front.

    return (
        <div className="container">
            <form>
                <h1>Crie sua conta</h1>
                <input name="email" type="email" />
                <input name="usuario" type="text"/>
                <input name="senha" type="password" />
                <button type="button">Cadastro</button>
            </form>
        </div>
    )
}

export default cadastro;