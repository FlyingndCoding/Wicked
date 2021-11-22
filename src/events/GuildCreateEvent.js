// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require('../utils/structures/BaseEvent');
const client = require("../index");
const chalk = require('chalk');

module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) {
    console.log(chalk.green(`[CLIENT] => [GUILD] Joined: ${guild.name} with ${guild.memberCount} users`))
  }
}