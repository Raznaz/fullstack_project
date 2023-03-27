const jwt = require('jsonwebtoken');
const ApiError = require('../error/apiError');
const { User, Basket } = require('../models/models');
const bcrypt = require('bcrypt');
const users = require('../userData');

const generateToken = (id, email, role) => {
	const token = jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
		expiresIn: '30d',
	});

	return token;
};

class UserController {
	async login(req, res, next) {
		try {
			const { email, password } = req.body;
			// const { authorization } = req.headers;

			const user = await User.findOne({ where: { email } });

			if (!user) {
				return next(ApiError.forbidden('😠 User does not exist !'));
			}

			const checkPassword = await bcrypt.compare(password, user.password);

			if (!checkPassword) {
				return next(ApiError.forbidden('🤮 credentials are not valid'));
			}

			const token = generateToken(user.id, user.email, user.role);

			res.status(200).json(token);
		} catch (error) {
			next(ApiError.forbidden(error.message));
		}
	}

	async registration(req, res, next) {
		const saltRounds = 5;

		try {
			const { email, password, role } = req.body;

			const checkUser = await User.findOne({ where: { email } });

			if (checkUser) {
				return next(ApiError.forbidden('😠 User already exist.'));
			}

			const hasPassword = await bcrypt.hash(password, saltRounds);
			const newUser = await User.create({ email, role, password: hasPassword });
			const basket = await Basket.create({ userId: users.id });
			const token = generateToken(newUser.id, email, newUser.role);

			res.status(200).json(token);
		} catch (error) {
			next(ApiError.forbidden(error.message));
		}
	}

	checkAuth(req, res) {
		const token = generateToken(req.user.id, req.user.email, req.user.role);
		return res.status(200).json({ token });
	}
}

module.exports = new UserController();
