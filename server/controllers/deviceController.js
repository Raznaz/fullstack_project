class DeviceController {
	static getAllDevices(req, res) {
		res.status(200).json([{ name: 'Headphones' }]);
	}

	static create(req, res) {
		res.status(200).json('CREATE DEVICE');
	}

	static remove(req, res) {
		res.status(200).json('REMOVE DEVICE');
	}
}

module.exports = DeviceController;
