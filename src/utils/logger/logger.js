const { DEBUG } = new (require('./loggerUtil'))();
const chalk = require('chalk');

class logger {
    update(content) {
        console.log(chalk.yellow(`[UPDATE] => ${content}`))
    }

    updateError(content) {
        console.log(chalk.red(`[UPDATE] => [ERROR] ${content}`))
    }

    debug(name, content) {
        DEBUG ? console.log(chalk.yellow(`[DEBUG] => [${name ? name : 'Unknown'}] ${content}`)) : ''
    }

    log(name, content) {
        console.log(chalk.green(`[CLIENT] => [${name.toUpperCase()}] ${content}`))
    }

    logRed(name, content) {
        console.log(chalk.red(`[CLIENT] => [${name.toUpperCase()}] ${content}`))
    }

    error(content) {
        console.log(chalk.red(`[CLIENT] => [ERROR] ${content}`))
    }
}

module.exports = logger;