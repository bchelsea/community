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
    Discussion.find({}, function (err, data){
        res.status(200).json(data)
    })
}




module.exports = {
    index,
    create
}