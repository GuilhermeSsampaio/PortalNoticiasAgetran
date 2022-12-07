function UsuarioB_DAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

UsuarioB_DAO.prototype.loginUsuarioB = function(user, senha, callback){
	this._connection.query('select * from usuarioB where user_name = ? AND senha = ?', [user,senha], callback);
}

module.exports = function(){
	return UsuarioB_DAO;
}