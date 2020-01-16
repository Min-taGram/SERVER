const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
  username : String,
  email : String,
  password : String
});

userSchema.pre('save', function(next){
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash
  next()
})

const User = mongoose.model('User', photoSchema)

module.exports = User