// const passport = require('passport');

const { findUserPerEmail } = require('../queries/users.queries');

exports.signinForm = (req, res, next) => {
	res.render('auth/auth-form', {
		errors: null,
		isAuthenticated: req.isAuthenticated(),
		currentUser: req.user,
	});
};

exports.signin = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await findUserPerEmail(email);
		if (user) {
			const match = await user.comparePassword(password);
			if (match) {
				req.login(user);
				res.redirect('/tweets');
			} else {
				res.render('auth/auth-form', {
					errors: 'User Not found or wrong password',
				});
			}
		} else {
			res.render('auth/auth-form', {
				errors: 'User Not found or wrong password',
			});
		}
	} catch (e) {
		next(e);
	}
	// ********* Session avec Passport ********* //
	// passport.authenticate('local', (err, user, info) => {
	// 	if (err) {
	// 		next(err);
	// 	} else if (!user) {
	// 		res.render('auth/auth-form', {
	// 			errors: [info.message],
	// 			isAuthenticated: req.isAuthenticated(),
	// 			currentUser: req.user,
	// 		});
	// 	} else {
	// 		req.login(user, err => {
	// 			if (err) {
	// 				next(err);
	// 			} else {
	// 				res.redirect('/tweets');
	// 			}
	// 		});
	// 	}
	// })(req, res, next);
};

exports.signout = (req, res, next) => {
	req.logout();
	res.redirect('/auth/signin/form');
};
