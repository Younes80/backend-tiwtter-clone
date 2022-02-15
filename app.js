require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
const errorHandler = require('errorhandler');
require('./database');
const cookieParser = require('cookie-parser');

const app = express();
exports.app = app;
const port = process.env.PORT || 3000;

app.use(cookieParser());
require('./config/jwt.config');

// Templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// config pour session avec Passport
// require('./config/session.config');
// require('./config/passport.config');

app.use(morgan('short'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(index);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(errorHandler());
// } else {
// 	app.use((err, req, res, next) => {
// 		const code = err.code || 500;
// 		res.status(code).json({
// 			code: code,
// 			message: code === 500 ? null : err.message,
// 		});
// 	});
// }

app.listen(port);
