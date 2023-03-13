const jwt = require('jsonwebtoken');
const ApiError = require('../error/apiError');

module.exports = function (req, res, next) {
	try {
		const token = req.headers.authorization.split(' ')[1];

		if (!token) {
			return res.status(401).json('NO AUTHORIZATION');
		}

		console.log('💛 ', token);
		const { role } = jwt.verify(token, process.env.SECRET_KEY);
		console.log('💛 ', role);

		if (role !== 'ADMIN') {
			return res.status(403).json({ message: '🛑 YOU ARE NOT ADMIN' });
		}

		next();
	} catch (error) {
		req.status(403).json({ message: error.message });
	}
};
