const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class UserInfoCommand extends BaseCommand {
	constructor() {
		super('userinfo', 'info', ['ui']);
	}

	async run(client, message, args) {
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.member;
		const embed = new MessageEmbed()
			.setAuthor(member.user.tag, member.user.displayAvatarURL())
			.setColor('#202225')
			.setThumbnail(member.user.displayAvatarURL())
			.addField('Joined Discord', `<t:${~~(member.user.createdAt / 1000)}:R>`, true)
			.addField('Joined Server', `<t:${~~(member.joinedAt / 1000)}:f>`, true)
			.addField(`Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' ') || 'No Roles'}`, false)
			.setFooter(`User ID: ${member.user.id}`);
		message.reply({ embeds: [embed] });
	}
};