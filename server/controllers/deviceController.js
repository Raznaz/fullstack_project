class DeviceController {
	getAllDevices(req, res) {
		res.status(200).json([{ name: 'Headphones' }]);
	}

	getOneDevice(req, res, next) {
		res.status(200).json({ name: 'ONE DEVICE' });
	}

	create(req, res) {
		res.status(200).json('CREATE DEVICE');
	}

	remove(req, res) {
		res.status(200).json('REMOVE DEVICE');
	}
}

module.exports = new DeviceController();
