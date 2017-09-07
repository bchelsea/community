var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var Discussion = require('../../models/discussion');
var discussionsCtrl = require('../../controllers/discussions')


router.get('/', discussionsCtrl.index);
router.post('/', discussionsCtrl.create);





module.exports = router;