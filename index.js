const colors = require('colors');
const express = require('express');

const dotenv = require('dotenv')
const server = express();
dotenv.config();


const port = process.env.PORT;
const frase = process.env.FRASE;
const sentimiento = process.env.SENTIMIENTO;
const frase1 = process.env.frase1;
const sentimiento1 = process.env.sentimiento1;
const palabraf = process.env.palabraf;
const palabras = process.env.palabras;



server.get('/', (req, res) => {
    res.send(`
    <img src="./barney.jfif"><br><br>
    <table border="2">

    <tr>
        <td>${palabraf}</td>
        <td>${palabras}</td>
    </tr>
    <tr>
        <td>${frase}</td>
        <td>${sentimiento}</td>
    </tr>
    <tr>
        <td>${frase1}</td>
        <td>${sentimiento1}</td>
    </tr>
</table>`);
})
server.listen(port, () => {
    console.log(`esto es el puerto ${port}`.magenta);
})