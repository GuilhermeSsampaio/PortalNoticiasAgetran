function UsuarioA_DAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

UsuarioA_DAO.prototype.loginUsuarioA = function(user, senha, callback){
	this._connection.query('select * from usuarioA where user_name = ? AND senha = ?', [user,senha], callback);
}

module.exports = function(){
	return UsuarioA_DAO;
}