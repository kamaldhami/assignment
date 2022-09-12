const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const apiRouter = require('../routes/api.route')
require('../database/mongodb');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));

app.use(express.static('public'))
app.use('/public', express.static(path.join('public')));
app.use(apiRouter)


module.exports = app;