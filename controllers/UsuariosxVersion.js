'use strict'

const usuariosxVersion = require('../models/UsuariosxVersion');

function getUsuarioxVersion(req,res) {

	let _idusuario = parseInt(req.query.idusuario);
	let _version = req.query.version;

	console.log({_idusuario,_version, test:"test"});

	usuariosxVersion.find( {idUsuario:_idusuario, version:"V1.102.102"}, (err,usuarioxversion)=>{
		console.log(usuarioxversion);

		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!usuarioxversion || usuarioxversion.length == 0){
			return res.status(500).send({message:"No existen datos"});
		}	

		res.status(200).send(usuarioxversion[0]);
	});

}


function postUsuarioxVersion(req,res) {

	console.log(req.body);

	let _idusuario = parseInt(req.body.idusuario);
	let _version = req.body.version;

	console.log({_idusuario,_version});

	let nUsuarioxVersion = new usuariosxVersion();

	nUsuarioxVersion.idUsuario = _idusuario;
	nUsuarioxVersion.version = _version;
	nUsuarioxVersion.fechaAcepta = new Date();

	nUsuarioxVersion.save((error, usuarioxVersionStored)=>{
		if(error)
			res.status(500).send({message:`Error al guardar${error}`});
		res.status(200).send({usuarioxVersionStored});
	});
}


module.exports = {
	getUsuarioxVersion,
	postUsuarioxVersion
}
