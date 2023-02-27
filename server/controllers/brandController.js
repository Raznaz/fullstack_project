class BrandController {
	create(req, res) {
		console.log('😀', req.body);
		res.status(200).json({ id: Date.now(), name: req.body.name });
	}

	getAllBrands(req, res) {
		res.status(200).json([{ id: 1, name: 'SAMSUNG' }]);
	}

	remove(req, res) {
		console.log('❎', req.params);
		res.json(`Removed ${req.params.id}`);
	}
}

module.exports = new BrandController();
