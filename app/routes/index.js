module.exports = function(app) {
	app.get('/', function(req, res) 
	{
		app.app.controllers.index.home(app, req, res);
	});

// 	app.post('/usuarioA/login', function(req, res) 
// 	{
// 		app.app.controllers.index.login_usuarioA(app, req, res);
// 	});

	app.post('/usuarioB/login', function(req, res) 
	{
		app.app.controllers.index.login_usuarioB(app, req, res);
	});

}