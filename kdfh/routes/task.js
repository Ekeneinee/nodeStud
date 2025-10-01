const action= require('../crudfunc')
const express= require('express')


const handle_task_db= express.Router()

handle_task_db.get('', async (req, res) =>{
    try {
        const data= await action.read()
        res.json(data)
    } catch(error){
        if(error){
            res.status(500).send(`errur de lecture des données`)
        }
    }
})

handle_task_db.delete('/id', async (req, res) => {
    const data= await action.read()
    const delete_i= data.findIndex(s => s.id === Number(req.body.id))

    if(!delete_i) {
        res.status(404).send('L\'identifiant entrée n\'existe pas ')
    }

    data.splice(delete_i, 1)
    await action.write(data)
    res.status(204).send()
})

handle_task_db.put('/id', async (req, res) =>{
    const data= await action.read()
    const edit_i= data.findIndex(s => s.id === Number(req.body.id))

    if(!edit_i) {
        res.status(404).send('L\'identifiant entrée n\'existe pas ')
    }

    data[edit_i].task = req.body.task || data[edit_i].task;
    data[edit_i].level = Number(req.body.level) || data[edit_i].level;
    data[edit_i].completed = req.body.completed || data[edit_i].completed;

    await action.write(data)
    res.status(204).send()
})

handle_task_db.post('', async (req, res) => {
    const data= await action.read()
    const newtask= {
        id: Date.now(),
        task: req.body.task,
        level: Number(req.body.level),
        completed: req.body.completed
    }

    if(!newtask.task || !newtask.level || !newtask.completed ){
        res.status(500).send('Une des informations entrez es invalide')
    }

    data.push(newtask)
    await action.write(data)
    res.status(201).json(newtask)
})

module.exports= handle_task_db