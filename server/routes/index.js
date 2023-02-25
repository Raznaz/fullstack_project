const express = require('express');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');

const routers = express.Router();

routers.use('/user', userRouter);
routers.use('/type', typeRouter);
routers.use('/device', deviceRouter);
routers.use('/brand', brandRouter);

module.exports = routers;
