const router = require('express').Router()
const images = require('../helpers/images')

const photoController = require('../controllers/photoController')

router.post('/upload',
  images.multer.single('image'),
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

router.get('/search/:keyword', photoController.search)

module.exports = router 