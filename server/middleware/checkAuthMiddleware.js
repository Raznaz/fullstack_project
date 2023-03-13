const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	if (req.method === 'OPTIONS') {
		next();
	}

	try {
		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			return res.status(401).json('NO AUTHORIZATION');
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		console.log('💁‍♂️', decoded);
		req.user = decoded;
		next();
	} catch (error) {
		res
			.status(401)
			.json({ message: 'NO AUTHORIZATION', details: error.message });
	}
};
