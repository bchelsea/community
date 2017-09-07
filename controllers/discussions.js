var Discussion = require('../models/discussion');

function create(req, res) {
    console.log('in create')
    var disc = new Discussion(req.body);
    disc.user = req.user._id;
    disc.save(function(err) {
        res.json(disc);
    });
}

function index(req, res) {
    res.send('hit index');
}




module.exports = {
    index,
    create
}