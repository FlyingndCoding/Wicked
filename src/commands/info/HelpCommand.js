const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const { join } = require('path');
const fs = require('fs');


module.exports = class HelpCommand extends BaseCommand {
	constructor() {
		super('help', 'info', []);
	}

	async run(client, message, args) {
		const config = client.config;
		try {
			if (!args[0]) {
				const helpEmbed = new MessageEmbed()
					.setAuthor('Command List', client.user.displayAvatarURL())
					.setColor('#202225')
					.setDescription('Here is the list of commands!')
					.addFields(
						{ name: 'š¤ Action', value: 'cuddle, hug, kiss, lick' },
						{ name: 'š® Reaction', value: 'smug, clap, nom, stare' },
						{ name: 'š¼ SFW Image', value: 'yui, rem, yaoi, catboy, neko', inline: false },
						{ name: 'š„“ NSFW Image', value: 'meru, yuri, trap, femdom, boobs', inline: false },
						{ name: 'āļø Info', value: 'help, invite, serverinfo, userinfo, dev', inline: false },
						{ name: 'š¤·āāļø Misc', value: 'weather, sauce', inline: false },
						{ name: 'š”ļø Moderation', value: 'kick', inline: false },
						// { name: 'š Owner', value: 'eval, restart', inline: false },
					)
					.addField('\nUseful Links', `āŗ [Invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=bot)\nāŗ [Github](https://github.com/jessebots/wicked)\nāŗ [Support Server](https://discord.gg)`);

				return message.reply(({ embeds: [helpEmbed] }));
			} else {

			}
		} catch (e) {
			message.reply(`${e}`);
		}
	}
};