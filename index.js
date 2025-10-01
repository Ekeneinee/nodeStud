
const express= require('express');
const loggerMiddleware= require('./logger')
const pro_routers= require('./routes/profils');
const chalk = require('chalk');
const PORT= process.env.PORT || 3000


const app= express()
app.use(express.json())

app.use(loggerMiddleware)

app.use('/profils', pro_routers)

app.use((error, req, res, next) => {
    console.error(chalk.bgRed('Erreur détectée :'), error.stack)
    res.status(500).send('Erreur interne du serveur. Veuillez réessayer plus tard.')
})

app.listen(PORT, () => {
    console.log(chalk.bgBlue(`[IMPORTANT]: http://localhost:${PORT}`))
})

// curl -X POST http://localhost:3000/profils -H "Content-Type: application/json" -d '{"fname": "ACHAO", "lname": "Christianne", "age": 23}'

// curl -X DELETE http://localhost:3000/profils/2

// curl -X PUT http://localhost:3000/profils/1 -H "Content-Type: application/json" -d '{ "lname": "GBLEGBLE" }'