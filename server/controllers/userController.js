const jwt = require('jsonwebtoken');
const ApiError = require('../error/apiError');
const users = require('../userData');

class UserController {
	login(req, res, next) {
		const { login, passw } = req.body;
		const { authorization } = req.headers;

		console.log('😁', authorization);

		if (!login || !passw) {
			return next(ApiError.badRequest('😠 Please enter login or password'));
		}

		if (!authorization) {
			return next(ApiError.badRequest('🤮 credentials are not valid'));
		}

		const [type, credentials] = authorization.split(' ');
		console.log('1>', credentials);
		const currentUser = jwt.verify(credentials, process.env.PASSWORD);

		console.log('result ', currentUser);
		const user = users.find((item) => currentUser.email === item.email);

		console.log('😺', user);

		if (!user) {
			return next(ApiError.badRequest('👎 no have such user'));
		}

		if (currentUser.password !== user.password) {
			return next(ApiError.badRequest('💔 Password is incorrect'));
		}

		const newToken = jwt.sign(req.body, process.env.PASSWORD);
		res.setHeader('X-token', newToken);

		return next();
		res.status(200).json('🟢 SUCCESS');
	}

	registration(req, res) {
		const { login, password } = req.body;

		if (!login || !password) {
			return next(ApiError.badRequest('😠 Please enter login or password'));
		}

		const token = jwt.sign(users[0], process.env.PASSWORD, { expiresIn: '1d' });

		setTimeout(() => {
			const data = jwt.verify(token, process.env.PASSWORD);
			console.log('⛑️', data);
		}, 1000);

		console.log('🤩 ', token);
		res.status(200).json({ token });
	}

	checkAuth(req, res) {
		console.log('🔵🔵🔵');
		res.status(200).json('CHECK AUTH');
	}
}

module.exports = new UserController();
