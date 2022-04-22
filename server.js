const http = require("http")
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end("dia bonito =)")
})

server.listen(port , () => {
    console.log(`ta tudo bonito aqui no http://localhost:${port}`)
})