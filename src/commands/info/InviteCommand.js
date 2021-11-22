const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'info', []);
  }

  async run(client, message, args) {
    const inviteEmbed = new MessageEmbed()
      .setDescription('**__Invite Wicked__**\n\nThe **MOST** *WICKEDEST* bot!')
      .setColor('#202225')
      .setThumbnail(client.user.displayAvatarURL());

    let botInvite = new MessageButton()
      .setStyle('LINK')
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=4126665975&scope=bot%20applications.commands`)
      .setLabel("Invite");

    let supportLink = new MessageButton()
      .setStyle('LINK')
      .setURL('https://discord.gg')
      .setLabel('Support');

    let linkRow = new MessageActionRow().addComponents([botInvite, supportLink]);
    await message.reply({ embeds: [inviteEmbed], components: [linkRow] });
  }
}