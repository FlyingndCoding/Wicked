const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RestartCommand extends BaseCommand {
	constructor() {
		super('restart', 'owner', []);
	}

	async run(client, message, args) {
		let authorize;
		if (client.config.ownerID.length == 0) { authorize = true; } 
		else { if (client.config.ownerID.includes(message.author.id)) { authorize = true; } }

		if (!authorize) return;

		await message.channel.send('Stopping the bot. Rebooting if under process manager.');
		await client.util.handleClose();
	}
};