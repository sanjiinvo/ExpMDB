const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HookaTastesIDsSchema = new Schema({
    TasteName:{
        type:String,
        
    },
    TasteID:{
        type:String,
        required:true
    },

},{timestamps:true});

const HookaTastesIDs = mongoose.model('HookaTastesIDs',HookaTastesIDsSchema);

module.exports = HookaTastesIDs;