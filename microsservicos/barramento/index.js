const axios = require("axios")
const express = require("express")
const app = express()
app.use(express.json()) 

//usando o express, definir um endpoint POST /eventos
//nele, extrair o corpo da requisição
//e, usando a axios, enviar o corpo para os dois microsservicos, ou seja, nas portas 4000 e 5000
app.post('/eventos', (req, res) => {
    const evento = req.body

    axios.post('http://localhost:4000/lembretes', evento)
    axios.post('http://localhost:5000/lembretes/observacoes', evento)

    res.status(200).end()
})

const port = 10000
app.listen(port, () => {
    console.log(`Barramento. Porta ${port}.`)
})