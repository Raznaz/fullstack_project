const ApiError = require('../error/apiError');
const { Brand } = require('../models/models');

class BrandController {
	async create(req, res, next) {
		const { name } = req.body;

		if (!name) {
			return next(ApiError.badRequest('Brand name is empty'));
		}

		const brandName = await Brand.create({ name });

		return res.status(200).json(brandName);
	}

	async getAllBrands(req, res, next) {
		try {
			const brands = await Brand.findAll();
			return res.status(200).json(brands);
		} catch (error) {
			console.error(error);
		}
	}

	remove(req, res) {
		//! Implement function for remove brand

		console.log('❎', req.params);
		res.json(`Removed ${req.params.id}`);
	}
}

module.exports = new BrandController();
