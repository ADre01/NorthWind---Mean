'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


//Custom function to validate string length == 15
function validateLength(v){
     //function code in the return
    return v.length <= 15;
}



/**
 * Category Schema
 */
var CategorySchema = new Schema({
  // Category model fields
  created: {
      type: Date,
      default: Date.now
  },
  description: {
      type: String,
      default: '',
      trim: true
  },
  name: {
      type: String,
      default: '',
      trim: true,
      unique: true,
      required: 'Name cannot be blank',
      validate: [validateLength, 'Name must be 15 letters or less']
  }    
});

//This exposes this model to other objects
mongoose.model('Category', CategorySchema);
