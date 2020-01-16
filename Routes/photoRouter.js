const router = require('express').Router()

router.post('/upload', (req, res) => {
	res.send('OK upload')
})

module.exports = router 