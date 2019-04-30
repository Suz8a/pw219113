const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const myConnection = require('express-myconnection');
const mysql = require('mysql');



//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


//MiddleWare (Morgan)
//app.use(morgan('dev')); //dev = desarrollo

//middleware

app.use(myConnection(mysql,
{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql13'
},'single'));

//importar rutas
const indiceRutas=require('./rutas/index');

//usamos las rutas
app.use('/',indiceRutas);


//Activar el servidor de escucha
app.listen(3000, () => {
	console.log("Escuchando en puerto 3000, jajaja");
}
)