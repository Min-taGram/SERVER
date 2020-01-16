const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url : String,
  tags : [String],
  userId : {
    type : Schema.Types.ObjectId,
    ref: 'User' 
  }
});

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo