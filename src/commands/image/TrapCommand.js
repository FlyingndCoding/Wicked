const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class TrapCommand extends BaseCommand {
	constructor() {
		super('trap', 'image', []);
	}

	async run(client, message, args) {
		if (!message.channel.nsfw) {
			return message.channel.send(
				'This command can only be used in a NSFW marked channel.'
			);
		}

		try {
			const GIF = await neko.nsfw.trap();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage(GIF.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};