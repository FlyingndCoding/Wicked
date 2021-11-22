const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
	constructor() {
		super('messageCreate'); // Changed to "messageCreate" bc "message" is deprecated :/
	}
  
	async run(client, message) {
		if (message.author.bot) return;
		if (message.content.startsWith(client.prefix)) {
			const [cmdName, ...cmdArgs] = message.content
				.toLowerCase()
				.slice(client.prefix.length)
				.trim()
				.split(/\s+/);
			const command = client.commands.get(cmdName);
			if (command) {
				command.run(client, message, cmdArgs);
			}
		}
	}
};