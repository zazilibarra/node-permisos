'use strict'

const usuariosxVersion = require('../models/UsuariosxVersion');

function getUsuarioxVersion(req,res) {

	let _idusuario = parseInt(req.query.idusuario);
	let _version = req.query.version;
	console.log(_idusuario);

	usuariosxVersion.find( {idUsuario: _idusuario, version:_version}, (err,usuarioxversion)=>{
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

module.exports = {
	getUsuarioxVersion
}
