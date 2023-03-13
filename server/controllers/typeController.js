const ApiError = require('../error/apiError');
const { Type } = require('../models/models');

class TypeController {
	async getAllTypes(req, res, next) {
		try {
			const types = await Type.findAll();
			return res.status(200).json(types);
		} catch (error) {
			console.error(error.message);
		}
	}

	async create(req, res, next) {
		try {
			const { name } = req.body;
			const type = await Type.create({ name });
			return res.status(200).json(type);
		} catch (error) {
			return next(ApiError.badRequest('🔸 Name is empty '));
		}
	}

	remove(req, res) {
		res.status(200).json([{ type: 'SOME TYPE' }]);
	}
}

module.exports = new TypeController();
