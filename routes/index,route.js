const express = require('express');
const indexRouter = express.Router();
const userRouter = require('./user,route')
const uploadRouter = require('./upload.route')

indexRouter.use(userRouter)
indexRouter.use(uploadRouter)


module.exports = indexRouter;