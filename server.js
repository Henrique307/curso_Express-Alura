import app from './src/app.js'
const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`ta tudo bonito aqui no http://localhost:${port}`)
})

// Importante
 
// const rotas = {
//     '/':'dia Bonito',
//     '/atendimento': 'rota de atendimento',
//     '/colisao': 'ta rota de colisao =(',
//     '/vaiBate':'volta',
//     '/naoExiste': 'ce é cego?'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type" : "text/plain"})
//     res.end(rotas[req.url])
// })

// express-generator