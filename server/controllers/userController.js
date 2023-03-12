const jwt = require('jsonwebtoken');
const ApiError = require('../error/apiError');
const { User, Basket } = require('../models/models');
const bcrypt = require('bcrypt');
const users = require('../userData');

class UserController {
	async login(req, res, next) {
		try {
			const { email, password } = req.body;
			// const { authorization } = req.headers;

			const checkUser = await User.findOne({ where: { email } });

			if (!checkUser) {
				return next(ApiError.forbidden('😠 User does not exist !'));
			}

			const checkPassword = await bcrypt.compare(password, checkUser.password);

			if (!checkPassword) {
				return next(ApiError.forbidden('🤮 credentials are not valid'));
			}

			const newUser = { email, role: 'TEST ROLE' };

			const newToken = jwt.sign(newUser, process.env.PASSWORD, {
				expiresIn: '1d',
			});

			// const [type, credentials] = authorization.split(' ');
			// console.log('1>', credentials);
			// const currentUser = jwt.verify(credentials, process.env.PASSWORD);

			// console.log('result ', currentUser);
			// const user = users.find((item) => currentUser.email === item.email);

			// const newToken = jwt.sign(req.body, process.env.PASSWORD);
			// res.setHeader('X-token', newToken);

			res.status(200).json(newToken);
		} catch (error) {
			next(ApiError.forbidden(error.message));
		}
	}

	async registration(req, res, next) {
		const saltRounds = 5;

		try {
			const { email, password, role } = req.body;

			const checkEmail = await User.findOne({ where: { email } });

			if (checkEmail) {
				return next(ApiError.forbidden('😠 User already exist.'));
			}

			const newPassword = await bcrypt.hash(password, saltRounds);

			const newUser = await User.create({ email, password: newPassword });

			const token = jwt.sign({ email }, process.env.PASSWORD, {
				expiresIn: '1d',
			});

			res.status(200).json(newUser);
		} catch (error) {
			next(ApiError.forbidden(error.message));
		}
	}

	checkAuth(req, res) {
		console.log('🔵🔵🔵');
		res.status(200).json('CHECK AUTH');
	}
}

module.exports = new UserController();
