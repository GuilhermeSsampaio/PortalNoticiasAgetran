module.exports.formulario_inclusao_noticia = function(app, req, res){
    if (req.session.loggedin1) {
			res.render('form_add_noticia', {validacao:{}, noticia:{}});
	}
	else
	{
		res.redirect('/');
	}

}

module.exports.noticias_salvar = function(app, req, res){
if (req.session.loggedin1) {
		var noticia = req.body;
		req.assert('categoria', 'Categoria é obrigatório').notEmpty();
		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('noticia', 'Notícia é obrigatório').notEmpty();
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório').notEmpty();
		var erros = req.validationErrors();	
		if (erros){
			console.log(erros);
			res.render("form_add_noticia",{validacao: erros, noticia: noticia});
			// faz voltar à pagina de inclusão de notícia
			return; //o return faz com que não continue o processo seguinte
		}

		var file = req.files.uploaded_image;
		var img_name=file.name; 
		file.mv('app/public/images/upload_images/'+img_name, function(err){

			    var connection = app.config.dbConnection();
		        var noticiasModel= new app.app.models.NoticiasDAO(connection);
				noticiasModel.salvarNoticia(noticia, img_name, function(error, result){
				res.redirect('/noticias');
		        });
		});
}
else{
	 res.redirect('/noticias');
}
}

module.exports.noticias_atualizar = function(app, req, res){
if (req.session.loggedin1) {
	var noticia = req.body;
	var id_noticia = req.body.id_noticia;
		req.assert('categoria', 'Categoria é obrigatório').notEmpty();
		req.assert('titulo', 'Titulo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('noticia', 'Notícia é obrigatório').notEmpty();
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório').notEmpty();	
		var erros = req.validationErrors();

		if(erros){
			res.render("form_update_noticia", {validacao : erros, noticia: noticia}); 
			return;
		}
			var file = req.files.uploaded_image;


		var img_name=file.name; 

		file.mv('app/public/images/upload_images/'+img_name, function(err){


		var connection = app.config.dbConnection();		
		var noticiasModel = new app.app.models.NoticiasDAO(connection);
		
		noticiasModel.atualizarNoticia(noticia, img_name,
			noticiasModel.mostraNoticia(id_noticia, function(error, result){
			res.redirect('/noticia?id_noticia=' + id_noticia);					
		}));
	});
}
else{
	 res.redirect('/noticias');
}
}

module.exports.logout_usuarioB=function(app, req, res){
	req.session.destroy();
		res.redirect('/');
}
