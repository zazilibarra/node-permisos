'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db,(err,res) => {
	if(err) throw err;
	
	console.log("Conexion establecida");

	app.get('/',(req, res)=>{
		res.send(`API NODE LOGISTIKGO VERSIÓN:${process.env.npm_package_version}`);
	});

	app.listen(config.port, () => {
		console.log(`API REST JALANDO EN:${config.port}`);
	})
});

