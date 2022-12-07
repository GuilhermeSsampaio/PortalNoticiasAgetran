function NoticiasDAO(connection){
	this._connection = connection;
}
	NoticiasDAO.prototype.getNoticias = function(callback){
		this._connection.query('select * from noticias ORDER BY data_criacao DESC', callback);
	}

	NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
    }

	NoticiasDAO.prototype.salvarNoticia = function(noticia, img_name, callback){
		this._connection.query("insert noticias set categoria = '" + noticia.categoria +"', titulo = '" + noticia.titulo +"', resumo = '" + noticia.resumo + "', noticia = '" + noticia.noticia + "', autor = '" + noticia.autor + "', imagem='" + img_name + "'", callback);
	}

	NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
    }

    NoticiasDAO.prototype.buscaNoticias = function(pesquisa, callback){
	this._connection.query('select * from noticias where titulo like ?', '%' + pesquisa + '%', callback);
    }

    NoticiasDAO.prototype.excluiNoticia = function(id_noticia, callback){
	this._connection.query('delete from noticias where id_noticia = '+ id_noticia.id_noticia, callback);
    }

    NoticiasDAO.prototype.atualizarNoticia = function(noticia, img_name, callback){
	this._connection.query("update noticias set categoria = '" + noticia.categoria +"', titulo = '" + noticia.titulo +"', resumo = '" + noticia.resumo + "', noticia = '" + noticia.noticia + "', autor = '" + noticia.autor + "', imagem='" + img_name + "' where id_noticia = " + noticia.id_noticia, callback);
    }

    NoticiasDAO.prototype.mostraNoticia = function(id_noticia, callback){
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia, callback);
    }
    
module.exports = function(){
return NoticiasDAO;
}
