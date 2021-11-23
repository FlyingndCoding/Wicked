const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class CuddleCommand extends BaseCommand {
	constructor() {
		super('cuddle', 'action', []);
	}

	async run(client, message, args) {
		if (message.mentions.members.size === 0) {
			return message.reply('\`Usage: cuddle @user\`');
		}

		try {
			const member = message.mentions.members.first();
			const GIF = await neko.sfw.cuddle();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setTitle(`${message.author.username} cuddles ${member.user.username}~ cute!`)
				.setImage(GIF.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};