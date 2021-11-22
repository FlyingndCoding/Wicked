const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class EvalCommand extends BaseCommand {
  constructor() {
    super('eval', 'owner', []);
  }

  async run(client, message, args) {
    let authorize;
    if (client.config.ownerID.length == 0) { authorize = true } 
    else { if (client.config.ownerID.includes(message.author.id)) { authorize = true } }

    if (!authorize) return;

    try {
      if (args.join(' ').toLowerCase().includes('token')) {
        return;
      }
      
      const toEval = args.join(' '); 
      const evaluated = eval(toEval);
      if (!toEval) return message.reply('Usage: eval <code>');
      await message.reply(`${evaluated}`);
      
    } catch (err) {
      client.logger.error(err);
    }
  }
}