const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const catboyClient = require('catboys');
const catboy = new catboyClient();

module.exports = class YaoiCommand extends BaseCommand {
	constructor() {
		super('yaoi', 'image', []);
	}

	async run(client, message, args) {
		try {
			const IMG = await catboy.sfw.yaoi();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage(IMG.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};