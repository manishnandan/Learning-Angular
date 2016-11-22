// user model for mongoose mongodb  client are handled here
//Message models for mongoose are handles here
//note we have already included mongoose app.js file for connecting to mongo db database. remeber mongoose is a node js based mogodb api.

var mongoose = require('mongoose')

//installed mongoose-unique-validator for unique key like email . now we reqire that module
var mongooseUniqueKeyValidator = require('mongoose-unique-validator');

//create schema . Schema is a healper object to create our models
var Schema = mongoose.Schema;
var schema = new Schema(
    {
        //Just relate the feilds to database columns
        firstname: {type: String, required:true},
        lastname: {type: String, required:true},
        email: {type: String, required:true},
        password: {type: String, required:true ,unique: true},
        
        //object id type is used by mongoose to store ids of different objects mongoose store in database. Each object
        //stored gets an id even if dont set ant id.
        messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]

    }
);


// now tell schema object of mongoose to use use a plgin for uniqe key vlaidation
schema.plugin(mongooseUniqueKeyValidator);

// above is just the blue print. Now we have to create the model. We cant instansiate a messages just having a blueprint. 
//We need a model to do so.

// Nme of mogoose collection : users
module.exports = mongoose.model('User',schema);