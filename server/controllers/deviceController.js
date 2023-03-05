const ApiError = require('../error/apiError');
const { Brand, Device } = require('../models/models');
const path = require('path');
const uuid = require('uuid');

class DeviceController {
	async getAllDevices(req, res, next) {
		try {
			let devices = [];
			const { brandId, typeId } = req.query;

			if (!brandId && !typeId) {
				devices = await Device.findAll();
			}

			if (brandId && !typeId) {
				devices = await Device.findAll({ where: { brandId } });
			}

			if (typeId && !brandId) {
				devices = await Device.findAll({ where: { typeId } });
			}

			if (typeId && brandId) {
				devices = await Device.findAll({ where: { typeId, brandId } });
			}

			return res.status(200).json(devices);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}

		return res.status(200).json([{ name: 'Headphones' }]);
	}

	async getOneDevice(req, res, next) {
		try {
			const { id } = req.params;
			console.log('😀', id);
			const currentDevice = await Device.findOne({ where: { id } });

			return res.status(200).json(currentDevice);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}

	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';

			img.mv(path.resolve(__dirname, '..', 'static', fileName));

			const device = await Device.create({
				name,
				price,
				brandId,
				typeId,
				img: fileName,
			});

			return res.status(200).json(device);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}

	remove(req, res) {
		res.status(200).json('REMOVE DEVICE');
	}
}

module.exports = new DeviceController();
