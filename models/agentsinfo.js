const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agentSchema = new Schema({
    stagename:{
        type:String,
        required:true
    },
    localip:{
        type:String,
        required:true
    },
    mac:{
        type:String,
        required:true
    },


},{timestamps:true});

const Agentinfo = mongoose.model('Agentinfo',agentSchema);

module.exports = Agentinfo;