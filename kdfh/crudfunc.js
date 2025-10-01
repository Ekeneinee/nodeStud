const Path = './data.json'
const fs= require('fs/promises')


async function Write(data) {
    const datajson= JSON.stringify(data, null, 2)
    await fs.writeFile(Path, datajson)
}

async function Read() {
    try {
        const reqdata= await fs.readFile(Path, 'utf-8');
        return JSON.parse(reqdata)
    } catch(error){
        if (error.code === 'ENOENT') { 
            return []; 
        }
        throw error;
    }
    
}

 module.exports= {
    read: Read,
    write: Write
 }