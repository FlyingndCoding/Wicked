const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class BoobsCommand extends BaseCommand {
	constructor() {
		super('boobs', 'image', ['booba', 'boob']);
	}

	async run(client, message, args) {
		if (!message.channel.nsfw) {
			return message.channel.send(
				'This command can only be used in a NSFW marked channel.'
			);
		}

		try {
			const GIF = await neko.nsfw.boobs();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage(GIF.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};