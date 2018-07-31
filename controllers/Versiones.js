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

module.exports = {
	getVersiones
}
