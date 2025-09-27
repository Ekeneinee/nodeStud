const chalk= require("chalk");
const {addition, soustration}= require("./calcul");
const logger= require("./logger")
const fs= require('fs')
const http= require('http');
const PORT= 3000;

const server= http.createServer((req, res) => {
    if(req.url=== '/'){
        fs.readFile('index.html', (err, data) => {
            if(err){
                 res.writeHead(500, { 'content-type': 'text/plain' })
                 res.end('Erreur interne du serveur.')
                 return
            }
            res.writeHead(200, { 'content-type': 'text/html'})
            res.end(data)
        })
    }
    else if (req.url === '/a-propos'){
        fs.readFile('aPropos.html', (e, data) => {
            if(e){
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Erreur 404 : Page introuvable</h1>');
                logger.LogError(`Erreur 404 pour : ${req.url}`);
      return;
            }
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end(data)
        })
        
    }else{
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Erreur 404 : Page non trouvée.\n');
    }
})

server.listen(PORT, ()=>{
    logger.LogInfo(`Serveur démarré sur le port ${PORT}`)
    logger.LogInfo(`Ouvrez votre navigateur à l'adresse : http://localhost:${PORT}`)
})