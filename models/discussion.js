var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var discussionSchema = new mongoose.Schema ({
    title: String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    content: String,
    category: {type: String, enum:['Crime', 'Garage Sales', 'Lost And Found', 'Community Events', 'Neighborhood Watch', 'Good Eats', 'High School']}
}, {
    timestamps: true,
})


module.exports = mongoose.model('Discussion', discussionSchema);

