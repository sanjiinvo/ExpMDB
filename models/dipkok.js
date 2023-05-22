const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupName:{
        type:String,
        required:true
    },
    objectsLeftside:{
        type:Array,
    },
    objectsRightside:{
        type:Array,
    },

},{timestamps:true});

const Dipkok = mongoose.model('Dipkok',groupSchema);

module.exports = Dipkok;