const fs= require('fs/promises')
const Path='./data.json';
const chalk = require("chalk");


async function Read() {
    try{
        const dataString= await fs.readFile(Path, 'utf-8');
        return JSON.parse(dataString)
    } catch(error){
        if (error.code === 'ENOENT') { 
            return []; 
        }
        throw error;
    }
}

async function Write(data) {
    const newData= JSON.stringify(data, null, 2)
    await fs.writeFile(Path, `${newData}`)
}

module.exports= {
    read: Read,
    write: Write
}