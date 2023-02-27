const ApiError = require('../error/apiError');

class TypeController {
	getAllTypes(req, res, next) {
		res.status(200).json([{ type: 'SOME TYPE' }]);
	}

	create(req, res) {
		res.status(200).json([{ type: 'SOME TYPE' }]);
	}

	remove(req, res) {
		res.status(200).json([{ type: 'SOME TYPE' }]);
	}
}

module.exports = new TypeController();
