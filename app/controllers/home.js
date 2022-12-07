module.exports.home = function(app, req, res) {
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.get5UltimasNoticias(function(error, result){
		res.render("home", {noticias: result});
		});
	// if (req.session.loggedin) {

 	//         var connection = app.config.dbConnection();
	// 		var noticiasModel = new app.app.models.NoticiasDAO(connection);

	// 		noticiasModel.get5UltimasNoticias(function(error, result){
	// 		res.render("home", {noticias: result});
	// 		});

	// }	
	// else 
	// {
	// 	res.redirect('/');
	// }
}

// module.exports.logout_usuarioA=function(app, req, res){
// 	req.session.destroy();
// 		res.redirect('/');
// }

