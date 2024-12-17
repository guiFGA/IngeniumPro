// Importações de módulos
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';
import path from 'path';
import bodyParser from 'body-parser';
import { type } from 'os';

const app = express();
<<<<<<< HEAD
app.use(cors());
=======
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
>>>>>>> 405b049ee8ea75e0ba8fbcb8e2fdf4cca74845a1
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Para processar JSON

// Configuração do banco de dados com Sequelize
const sequelize = new Sequelize('IngeniumPro', 'root', 'gUI300805021@', {
    host: 'localhost',
    dialect: 'mysql',
});
// Verificar a conexão com o banco
sequelize
    .authenticate()
    .then(() => console.log('Conectado ao banco de dados com sucesso!'))
    .catch((erro) => console.log('Falha ao se conectar: ' + erro));

<<<<<<< HEAD
// Definição do modelo (tabela) "Cadastros"
const Cadastros = sequelize.define('cadastro', {
    email: {
        type: Sequelize.STRING,
        allowNull: false, // Impede valores nulos
        unique: true, // Garante emails únicos
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Sincronizar o modelo com o banco de dados (criação da tabela, apenas uma vez)
//Cadastros.sync({ force: true });
=======
 




app.post('/enviar', async(req, res) => {
    
    const senhaCripto = await bcrypt.hash(req.body.senha, 10)
>>>>>>> 405b049ee8ea75e0ba8fbcb8e2fdf4cca74845a1

// Resolver diretório raiz
const __dirname = path.resolve();

<<<<<<< HEAD
// Rota GET para retornar todos os cadastros
app.get('/cadastro', async (req, res) => {
    try {
        const users = await Cadastros.findAll(); // Busca todos os registros no banco
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar cadastros');
    }
});

// Rota POST para cadastrar um usuário
app.post('/enviar', async (req, res) => {
    const { email, senha, nome } = req.body;

    try {
        // Verificar se o email já existe no banco
        const userExists = await Cadastros.findOne({ where: { email } });
        if (userExists) {
            return res.status(201).send('Email já cadastrado');
        }
=======
    //mensagem de confirmação
    
    res.redirect('https://www.example.com');
    

     
});
>>>>>>> 405b049ee8ea75e0ba8fbcb8e2fdf4cca74845a1

        // Hash da senha usando bcrypt
        const hashedSenha = await bcrypt.hash(senha, 10);

        // Criar usuário no banco de dados
        const novoUsuario = await Cadastros.create({
            email: email,
            senha: hashedSenha,
            usuario: nome,
        });

        res.status(201).send(`Usuário cadastrado com sucesso! ID: ${novoUsuario.id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
