var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('pvt route hit!!');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method+' '+ req.originalUrl+' '+ new Date().toString());
		next();
	}
}
// app.get('/', function(req, res){
// 	res.send('Hello express');
// });
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication, function(req, res){
	res.send('About US!!');
})
app.use(express.static(__dirname +'/public'));
app.listen(port, function(){
	console.log('Server started at '+port);
});