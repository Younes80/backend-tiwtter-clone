const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config');
const {
	userList,
	followUser,
	unFollowUser,
	userProfile,
	signup,
	signupForm,
	uploadImage,
} = require('../controllers/users.controller');

router.get('/', userList);
router.get('/follow/:userId', followUser);
router.get('/unfollow/:userId', unFollowUser);
router.get('/:username', userProfile);
router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image', ensureAuthenticated, uploadImage);

module.exports = router;
