const mongoose = require('mongoose');

//  Your code goes here
const mariochar = new mongoose.Schema({
    // Your code goes here
   name : {
    type : String ,
    required : true
   },
   weight : {
    type : Number,
    required : true
   }
},{
    versionKey: false // You should be aware of the outcome after set to false
})

const marioModel = mongoose.model('mario', mariochar);

module.exports = marioModel;