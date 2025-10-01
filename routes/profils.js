const express= require("express");
const crypto= require('crypto');
const chalk = require("chalk");
const action= require('../crudfonc')

const pro_routers = express.Router()
 
pro_routers.get('/:id', async (req, res) => {
    try{
        const data= await action.read()
        const profil= data.filter(s => s.id === Number(req.params.id))[0];
    if(!profil){
        return res.status(404).send("Erreur 404 : Profil utilisateur non trouvé.")
    }
    res.send(`Bonjour Monsieur/Madame ${profil.Nom} ${profil.Prenom}... Vous avez ${profil.age} ans`)
    } catch(e) {
        res.status(500).send("Erreur de lecture du fichier de données."); 
    }
    
})

pro_routers.delete('/:id', async (req, res) => {
        const data= await action.read()
        const delete_index= data.findIndex(p => p.id === Number(req.params.id))

        if(delete_index === -1){
           return res.status(404).send("Profil utilisateur non trouvé pour la suppression.")
        }

        data.splice(delete_index, 1)
        await action.write(data)
        res.status(204).send()
})

pro_routers.put('/:id', async (req, res) => {
        const data= await action.read()
        const index= data.findIndex(p => p.id === Number(req.params.id))

        if(index === -1){
           return res.status(404).send("l'utilisateur conserner n'existe pas")
        }
        const newname= req.body.fname || data[index].Nom
        const newpre= req.body.lname || data[index].Prenom
        const newage= Number(req.body.age) || data[index].age

        data.splice(index, 1, {
            id: Number(req.params.id),
            Nom: newname,
            Prenom: newpre,
            age: newage
        })
        await action.write(data)
        res.status(204).send()
})

pro_routers.post('', async (req, res) => {
        
        const id= Date.now()
        const Nom= req.body.fname
        const Prenom= req.body.lname
        const age= Number(req.body.age)

        if(!Nom || !Prenom || !age){
            return res.status(500).send('Une information invalide')
        }

        const data= await action.read()
        data.push({
            id: id,
            Nom: Nom,
            Prenom: Prenom,
            age: age
        })
        await action.write(data)
        res.status(201).json({id, Nom, Prenom, age})
})


module.exports= pro_routers