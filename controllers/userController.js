const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController{

  static registerUser(req, res){
    let data =  {
      username : req.body.username,
      email : req.body.email,
      password : req.body.password
    }
    User
      .create(data)
      .then(user => {
        res.status(201).json({
          msg : 'User Register Success!'
        })
      })
      .catch(err => {
        res.status(500).json({
          msg : 'Internal Server Error'
        })
      })
  }

  static loginUser(req, res){
    User
      .findOne({
        email : req.body.email
      })
      .then(user =>{
        if(user){
          const isValid = bcrypt.compareSync(req.body.password, user.password);
          if(isValid){
            const access_token = jwt.sign({ id : user._id}, process.env.JWT_KEY);
            res.status(200).json(access_token)
          }else {
            res.status(401).json({msg: 'email/password salah'})
          }
        }else {
          res.status(401).json({msg: 'email/password salah'})
        }
      })
      .catch(err => {
        console.log(err);
        
        res.status(500).json({msg : 'internal server error'})
      })
  }
}

module.exports = UserController