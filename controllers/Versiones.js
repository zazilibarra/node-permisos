'use strict'

const versiones = require('../models/Versiones');

function getVersiones(req,res) {

	versiones.find({}, (err, version) => {
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

	versiones.find({}).sort({fechaActualizacion:-1}).exec(function(err,version){
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!version && version.length>0){
			return res.status(500).send({message:"No existen datos"});
		}	

		res.status(200).send(version[0]);
	});

}

function getUsuarioxVersion(req,res) {

	let _idusuario = req.query.idusuario;
	let _version = req.query.version;

	versiones.find( { }, (err,version)=>{
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
	getUsuarioxVersion
}
