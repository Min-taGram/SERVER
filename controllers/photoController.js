const Photo = require('../models/Photo')

class PhotoController {

  static uploadPhoto(req, res){
    let data = {
      url : req.urlImage,
      tags : req.body.tags.split(',')
    }

    Photo
      .create(data)
      .then(photo => {
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

  static search(req, res, next) {
    Photo.find({
      tags: req.params.keyword
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    }
}

module.exports = PhotoController