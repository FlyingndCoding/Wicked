const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = class MeruCommand extends BaseCommand {
	constructor() {
		super('meru', 'image', []);
	}

	async run(client, message, args) {
		if (!message.channel.nsfw) {
			return message.channel.send(
				'This command can only be used in a NSFW marked channel.'
			);
		}

		try {
			let { body } = await superagent.get(
				'https://api.shashumga.club/v1/nsfw/meru'
			);

			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage(`${body.url}`);

			message.reply({ embeds: [embed] });

		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};