const Photo = require('../models/Photo')

class PhotoController{

  static uploadPhoto(req, res){
    // console.log('udah masuk controller coy');
    let data = {
      url : req.urlImage,
      tags : req.body.tags.split(',')
    }
    Photo
      .create(data)
      .then(photo => {
        // console.log(photo);
        res.send({
          status: 201,
          message: 'Your file is successfully uploaded',
          link: req.urlImage
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  
  static getAllPhotos(req, res){
    Photo
      .find()
      .then(photos => {
        res.status(200).json(photos)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = PhotoController