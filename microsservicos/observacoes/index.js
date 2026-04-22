const express = require(`express`)
const { v4: uuidv4 } = require('uuid')
const app = express()
//função middlware
app.use(express.json())
const observacoesPorLembrete = {}
/*
    {
        1: [
            {
                id: 1000,
                texto: 'comprar café',
                idLembrete: 1
            },
            {id: ..., texto: ..., idLembrete: ...}
        ],
        2: [
        ]
    }
*/


//post
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const observacoesDoLembrete = observacoesPorLembrete[req.params.id] || []
    observacoesDoLembrete.push({ id: idObs, texto })
    observacoesPorLembrete[req.params.id] = observacoesDoLembrete
    res.status(201).json(observacoesDoLembrete)
})

//get
app.get('/lembretes/:id/observacoes', (req, res) => {
    //devolver a lista de obs do lembrete cujo id se encontra na poth
    //ou uma lista vazia
    res.json(observacoesPorLembrete[req.params.id] || [])
})

const port = 5000
app.listen(port, () => {
    console.log(`Observações. Porta ${port}.`)
})