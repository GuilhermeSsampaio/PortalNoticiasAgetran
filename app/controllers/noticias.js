
module.exports.noticias = function(app, req, res){

		if ((req.session.loggedin)||(req.session.loggedin1)) {

			var connection = app.config.dbConnection();
			var noticiasModel = new app.app.models.NoticiasDAO(connection);
			
			noticiasModel.getNoticias(function(error, result){
				res.render('noticias',{noticias:result});
			});
		}

		else
		{
			res.redirect('/');
		}
		
}

module.exports.noticia = function(app, req, res){
	  if ((req.session.loggedin)||(req.session.loggedin1)) {
			   var connection = app.config.dbConnection();
			   var noticiasModel = new app.app.models.NoticiasDAO(connection);

			   if (req.query.id_noticia){
			   		   var id_noticia = req.query; //id_noticia recebe o parâmetro enviado pelas views,
			         //que contém o id da notícia a ser exibida
			   } else{
			   		res.redirect('/noticias');
			  	 	return;
			   }



			   noticiasModel.getNoticia(id_noticia,function(error, result){
			       res.render('noticia',{noticia:result});
				});

	   }
	   else
	   {
         res.redirect('/');
	   }
  
}

module.exports.noticia_cliente = function(app, req, res){
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

		if (req.query.id_noticia){
			var id_noticia = req.query; //id_noticia recebe o parâmetro enviado pelas views,
			    //que contém o id da notícia a ser exibida
		} else{
			res.redirect('/');
			return;
		}

		 noticiasModel.getNoticia(id_noticia,function(error, result){
			res.render('noticia_cliente',{noticia:result});
		});
  
}

module.exports.busca = function(app, req, res){
	if ((req.session.loggedin)||(req.session.loggedin1)) {
		var pesquisa = req.body.pesquisa;
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.buscaNoticias(pesquisa, function(error, result){
			res.render('noticias',{ noticias : result });
			
		});
	}
	else{
	   res.redirect('/home');
	}
}

module.exports.excluir = function(app,req,res){
 if (req.session.loggedin1){

 	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	if (req.query.id_noticia){
		var id_noticia = req.query;
	}
	else{
		res.redirect('/noticias');
		return;
	}
	noticiasModel.excluiNoticia(id_noticia, function (error, result){
		res.redirect('/noticias');
	});

 }

 else {
    res.redirect('/noticias');
 }

}

module.exports.editar = function(app,req,res){
	if (req.session.loggedin1){
        var pesquisa = req.body.pesquisa; 
        var connection = app.config.dbConnection(); 
        var noticiasModel = new app.app.models.NoticiasDAO(connection); 


        if (req.query.id_noticia){
            var id_noticia = req.query;
        } else{
            res.redirect("/noticias")
            return;
        }

        noticiasModel.getNoticia(id_noticia, function(error, result){
               res.render("form_update_noticia", {validacao:{}, noticia : result});
        });
     }
     else{
     	res.redirect('/noticias');
     }
        
}


	
		