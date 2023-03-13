const jwt = require('jsonwebtoken');

module.exports = function (role) {
	return function (req, res, next) {
		try {
			const token = req.headers.authorization.split(' ')[1];

			if (!token) {
				return res.status(401).json('NO AUTHORIZATION');
			}

			const decoded = jwt.verify(token, process.env.SECRET_KEY);

			if (role !== decoded.role) {
				return res.status(403).json({ message: '🛑 YOU ARE NOT ADMIN' });
			}
			req.user = decoded;

			next();
		} catch (error) {
			req.status(403).json({ message: error.message });
		}
	};
};
