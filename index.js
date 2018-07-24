'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db,(err,res) => {
	if(err) throw err;
	
	console.log("Conexion establecida");

	app.get('/',(req, res)=>{
		res.send('Hola mundo!!');
	});

	app.listen(config.port, () => {
		console.log(`API REST JALANDO EN:${config.port}`);
	})
});

