const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupName:{
        type:String,
        required:true
    },
    objectsNumbers:{
        type:Array,
    },
    objectsNames:{
        type:Array,
        required:true
    },
    objectsHours:{
        type:Array,
    },
    objectsCredits:{
        type:Array,
    },
    objectsPoints:{
        type:Array,
    },
    objectsHeader:{
        type:Array,
    },

},{timestamps:true});

const KazAldyZaoch = mongoose.model('KazAldyZaoch',groupSchema);

module.exports = KazAldyZaoch;