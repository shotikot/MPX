const express = require('express');
const app = express();
const ejs = require('ejs');
const cors = require('cors');
const path = require('path');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(require('./routes'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;