const express = require('express');
const userRouter = express.Router();

const{add,login} = require('../controllers/user.ctrl')

userRouter.post('/add',add)
userRouter.post('/login',login)


module.exports = userRouter