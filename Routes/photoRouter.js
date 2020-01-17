const router = require('express').Router()
const images = require('../helpers/images')
const Photo = require('../controllers/photoController')

router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res, next) => {
    // console.log(req.file);
    // console.log(req.body);
    req.urlImage = req.file.cloudStoragePublicUrl
    console.log(req.urlImage); 
    next()
  }, Photo.uploadPhoto)

router.get('/', Photo.getAllPhotos)
module.exports = router 