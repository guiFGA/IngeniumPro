//Esse import tem a mesma função que usar: const express = require('express');
import cors from 'cors'
import express from 'express';

const app = express();
app.use(cors())
import bcrypt from 'bcrypt';

//conectar com o banco de dados
//rodar os comandos "npm install --save sequelize" e "npm install --save mysql2"

import Sequelize from 'sequelize'
//primeiro parametro = nome do banco, segundo = nome do usuario do banco, terceiro = senha do banco
const sequelize = new Sequelize('IngeniumPro', 'root', '12345678', {
    host: "localhost", //onde o banco ta hospedado
    dialect: 'mysql' //qual é o banco de dados
} 
)

//verificar a conexao
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " +erro)
})

//criando a tabela no banco de dados

const Cadastros = sequelize.define('cadastro',{
    email:{
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    }


})

//sincronizar a tabela com o codigo

//Cadastros.sync({force:true})              //DEPOIS QUE CRIAR A TABELA, APAGAAAAAAAAAAAAR OU COMENTAR ESSA LINHA PRA NAO PERDER OS DADOS!!!!!!!!

//isso aqui resolve o problema para encontrar os diretorios
import path from 'path'
const __dirname = path.resolve() //dirname = a todo o caminho raiz, o que vem antes da pasta presente

//enviar um arquivo html para a rota
app.get('/cadastro',(req, res) => {
    
    res.sendFile(__dirname + '/cadastro.html')
})

//utilitario pra processar dados enviados por html 
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));


 




app.post('/enviar', async(req, res) => {
    
    const senhaCripto = await bcrypt.hash(req.body.senha, 10)

    //salvando os dados
    Cadastros.create({
        email: req.body.email,
        senha: senhaCripto
     
    })

    //mensagem de confirmação
    
    res.redirect('https://www.example.com');
    

     
});


app.listen(3000, ()=>{
    console.log("Servidor aberto");
})

/*
Rotas precisam de: 
1)Tipo da rota(GET, POST, PUT, PATCH ou DELETE) -
2)Endereço
*/