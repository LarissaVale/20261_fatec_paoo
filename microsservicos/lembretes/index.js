const express = require(`express`)
const app = express()
app.use(express.json()) //função middleware
const lembretes = {}
let id = 0

//tripla:
//método do protocolo http
//padrão de acesso
//funcionalidade

app.post('/lembretes', async (req, res) => {
    id++
    const texto = req.body.texto
    lembretes[id] = {id, texto}
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: {id, texto}
    })
    res.json(lembretes[id])
})

//http://localhost/lembretes
app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

//endpoint p cadastrar um novo lembrete
app.post('/lembretes', (req, res) => {
    id++
    const texto = req.body.texto
    lembretes[id] = {id, texto,}
    res.json(lembretes[id])
})

const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})

