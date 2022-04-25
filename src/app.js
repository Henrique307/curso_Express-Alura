import express from 'express'

const app = express()

const livros = [
    {id:1, titulo: "O Hobbit"},
    {id:2, titulo: "Senhor dos aneis"}
]

app.get('/', (req, res) => {
    res.status(200).send('Olaaaa');
})

app.get('livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro enviado com sucesso")
})

export default app