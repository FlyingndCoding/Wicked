const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class NekoCommand extends BaseCommand {
	constructor() {
		super('neko', 'image', []);
	}

	async run(client, message, args) {
		try {
			const IMG = await neko.sfw.neko();
			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage(IMG.url);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};