const { Client, Intents } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client({ allowedMentions: { repliedUser: false }, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
const logger = require('./utils/logger/logger');

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  client.logger = new logger();
  client.config = config;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

module.exports = client;