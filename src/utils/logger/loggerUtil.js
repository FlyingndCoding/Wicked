const config = require('../../../slappey.json');

module.exports = class loggerUtil {
	get DEBUG() {
		return process.env.debug || config.debug;
	}
};