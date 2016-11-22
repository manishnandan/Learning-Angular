//Message models for mongoose are handles here
//note we have already included mongoose app.js file for connecting to mongo db database. remeber mongoose is a node js based mogodb api.

var mongoose = require('mongoose')

//create schema . Schema is a healper object to create our models
var Schema = mongoose.Schema;
var schema = new Schema(
    {
        //Just relate the feilds to database columns
        content: {type: String, required:true},
        //object id type is used by mongoose to store ids of different objects mongoose store in database. Each object
        //stored gets an id even if dont set ant id.
        user: {type: Schema.Types.ObjectId, ref: 'User'}

    }
);

// above is just the blue print. Now we have to create the model. We cant instansiate a messages just having a blueprint. 
//We need a model to do so.

// Nme of mogoose collection : messages
module.exports = mongoosel.model('Message',schema);