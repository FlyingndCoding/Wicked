const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class LickCommand extends BaseCommand {
	constructor() {
		super('lick', 'action', []);
	}

	async run(client, message, args) {
		if (message.mentions.members.size === 0) {
			return message.reply('\`Usage: lick @user\`');
		}

		try {
			const member = message.mentions.members.first();

			var cmd = 'lick';
			var res = await axios.get('https://rra.ram.moe/i/r', {
				params: { type: cmd },
			});
			var path = res.data.path.replace('/i/', '');

			const embed = new MessageEmbed()
				.setColor('#202225')
				.setTitle(
					`${message.author.username} licks ${member.user.username}~ mmm!`
				)
				.setImage('https://cdn.ram.moe/' + path);
			message.reply({ embeds: [embed] });
		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};
