const ApiError = require('../error/apiError');
const { Brand } = require('../models/models');

class DeviceController {
	getAllDevices(req, res) {
		res.status(200).json([{ name: 'Headphones' }]);
	}

	getOneDevice(req, res, next) {
		res.status(200).json({ name: 'ONE DEVICE' });
	}

	async create(req, res, next) {
		const { name } = req.body;

		if (!name) {
			next(ApiError.badRequest('🥴 Name brand is empty'));
		}

		const brandName = await Brand.create({ name });

		res.status(200).json(brandName);
	}

	remove(req, res) {
		res.status(200).json('REMOVE DEVICE');
	}
}

module.exports = new DeviceController();
