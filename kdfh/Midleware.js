const chalk= require('chalk')
const fs= require('fs/promises')

async function Write(data) {
    const datajson= JSON.stringify(data, null, 2)
    await fs.writeFile('./history.json', datajson)
}

async function Read() {
    try {
        const reqdata= await fs.readFile('./history.json', 'utf-8');
        return JSON.parse(reqdata)
    } catch(error){
        if (error.code === 'ENOENT') { 
            return []; 
        }
        throw error;
    }
    
}


const MidleWare= async (req, res, next) => {
    // console.log(chalk.bgYellow(`[${new Date().toISOString()}] ${req.method} ${req.url}`))
    const history= await Read()
    const key = `${[new Date().toISOString()]}`
    history.key = `${req.method} ${req.url}`
    await Write(history)
    next()
}

module.exports= MidleWare