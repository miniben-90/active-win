const addon = require('./windows-binding');

module.exports = () => {
	return Promise.resolve(addon.getActiveWindow());
};
module.exports.getOpenWindows = () => {
	return Promise.resolve(addon.getOpenWindows());
};
module.exports.sync = () => addon.getActiveWindow();
module.exports.getOpenWindowsSync = () => addon.getOpenWindows();
