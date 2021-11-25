const { Client, Intents } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client({ allowedMentions: { repliedUser: false }, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
const logger = require('./utils/logger');
const util = require('./utils/util');
require('dotenv').config();

(async () => {
	client.config = config;
	client.commands = new Map();
	client.events = new Map();
	client.util = new util();
	client.logger = new logger();
	client.prefix = client.util.PREFIX;
	await registerCommands(client, '../commands');
	await registerEvents(client, '../events');
	await client.login(client.util.TOKEN);
})();

module.exports = client;