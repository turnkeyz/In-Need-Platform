//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let organizationSchema = new Schema({
    //good for assigning random value
    _id: {
        type: String,
        default: uuid.v1
    },
    //client Id entry for tying together
    clientId: {
        type: Array,
        
    },
    organizationName: {
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    }
},
    {
        collection: 'organization'
    });
    
module.exports = mongoose.model('organization', organizationSchema)

/* organization Schema Description:
1. _id: String (uuid.v1 for randome value)
2. clientId: Number (Link the activity to client)
3. organizationName : String (name of the organization taking place)
4. description : String
} */