var app = require('./routes');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
