const jwt = require('jsonwebtoken')

// cek kembali validitas id di payload access token
module.exports = function (req, res, next) {
	if (req.headers.access_token) {

		try {
			const decoded = jwt.verify(req.headers.access_token, process.env.JWT_KEY)
			req.authenticated_id = decoded._id
			next()
		} catch (error) {
			res.status(400).json({ msg: 'Bad / invalid Token' })
		}

	} else {
		res.status(403).json({ msg: 'Please login first' })
	}
}