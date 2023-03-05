require('dotenv').config();
const express = require('express');
const errorHandling = require('./middleware/errorHandling');
const allRouters = require('./routes');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use('/api', allRouters);
app.use(errorHandling);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () =>
			console.log(`⭐ Server was started on ${PORT} port ⭐`)
		);
	} catch (error) {
		console.error(error);
	}
};

start();
