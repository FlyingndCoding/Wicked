const config = require('../../slappey.json');

module.exports = class util {

	get TOKEN() {
		return process.env.token || config.token;
	}

	get PREFIX() {
		return process.env.prefix || config.prefix;
	}

	get OWNERS() {
		return process.env.ownerID ? process.env.ownerID.split(',').length ? process.env.ownerID.split(',') : config.ownerID : config.ownerID;
	}

	get DEBUG() {
		return process.env.debug || config.debug;
	}

	get CHECKFORUPDATES() {
		return process.env.checkForUpdates || config.checkForUpdates;
	}

	get SAUCENAOAPIKEY() {
		return process.env.saucenaoApiKey || config.saucenaoApiKey;
	}

	handleClose(client) {
		process.exit(0); // Requires a process manager to restart.
	};

};