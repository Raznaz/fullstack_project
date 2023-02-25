class UserController {
	static login(req, res) {
		res.status(200).json('LOGIN');
	}

	static registration(req, res) {
		res.status(200).json('REGISTRATION');
	}

	static checkAuth(req, res) {
		res.status(200).json('CHECK AUTH');
	}
}

module.exports = UserController;
