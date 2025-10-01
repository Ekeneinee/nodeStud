const chalk= require('chalk')
const handle_task_db= require('./routes/task')
const express= require('express');
const MidleWare= require('./Midleware');

const PORT= 3000
const app= express()

app.use(express.json())

app.use(MidleWare);

app.use('/back', handle_task_db);

app.use((error, req, res, next) => {
    console.error('Erreur détectée :', error.stack)
    res.status(500).send('Erreur interne du serveur. Veuillez réessayer plus tard.')
})

app.listen(PORT, () => {
    console.log(`[IMPORTANT]: http://localhost:${PORT}`)
})