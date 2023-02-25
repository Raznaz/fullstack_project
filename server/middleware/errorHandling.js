const ApiError = require('../error/apiError');

const errorHandling = (err, req, res, next) => {
	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message });
	}
	return res.status(500).json({ message: '🟧 This error is unexpected' });
};

module.exports = errorHandling;
