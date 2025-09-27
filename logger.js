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

module.exports= {
    LogInfo: LogInfo,
    LogError: LogError,
    LogWarnig: LogWarnig
}