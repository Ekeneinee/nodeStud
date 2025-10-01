const chalk= require("chalk")

function LogInfo(message){
    console.log(chalk.blue(`[INFO]: ${message}`))
}
function LogError(message){
    console.log(chalk.red(`[ERROR]: ${message}`))
}
function LogWarnig(message){
    console.log(chalk.yellow(`[WARNING]: ${message}`))
}

const loggerMiddleware= (req, res, next) =>{
    console.log(chalk.bgYellow(`[${new Date().toISOString()}] ${req.method} ${req.url}`))
    next()
}

module.exports= loggerMiddleware 