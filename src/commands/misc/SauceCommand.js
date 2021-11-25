const BaseCommand = require('../../utils/structures/BaseCommand');
const client = require('../../index');
const sagiri = require('sagiri'),
	isImageUrl = require('is-image-url'),
	path = require('path'),
	notSupportedExts = new Set(['gif']),
	search = new sagiri(client.util.SAUCENAOAPIKEY, {
		numRes: 1
	});

module.exports = class SauceCommand extends BaseCommand {
	constructor() {
		super('sauce', 'misc', []);
	}

	run(client, message, args) {
		const getSauce = function(image) {
			search.getSauce(image).then(response => {
				let data = response[0];
				// console.log(response);
				let results = {
					thumbnail: data.original.header.thumbnail,
					similarity: data.similarity,
					site: data.site,
					url: data.url
				};
				const minSimilarity = 30;
				if (minSimilarity <= ~~results.similarity) {
					message.reply({
						embeds: [{
							'title': 'Image Sauce',
							'image': {
								url: results.thumbnail
							},
							'fields': [{
								'name': 'Similarity',
								'value': `${results.similarity}%`
							}, {
								'name': 'Source',
								'value': `[${results.site}](${results.url})`
							}],
							'color': '#202225'
						}
						] });
				} else {
					// console.error('No Results found!');
					message.reply('No Results found!');
				}
			}).catch((error) => {
				// console.error(error.message);
				error = error.toString();
				if (error.includes('You need an image') || error.includes('Supplied URL is not usable') || error.includes('Error: Got HTML response while expecting JSON')) {
					// console.error('API Error!');
					message.reply('API Error!');
					return;
				}
			});
		};
		if (!message.attachments.first() && !args[0]) {
			// console.error('Image attachment/URL not found!');
			message.reply('Please add an image, or image URL!');
		} else if (message.attachments.first()) {
			// console.log('Image attachment found!');
			if (isImageUrl(message.attachments.first().url) && !notSupportedExts.has(path.extname(message.attachments.first().url).slice(1).toLowerCase())) {
				getSauce(message.attachments.first().url);
			} else {
				// console.error('The file/extension is not an image!');
				message.reply('The file/extension is not an image!');
			}
		} else if (args[0]) {
			// console.log('Image URL found!');
			if (isImageUrl(args[0]) && !notSupportedExts.has(path.extname(args[0]).slice(1).toLowerCase())) {
				getSauce(args[0]);
			} else {
				// console.error('The file/extension is not an image!');
				message.reply('The file/extension is not an image!');
			}
		}
	}
};