const router = require('express').Router()

router.post('/register', (req,res) =>{
  
  res.send('OK')
})

router.post('/login', (req, res) => {
  res.send('Siap')
})



module.exports = router 