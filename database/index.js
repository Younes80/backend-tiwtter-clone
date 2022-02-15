const mongoose = require('mongoose');

const dbMongo = process.env.DB_MONGO;

exports.clientPromise = mongoose
	.connect(dbMongo, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	// .then(() => {
	// 	console.log('connexion ok !');
	// })
	.catch(err => {
		console.log(err);
	});
