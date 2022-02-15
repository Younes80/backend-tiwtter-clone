const mongoose = require('mongoose');

exports.clientPromise = mongoose
	.connect(
		'mongodb+srv://younes:ApQm102938475@cluster0.scyv1.mongodb.net/twitter?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		}
	)
	// .then(() => {
	// 	console.log('connexion ok !');
	// })
	.catch(err => {
		console.log(err);
	});
