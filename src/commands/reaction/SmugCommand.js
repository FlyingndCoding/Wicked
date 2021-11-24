const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class SmugCommand extends BaseCommand {
	constructor() {
		super('smug', 'reaction', []);
	}

	async run(client, message, args) {
		try {
			const member = message.mentions.members.first();

			var cmd = 'smug';
			var res = await axios.get('https://rra.ram.moe/i/r', {
				params: { type: cmd },
			});
			var path = res.data.path.replace('/i/', '');

			const embed = new MessageEmbed()
				.setColor('#202225')
				.setImage('https://cdn.ram.moe/' + path);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};