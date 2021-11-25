const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class ServerInfoCommand extends BaseCommand {
	constructor() {
		super('serverinfo', 'info', ['si']);
	}

	async run(client, message, args) {

		const members = message.guild.memberCount;
		const serverOwner = await message.guild.fetchOwner();
    
		const embed = new MessageEmbed()
			.setColor('#202225')
			.setAuthor(message.guild.name, message.guild.iconURL())
			.setThumbnail(message.guild.iconURL())
			.addField('Server Owner', `• ${serverOwner}`, true)
			.addField('Server Created', `<t:${~~(message.channel.guild.createdAt / 1000)}:R>`, true)
			.addField('Verification Level', `• \`${message.guild.verificationLevel}\``, true)
			.addField('Text Channels', `• \`${message.guild.channels.cache.size}\``, true)
			.addField('Voice Channels', `• \`${message.guild.channels.cache.filter(channel => channel.type == 'GUILD_VOICE').size}\``, true)
			.addField('Total Roles', `• \`${message.guild.roles.cache.size}\``, true)
			.addField('Total Members', `• \`${members.toLocaleString()}\``, true)
			.setFooter(`Server ID: ${message.guild.id}`);

		message.reply({ embeds: [embed] });
	}
};