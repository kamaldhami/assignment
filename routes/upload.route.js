const express = require('express');
const uploadRouter = express.Router();

const { add } = require('../controllers/upload.ctrl')
const { checkToken } = require('../config/jwt.config')
const upload = require('../multer/multer')

uploadRouter.post('/upload',
    checkToken,
    upload.fields([{ name: 'upload', maxCount: 1 }]),
    add
)


module.exports = uploadRouter