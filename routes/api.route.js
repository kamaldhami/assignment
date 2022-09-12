const express = require('express')
const apiRouter = express.Router();
const indexRouter = require('./index,route');

apiRouter.use(indexRouter);


module.exports = apiRouter