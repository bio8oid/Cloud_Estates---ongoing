const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertyModel = new Schema({
    id: { type: 'String' },
    title: { type: 'String' },
    desc: { type: 'String' },
});

module.exports = mongoose.model('Property', PropertyModel);