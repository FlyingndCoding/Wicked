const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KickCommand extends BaseCommand {
	constructor() {
		super('kick', 'moderation', ['yeet']);
	}

	async run(client, message, args) {
		try {
			if (!message.member.permissions.has('KICK_MEMBERS')) {
				return await message.reply('You don\'t have the required permission to kick members - \`[KICK_MEMBERS]\`');
				if (!message.guild.me.permissions.has('KICK_MEMBERS')) 
					return message.reply('I don\'t have the required permission to kick members - \`[KICK_MEMBERS]\`');
			}

			let kickMember = await message.mentions.members.first();
			let kickReason = await args.slice(1).join(' ');
			if (!kickMember) {
				return await message.reply('You must mention a valid member to kick.');
			}
			if (!kickMember.kickable) {
				return await message.reply('You can\'t kick this member.');
			}
			if (message.author === kickMember) {
				return await message.reply('You can\'t kick yourself.');
			}
			if (!kickReason) {kickReason = 'No reason specified.';}

			kickMember.kick(kickReason);

			await message.reply(`Successfully kicked **${kickMember.user.tag}**.`);

		} catch (e) {
			return message.reply(`${e}`);
		}
	}
};