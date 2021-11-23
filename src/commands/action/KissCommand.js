const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class KissCommand extends BaseCommand {
	constructor() {
		super('kiss', 'action', []);
	}

	async run(client, message, args) {
		if (message.mentions.members.size === 0) {
			return message.reply('\`Usage: kiss @user\`');
		}

		try {
			const member = message.mentions.members.first();
			const GIF = await neko.sfw.kiss();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setTitle(`${message.author.username} kissed ${member.user.username}, adorable~`)
				.setImage(GIF.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};