const ApiError = require('../error/apiError');
const { Device, DeviceInfo } = require('../models/models');
const path = require('path');
const uuid = require('uuid');

class DeviceController {
	async getAllDevices(req, res, next) {
		try {
			let devices = [];
			let { brandId, typeId, limit, page } = req.query;

			page = page || 1;
			limit = limit || 9;

			let offset = page * limit - limit;

			if (!brandId && !typeId) {
				devices = await Device.findAndCountAll({ limit, offset });
			}

			if (brandId && !typeId) {
				devices = await Device.findAndCountAll({
					where: { brandId },
					limit,
					offset,
				});
			}

			if (typeId && !brandId) {
				devices = await Device.findAndCountAll({
					where: { typeId },
					limit,
					offset,
				});
			}

			if (typeId && brandId) {
				devices = await Device.findAndCountAll({
					where: { typeId, brandId },
					limit,
					offset,
				});
			}

			return res.status(200).json(devices);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}

		return res.status(200).json([{ name: 'Headphones' }]);
	}

	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId, info } = req.body;
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

			if (info) {
				info = JSON.parse(info);
				info.forEach((element) => {
					DeviceInfo.create({
						title: element.title,
						description: element.description,
						deviceId: device.id,
					});
				});
			}

			return res.status(200).json(device);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}

	async getOneDevice(req, res, next) {
		console.log('🔴 ', req.params);
		try {
			const { id } = req.params;
			const currentDevice = await Device.findOne({
				where: { id },
				include: [{ model: DeviceInfo, as: 'info' }],
			});

			return res.status(200).json(currentDevice);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}

	//TODO: DELETE exchange to UPDATE
	async remove(req, res, next) {
		try {
			const { id } = req.body;
			const result = await Device.update({});

			res.status(200).json(result);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}
}

module.exports = new DeviceController();
