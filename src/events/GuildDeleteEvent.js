// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildDelete
const BaseEvent = require('../utils/structures/BaseEvent');
const client = require("../index");
const chalk = require('chalk');

module.exports = class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super('guildDelete');
  }
  
  async run(client, guild) {
    client.logger.logRed('guild', `Left: ${guild.name}`)
  }
}