module.exports = function () {
	const mongoose = require('mongoose');
	mongoose.connect(process.env.ATLAS_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function () {
		console.log('mongoDB connected')
	});
}