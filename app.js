/* importar as configurações do servidor*/
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(3000, function(){
	console.log('Servidor on');
});
