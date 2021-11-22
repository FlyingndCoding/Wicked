const fetch = require('node-fetch');
const { version } = require('../../../package.json');
const client = require('../../index');

module.exports = {
    updateChecker: updateChecker
}

function updateChecker() {
    fetch('https://raw.githubusercontent.com/JesseBots/Wicked/main/package.json', {
        method: 'GET'
    })

    .then(res => res.json())
    .then(json => {
        if(json.version > version) {
            client.logger.update(`New update available. Current version: v${version}, newest version: v${json.version}.`)
            client.logger.update('Get the latest version here: https://github.com/JesseBots/Wicked')
        }
    }).catch(error => {
        client.logger.updateError('Unable to check for new updates!')
    });
}