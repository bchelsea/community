var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/users')

router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));
router.get('/auth/facebook/callback', passort.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/resources',
}));


module.exports = router;