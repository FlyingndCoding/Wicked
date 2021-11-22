const BaseEvent = require('../../utils/structures/BaseEvent');
const { updateChecker } = require('../../utils/updateChecker/updateChecker');
const { checkForUpdates } = require('../../../slappey.json');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
  
  if(checkForUpdates) {
    setTimeout(updateChecker, 1500);
  };

  client.user.setActivity(`restarting...`);
  setTimeout(function() { 
    setInterval(() => {
    client.user.setActivity(`${client.config.prefix} help | ${client.guilds.cache.size} servers`)
    }, 5000);
  }, 100);

    client.logger.log('ready', `${client.user.tag} has logged in.`);
  }
}