require('dotenv').config();
const express = require('express');
const path = require('path');
const errorHandling = require('./middleware/errorHandling');
const allRouters = require('./routes');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
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
