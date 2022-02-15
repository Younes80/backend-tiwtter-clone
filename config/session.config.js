const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { clientPromise } = require('../database');

const secretSession = process.env.SECRET_SESSION;

app.use(
	session({
		secret: secretSession,
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: false,
			maxAge: 1000 * 60 * 60 * 24 * 14,
		},
		store: MongoStore.create({
			clientPromise: clientPromise.then(m => m.connection.getClient()),
			ttl: 60 * 60 * 24 * 14,
		}),
	})
);
