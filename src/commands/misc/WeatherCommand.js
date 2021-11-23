const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = class WeatherCommand extends BaseCommand {
	constructor() {
		super('weather', 'misc', []);
	}

	run(client, message, args) {
		weather.find({ search: args.join(' '), degreeType: 'C' }, function (err, result) {
			let degrees = ('°C');
			if (!args[0]) return message.reply('`Usage: weather <location>`');

			if (err) message.reply(err);

			if (result.length === 0) {
				message.reply('Please enter a valid location.'); 
				return;
			}

			var current = result[0].current;
			var location = result[0].location;

			const embed = new MessageEmbed()
				.setAuthor(`Weather for ${current.observationpoint}`)
				.setThumbnail(current.imageUrl)
				.setColor('#202225')
				.addField('Forecast', `${current.skytext}`)
				.addField('Timezone', `GMT+${location.timezone}`, true)
				.addField('Temperature', `${current.temperature}${degrees}`, true)
				.addField('Feels Like', `${current.feelslike}${degrees}`, true)
				.addField('Humidity', `${current.humidity}%`, true)
				.addField('Winds', `${current.winddisplay}`, true);
			message.reply({ embeds: [embed] });
		});
	}
};