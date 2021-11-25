const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class DevCommand extends BaseCommand {
	constructor() {
		super('dev', 'info', ['devs']);
	}

	async run(client, message, args) {
    
		const embed = new MessageEmbed()
			.setColor('#202225')
			.setThumbnail(`${client.user.displayAvatarURL()}`)
			.setAuthor('Wicked Developer')
			.setDescription('[Jesse#4788](https://github.com/KniferFTW)', true);
		message.reply({ embeds: [embed] });
	}
};