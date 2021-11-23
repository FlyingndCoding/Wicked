const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class HugCommand extends BaseCommand {
	constructor() {
		super('hug', 'action', []);
	}

	async run(client, message, args) {
		if (message.mentions.members.size === 0) {
			return message.reply('\`Usage: hug @user\`');
		}

		try {
			const member = message.mentions.members.first();
			const GIF = await neko.sfw.hug();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setTitle(`${message.author.username} gives ${member.user.username} a big hug!`)
				.setImage(GIF.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};