import express from 'express';

const app = express();

app.use(express.json())

const livros = [
    {id:1, titulo: "O Hobbit"},
    {id:2, titulo: "Senhor dos aneis"}
];

app.get('/', (req, res) => {
    res.status(200).send('Olaaaa');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    let index = buscaIndex(req.params.id);
    res.json({...livros[index], id:"nn pode v isso nn"})
})

app.post('/livros', (req, res) => {
    let comID = {id:(livros.length + 1), ...req.body}
    livros.push(comID);
    res.status(201).json(livros);
});

app.put('/livros/:id', (req, res) => {
    let index = buscaIndex(req.params.id);
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

function buscaIndex(id) {
    return livros.findIndex(livro => livro.id == id)
}

function randomHexaCode(size){
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}


export default app;