const ApiError = require('../error/apiError');

class TypeController {
	async getAllTypes(req, res, next) {
		try {
			await Promise.reject(ApiError.badRequest('👎 bad request'));
			// next();
			res.status(200).json([{ type: 'SOME TYPE' }]);
		} catch (error) {
			console.log('💙 ERRROR');
			next(error);
		}
	}

	create(req, res) {
		res.status(200).json([{ type: 'SOME TYPE' }]);
	}

	remove(req, res) {
		res.status(200).json([{ type: 'SOME TYPE' }]);
	}
}

module.exports = new TypeController();
