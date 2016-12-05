module.exports = {
	requireAuthentication: function(req, res, next){
		console.log('pvt route hit!!');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method+' '+ req.originalUrl+' '+ new Date().toString());
		next();
	}
}