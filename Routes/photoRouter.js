const router = require('express').Router()
const images = require('../helpers/images')
const Photo = require('../controllers/photoController')

// const photoController = require('../controllers/photoController')

router.post('/upload',
  images.multer.single('image'),
  images.sendUploadToGCS,
  (req, res, next) => {
    req.urlImage = req.file.cloudStoragePublicUrl
    console.log(req.urlImage); 
    next()
  }, Photo.uploadPhoto)

router.get('/', Photo.getAllPhotos)
router.get('/search/:keyword', Photo.search)

module.exports = router 