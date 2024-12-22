// Importações de módulos
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcrypt';
import Sequelize, { where } from 'sequelize';
import path from 'path';
import bodyParser from 'body-parser';
import { type } from 'os';
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Para processar JSON


//----------------------------------------------------------------------------------


// Configuração do banco de dados com Sequelize
const sequelize = new Sequelize('teste', 'teste', '@Teste2025@', {
    host: '186.226.60.39',
    dialect: 'mysql',
});
// Verificar a conexão com o banco
sequelize
    .authenticate()
    .then(() => console.log('Conectado ao banco de dados com sucesso!'))
    .catch((erro) => console.log('Falha ao se conectar: ' + erro));

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

// Resolver diretório raiz
const __dirname = path.resolve();

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


//-----------------------------------------------------------------------------------------------------


// Rota POST para cadastrar um usuário
app.post('/enviar', async (req, res) => {
    const { email, senha, nome } = req.body;

    try {
        // Verificar se o email já existe no banco
        const userExists = await Cadastros.findOne({ where: { email } });
        if (userExists) {
            return res.status(201).send('Email já cadastrado');
        }

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


//----------------------------------------------------------------------------------------------


//rota para realizar login

app.post('/login', async (req, res) => {


    //pegando os dados do login
    const { email, senha } = req.body;
    const user = await Cadastros.findOne({ where: { email } });

    //comparando o email e a senha do usuario
    if (!user || !(await bcrypt.compare(senha, user.senha))) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });

    }


    //criando o token 
    const SECRET_KEY = 'supersecretkey'
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });


}
)




//---------------------------------------------------------------------------------------------------------

const sendResetEmail = async (email, link) => {
    try {
        console.log("guiazevedoo3008@gmail.com e gUI300805021@")
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "guiazevedoo3008@gmail.com",
                pass: "zmcg znxz vidm qkhu"
            },
        });

        await transporter.sendMail({
            from: 'guiazevedoo3008@gmail.com',
            to: email,
            subject: "Redefinição de Senha",
            html: `<p>Clique no link para redefinir sua senha:</p>
                   <a href="${link}">${link}</a>`
        });

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        throw new Error('Erro ao enviar email');
    }
};

// Rota para redefinir senha
app.post('/redefinir', async (req, res) => {
    try {
        // Verificar se existe o email do usuário
        const { email } = req.body;
        const user = await Cadastros.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'Email não encontrado' });
        }

        // Criar token JWT
        const token = jwt.sign({ id: user.id }, 'seu_segredo', { expiresIn: '1h' });

        // Gerar link
        const link = `http://localhost:5137/novasenha/${token}`;

        // Atualizar usuário com token e expiração
        await user.update({
            resetToken: token,
            resetTokenExpiry: Date.now() + 3600000, // 1 hora
        });

        // Enviar e-mail
        await sendResetEmail(email, link);

        res.json({ message: 'Email enviado com sucesso!' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});



//-------------------------------------------------------------------------------------------------

app.post('/nova-senha/:token', async (req, res) => {

    const { senha } = req.body;
    const { token } = req.params;

    try {
        const decoded = jwt.verify(token, 'seu_segredo');
        const user = await user.findOne({ where: { id: decoded.id } });

        if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
            return res.status(400).json({ message: 'Token inválido ou expirado' });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);
        await user.update({
            senha: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null
        });

        res.json({ message: 'Senha redefinida com sucesso!' });
    }
    catch(err) {
        console.error(err);
        return res.status(400).json({ message: 'Token inválido ou expirado' });
    }



        




}
)


// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
