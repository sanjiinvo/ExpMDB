const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HookaTastesSchema = new Schema({
    TasteName:{
        type:String,
        required:true
    },
    TasteBrand:{
        type:String,
    },

},{timestamps:true});

const HookaTastes = mongoose.model('HookaTastes',HookaTastesSchema);

module.exports = HookaTastes;