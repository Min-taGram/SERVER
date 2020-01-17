const Photo = require('../models/Photo')

class PhotoController {

  static uploadPhoto(req, res) {
    // upload // create
  }

  static search(req, res, next) {
    Photo.find({
      tags: this.tags.includes(req.params.id)
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