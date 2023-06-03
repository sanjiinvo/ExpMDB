const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rusaldyZaochSchema = new Schema({
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

const RusAldyZaoch = mongoose.model('RusAldyZaoch',groupSchema);

module.exports = RusAldyZaoch;