'use strict'

const versiones = require('../models/Versiones');

function getVersiones(req,res) {

	let _entorno = req.params.entorno;
	let collection;

	if(_entorno){
		collection = versiones.find({entorno:_entorno});
	}
	else
	{
		collection = versiones.find({});
	}

	collection.exec((err, version) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!version){
			return res.status(500).send({message:"No existen datos"});
		}

		res.status(200).send(version);
	});

}

function getUltimaVersion(req,res) {

	let _entorno = req.params.entorno;
	let collection;

	if(_entorno){
		collection = versiones.find({entorno:_entorno});
	}
	else
	{
		collection = versiones.find({});
	}

	collection.sort({fechaActualizacion:-1}).exec(function(err,version){
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!version && version.length>0){
			return res.status(500).send({message:"No existen datos"});
		}	

		res.status(200).send(version[0]);
	});

}

module.exports = {
	getVersiones,
	getUltimaVersion,
}
