//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let raceEthnicitySchema = new Schema({
    //good for assigning random value
    _id: {
        type: String,
        default: uuid.v1
    },
    raceEthnicity: {
        type: String,
        required: true
    }
},
    {
        collection: 'raceEthnicity'
    });
    
module.exports = mongoose.model('raceEthnicity', raceEthnicitySchema)

