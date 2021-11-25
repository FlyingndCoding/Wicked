const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const catboyClient = require('catboys');
const catboy = new catboyClient();

module.exports = class CatboyCommand extends BaseCommand {
	constructor() {
		super('catboy', 'image', []);
	}

	async run(client, message, args) {
		try {
			const IMG = await catboy.sfw.catboy();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage(IMG.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};