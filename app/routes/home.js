module.exports = function(app) {
	app.get('/', function(req, res){
		app.app.controllers.home.home(app, req, res);
	});

	app.get('/index', function(req,res){
		res.render('index');
	});

	app.get('/sobre', function(req,res){
		res.render('sobre');
	});
	
}