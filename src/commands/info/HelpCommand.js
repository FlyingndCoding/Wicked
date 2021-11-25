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
				let helpEmbed = new MessageEmbed()
					.setAuthor('Command List', client.user.displayAvatarURL())
					.setColor('#202225')
					.setDescription('Here is the list of commands!')
					.addFields(
						{ name: '🤗 Action', value: 'cuddle, hug, kiss, lick' },
						{ name: '😮 Reaction', value: 'smug, clap, nom, stare' },
						{ name: '🖼 SFW Image', value: 'yui, rem, yaoi, catboy', inline: false },
						{ name: '🥴 NSFW Image', value: 'meru, yuri, trap, femdom, boobs', inline: false },
						{ name: '⚙️ Info', value: 'help, invite, serverinfo, userinfo', inline: false },
						{ name: '🤷‍♀️ Misc', value: 'weather', inline: false },
						{ name: '🛡️ Moderation', value: 'kick', inline: false },
						// { name: '👑 Owner', value: 'eval, restart', inline: false },
					)
					.addField('\nUseful Links', `› [Invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=bot)\n› [Github](https://github.com/jessebots/wicked)\n› [Support Server](https://discord.gg)`);

				return message.reply(({ embeds: [helpEmbed] }));
			} else {

			}
		} catch (e) {
			message.reply(`${e}`);
		}
	}
};