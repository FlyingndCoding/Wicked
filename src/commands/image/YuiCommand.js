const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = class YuiCommand extends BaseCommand {
	constructor() {
		super('yui', 'image', []);
	}

	async run(client, message, args) {
		try {
			let { body } = await superagent.get(
				'https://api.shashumga.club/v1/anime/yui'
			);

			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage(`${body.url}`);

			message.reply({ embeds: [embed] });

		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
	}
};