module.exports = function (req, res, next) {
	const token = req.headers['x-token'];
	console.log('🔶 token middleware', token);
	next();
};
