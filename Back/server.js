//Esse import tem a mesma função que usar: const express = require('express');
import express from 'express';
const app = express();

app.get('/Usuarios', (req, res) =>{
    res.send('Ok, deu bom');
})

app.listen(3000, ()=>{
    console.log("Servidor aberto");
})

/*
Rotas precisam de: 
1)Tipo da rota(GET, POST, PUT, PATCH ou DELETE) 
2)Endereço
*/