// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require('../utils/structures/BaseEvent');
const client = require("../index");
const chalk = require('chalk');

module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) {
    client.logger.log('guild', `Joined: ${guild.name} with ${guild.memberCount} users`);
  }
}