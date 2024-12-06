const express = require('express');

const router = express.Router();
const passport = require('passport');

const postControllers = require('../controllers/postController');

router.post('/create' , passport.checkAuthentication , postControllers.createPosts);
router.get('/destroy/:id' , passport.checkAuthentication , postControllers.destroy);

module.exports = router;