const express = require('express');
const errorHandling = require('./middleware/errorHandling');
const allRouters = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', allRouters);
app.use(errorHandling);

const start = () => {
	app.listen(PORT, () =>
		console.log(`⭐ Server was started on ${PORT} port ⭐`)
	);
};

start();
